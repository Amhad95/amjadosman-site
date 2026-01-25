

# Fix Card Styling, Icon Sizing, Animation, and Typography

## Overview

This plan addresses five issues:
1. **Home tool cards** look different from Tools page cards (size, bg color, aspect ratio)
2. **Icons are too small** relative to their background container
3. **Icon animation** doesn't load immediately and doesn't always work - needs continuous animation
4. **Proof/Work tiles** are too big - changing to 3 per row on desktop
5. **h3 typography** varies across card types - needs to be bigger and bolder

---

## Changes Summary

| Component | Issue | Fix |
|-----------|-------|-----|
| ToolList (preview) | Different size/aspect than full variant | Match Tools page: square aspect, same padding |
| ToolList (both) | Icons too small (w-14/w-16) | Increase to w-20/w-24 (fills ~60% of container) |
| Line illustrations | Animation plays once, then stops | Change to infinite loop animation |
| ProofTiles | 2-col grid, tiles too big | 3-col on desktop, reduce padding |
| All card h3s | Varying sizes, too small | Standardize to `text-xl font-semibold` |

---

## Technical Changes

### 1. ToolList.tsx - Match Home to Tools Page Style

**Preview variant (lines 66-104)** - Update to use square aspect ratio and match full variant sizing:

```tsx
// Line 67: Change grid
<div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6', className)}>

// Line 79-81: Change aspect ratio from 4/3 to square
<div className={cn(
  "aspect-square border-b border-ink/5 flex items-center justify-center p-4",
  plateClasses[plateColor]
)}>

// Line 83: Increase icon size from w-16 h-16 to w-20 h-20
<div className="w-20 h-20 text-mint">

// Line 90: Update h3 typography
<h3 className="font-serif text-xl font-semibold text-foreground mb-2">
```

**Full variant (lines 108-147)** - Increase icon size:

```tsx
// Line 126: Increase icon size from w-14/w-16 to w-20/w-24
<div className="w-20 h-20 md:w-24 md:h-24 text-mint">

// Line 133: Update h3 typography
<h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
```

---

### 2. index.css - Continuous Animation

**Lines 238-252** - Change animation to infinite loop with a pause between draws:

```css
/* SVG line drawing animation - continuous */
@keyframes draw-line-loop {
  0% {
    stroke-dashoffset: 200;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -200;
  }
}

.animate-draw-line {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-line-loop 3s ease-in-out infinite;
}
```

This creates a continuous loop:
- 0-40%: Line draws in (1.2s)
- 40-60%: Pause visible (0.6s)
- 60-100%: Line draws out the other side (1.2s)
- Loop restarts

---

### 3. ProofTiles.tsx - 3-Column Layout

**Line 21** - Change grid to 3 columns on desktop:

```tsx
<div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6', className)}>
```

**Line 26** - Reduce thumbnail aspect ratio:

```tsx
<div className="aspect-[3/2] bg-gradient-to-br from-muted to-muted/50 border-b border-ink/5 flex items-center justify-center overflow-hidden">
```

**Line 42-43** - Reduce padding and update h3:

```tsx
<div className="p-3 md:p-4">
  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
```

---

### 4. Steps.tsx - Standardize h3 Typography

**Line 56 (desktop):**
```tsx
<h3 className="font-serif text-xl font-semibold text-foreground mb-2">
```

**Line 94 (mobile):**
```tsx
<h3 className="font-serif text-lg font-semibold text-foreground mb-1">
```

---

### 5. ServiceCardGrid.tsx - Already Uses text-heading-md

The ServiceCardGrid already uses `text-heading-md` which is larger, but for consistency we should ensure it's also bold:

**Line 61:**
```tsx
<h3 className="font-serif text-heading-md font-semibold text-mint mb-3">
```

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/sections/ToolList.tsx` | Square aspect for preview, larger icons, bold h3 |
| `src/index.css` | Continuous looping animation |
| `src/components/sections/ProofTiles.tsx` | 3-col grid, smaller aspect, tighter padding, bold h3 |
| `src/components/sections/Steps.tsx` | Bold h3 |
| `src/components/sections/ServiceCardGrid.tsx` | Add font-semibold to h3 |

---

## Visual Result

| Before | After |
|--------|-------|
| Home tools: 4:3 aspect, small icons | Home tools: Square aspect, large icons matching Tools page |
| Icons: ~25% of container | Icons: ~60% of container |
| Animation: Plays once on load | Animation: Continuous loop |
| Proof tiles: 2-col, large | Proof tiles: 3-col, compact |
| h3: varying sizes (text-lg, text-base) | h3: standardized (text-xl font-semibold) |

