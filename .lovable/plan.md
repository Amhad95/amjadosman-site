

# Fix PyramidAnimation on Work Page

## Problem

The current PyramidAnimation renders incorrectly - showing scattered dots instead of a proper 3D pyramid shape. The issue stems from the optimization approach using `textContent` which doesn't properly render the face filling algorithm.

## Solution

Replace the current `src/components/ui/pyramid-animation.tsx` with the user's working implementation, adjusted for project consistency:

---

## Files to Modify

| File | Action |
|------|--------|
| `src/components/ui/pyramid-animation.tsx` | **Replace** - Use working version with project styling |

---

## Implementation Details

### Key Changes

1. **Use React state-based rendering** instead of direct DOM manipulation
   - Use `useState` for frame and theta
   - Use `setInterval` at 30ms (~33fps) for animation
   - Render JSX elements with individual `<span>` elements per character

2. **Keep finer face sampling** for proper fill
   - `DU = 0.01` and `DV = 0.01` (finer than current 0.015)

3. **Add color support with mint option**
   - `color` prop: when `true` uses multi-color faces, when `false` uses mint (`#00FFD9`)
   - Per-character coloring via styled spans

4. **Apply project styling patterns**
   - Font sizes: `text-[8px] sm:text-[10px] md:text-[12px]`
   - Mint glow effect: `textShadow: 0 0 8px ${MINT}90, 0 0 16px ${MINT}50`
   - Container: `flex items-center justify-center`

### Component Props

```tsx
interface PyramidAnimationProps {
  wireframe?: boolean;  // Show only edges (default: false)
  color?: boolean;      // Multi-color faces vs mint (default: false)
  speed?: number;       // Rotation speed (default: 0.03)
  axis?: 'x' | 'y' | 'z'; // Rotation axis (default: 'y')
  edges?: boolean;      // Show edges (default: true)
}
```

### Rendering Approach

The working version properly fills each triangular face by:
- Iterating over barycentric coordinates (u, v, w) with fine step size
- Applying 3D rotation based on selected axis
- Using z-buffer for depth ordering
- Computing per-face lighting from surface normals
- Rendering each pixel as an individual `<span>` with appropriate color/style

---

## Technical Notes

**Why the current version fails:**
- The `textContent` approach writes a plain text string
- Characters are mapped from a brightness ramp (` .-:=+*#@`)
- Face symbols and colors cannot be applied per-character
- The sampling density may be too coarse for proper face coverage

**Why the user's version works:**
- Uses JSX with individual `<span>` elements per character
- Each character can have its own color and style
- Uses face-specific symbols (`@`, `#`, `$`, `*`) to show different faces
- Finer sampling (DU/DV = 0.01) ensures complete face coverage

---

## Result

The Work page will display a properly rendered rotating 3D pyramid with:
- Filled triangular faces with shading
- Visible edges marked with `+` character
- Mint color theme (when `color={false}`)
- Matching glow effect as other animations

