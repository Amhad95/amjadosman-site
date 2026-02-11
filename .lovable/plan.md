

# Fix: Operations Lead Preview + Replace "Problem Contrast" Component

## Two issues to fix

### 1. ContactTimeline.tsx still uses old dark theme
When clicking "Operations Lead" in the persona section, the ContactTimeline vignette renders with `bg-ink/40`, `text-mint`, `border-mint/10` -- the old website-themed style that was supposed to be removed in Step 2. It needs a complete rewrite to neutral surfaces matching the other previews.

### 2. ProblemContrast component needs replacement
The current "Replace the chaos" section uses mint for the arrow icon (`text-primary`) and "To" label on light backgrounds. Beyond fixing the color, the component itself is unsophisticated -- a simple before/after with a crude arrow divider. Replace it with a more polished design.

---

## Changes

### A. Rewrite ContactTimeline.tsx to neutral surfaces

Replace the old dark-themed component with a clean, neutral-surface contact detail preview:

- White background with gray borders (no `bg-ink`, no `border-mint`)
- Contact card: gray-100 avatar circle with gray-600 initials, gray-900 name, gray-500 role/company
- Deal value in gray-900 bold (not mint text)
- Activity timeline items: gray-50 rows, gray-500 icons (not mint), gray-700 text
- "Recent Activity" label in gray-500 uppercase (not mint)
- Remove the animated slide-in effect (keep it static and clean)

### B. Replace ProblemContrast.tsx with a sophisticated component

New design: A two-column layout showing "before" and "after" states side by side with a clean visual treatment.

**Structure per item (horizontal card):**

```text
+--------------------------------------------------+
|  [icon]  Before text (muted, struck)   -->   After text (bold, dark)  |
+--------------------------------------------------+
```

Design details:
- Each item is a horizontal card with a subtle left-to-right gradient (gray-100 to white)
- Left side: icon in gray-100 circle with gray-600 color, "before" text in gray-400 with strikethrough
- Center: a subtle horizontal line or chevron in gray-300 (not mint)
- Right side: "after" text in gray-900 bold with a small emerald-500 dot indicator
- No "From" / "To" labels (the visual treatment makes it obvious)
- Hover: slight elevation, border darkens to gray-300

### C. Update SoftwareCRM.tsx
- No changes needed beyond the component updates (section headline "Replace the chaos" is good)

---

## Files to modify

| File | Change |
|------|--------|
| `src/components/ui/vignettes/ContactTimeline.tsx` | Complete rewrite to neutral surfaces |
| `src/components/sections/ProblemContrast.tsx` | Replace with sophisticated horizontal before/after cards |

## Acceptance criteria

1. Operations Lead preview uses white/gray-50 backgrounds, no mint text/borders/icons
2. "Replace the chaos" cards have no mint on light surfaces
3. Icons use gray-600 on light backgrounds
4. New ProblemContrast design looks polished and professional
5. No animated slide-in for ContactTimeline (static, clean layout)

