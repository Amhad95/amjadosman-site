interface EmailCaptureRequest {
  method?: string;
  body?: { email?: unknown };
}

interface EmailCaptureResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: Record<string, unknown>) => void };
}

export default async function handler(req: EmailCaptureRequest, res: EmailCaptureResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Enter a valid email address." });
    return;
  }

  const webhook = process.env.EMAIL_CAPTURE_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "self-help-tools", capturedAt: new Date().toISOString() }),
    });
    if (!response.ok) {
      res.status(502).json({ error: "The email service did not accept the signup. Try again shortly." });
      return;
    }
  }

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    downloadUrl: "/downloads/self-help-tools-starter-pack.md",
    captured: Boolean(webhook),
  });
}
