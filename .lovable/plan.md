

# Fix: Replace ProblemContrast with a more sophisticated design

## Problem
The current component looks flat and generic. The emerald dots on the light background feel like a website skin element rather than polished marketing content. The before/after transition lacks visual hierarchy and sophistication.

## New Design

Replace the simple horizontal card layout with a more refined "transformation" design that uses stronger visual hierarchy:

**Each card becomes two distinct zones separated by a vertical divider:**

```text
+-------------------------------------------+
|  [icon]                                   |
|                                           |
|  ~Before text~ (struck, muted)            |
|  ─────────────────────────                |
|  After text (bold, dark)                  |
+-------------------------------------------+
```

**Design details:**
- Each card is a clean white card with gray-200 border
- Icon at top-left in a gray-100 circle with gray-600 color
- "Before" text: gray-400, strikethrough, smaller size (text-xs)
- A thin horizontal gray-200 separator line between before/after
- "After" text: gray-900, font-semibold, normal size (text-sm)
- No dots, no chevrons, no emerald/mint accents at all
- The visual distinction comes purely from typography weight and muted vs. bold contrast
- 2x2 grid on desktop, stacked on mobile
- Hover: subtle shadow elevation and border-gray-300

This removes all color accents and relies on typographic contrast alone, which reads as more professional and confident.

## Technical changes

### File: `src/components/sections/ProblemContrast.tsx`
- Remove ChevronRight import (no longer needed)
- Restructure each card to vertical layout: icon, before text (struck/muted), separator, after text (bold/dark)
- Remove emerald dots entirely
- Remove horizontal flex layout, use vertical stacking per card
- Keep 2-column grid on md+
- Maintain hover states (shadow, border darkening)

## Acceptance criteria
1. No emerald/mint dots or accents on light backgrounds
2. No chevron arrows
3. Before/after distinction is purely typographic (muted struck vs. bold dark)
4. Cards are clean white with gray borders
5. Icons use gray-600 on gray-100 circles
6. Professional, understated design

