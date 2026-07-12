# Publishing Content

The public site is built from two repository-owned collections:

- Insights: `src/lib/fallbackContent.ts` in `fallbackArticles`.
- Case studies: `src/lib/fallbackContent.ts` in `fallbackWorkCases` and surfaced through `src/data/workCasesDatabase.ts`.

For every new insight or case study, provide a stable slug, English title/summary/body, cover image, category, date, and the Arabic, German, French, and Bulgarian variants. The build prerenders each entry into a real HTML route, adds it to the sitemap, and creates canonical metadata.

Before publishing, run:

```bash
npm run content:check
npm run build
```

`content:check` fails on missing indexed essentials, duplicate slugs, or incomplete article translations. `npm run build` runs the same gate and writes the final sitemap into `dist/`.

For cover images, add the file under `src/assets/insights/` or the appropriate project asset folder, import it into the content record, and use the imported path as `thumbnail_url`. That same image is used by the card, lead media, and social metadata.

## Production checklist

Set these server-only Vercel environment variables in Production, Preview, and Development as appropriate:

- `HF_TOKEN` or `HUGGINGFACE_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- Optional: `RESEND_API_KEY`
- Optional: `PAYMENT_NOTIFICATION_EMAIL` and `PAYMENT_FROM_EMAIL` when overriding the defaults
- `SITE_URL`

In Stripe, create a webhook for `https://amjadosman.vercel.app/api/stripe-webhook` and subscribe to the checkout completion, asynchronous payment success/failure, and expiry events. The endpoint verifies Stripe's signed payload before forwarding the event to the configured operational workflow.
