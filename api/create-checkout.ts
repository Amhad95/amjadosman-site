const PRICE_CATALOG: Record<string, { name: string; mode: "payment" | "subscription" }> = {
  price_1T4qCvP5yEvNkfiCUeYfWJsI: { name: "Brand System Sprint", mode: "payment" },
  price_1T4qD3P5yEvNkfiCjv2XX6d4: { name: "Website and CMS Build", mode: "payment" },
  price_1T4qD4P5yEvNkfiCNbFsNiu1: { name: "Sales Materials Kit", mode: "payment" },
  price_1T4qD6P5yEvNkfiCJMvK8Vex: { name: "Landing Page Conversion Pass", mode: "payment" },
  price_1T4qD7P5yEvNkfiCjvHGTmKy: { name: "Brand Template Pack", mode: "payment" },
  price_1T4qD7P5yEvNkfiCujJkmCJZ: { name: "Pitch Deck Rebuild", mode: "payment" },
  price_1T4qD8P5yEvNkfiCuZ5DpLx1: { name: "Brand Stewardship Lite", mode: "subscription" },
  price_1T4qD9P5yEvNkfiCLKPKRwYD: { name: "Brand Stewardship Standard", mode: "subscription" },
  price_1T4qDAP5yEvNkfiCMJGREEW5: { name: "Brand Stewardship Priority", mode: "subscription" },
  price_1T4qDEP5yEvNkfiCUiGO3gcV: { name: "Ops Audit", mode: "payment" },
  price_1T4qDFP5yEvNkfiCJnD7HOhP: { name: "SharePoint Setup", mode: "payment" },
  price_1T4qDHP5yEvNkfiCyqmQV6Qm: { name: "SOP Library Pack", mode: "payment" },
  price_1T4qDHP5yEvNkfiCyp9ojoeD: { name: "Permissions Overhaul", mode: "payment" },
  price_1T4qDIP5yEvNkfiCmPqKDuU3: { name: "SOP Creation", mode: "payment" },
  price_1T4qDJP5yEvNkfiClyokAJxS: { name: "Template Library Setup", mode: "payment" },
  price_1T4qDLP5yEvNkfiCHyYS2TXG: { name: "Ops Maintenance Lite", mode: "subscription" },
  price_1T4qDLP5yEvNkfiCJT46UHG0: { name: "Ops Maintenance Standard", mode: "subscription" },
  price_1T4qDMP5yEvNkfiCPFsMFFia: { name: "Ops Maintenance Priority", mode: "subscription" },
  price_1T4qDQP5yEvNkfiCPi2osPwd: { name: "Agent Pilot", mode: "payment" },
  price_1T4qDSP5yEvNkfiCQiYuaIMh: { name: "Agent Workflow Pack", mode: "payment" },
  price_1T4qDTP5yEvNkfiC6mAesML3: { name: "Knowledge Agent Setup", mode: "payment" },
  price_1T4qDUP5yEvNkfiC71skuIZw: { name: "Workflow Triage Agent", mode: "payment" },
  price_1T4qDVP5yEvNkfiC8sR7ifmJ: { name: "Report Summarization Workflow", mode: "payment" },
  price_1T4qDWP5yEvNkfiCU2ahf3UZ: { name: "Intake and Routing Workflow", mode: "payment" },
  price_1T4qDXP5yEvNkfiCxxHKFAb0: { name: "Managed Agents Lite", mode: "subscription" },
  price_1T4qDYP5yEvNkfiCEQY5AaDw: { name: "Managed Agents Standard", mode: "subscription" },
  price_1T4qDZP5yEvNkfiC59H0070s: { name: "Managed Agents Priority", mode: "subscription" },
};

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

  const price = PRICE_CATALOG[priceId];
  if (!price) {
    jsonError(res, 400, "That service price is not available.");
    return;
  }
  if (mode !== price.mode) {
    jsonError(res, 400, "That billing mode does not match the selected service.");
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
    "custom_text[submit][message]": "You will receive a payment confirmation and invoice or receipt by email.",
    "custom_text[after_submit][message]": "Payment received. We will confirm the next step with you shortly.",
    "metadata[service_name]": price.name,
    "metadata[price_id]": priceId,
    "metadata[source]": "amjadosman-site",
  });
  if (mode === "payment") {
    form.set("customer_creation", "always");
    form.set("invoice_creation[enabled]", "true");
    form.set("payment_intent_data[description]", `${price.name} — amjadosman.com`);
    form.set("payment_intent_data[metadata][service_name]", price.name);
    form.set("payment_intent_data[metadata][price_id]", priceId);
    form.set("payment_intent_data[metadata][source]", "amjadosman-site");
  }
  if (mode === "subscription") {
    form.set("subscription_data[metadata][service_name]", price.name);
    form.set("subscription_data[metadata][price_id]", priceId);
    form.set("subscription_data[metadata][source]", "amjadosman-site");
  }

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
