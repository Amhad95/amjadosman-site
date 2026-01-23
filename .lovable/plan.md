

# Add PyramidAnimation to Work Page

## Summary

Add a new 3D pyramid ASCII animation to the Work page hero, following the same performance patterns as the existing animations (KnotAnimation, NeuralLattice, CyberGlobeHeader).

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/ui/pyramid-animation.tsx` | **Create** - New pyramid component |
| `src/pages/Work.tsx` | **Modify** - Add PyramidAnimation to hero |

---

## Implementation Details

### 1. Create `src/components/ui/pyramid-animation.tsx`

Create the component using the provided code with these adjustments for consistency:

**Styling updates to match project patterns:**
- Use same font sizes as other animations: `text-[8px] sm:text-[10px] md:text-[12px]`
- Add strong mint glow effect: `textShadow: 0 0 8px color, 0 0 16px color`
- Add `mint` color option (#00FFD9) for monochrome mode
- Wrap in container div with `flex items-center justify-center`

**Performance optimization:**
- Convert from `setInterval` to `requestAnimationFrame` for smoother animation
- Use direct DOM updates via `preRef.current.textContent` instead of React state
- Store rotation angle in `useRef` to avoid re-render dependencies

**Props:**
- `wireframe?: boolean` - Show only edges (default: false)
- `color?: boolean` - Use multi-color faces (default: false, uses mint)
- `speed?: number` - Rotation speed (default: 0.03)
- `axis?: 'x' | 'y' | 'z'` - Rotation axis (default: 'y')
- `edges?: boolean` - Show pyramid edges (default: true)

**Key geometry:**
- 5 vertices: apex + 4 base corners
- 4 triangular faces with distinct symbols (@, #, $, *)
- 8 edges connecting vertices

### 2. Update `src/pages/Work.tsx`

Add the PyramidAnimation to the Hero:

```tsx
import { PyramidAnimation } from '@/components/ui/pyramid-animation';

<Hero
  headline={work.hero.headline}
  subheadline={work.hero.subheadline}
  plate="navy"
  rightElement={<PyramidAnimation axis="y" speed={0.02} />}
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

---

## Technical Notes

**Pyramid Geometry:**
- Apex at (0, SCALE, 0)
- 4 base corners at (±SCALE, -SCALE, ±SCALE)
- Each face rendered with barycentric sampling for filled appearance
- Edges drawn with dense line sampling for crisp wireframe

**Rendering Approach:**
- Uses z-buffer for proper depth ordering
- Per-face lighting based on surface normals
- Character brightness ramp for shading
- Edge pixels marked with `+` character

