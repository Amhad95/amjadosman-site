# Amjad Osman site

This is the Vite/React site for Amjad Osman: brand systems, internal operations, managed software, practical automation, and self-help tools.

## Local development

```bash
npm install
npm run dev
```

The local Vite server serves the frontend and mounts the Vercel API functions under `/api`. When local provider credentials are absent, the development middleware proxies the AI, checkout, and email-capture calls to the configured production site so the local UI does not silently fail with a missing route.

## Environment variables

Set these in Vercel for production:

- `HF_TOKEN` or `HUGGINGFACE_API_KEY` for the self-help tools.
- `STRIPE_SECRET_KEY` for hosted Stripe Checkout.
- `SITE_URL` for payment return URLs, normally `https://amjadosman.vercel.app`.
- `EMAIL_CAPTURE_WEBHOOK_URL` for a real email-list/webhook destination. Without it, the form validates the address and unlocks the downloadable starter pack without claiming that the address was stored.

## Build and verification

```bash
npm run build
npx tsc --noEmit
```

Deployments are connected to the `Amhad95/amjadosman-site` GitHub repository and the `amjadosman` Vercel project.
