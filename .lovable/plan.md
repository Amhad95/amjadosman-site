

# Replace PyramidAnimation with CyberPyramid on Work Page

## Summary

Replace the current `PyramidAnimation` component with the new `CyberPyramid` component that uses a more performant rendering approach with direct DOM updates via `textContent` and features enhanced visuals including pulse-shimmer lighting and better edge detection.

---

## Files to Modify

| File | Action |
|------|--------|
| `src/components/ui/cyber-pyramid.tsx` | **Create** - New pyramid animation component |
| `src/pages/Work.tsx` | **Modify** - Replace PyramidAnimation with CyberPyramid |
| `src/components/ui/pyramid-animation.tsx` | **Delete** - Remove old pyramid animation |

---

## Implementation Details

### 1. Create `src/components/ui/cyber-pyramid.tsx`

Create the component using the provided code with project styling adjustments:

**Styling updates:**
- Add `mint` to color palette (`#00FFD9`) as the default color
- Use same font sizes: `text-[8px] sm:text-[10px] md:text-[12px]`
- Apply mint glow effect via textShadow
- Add TypeScript types for props

**Performance features (from provided code):**
- Uses `requestAnimationFrame` for smooth animation
- Direct DOM updates via `preRef.current.textContent`
- Z-buffer for proper depth occlusion
- Rotation stored in `useRef` to avoid re-render dependencies

**Props:**
- `speed?: number` - Animation speed multiplier (default: 1)
- `color?: keyof typeof COLOR_MAP` - Theme color (default: 'mint')
- `density?: number` - Rendering density (default: 1.0)

**Key geometry:**
- Apex at (0, size, 0) where size = 15
- 4 base corners forming a square at y = -size
- 4 triangular side faces connecting apex to base edges
- Square base face

### 2. Update `src/pages/Work.tsx`

Replace the import and usage:

```tsx
// Change import
import { CyberPyramid } from '@/components/ui/cyber-pyramid';

// Update Hero rightElement
rightElement={<CyberPyramid speed={0.8} />}
```

### 3. Delete `src/components/ui/pyramid-animation.tsx`

Remove the old pyramid animation file as it will no longer be used.

---

## Animation Distribution (Updated)

| Page | Shape | Component |
|------|-------|-----------|
| Home (`/`) | Torus wireframe | NeuralLattice |
| Software (`/software`) | Monolith cube | CyberGlobeHeader |
| Tools (`/tools`) | Trefoil knot | KnotAnimation |
| Work (`/work`) | Pyramid | CyberPyramid |
| Pricing (`/pricing`) | Percentage symbol | CyberPercentage |

---

## Technical Notes

**Key Differences from Old Component:**

| Feature | Old PyramidAnimation | New CyberPyramid |
|---------|---------------------|------------------|
| Rendering | JSX spans per character | Direct textContent |
| Canvas | 80x40 | 80x45 |
| Animation | setInterval (30ms) | requestAnimationFrame |
| Rotation | Single axis | Multi-axis with tilt |
| Size | SCALE = 2 | size = 15 |
| Edges | Explicit edge list | Boundary detection |

**Pyramid Geometry:**
- 4 triangular faces meeting at apex
- Square base rendered separately
- Edge highlighting at face boundaries (a > 0.95, b > 0.98, c > 0.98)
- Gentle tilt oscillation for dynamic appearance

**Rendering Features:**
- Pulse-shimmer lighting: `Math.sin(time * 5 + pz)`
- Character brightness ramp for shading
- Z-buffer depth occlusion
- Multi-axis rotation with subtle wobble

