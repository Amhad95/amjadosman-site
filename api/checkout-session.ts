interface CheckoutSessionRequest {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
  url?: string;
}

interface CheckoutSessionResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: Record<string, unknown>) => void };
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

  const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
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

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    paid,
    mode: typeof session.mode === "string" ? session.mode : "unknown",
    paymentStatus,
    status: checkoutStatus,
  });
}
