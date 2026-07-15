interface CheckoutSessionRequest {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
  url?: string;
}

interface CheckoutSessionResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: Record<string, unknown>) => void };
}

interface StripeInvoice {
  id?: string;
  number?: string;
  hosted_invoice_url?: string;
  invoice_pdf?: string;
  payment_intent?: StripePaymentIntent | string | null;
}

interface StripeCharge {
  receipt_url?: string;
}

interface StripePaymentIntent {
  latest_charge?: StripeCharge | string | null;
}

const getSessionId = (req: CheckoutSessionRequest) => {
  const queryValue = req.query?.session_id;
  if (typeof queryValue === "string") return queryValue;

  if (req.url) {
    return new URL(req.url, "https://local.invalid").searchParams.get("session_id") ?? "";
  }

  return "";
};

export default async function handler(req: CheckoutSessionRequest, res: CheckoutSessionResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const sessionId = getSessionId(req);
  if (!sessionId || sessionId.length > 255) {
    res.status(400).json({ error: "A valid checkout session is required." });
    return;
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    res.status(503).json({ error: "Checkout verification is not configured." });
    return;
  }

  const expand = new URLSearchParams();
  expand.append("expand[]", "invoice");
  expand.append("expand[]", "payment_intent.latest_charge");
  expand.append("expand[]", "invoice.payment_intent.latest_charge");
  const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}?${expand.toString()}`, {
    headers: { Authorization: `Bearer ${secret}` },
  });
  const session = (await response.json().catch(() => null)) as Record<string, unknown> | null;

  if (!response.ok || !session) {
    res.status(response.status === 404 ? 404 : 502).json({ error: "Checkout session could not be verified." });
    return;
  }

  const paymentStatus = typeof session.payment_status === "string" ? session.payment_status : "unknown";
  const checkoutStatus = typeof session.status === "string" ? session.status : "unknown";
  const paid = paymentStatus === "paid" || (checkoutStatus === "complete" && paymentStatus === "no_payment_required");
  const metadata = session.metadata as Record<string, string> | undefined;
  const customerDetails = session.customer_details as { email?: string; name?: string } | undefined;
  const invoice = session.invoice as StripeInvoice | string | null | undefined;
  const paymentIntent = session.payment_intent as StripePaymentIntent | string | null | undefined;
  const invoicePaymentIntent = typeof invoice === "object" && invoice ? invoice.payment_intent : null;
  const paymentIntentForReceipt = typeof paymentIntent === "object" && paymentIntent ? paymentIntent : invoicePaymentIntent;
  const latestCharge = typeof paymentIntentForReceipt === "object" && paymentIntentForReceipt && typeof paymentIntentForReceipt.latest_charge === "object"
    ? paymentIntentForReceipt.latest_charge
    : null;

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    paid,
    mode: typeof session.mode === "string" ? session.mode : "unknown",
    paymentStatus,
    status: checkoutStatus,
    serviceName: metadata?.service_name ?? "",
    priceId: metadata?.price_id ?? "",
    amountTotal: typeof session.amount_total === "number" ? session.amount_total : null,
    currency: typeof session.currency === "string" ? session.currency : null,
    customerName: customerDetails?.name ?? "",
    customerEmail: customerDetails?.email ?? (typeof session.customer_email === "string" ? session.customer_email : ""),
    invoiceNumber: typeof invoice === "object" && invoice ? invoice.number ?? "" : "",
    invoiceUrl: typeof invoice === "object" && invoice ? invoice.hosted_invoice_url ?? "" : "",
    invoicePdf: typeof invoice === "object" && invoice ? invoice.invoice_pdf ?? "" : "",
    receiptUrl: latestCharge?.receipt_url ?? "",
  });
}
