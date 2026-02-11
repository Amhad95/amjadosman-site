

# Redesign: "Replace the chaos" section

## Problem
The current design fails on two fronts:
1. **Contrast**: `text-gray-400` on white cards sitting on a warm off-white (`bg-muted`) background — everything blends together into a pale wash
2. **Layout**: Small vertical cards with tiny text lack visual weight and feel like placeholder content, not a marketing section

## New Design: Bold two-row table-style layout

Instead of 4 small cards, use a single contained block with strong visual separation between "before" and "after" states. This reads like a confident comparison, not a collection of fragile cards.

```text
+--------------------------------------------------------------+
|  [icon]  Deals tracked in spreadsheets                       |
|          Visual pipeline with clear stages              ✓    |
|--------------------------------------------------------------|
|  [icon]  Follow-ups lost in email                            |
|          Automated task reminders                       ✓    |
|--------------------------------------------------------------|
|  [icon]  No visibility on team activity                      |
|          Real-time dashboards and reports                ✓    |
|--------------------------------------------------------------|
|  [icon]  Handovers lose context                              |
|          Full history travels with contacts              ✓    |
+--------------------------------------------------------------+
```

**Design details:**
- Single white card container with rounded corners and `border border-gray-200` — one block, not four
- Each row has two lines:
  - **Before line**: icon (gray-400, w-4) + text in `text-gray-400` with `line-through`, `text-sm` (not text-xs — needs to be readable)
  - **After line**: indented to align with text above, `text-gray-900 font-medium text-sm`, with a small `text-gray-400` check icon on the right
- Rows separated by `border-b border-gray-100` dividers (last row has no border)
- Generous padding: `py-4 px-5` per row
- No hover effects on individual rows — the block is static and confident
- No colored dots, no chevrons, no gradients, no emerald, no mint

**Why this is better:**
- The "before" text at `text-sm text-gray-400` with strikethrough is readable (not text-xs)
- The "after" text at `text-gray-900 font-medium` creates strong typographic contrast against the struck line
- One contained block reads as a structured comparison, not scattered cards
- The check marks give a subtle "resolved" signal without color accents

## Technical changes

### File: `src/components/sections/ProblemContrast.tsx`
- Replace the grid of cards with a single container `div` with `bg-white rounded-xl border border-gray-200 divide-y divide-gray-100`
- Each item becomes a row with two lines (before struck, after bold)
- Icon sits to the left of the before text (inline, not in a circle)
- Check icon (`lucide-react Check`) on the right of the after line in `text-gray-300`
- Remove the 2x2 grid layout entirely
- Props interface stays the same (no breaking changes)

## Acceptance criteria
1. Single contained block, not scattered cards
2. "Before" text is `text-sm text-gray-400 line-through` — readable, not tiny
3. "After" text is `text-sm text-gray-900 font-medium` — strong contrast
4. Icons are `text-gray-400` inline (no circles, no tinted backgrounds)
5. No mint, no emerald, no colored accents anywhere
6. No hover animations on rows
7. Check marks in `text-gray-300` for subtle resolution signal

