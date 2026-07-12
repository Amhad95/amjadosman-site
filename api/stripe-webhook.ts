import { createHmac, timingSafeEqual } from "node:crypto";
import type { IncomingMessage } from "node:http";

export const config = { api: { bodyParser: false } };

type StripeWebhookRequest = IncomingMessage & { method?: string };

interface StripeWebhookResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: Record<string, unknown>) => void };
}

const readRawBody = async (req: StripeWebhookRequest) => {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks);
};

const getSignatures = (value: string | string[] | undefined) => {
  if (typeof value !== "string") return null;
  const timestamp = value.split(",").find((part) => part.startsWith("t="))?.slice(2);
  const signatures = value
    .split(",")
    .filter((part) => part.startsWith("v1="))
    .map((part) => part.slice(3));
  return timestamp && signatures.length ? { timestamp, signatures } : null;
};

const signatureMatches = (payload: Buffer, signatureHeader: string | string[] | undefined, secret: string) => {
  const parsed = getSignatures(signatureHeader);
  if (!parsed) return false;

  const expected = createHmac("sha256", secret)
    .update(`${parsed.timestamp}.${payload.toString("utf8")}`)
    .digest("hex");
  const expectedBuffer = Buffer.from(expected, "hex");
  return parsed.signatures.some((signature) => {
    const received = Buffer.from(signature, "hex");
    return received.length === expectedBuffer.length && timingSafeEqual(received, expectedBuffer);
  });
};

const paymentEventTypes = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
  "checkout.session.async_payment_failed",
  "checkout.session.expired",
  "invoice.paid",
  "invoice.payment_failed",
  "customer.subscription.deleted",
  "charge.refunded",
]);

type StripeObject = {
  id?: string;
  amount_total?: number;
  amount_paid?: number;
  amount_due?: number;
  amount_refunded?: number;
  currency?: string;
  customer_email?: string;
  customer_details?: { email?: string; name?: string };
  metadata?: Record<string, string>;
  payment_status?: string;
  status?: string;
};

const escapeHtml = (value: unknown) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const formatAmount = (amount: number | undefined, currency: string | undefined) => {
  if (typeof amount !== "number" || !currency) return "Not supplied by Stripe";
  return new Intl.NumberFormat("en", { style: "currency", currency: currency.toUpperCase() }).format(amount / 100);
};

const sendPaymentEmail = async (event: { id: string; type: string; data?: { object?: StripeObject } }) => {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.PAYMENT_NOTIFICATION_EMAIL || "hello@adsi.io";
  const sender = process.env.PAYMENT_FROM_EMAIL || "Amjad Osman Payments <payments@adsi.io>";
  if (!apiKey) return false;

  const object = event.data?.object ?? {};
  const amount = object.amount_total ?? object.amount_paid ?? object.amount_due ?? object.amount_refunded;
  const service = object.metadata?.service_name || "Stripe payment activity";
  const customerEmail = object.customer_details?.email || object.customer_email || "Not supplied by Stripe";
  const customerName = object.customer_details?.name || "Not supplied by Stripe";
  const stripeUrl = object.id ? `https://dashboard.stripe.com/test/search?query=${encodeURIComponent(object.id)}` : "https://dashboard.stripe.com/test";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `stripe-${event.id}`,
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      subject: `[Stripe] ${event.type}: ${service}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#20372d"><h1 style="font-size:24px">Payment activity</h1><p>A verified Stripe event was received by amjadosman.com.</p><table style="border-collapse:collapse;width:100%"><tr><td style="padding:10px;border-bottom:1px solid #d8dedb"><strong>Event</strong></td><td style="padding:10px;border-bottom:1px solid #d8dedb">${escapeHtml(event.type)}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #d8dedb"><strong>Service</strong></td><td style="padding:10px;border-bottom:1px solid #d8dedb">${escapeHtml(service)}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #d8dedb"><strong>Amount</strong></td><td style="padding:10px;border-bottom:1px solid #d8dedb">${escapeHtml(formatAmount(amount, object.currency))}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #d8dedb"><strong>Customer</strong></td><td style="padding:10px;border-bottom:1px solid #d8dedb">${escapeHtml(customerName)} (${escapeHtml(customerEmail)})</td></tr><tr><td style="padding:10px;border-bottom:1px solid #d8dedb"><strong>Status</strong></td><td style="padding:10px;border-bottom:1px solid #d8dedb">${escapeHtml(object.payment_status || object.status || "Not supplied")}</td></tr></table><p><a href="${stripeUrl}">Open this event in Stripe</a></p><p style="font-size:12px;color:#66736d">Stripe event ID: ${escapeHtml(event.id)}</p></div>`,
    }),
  });
  if (!response.ok) throw new Error(`Resend returned HTTP ${response.status}.`);
  return true;
};

export default async function handler(req: StripeWebhookRequest, res: StripeWebhookResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    res.status(503).json({ error: "Payment webhook is not configured." });
    return;
  }

  const rawBody = await readRawBody(req);
  if (!signatureMatches(rawBody, req.headers["stripe-signature"], webhookSecret)) {
    res.status(400).json({ error: "Invalid Stripe signature." });
    return;
  }

  const event = JSON.parse(rawBody.toString("utf8")) as { id?: string; type?: string; data?: { object?: StripeObject } };
  if (!event.id || !event.type) {
    res.status(400).json({ error: "Invalid Stripe event." });
    return;
  }

  if (!paymentEventTypes.has(event.type)) {
    res.status(200).json({ received: true, ignored: true });
    return;
  }

  try {
    const notified = await sendPaymentEmail(event as { id: string; type: string; data?: { object?: StripeObject } });
    res.status(200).json({ received: true, notified });
    return;
  } catch (error) {
    console.error("Payment notification failed", event.id, error instanceof Error ? error.message : error);
    res.status(502).json({ error: "The payment notification could not be sent." });
    return;
  }

}
