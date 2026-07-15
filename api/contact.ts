interface ContactRequest {
  method?: string;
  body?: {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    website?: unknown;
  };
}

interface ContactResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: Record<string, unknown>) => void };
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
  const website = typeof req.body?.website === 'string' ? req.body.website.trim() : '';

  if (website) {
    res.status(200).json({ sent: true });
    return;
  }

  if (!name || name.length > 160 || !isEmail(email) || email.length > 255 || !message || message.length > 6000) {
    res.status(400).json({ error: 'Please enter your name, a valid email, and a message.' });
    return;
  }

  const response = await fetch('https://formsubmit.co/ajax/hello@amjadosman.com', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Website contact from ${name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  if (!response.ok) {
    res.status(502).json({ error: 'The message service is unavailable.' });
    return;
  }

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ sent: true });
}
