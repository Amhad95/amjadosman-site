

# Replace CyberEuro with CyberPercentage on Pricing Page

## Summary

Replace the Euro symbol animation with a Percentage symbol animation on the Pricing page hero. The percentage symbol features dual rings and a diagonal bar, creating a more fitting visual for a pricing/value page.

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/ui/cyber-percentage.tsx` | **Create** - New percentage symbol animation |
| `src/pages/Pricing.tsx` | **Modify** - Replace CyberEuro import with CyberPercentage |
| `src/components/ui/cyber-euro.tsx` | **Delete** - Remove unused Euro animation |

---

## Implementation Details

### 1. Create `src/components/ui/cyber-percentage.tsx`

Create the component using the provided code with these adjustments for consistency:

**Styling updates to match project patterns:**
- Add `mint` to color palette (`#00FFD9`) as the default color
- Use same font sizes: `text-[8px] sm:text-[10px] md:text-[12px]`
- Apply mint glow effect via textShadow
- Add TypeScript types for props

**Performance optimization:**
- Use direct DOM updates via `preRef.current.textContent` (matching other animations)
- Keep `requestAnimationFrame` loop
- Store rotation in `useRef` to avoid re-render dependencies

**Props:**
- `speed?: number` - Animation speed multiplier (default: 1)
- `color?: keyof typeof COLOR_MAP` - Theme color (default: 'mint')
- `density?: number` - Rendering density (default: 1.0)

**Key geometry:**
- Two hollow rings at diagonal positions (top-left and bottom-right)
- Ring radius: 5, thickness: 2.5
- Diagonal bar (slash) at 45-degree angle
- Bar dimensions: length 32, height 2.5, thickness 2.5

### 2. Update `src/pages/Pricing.tsx`

Replace the CyberEuro import and usage:

```tsx
// Change import
import { CyberPercentage } from '@/components/ui/cyber-percentage';

// Update Hero rightElement
rightElement={<CyberPercentage speed={0.8} />}
```

### 3. Delete `src/components/ui/cyber-euro.tsx`

Remove the unused Euro animation file.

---

## Animation Distribution (Updated)

| Page | Shape | Component |
|------|-------|-----------|
| Home (`/`) | Torus wireframe | NeuralLattice |
| Software (`/software`) | Monolith cube | CyberGlobeHeader |
| Tools (`/tools`) | Trefoil knot | KnotAnimation |
| Work (`/work`) | Pyramid | PyramidAnimation |
| Pricing (`/pricing`) | Percentage symbol | CyberPercentage |

---

## Technical Notes

**Percentage Symbol Geometry:**
- Two rings positioned diagonally (offset x: ±9, y: ±9)
- Central diagonal slash at 45° angle
- Multi-axis rotation for dynamic movement
- Volumetric depth with z-buffer

**Rendering Features:**
- Pulse-shimmer lighting: `Math.sin(time * 5 + pz)` (faster than Euro)
- Multi-axis rotation including slow z-axis spin
- Stronger x-axis tilt oscillation (0.3 vs 0.2)
- Edge highlighting with `#` character

