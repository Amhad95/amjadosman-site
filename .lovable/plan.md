

# Add KnotAnimation to AI Tools Page

## Summary

Add a new trefoil knot ASCII animation to the Tools page hero, matching the style of the existing animations (NeuralLattice and CyberGlobeHeader).

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/ui/knot-animation.tsx` | **Create** - New trefoil knot component |
| `src/pages/Tools.tsx` | **Modify** - Add KnotAnimation to hero |

---

## Implementation Details

### 1. Create `src/components/ui/knot-animation.tsx`

Create the component using the provided code with these adjustments for consistency:

**Styling updates to match project patterns:**
- Use same font sizes as other animations: `text-[8px] sm:text-[10px] md:text-[12px]`
- Add strong glow effect: `textShadow: 0 0 8px color, 0 0 16px color`
- Add `mint` to color palette (project's theme color: `#00FFD9`)
- Wrap in container div with `flex items-center justify-center`

**Performance optimization:**
- Convert from `setInterval` to `requestAnimationFrame` for smoother animation
- Use direct DOM updates via `preRef.current` instead of React state (matching NeuralLattice pattern)

**Props:**
- `color?: boolean` - Enable multi-color segments (default: false for single mint color)
- `speedA?: number` - X-axis rotation speed (default: 0.04)
- `speedB?: number` - Y-axis rotation speed (default: 0.02)

### 2. Update `src/pages/Tools.tsx`

Add the KnotAnimation to the Hero:

```tsx
import { KnotAnimation } from '@/components/ui/knot-animation';

<Hero
  headline={tools.hero.headline}
  subheadline={tools.hero.subheadline}
  primaryCta={tools.hero.primaryCta}
  secondaryCta={tools.hero.secondaryCta}
  plate="emerald"
  rightElement={<KnotAnimation speedA={0.03} speedB={0.015} />}
/>
```

---

## Visual Result

The Tools page will display:
- Rotating 3D trefoil knot (mathematical knot shape)
- Mint-colored ASCII characters with glow effect
- Smooth animation at ~60fps using requestAnimationFrame
- Same character size as Home/Software animations (8-12px responsive)

---

## Technical Notes

**Trefoil Knot Geometry:**
The knot is defined parametrically:
- x = sin(u) + 2sin(2u)
- y = cos(u) - 2cos(2u)
- z = -sin(3u)

This creates the classic three-crossing knot shape, rendered as a tube with proper surface normals for lighting.

**Animation Distribution:**

| Page | Shape | Animation |
|------|-------|-----------|
| Home (`/`) | NeuralLattice | Torus wireframe |
| Software (`/software`) | CyberGlobeHeader | Monolith cube |
| Tools (`/tools`) | KnotAnimation | Trefoil knot |

