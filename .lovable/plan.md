
# Fix: Outcomes + Delivery — correct visual system applied

## Root cause of both problems

The previous implementation violated the site's established Dual-Mode Visual System in two opposite directions:

**Outcomes (on `bg-muted` / light section):** Used dark `bg-plate-navy` cards on a light background. The rule for light backgrounds is white/card-surface cards with line illustrations rendered in `ink` (dark strokes). Dark plate cards belong on dark sections. The result was a jarring dark-on-light colour clash.

**Delivery (on `bg-background` / light section):** Used `text-mint` numerals and `bg-mint/15 text-mint` pills against `bg-card/80` (white) panels. Mint (#00FFD9) on white is unreadable neon — the rule is mint is reserved for dark surfaces. The terminal aesthetic (ASCII, monospace, dark panels) cannot work on a white/light background without the entire section being set on a dark surface.

---

## Fix 1 — Outcomes: white cards, ink illustrations, correct light-mode pattern

The section stays on `bg-muted`. Cards switch to `bg-card` (white) with `border border-ink/10`. Line illustrations render in `text-foreground` (ink) — the animated SVG strokes are ink-coloured on white, consistent with ProofTiles and the dual-mode rule.

**Layout fix:** The "hero card spans 2 columns" pattern is kept, but with proper 2-column CSS grid (`grid-cols-2`) and the hero spanning `col-span-2`. The remaining 5 cards sit in the same 2-col grid naturally (3 + 2), no mismatched 3-col grid with an orphan.

**Card anatomy (light mode):**
- `bg-card` white surface, `border border-ink/10`, subtle `hover:shadow-md` lift
- Illustration: large, centred, `text-foreground` (ink), `h-32` at top of card
- Title: `font-serif text-heading-md text-foreground` (dark ink on white — readable)
- Body: `text-body-md text-muted-foreground`
- Hero card: illustration left, text right (horizontal layout), slightly larger illustration

No mint used in this section at all — mint belongs on dark surfaces.

---

## Fix 2 — Delivery: move entire section to a dark surface

The terminal aesthetic — ASCII text, monospace, `bg-ink` inner panels — only works when the surrounding section is dark. The fix is to set the section background to `bg-plate-navy` (deep navy), which is exactly what the ServiceCardGrid and the Pricing Teaser do.

**What changes:**
- `<section>` background: `bg-background` → `bg-plate-navy`
- Section header text: `text-foreground` → `text-mint` (heading), `text-offwhite/70` (subheadline)  
- Eyebrow: `text-muted-foreground` → `text-mint/60`
- Terminal marquee banner: stays as-is (already dark `bg-ink` with mint text — now looks intentional against navy)
- Left step panel: `bg-card/80 border-border` → `bg-ink/40 border-white/10` (dark glass)
  - Step buttons inactive: `hover:bg-white/5`
  - Step buttons active: `bg-white/10 border-l-2 border-mint` — mint border accent now reads correctly on dark
  - Step numbers `text-mint`: now readable on dark ✓
  - Icon containers `bg-plate-navy` → `bg-white/8` (slightly lighter than the panel)
  - Title text: `text-foreground` → `text-offwhite`
  - Touchpoint subtext: `text-muted-foreground` → `text-offwhite/50`
- Right content panel: `bg-card/80 border-border` → `bg-ink/40 border-white/10`
  - ASCII decoration `text-mint/40` → `text-mint/50` (slightly more visible on dark)
  - Title: `text-foreground` → `text-offwhite`
  - Summary: `text-muted-foreground` → `text-offwhite/75`
  - Artifacts sub-panel: `bg-muted/65 border-border/80` → `bg-white/5 border-white/10`
  - Artifact chips: stay as `bg-plate-navy text-mint` — now have better contrast since the outer panel is slightly lighter
  - Touchpoint pill: `bg-mint/15 text-mint` → `bg-mint/20 text-mint` (still works on dark ✓)
- Footer "what you can expect" strip: `bg-muted/50` → `bg-ink/40`, `border-border` → `border-white/10`
  - Item cards: `bg-card/80 border-border` → `bg-white/5 border-white/10`, `text-foreground/90` → `text-offwhite/90`
  - Icons: `text-mint` stays (correct on dark ✓)
- Mobile accordion: same dark surface treatment

---

## Files to modify

| File | Change |
|------|--------|
| `src/components/sections/OutcomesImpactSection.tsx` | White cards, ink illustrations, correct 2-col grid layout |
| `src/components/sections/DeliveryProcessInteractive.tsx` | Full section to dark `bg-plate-navy` surface, all colour tokens corrected |

No CSS or other files need changing — the typography scale (`text-subheadline`) is already correctly defined in `src/index.css` from the previous round.
