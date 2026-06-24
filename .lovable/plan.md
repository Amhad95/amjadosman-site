

# Phases 2, 3, and 4 — Implementation Plan

## Current State

Phase 1 is complete:
- Navbar dropdown works
- `/services` overview with 3 TrackFeatureBlocks
- `/services/brand`, `/services/ops`, `/services/agents` track pages with full content, 3-zone pricing, FAQs, delivery steps
- `/pricing` is a router page
- All pricing cards, service menu lists, and retainer cards exist as components
- All CTAs currently link to `/book` (a form page)

What's missing: Stripe checkout, booking modal, Track C credibility tightening.

---

## Phase 2 — Stripe Checkout

### Step 1: Enable Stripe

Use the Stripe enablement tool. This will prompt for the Stripe secret key and expose the Stripe integration tools and patterns.

### Step 2: Create Stripe Products and Prices

After Stripe is enabled, create placeholder products/prices for all purchasable items across the 3 tracks. The Stripe tool will provide the exact API for this.

### Step 3: Wire checkout into components

**Files to modify:**

| File | Change |
|---|---|
| `src/components/sections/RecommendedOfferCard.tsx` | Accept `stripePriceId` prop. "Pay and start" button triggers Stripe one-time checkout instead of linking to `/book`. |
| `src/components/sections/ServiceMenuList.tsx` | Accept `stripePriceId` per item. "Pay" button triggers Stripe one-time checkout. |
| `src/components/sections/RetainerCard.tsx` | Accept `stripePriceId` prop. "Subscribe" button triggers Stripe subscription checkout. |
| `src/pages/services/ServicesBrand.tsx` | Pass `stripePriceId` to each pricing component. |
| `src/pages/services/ServicesOps.tsx` | Pass `stripePriceId` to each pricing component. |
| `src/pages/services/ServicesAgents.tsx` | Pass `stripePriceId` to each pricing component. |

Each component keeps both CTAs:
- **Pay / Subscribe**: triggers Stripe checkout (one-time or subscription)
- **Book a call**: opens booking modal (wired in Phase 3, stays as `/book` link until then)

The Stripe integration pattern (edge function for creating checkout sessions, client-side redirect) will be determined after enabling Stripe, as the tool provides specific implementation guidance.

---

## Phase 3 — Booking Modal

### New component: `src/components/shared/BookingModal.tsx`

A dialog (using the existing `@radix-ui/react-dialog` setup) containing an iframe.

**Props:**
```ts
interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
```

**Implementation:**
- Uses existing `Dialog`, `DialogContent` from `src/components/ui/dialog.tsx`
- Contains an `<iframe>` with `src={BOOKING_URL}` (placeholder constant)
- Sizing: `max-w-2xl w-full h-[70vh]` on desktop, full-width on mobile
- Close button via Radix dialog close
- `BOOKING_URL` defined as a constant at the top of the file: `const BOOKING_URL = "https://calendar.google.com/calendar/appointments/PLACEHOLDER";`

### Wiring "Book a call" everywhere

**Approach:** Create a React context `BookingContext` that provides `openBooking()` function. Wrap the app in this provider. All "Book a call" buttons call `openBooking()` instead of navigating.

**Files to create:**
| File | Purpose |
|---|---|
| `src/components/shared/BookingModal.tsx` | Modal component with iframe |
| `src/contexts/BookingContext.tsx` | Context provider with modal state |

**Files to modify:**

| File | Change |
|---|---|
| `src/App.tsx` or `src/components/layout/Layout.tsx` | Wrap with `BookingProvider`, render `BookingModal` |
| `src/components/sections/RecommendedOfferCard.tsx` | `bookHref` prop replaced with `onBook` callback. Button calls `openBooking()` from context. |
| `src/components/sections/ServiceMenuList.tsx` | Same pattern — `onBook` callback |
| `src/components/sections/RetainerCard.tsx` | Same pattern — `onBook` callback |
| `src/components/sections/Hero.tsx` | If `secondaryCta.href === '/book'`, intercept and call `openBooking()` instead of navigating |
| `src/components/sections/CTABand.tsx` | Same interception pattern for `/book` hrefs |
| `src/components/layout/Header.tsx` | Header "Book a Call" CTA opens modal instead of navigating |
| `src/pages/services/ServicesBrand.tsx` | Remove `bookHref="/book"`, use context pattern |
| `src/pages/services/ServicesOps.tsx` | Same |
| `src/pages/services/ServicesAgents.tsx` | Same |
| `src/pages/Pricing.tsx` | CTABand book action uses modal |
| `src/pages/Services.tsx` | Hero secondary CTA uses modal |

**Alternative simpler approach:** Instead of modifying every component's props, create a custom `useBooking` hook and modify only the button components (`PrimaryButton`, `SecondaryButton`) to detect when `href="/book"` and intercept with modal. This is fewer file changes.

**Recommended approach:** The interception pattern. Modify `PrimaryButton` and `SecondaryButton` to check if `href` starts with `/book`. If so, prevent navigation and call `openBooking()` from context. This means zero changes to the 25+ files that pass `href="/book"` — they all automatically open the modal.

**Files for interception approach:**
| File | Change |
|---|---|
| `src/components/shared/BookingModal.tsx` | New — modal with iframe |
| `src/contexts/BookingContext.tsx` | New — context with `openBooking()` |
| `src/components/layout/Layout.tsx` | Wrap children with `BookingProvider`, render `BookingModal` |
| `src/components/shared/PrimaryButton.tsx` | If `href` starts with `/book`, call `openBooking()` instead of rendering `<Link>` |
| `src/components/shared/SecondaryButton.tsx` | Same interception |

This is 3 new/modified files instead of 15+. All existing `href="/book"` references across the entire site automatically open the modal.

The `/book` page itself can remain as a fallback for direct URL access.

---

## Phase 4 — Track C Credibility Pass

**File:** `src/pages/services/ServicesAgents.tsx`

Review and confirm:
1. All 6 use-case blocks are named by outcome/operation, not by tool — **already correct** (Customer Support Automation, Sales and CRM Operations, etc.)
2. Tool names (Claude, n8n, MCP) appear only in the "How it's implemented" section — **already correct** (lines 67-72)
3. Language tightening — minor copy edits:
   - Ensure no use-case card mentions specific AI model names
   - Ensure FAQ answer about platforms is measured (line 79 currently says "We use Claude for agent logic, n8n for workflow orchestration" — this is in FAQ, which is acceptable as it answers a direct question, but could be softened)
   - Review that control descriptions are operational and specific

This phase is mostly a content audit. The current implementation already follows the constraint well. Minor copy adjustments only.

---

## Execution Order

1. **Phase 2**: Enable Stripe → create products → wire checkout into 3 pricing components → update 3 track pages with price IDs
2. **Phase 3**: Create BookingContext + BookingModal → modify PrimaryButton + SecondaryButton interception → wrap Layout
3. **Phase 4**: Content audit pass on ServicesAgents.tsx — minor copy edits only

## Total files to create/modify

| Phase | Create | Modify |
|---|---|---|
| Phase 2 | Edge function for checkout | 6 files (3 components + 3 track pages) |
| Phase 3 | 2 files (BookingModal, BookingContext) | 2 files (PrimaryButton, SecondaryButton, Layout) |
| Phase 4 | 0 | 1 file (ServicesAgents.tsx) |

