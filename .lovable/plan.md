

# Fix ASCII Cube Cropping - Proper Scaling Approach

## Root Cause

The current approach has a mismatch:
- Container: 280-400px wide
- ASCII grid: 60 chars × 32 lines
- Font at 9-12px = renders ~540-720px wide (60 chars × 9-12px)
- Container clips the overflow

## Solution

Instead of increasing font size (which scales the ASCII art beyond its container), we should:
1. Keep a small base font size for crisp rendering
2. Use CSS `transform: scale()` on the container to enlarge visually
3. Remove the fixed container dimensions and let the `<pre>` define its natural size
4. Scale the whole thing up proportionally

---

## Changes Required

### File: `src/components/shared/CyberGlobeHeader.tsx`

**Strategy**: Render the ASCII at a small, crisp font size, then use CSS transform to scale the entire element up. This keeps proportions perfect and prevents cropping.

```tsx
// Current (broken - font too large for container)
<div className="w-[280px] h-[180px] ... overflow-hidden">
  <pre className="text-[9px] sm:text-[10px] ...">

// Fixed approach - scale the container itself
<div className="relative flex items-center justify-center">
  <pre
    className="text-[5px] leading-[1.0] font-mono select-none whitespace-pre 
               transform scale-[1.8] sm:scale-[2.2] md:scale-[2.5] lg:scale-[2.8]
               origin-center"
    style={{ 
      color: themeColor,
      textShadow: `0 0 2px ${themeColor}60, 0 0 4px ${themeColor}40`
    }}
  >
    {frame.join("\n")}
  </pre>
</div>
```

**Key changes**:
| Aspect | Before | After |
|--------|--------|-------|
| Font size | 9-12px (too big) | 5px base (small, crisp) |
| Scaling | None | CSS `transform: scale(1.8-2.8)` |
| Container | Fixed dimensions + overflow clip | Flexible, no clip |
| Glow | Large blur (8-16px) | Smaller blur scaled with transform |

**Why this works**:
- The ASCII is rendered at its natural small size (60×32 chars at 5px = ~300px × 160px)
- CSS transform scales the whole thing up proportionally
- No cropping because we're not constraining with fixed dimensions
- The visual size can be controlled precisely via the scale multiplier

---

## Technical Details

### Responsive Scaling

```tsx
// Mobile (< 640px): scale 1.8x → ~540px × 290px visual
// Tablet (640-767px): scale 2.2x → ~660px × 350px visual  
// Medium (768-1023px): scale 2.5x → ~750px × 400px visual
// Desktop (1024px+): scale 2.8x → ~840px × 450px visual

className="transform scale-[1.8] sm:scale-[2.2] md:scale-[2.5] lg:scale-[2.8] origin-center"
```

### Wrapper for Layout Control

Add an outer wrapper to control the space the element occupies in the layout:

```tsx
<div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] 
                h-[200px] sm:h-[240px] lg:h-[280px] 
                flex items-center justify-center overflow-visible">
  <pre className="... transform scale-[1.8] sm:scale-[2.2] ..." >
```

This way:
- The outer div reserves space in the layout
- The inner `<pre>` can scale visually without being clipped
- `overflow-visible` ensures no cropping

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/shared/CyberGlobeHeader.tsx` | Replace font-size scaling with CSS transform scaling |

---

## Visual Result

- Crisp, clear ASCII characters rendered at optimal small size
- Scaled up smoothly via CSS transform (no pixelation)
- Proper proportions maintained at all screen sizes
- No cropping or overflow issues
- Glow effect scales proportionally with the content

