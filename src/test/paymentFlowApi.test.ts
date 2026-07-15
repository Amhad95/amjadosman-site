import { afterEach, describe, expect, it, vi } from "vitest";
import createCheckoutHandler from "../../api/create-checkout";
import checkoutSessionHandler from "../../api/checkout-session";

const makeResponse = () => {
  let statusCode = 200;
  let payload: Record<string, unknown> | null = null;
  const response = {
    setHeader: vi.fn(),
    status: vi.fn((code: number) => {
      statusCode = code;
      return {
        json: (body: Record<string, unknown>) => {
          payload = body;
        },
      };
    }),
  };

  return { response, get statusCode() { return statusCode; }, get payload() { return payload; } };
};

describe("payment flow API", () => {
  afterEach(() => {
    delete process.env.STRIPE_SECRET_KEY;
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("creates an email-backed one-time checkout with an invoice and next-step text", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test_unit";
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ url: "https://checkout.stripe.com/test" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    const result = makeResponse();

    await createCheckoutHandler({
      method: "POST",
      body: { priceId: "price_1T4qCvP5yEvNkfiCUeYfWJsI", mode: "payment" },
      headers: { host: "example.com" },
    }, result.response);

    const requestBody = fetchMock.mock.calls[0]?.[1]?.body as string;
    const form = new URLSearchParams(requestBody);

    expect(result.statusCode).toBe(200);
    expect(form.get("customer_creation")).toBe("always");
    expect(form.get("invoice_creation[enabled]")).toBe("true");
    expect(form.get("custom_text[submit][message]")).toContain("invoice or receipt");
    expect(form.get("custom_text[after_submit][message]")).toContain("next step");
    expect(form.get("payment_intent_data[description]")).toContain("Brand System Sprint");
  });

  it("returns the paid service details and document links for the confirmation page", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test_unit";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({
      paid: true,
      status: "complete",
      payment_status: "paid",
      mode: "payment",
      metadata: { service_name: "Brand System Sprint", price_id: "price_test" },
      amount_total: 350000,
      currency: "eur",
      customer_details: { name: "Test Buyer", email: "buyer@example.com" },
      invoice: {
        number: "INV-0001",
        hosted_invoice_url: "https://invoice.stripe.com/test",
        invoice_pdf: "https://invoice.stripe.com/test.pdf",
        payment_intent: { latest_charge: { receipt_url: "https://receipt.stripe.com/test" } },
      },
    }), { status: 200 })));
    const result = makeResponse();

    await checkoutSessionHandler({ method: "GET", url: "/api/checkout-session?session_id=cs_test_123" }, result.response);

    expect(result.statusCode).toBe(200);
    expect(result.payload).toMatchObject({
      paid: true,
      serviceName: "Brand System Sprint",
      amountTotal: 350000,
      currency: "eur",
      customerEmail: "buyer@example.com",
      invoiceNumber: "INV-0001",
      invoiceUrl: "https://invoice.stripe.com/test",
      invoicePdf: "https://invoice.stripe.com/test.pdf",
      receiptUrl: "https://receipt.stripe.com/test",
    });
  });
});
