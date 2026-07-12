interface HealthRequest { method?: string }

interface HealthResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: Record<string, unknown>) => void };
}

export default function handler(req: HealthRequest, res: HealthResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const missing = [
    !(process.env.HF_TOKEN || process.env.HUGGINGFACE_API_KEY) && "HF_TOKEN_OR_HUGGINGFACE_API_KEY",
    !process.env.STRIPE_SECRET_KEY && "STRIPE_SECRET_KEY",
    !process.env.STRIPE_WEBHOOK_SECRET && "STRIPE_WEBHOOK_SECRET",
  ].filter(Boolean);
  const ready = missing.length === 0;

  res.setHeader("Cache-Control", "no-store");
  res.status(ready ? 200 : 503).json({
    status: ready ? "ready" : "configuration_required",
    ...(ready ? {} : { missing }),
  });
}
