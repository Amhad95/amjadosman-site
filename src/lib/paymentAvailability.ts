/**
 * Customer-facing checkout is intentionally off until the Stripe account is
 * activated and the live products, prices, webhook, and notifications are
 * verified. Set VITE_PUBLIC_CHECKOUT_ENABLED=true only for a controlled test
 * build or after the live cutover is complete.
 */
export const isPublicCheckoutEnabled = import.meta.env.VITE_PUBLIC_CHECKOUT_ENABLED === "true";
