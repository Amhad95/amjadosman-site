
# Fix Mint Icon Colors and Animation Issues

## Problems Identified

### 1. Icons Not Mint Colored
**Root cause**: Each line illustration SVG has `className="text-foreground"` hardcoded on the `<svg>` element, which overrides the `text-mint` class applied to the parent wrapper.

**Location**: All files in `src/components/ui/line-illustrations/`:
- LineDocument.tsx (line 13): `className={cn('w-full h-full text-foreground', className)}`
- LineChart.tsx, LineBrand.tsx, LineWebsite.tsx, LineGear.tsx, LineDashboard.tsx, LineTree.tsx (same pattern)

### 2. Animation Delay/Inconsistent
**Root cause**: 
- The staggered `delay` prop creates delays of 80-100ms per card index, causing later cards to appear static for up to 500ms+
- Animation only plays once on mount - if cards are scrolled into view after initial render, they may appear incomplete
- The animation uses `forwards` fill mode, so if interrupted or delayed, elements can get stuck mid-animation

---

## Solution

### Part A: Fix Icon Color (All Line Illustrations)

Remove `text-foreground` from the SVG className so it inherits from parent:

```tsx
// Before (in each Line*.tsx)
<svg className={cn('w-full h-full text-foreground', className)}>

// After
<svg className={cn('w-full h-full', className)}>
```

This allows the `text-mint` class on the wrapper div in ToolList to properly cascade to the SVG's `currentColor` strokes.

### Part B: Fix Animation Timing

1. **Remove staggered delays** - All icons animate together for consistent UX
2. **Make animation faster** - Reduce from 1.2s to 0.8s for snappier feel
3. **Add animation-fill-mode: both** to ensure proper state before/after

**Files to update:**

| File | Line | Change |
|------|------|--------|
| LineDocument.tsx | 13 | Remove `text-foreground` |
| LineChart.tsx | 13 | Remove `text-foreground` |
| LineBrand.tsx | 13 | Remove `text-foreground` |
| LineWebsite.tsx | 13 | Remove `text-foreground` |
| LineGear.tsx | 13 | Remove `text-foreground` |
| LineDashboard.tsx | 13 | Remove `text-foreground` |
| LineTree.tsx | 13 | Remove `text-foreground` |
| index.css | 248-252 | Update animation timing |

---

## Technical Changes

### Line Illustrations (all 7 files)

**Example for LineDocument.tsx:**
```tsx
// Line 11-16: Change SVG className
<svg
  viewBox="0 0 64 64"
  className={cn('w-full h-full', className)}  // Remove text-foreground
  fill="none"
>
```

Also remove the individual `style={{ animationDelay }}` from each path to eliminate staggered timing within a single icon.

### CSS Animation (index.css)

```css
/* Line 248-252: Update animation */
.animate-draw-line {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-line 0.8s ease-out forwards;  /* Faster: 1.2s → 0.8s */
}
```

---

## Result

| Before | After |
|--------|-------|
| Dark icons (text-foreground) | Mint icons (inherited from parent) |
| Staggered animation (inconsistent) | Immediate animation (all at once) |
| 1.2s animation (slow) | 0.8s animation (snappy) |
| Delayed cards show incomplete | All icons animate properly |

The tool cards will now display:
- Mint colored animated line illustrations
- Consistent, fast draw animation on all icons simultaneously
