export const BOOKING_URL = 'https://calendar.app.google/wW2FNos9a544sco3A';

export const isBookingHref = (href?: string | null): href is string =>
  typeof href === 'string' && href.startsWith('/book');

export const resolveBookingHref = (href?: string | null) =>
  isBookingHref(href) ? BOOKING_URL : href ?? '';

export const isExternalHref = (href?: string | null) =>
  typeof href === 'string' && /^(https?:|mailto:|tel:)/.test(href);
