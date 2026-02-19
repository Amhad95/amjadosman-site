
# Three-Part Design Upgrade

## What's changing and why

Three distinct problems are being fixed in two components, plus a typography scale update that affects the whole site.

---

## 1. Subheadline sizing — site-wide

**Problem:** `text-body-lg` (18px / 1.125rem) is the same size as body copy. Section supporting sentences — the lines directly below H2 headings — feel like regular text, not like a meaningful supporting statement.

**Fix:** Add a new `text-subheadline` scale step (approximately 1.25rem / 20px, line-height 1.5) to `src/index.css`, then update the two key components:

- `src/components/shared/SectionHeader.tsx` — the shared component used across most pages. This cascades the fix site-wide automatically for Services, Proof, AI Tools, all section headers.
- `src/components/sections/OutcomesImpactSection.tsx` — inline subheadline (not using SectionHeader)
- `src/components/sections/DeliveryProcessInteractive.tsx` — inline subheadline

No other files need touching because `SectionHeader` propagates the change to every page that uses it.

---

## 2. Outcomes section — full redesign

**Problems:**
- Too much text (description + "why it matters" + outputs list = reading overload)
- Content is software-centric jargon ("scope brief", "sprint plan", "iteration backlog") — doesn't represent the full service range
- Visual format is a list of accordion-style rows — no brand presence

**New content — 6 outcomes rewritten to be human, service-agnostic, and concise:**

| # | Title | Single supporting line |
|---|-------|----------------------|
| 1 | You know what you're getting | A one-page brief per engagement — no ambiguity about scope, timeline, or what "done" means. |
| 2 | Your brand actually holds together | Identity, messaging, and visual standards that don't fall apart when a new team member joins. |
| 3 | Your site earns its keep | A web presence that converts visitors into conversations, not just a digital brochure. |
| 4 | Your team stops re-explaining things | SOPs, governance, and templates that new people can pick up without hand-holding. |
| 5 | Decisions get made faster | Dashboards and briefs that cut the opinions loop and give leads clarity when it counts. |
| 6 | AI tools your team actually uses | Workflows with guardrails and adoption hooks — not automation for its own sake. |

**New visual layout — 2-column masonry-style card grid (desktop), single column (mobile):**

Each card is a dark `bg-plate-navy` card with:
- Large animated line illustration (top of card, centered, using existing `LineDocument`, `LineBrand`, `LineWebsite`, `LineChart`, `LineDashboard`, `LineGear` SVGs rendered in mint) occupying roughly 1/3 of the card height
- Title in serif (mint on dark)
- One sentence below (offwhite/80)
- No bullet lists, no "why this matters", no "typical outputs"

Cards alternate sizing: first card spans 2 columns on desktop (hero card), remaining 5 fill the grid. This breaks the rigid matrix feel.

This replaces the full `OutcomesImpactSection.tsx` layout — the bottom CTA buttons are kept.

---

## 3. Delivery Process — brand injection

**Problems:**
- Left panel is a plain button list — no visual weight
- Right panel is a text block with a bullet list — reads like documentation
- Almost no brand presence (only the small dark monospace banner at top)

**Approach — keep the interactive tab mechanic but upgrade everything around it:**

**Top banner:** Keep the dark gradient border card, but make the ASCII flow text larger and animate it with a CSS marquee-style animation so it scrolls left infinitely — gives it a live, terminal feel.

**Left step list:** Each step button gets:
- A larger icon container (`w-12 h-12`, `bg-plate-navy`) with the step's `AnimatedIcon` at size 20 (currently it's size 12 in a `w-6`)
- Step number shown as a mint serif numeral beside the icon
- Title in serif font (currently sans-serif `font-semibold`)
- The active state gets a left mint border accent (`border-l-2 border-mint`) instead of just a muted background

**Right content panel:** Each active step gets:
- A large decorative ASCII art line at the top drawn from the step's theme (e.g., `[ ALIGN ]` in the terminal style already used in the banner, shown large)
- Title in serif `text-heading-md`
- Summary text bumped to `text-body-lg` (currently `text-body-md`)
- Artifacts rendered as styled chips (`rounded-lg bg-plate-navy text-mint text-sm px-3 py-1.5`) in a flex-wrap row — not a bullet list
- Touchpoint shown as a mint pill badge at the bottom

**"What you can expect" footer strip:** The 4 items get icon badges added (simple Lucide icons: `MessageSquare`, `FileText`, `Lock`, `Monitor`) before their text.

**Mobile accordion:** Same icon/title upgrades applied, summary text sized up.

---

## Files to modify

| File | Change |
|------|--------|
| `src/index.css` | Add `.text-subheadline` scale step |
| `src/components/shared/SectionHeader.tsx` | Use `text-subheadline` for subheadline paragraph |
| `src/components/sections/OutcomesImpactSection.tsx` | Full layout + content rewrite — dark card grid with line illustrations |
| `src/components/sections/DeliveryProcessInteractive.tsx` | Brand upgrade — icon sizing, ascii decoration, artifact chips, animated banner |

No new components or dependencies needed. All line illustrations and animated icons already exist in the codebase.
