const ALLOWED_PRICE_IDS = new Set([
  "price_1T4qCvP5yEvNkfiCUeYfWJsI",
  "price_1T4qD3P5yEvNkfiCjv2XX6d4",
  "price_1T4qD4P5yEvNkfiCNbFsNiu1",
  "price_1T4qD6P5yEvNkfiCJMvK8Vex",
  "price_1T4qD7P5yEvNkfiCjvHGTmKy",
  "price_1T4qD7P5yEvNkfiCujJkmCJZ",
  "price_1T4qD8P5yEvNkfiCuZ5DpLx1",
  "price_1T4qD9P5yEvNkfiCLKPKRwYD",
  "price_1T4qDAP5yEvNkfiCMJGREEW5",
  "price_1T4qDEP5yEvNkfiCUiGO3gcV",
  "price_1T4qDFP5yEvNkfiCJnD7HOhP",
  "price_1T4qDHP5yEvNkfiCyqmQV6Qm",
  "price_1T4qDHP5yEvNkfiCyp9ojoeD",
  "price_1T4qDIP5yEvNkfiCmPqKDuU3",
  "price_1T4qDJP5yEvNkfiClyokAJxS",
  "price_1T4qDLP5yEvNkfiCHyYS2TXG",
  "price_1T4qDLP5yEvNkfiCJT46UHG0",
  "price_1T4qDMP5yEvNkfiCPFsMFFia",
  "price_1T4qDQP5yEvNkfiCPi2osPwd",
  "price_1T4qDSP5yEvNkfiCQiYuaIMh",
  "price_1T4qDTP5yEvNkfiC6mAesML3",
  "price_1T4qDUP5yEvNkfiC71skuIZw",
  "price_1T4qDVP5yEvNkfiC8sR7ifmJ",
  "price_1T4qDWP5yEvNkfiCU2ahf3UZ",
  "price_1T4qDXP5yEvNkfiCxxHKFAb0",
  "price_1T4qDYP5yEvNkfiCEQY5AaDw",
  "price_1T4qDZP5yEvNkfiC59H0070s",
]);

interface CheckoutRequest {
  method?: string;
  body?: { priceId?: unknown; mode?: unknown };
  headers?: Record<string, string | string[] | undefined>;
}

interface CheckoutResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: Record<string, unknown>) => void };
}

const jsonError = (res: CheckoutResponse, status: number, error: string) => {
  res.status(status).json({ error });
};

const getSiteUrl = (req: CheckoutRequest) => {
  const configured = process.env.SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  const host = req.headers?.["x-forwarded-host"] ?? req.headers?.host;
  const protocol = req.headers?.["x-forwarded-proto"] ?? "https";
  if (typeof host === "string") return `${protocol}://${host}`;
  return "https://amjadosman.vercel.app";
};

export default async function handler(req: CheckoutRequest, res: CheckoutResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    jsonError(res, 405, "Method not allowed");
    return;
  }

  const priceId = typeof req.body?.priceId === "string" ? req.body.priceId : "";
  const mode = req.body?.mode === "subscription" ? "subscription" : "payment";

  if (!ALLOWED_PRICE_IDS.has(priceId)) {
    jsonError(res, 400, "That service price is not available.");
    return;
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    jsonError(res, 500, "Stripe checkout is not configured on this deployment.");
    return;
  }

  const siteUrl = getSiteUrl(req);
  const form = new URLSearchParams({
    mode,
    "line_items[0][price]": priceId,
    "line_items[0][quantity]": "1",
    success_url: `${siteUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/payment/cancel`,
    billing_address_collection: "auto",
  });
  if (mode === "payment") form.set("customer_creation", "always");

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });

  const payload = (await response.json().catch(() => null)) as
    | { url?: string; error?: { message?: string } }
    | null;

  if (!response.ok || !payload?.url) {
    jsonError(res, response.status >= 400 && response.status < 600 ? response.status : 502, payload?.error?.message ?? "Stripe could not create checkout.");
    return;
  }

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ url: payload.url });
}
