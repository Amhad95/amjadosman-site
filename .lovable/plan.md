

# Phase 1: IA + Pages — Services Dropdown, Overview, Track Pages, Pricing Router

## Scope

Phase 1 only. No Stripe, no booking modal, no payment mechanics. Those are Phase 2 and 3.

---

## 1. Navbar: Services Dropdown

**File:** `src/components/layout/Header.tsx`

Replace the flat "Services" link with a hover-triggered dropdown (desktop) and an expandable sub-menu (mobile).

**Desktop dropdown:**
- On hover/click of "Services", show a dropdown with 4 links:
  - Services Overview → `/services`
  - Brand and Growth Systems → `/services/brand`
  - Internal Operations Systems → `/services/ops`
  - AI Agents and Automation → `/services/agents`
- Clicking "Services" label itself navigates to `/services`
- Dropdown: `bg-ink/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg` — consistent with the existing scrolled nav pill aesthetic
- Links: `text-offwhite/70 hover:text-offwhite text-sm font-semibold`
- Close on mouse leave or route change
- When scrolled (pill nav), dropdown still works but anchored to the "Services" text

**Mobile:**
- "Services" in the mobile menu becomes a collapsible section
- Tap to expand sub-links (indented with `pl-4`)
- Tap any sub-link to navigate + close menu

**Route plate map additions:**
```
'/services/brand': 'navy',
'/services/ops': 'navy',
'/services/agents': 'navy',
```

**Active state:** Highlight "Services" in the nav when on any `/services/*` route (use `location.pathname.startsWith('/services')`).

---

## 2. /services — Overview Page (rewrite)

**File:** `src/pages/Services.tsx` (rewrite)

Remove the current grid-based layout. Replace with the exact structure specified.

### Section 1: Hero (Poster Mode, `bg-plate-navy`)
- Headline: "Services organized by track, so buyers can self-select fast."
- Subheadline: "Pick the track that matches your bottleneck. Each track has clear deliverables, pricing, and a direct checkout option."
- Primary CTA: "Explore tracks" — smooth scrolls to `#track-a`
- Secondary CTA: "Book a call" — links to `/book` (Phase 3 converts to modal)
- Use existing `<Hero>` component with `plate="navy"`

### Sections 2–4: TrackFeatureBlock × 3

New shared component: `src/components/sections/TrackFeatureBlock.tsx`

Props:
```ts
interface TrackFeatureBlockProps {
  id: string;           // anchor id
  label: string;        // "Track A"
  headline: string;
  explainer: string;
  whenFits: string[];   // bullet points
  deliverables: { title: string; description: string }[];
  deliveryOptions: string[];  // chip labels
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}
```

Layout (Interface Mode, `bg-background` for A/C, `bg-muted` for B — alternating):
- Section label: eyebrow in `text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold`
- Headline: `font-serif text-poster-lg text-foreground`
- Explainer: `text-subheadline text-muted-foreground`
- "When this track fits": 3 bullets with check-circle icons, in a vertical list
- Deliverables: cards in a responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), each card `bg-card border border-ink/10 rounded-2xl p-6` with title in `font-serif text-heading-sm` and description in `text-body-md text-muted-foreground`
- "How it's delivered": horizontal row of chips — `bg-muted border border-ink/8 rounded-full px-4 py-1.5 text-sm font-medium`
- CTA row: two buttons side by side using `PrimaryButton` and `SecondaryButton`

Track A content: exactly as specified in the brief (Brand and Growth Systems, 3 bullets, 3 cards, 2 chips)
Track B content: exactly as specified (Internal Operations Systems, 3 bullets, 4 cards, 2 chips)
Track C content: exactly as specified (AI Agents and Automation, 3 bullets, 6 use-case cards, 3 control chips)

### Section 5: "How engagement works" stepper

Reuse the existing `Steps` component pattern or build inline. 5 steps as specified. Simple horizontal stepper on desktop, vertical on mobile. No proof strip.

---

## 3. Track Pages (3 new files)

All three follow the common structure. Phase 1 includes full content but placeholder prices (`EUR [X]`) and placeholder Stripe IDs. CTAs link to `/book` for now (Phase 2/3 wires Stripe and modal).

### New files:
- `src/pages/services/ServicesBrand.tsx`
- `src/pages/services/ServicesOps.tsx`
- `src/pages/services/ServicesAgents.tsx`

### Common structure per track page:

**1) Hero** — `<Hero>` with `plate="navy"`, track-specific headline/explainer, two CTAs

**2) Outcomes** — 4 tiles in a `grid-cols-1 md:grid-cols-2` grid, each tile: `bg-card border border-ink/10 rounded-2xl p-8`, serif headline + one sentence body

**3) Services in this track** — Grouped into 3 groups (2–3 for agents), each group has a subheading and bullet list or sub-cards

**4) Pricing section** (id="pricing") — Three zones:

- **Zone 1: Recommended starting points** — 3 cards, each with: name, inclusions list, timeline, price, two CTA buttons (placeholder hrefs)
- **Zone 2: Pick individual services** — A clean table/list with service name, starting price, and CTA button per row
- **Zone 3: Retainers** — 3 tier cards (Lite/Standard/Priority) with inclusions, response time, monthly price, Subscribe + Book a call buttons

New shared components:
- `src/components/sections/PricingZone.tsx` — wrapper for a pricing zone with headline
- `src/components/sections/RecommendedOfferCard.tsx` — fixed-scope offer card
- `src/components/sections/ServiceMenuList.tsx` — individual services list
- `src/components/sections/RetainerCard.tsx` — subscription tier card

All use the existing card/button design system. Cards on light backgrounds use `bg-card border border-ink/10`. Pricing amounts in `font-serif text-heading-md`.

**5) "How we deliver"** — 4–5 step stepper, track-specific

**6) FAQ** — Accordion using existing `<Accordion>` component, 6–8 items per track

### Track-specific content:

**Brand (/services/brand):** Content exactly as specified — Brand System, Website and CMS, Sales Materials groups. 3 recommended offers, 3 individual services, 3 retainer tiers.

**Ops (/services/ops):** SharePoint Architecture, SOPs and Templates, Onboarding System groups. 3 recommended offers, 3 individual services, 3 retainer tiers.

**Agents (/services/agents):** 6 use-case blocks (not tool-named), controls/governance section, "How it's implemented" section (where tools get mentioned). 3 recommended offers, 3 individual services, 3 retainer tiers.

---

## 4. /pricing — Router Page (rewrite)

**File:** `src/pages/Pricing.tsx` (rewrite)

Strip all existing pricing tables. Replace with:

- Hero: "Pricing by track" headline, short subheadline
- 3 cards linking to each track's pricing:
  - "Brand and Growth Systems" → `/services/brand#pricing`
  - "Internal Operations Systems" → `/services/ops#pricing`
  - "AI Agents and Automation" → `/services/agents#pricing`
- Each card: track name, one-line description, "View pricing →" link
- CTA band at bottom: "Book a call" 

---

## 5. Routing

**File:** `src/App.tsx`

Add 3 new routes:
```
/services/brand → ServicesBrand
/services/ops → ServicesOps
/services/agents → ServicesAgents
```

---

## Files to create

| File | Purpose |
|------|---------|
| `src/components/sections/TrackFeatureBlock.tsx` | Reusable track block for /services overview |
| `src/components/sections/RecommendedOfferCard.tsx` | Fixed-scope pricing card |
| `src/components/sections/ServiceMenuList.tsx` | À la carte services list |
| `src/components/sections/RetainerCard.tsx` | Subscription tier card |
| `src/pages/services/ServicesBrand.tsx` | Track A detail page |
| `src/pages/services/ServicesOps.tsx` | Track B detail page |
| `src/pages/services/ServicesAgents.tsx` | Track C detail page |

## Files to modify

| File | Change |
|------|--------|
| `src/components/layout/Header.tsx` | Services dropdown (desktop + mobile) |
| `src/pages/Services.tsx` | Rewrite to overview with TrackFeatureBlocks |
| `src/pages/Pricing.tsx` | Rewrite to router page |
| `src/App.tsx` | Add 3 new routes |

No changes to other pages, global styles, or the design system.

