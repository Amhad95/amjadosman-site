
# Two Targeted Fixes

## Fix 1 — Delivery: Mint container on step icons (surgical)

**What's wrong:** The 5 step icons in the left nav panel sit bare inside a `bg-white/8` container. The request is a transparent mint border/background square around them to give them the branded container treatment used elsewhere in the site (icon-container-branding memory).

**Change:** In `DeliveryProcessInteractive.tsx`, update the icon container div on both desktop and mobile:
- Desktop: `w-12 h-12 rounded-xl bg-white/8` → `w-12 h-12 rounded-xl bg-mint/10 border border-mint/25`
- Mobile: `w-11 h-11 rounded-xl bg-white/8` → `w-11 h-11 rounded-xl bg-mint/10 border border-mint/25`

This gives each icon a subtle glowing mint square container — mint-tinted background + mint border — without overwhelming the dark navy surface. The icon itself stays `color="mint"`.

---

## Fix 2 — Outcomes: Conceptual rethink

**The actual problem:** It's not a color or layout bug. It's that the format is wrong for what the section needs to communicate.

A "6 identical cards in a grid" format reads as a feature comparison matrix. It implies parity across all items — that each outcome is equally weighted, equally important. That's the wrong signal for an outcomes/results section. Outcomes should feel like proof, like a before/after, like transformation — not a checklist.

**New concept — "Before / After" statement list with a bold left rail:**

Replace the card grid entirely with a vertically stacked list of outcome statements, each one structured as a two-column row:
- **Left column (40%):** A bold serif "after" state — the outcome in a single punchy phrase, set large in `text-heading-md` or larger. This is the signal.
- **Right column (60%):** A single supporting sentence in `text-muted-foreground`. This is the proof. No illustrations needed.
- A thin `border-b border-ink/10` separator between each row.
- The list sits on `bg-muted` (unchanged).
- On mobile, the two columns stack: heading then body.

This pattern is common in high-end agency and SaaS sites — it reads like a list of guarantees or a client bill of rights rather than a feature grid. It's human, direct, and far more confident.

**The 6 outcomes (content stays the same — only the visual format changes):**

| Left (serif, large) | Right (body, muted) |
|---|---|
| You know exactly what you're getting | A one-page brief per engagement — no ambiguity about scope, timeline, or what "done" means. |
| Your brand holds together under pressure | Identity, messaging, and visual standards that don't fall apart when a new team member joins. |
| Your site earns its keep | A web presence that converts visitors into conversations, not just a digital brochure. |
| Your team stops re-explaining things | SOPs, governance, and templates that new people can pick up without hand-holding. |
| Decisions get made faster | Dashboards and briefs that cut the opinions loop and give leads clarity when it counts. |
| AI tools your team actually uses | Workflows with guardrails and adoption hooks — not automation for its own sake. |

**Layout structure:**

```text
┌──────────────────────────────────────────────────────────────────┐
│  OUTCOMES                                                        │
│  What working together actually produces          (heading area) │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  01  You know exactly what         A one-page brief per          │
│      you're getting                engagement — no ambiguity     │
│                                    about scope, timeline, or     │
│                                    what "done" means.            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  02  Your brand holds together     Identity, messaging, and      │
│      under pressure                visual standards that don't   │
│                                    fall apart when a new team    │
│                                    member joins.                 │
├──────────────────────────────────────────────────────────────────┤
│  ...                                                             │
└──────────────────────────────────────────────────────────────────┘
```

Each row:
- Mint numbered counter `01` – `06` in `font-mono text-xs text-mint` (on muted/light background this is acceptable as a tiny accent, similar to how step numbers work in stepped lists; if contrast is a concern it will be switched to `text-foreground/40`)
- Left: `font-serif text-heading-md text-foreground` (the outcome, 3–5 words)
- Right: `text-body-md text-muted-foreground`
- `border-b border-ink/8` divider
- On hover: a subtle left-rail accent `border-l-2 border-ink/20 pl-4` or just a background tint `hover:bg-ink/[0.02]`
- Last row has no border-b

**Why this is better:**
- No cards = no matrix feel
- Serial numbered list implies progression and weight
- Large serif left-column makes the outcome itself the headline — not buried as a card title
- Scannable at a glance — left column skimmable, right column for those who want detail
- Removes all the "primitive" card layout problems without needing illustrations or animations

**What's removed:** All line illustrations (LineDocument, LineBrand, etc.) — they were only there to fill card space. In a list format they're unnecessary and would add noise.

---

## Files to modify

| File | Change |
|---|---|
| `src/components/sections/DeliveryProcessInteractive.tsx` | Update icon container on desktop + mobile step buttons |
| `src/components/sections/OutcomesImpactSection.tsx` | Replace card grid with numbered statement list |
