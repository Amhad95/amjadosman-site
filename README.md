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
- `STRIPE_WEBHOOK_SECRET` for verifying signed Stripe events at `/api/stripe-webhook`.
- Optional: `RESEND_API_KEY` for detailed site-generated payment emails, with `PAYMENT_NOTIFICATION_EMAIL` and `PAYMENT_FROM_EMAIL` overrides.
- `SITE_URL` for payment return URLs, normally `https://amjadosman.vercel.app`.
- `EMAIL_CAPTURE_WEBHOOK_URL` for a real email-list/webhook destination. Without it, the form validates the address and unlocks the downloadable starter pack without claiming that the address was stored.

## Build and verification

```bash
npm run build
npx tsc --noEmit
```

Deployments are connected to the `Amhad95/amjadosman-site` GitHub repository and the `amjadosman` Vercel project.

## Payments and content

Stripe sends checkout, invoice, subscription cancellation, and refund lifecycle events to `https://amjadosman.vercel.app/api/stripe-webhook`. The endpoint verifies Stripe's signature. Stripe's native successful-payment email alert is enabled; Resend remains an optional enhancement for richer site-generated notifications.

Use `npm run content:check` before publishing. The build prerenders public routes, writes `sitemap.xml`, and adds canonical, Open Graph, and JSON-LD metadata to each generated page. The authoring procedure is in `CONTENT_WORKFLOW.md`.
