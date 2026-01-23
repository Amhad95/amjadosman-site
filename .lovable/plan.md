

# Add CyberEuro Animation to Pricing Page

## Summary

Add a new 3D ASCII Euro symbol animation to the Pricing page hero, adapting the provided component to match the project's performance patterns and styling conventions.

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/ui/cyber-euro.tsx` | **Create** - New Euro symbol animation |
| `src/pages/Pricing.tsx` | **Modify** - Add CyberEuro to hero |

---

## Implementation Details

### 1. Create `src/components/ui/cyber-euro.tsx`

Create the component using the provided code with these adjustments for consistency:

**Styling updates to match project patterns:**
- Use same font sizes as other animations: `text-[8px] sm:text-[10px] md:text-[12px]`
- Add `mint` to color palette (`#00FFD9`) as the default color
- Apply mint glow effect: `textShadow: 0 0 8px color, 0 0 16px color`
- Wrap in container div with `flex items-center justify-center`

**Performance optimization:**
- Use direct DOM updates via `preRef.current.textContent` (matching KnotAnimation pattern)
- Keep `requestAnimationFrame` loop as provided
- Store rotation in `useRef` to avoid re-render dependencies

**Props:**
- `speed?: number` - Animation speed multiplier (default: 1)
- `color?: keyof typeof COLOR_MAP` - Theme color (default: 'mint')
- `density?: number` - Rendering density (default: 1.0)

**Key geometry:**
- "C" curve forming the Euro symbol body (radius 14, thickness 3.5)
- Two horizontal bars at y positions 2.5 and -2.5
- Edge detection for enhanced definition
- Pulse-shimmer lighting for dynamic appearance

### 2. Update `src/pages/Pricing.tsx`

Add the CyberEuro to the Hero:

```tsx
import { CyberEuro } from '@/components/ui/cyber-euro';

<Hero
  headline={pricing.hero.headline}
  subheadline={pricing.hero.subheadline}
  plate="navy"
  primaryCta={{ label: 'Book a Call', href: '/book' }}
  rightElement={<CyberEuro speed={0.8} />}
/>
```

---

## Animation Distribution

| Page | Shape | Component |
|------|-------|-----------|
| Home (`/`) | Torus wireframe | NeuralLattice |
| Software (`/software`) | Monolith cube | CyberGlobeHeader |
| Tools (`/tools`) | Trefoil knot | KnotAnimation |
| Work (`/work`) | Pyramid | PyramidAnimation |
| Pricing (`/pricing`) | Euro symbol | CyberEuro |

---

## Technical Notes

**Euro Symbol Geometry:**
- Main body: "C" curve from angle 0.6 to 5.7 radians (open on the right)
- Two horizontal bars crossing through the symbol
- Volumetric depth rendering with z-buffer
- Edge highlighting with `#` character

**Rendering Features:**
- Pulse-shimmer lighting: `Math.sin(time * 4 + pz)` creates wave effect
- Square-aspect projection: 80x45 canvas with adjusted scales
- Character brightness ramp for depth perception
- Rotation with subtle tilt oscillation

