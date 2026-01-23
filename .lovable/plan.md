

# Two ASCII Shapes + Better Character Visibility

## Summary

Create two separate animation components with larger, more visible characters:
1. **Home page** → Monolith (cube with pulsing core) - the shape you just shared
2. **Software page** → NeuralLattice (torus with pulsing core) - the current shape

## The Visibility Fix

The characters are barely visible because font sizes are too small:

| Current | Proposed |
|---------|----------|
| `text-[5px] sm:text-[6px] md:text-[7px]` | `text-[8px] sm:text-[10px] md:text-[12px]` |

This nearly doubles the character size, making them clearly readable.

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/shared/NeuralLattice.tsx` | **Create** - Move current torus code here |
| `src/components/shared/CyberGlobeHeader.tsx` | **Replace** - Use cube/monolith code you shared |
| `src/pages/Software.tsx` | **Modify** - Add NeuralLattice to hero |
| `src/pages/Index.tsx` | No changes needed (already uses CyberGlobeHeader) |

---

## Implementation Details

### 1. Create `NeuralLattice.tsx` (torus shape for Software)

Move the current torus implementation to a new file. Keep everything the same except:
- Increase font sizes: `text-[8px] sm:text-[10px] md:text-[12px]`
- Stronger glow: `0 0 8px` and `0 0 16px` blur radius

### 2. Replace `CyberGlobeHeader.tsx` (monolith for Home)

Replace with your provided cube/monolith code with these adjustments:
- Same larger font sizes: `text-[8px] sm:text-[10px] md:text-[12px]`
- Same stronger glow
- Add `mint` to COLOR_MAP for project consistency
- Convert to TypeScript (add proper types)
- Use direct DOM updates for performance (matching NeuralLattice pattern)

### 3. Update `Software.tsx`

Add the NeuralLattice animation to the hero section:

```tsx
import { NeuralLattice } from '@/components/shared/NeuralLattice';

<Hero
  headline={software.hero.headline}
  subheadline={software.hero.subheadline}
  primaryCta={software.hero.primaryCta}
  secondaryCta={software.hero.secondaryCta}
  plate="astral"
  rightElement={<NeuralLattice color="mint" speed={0.8} />}
/>
```

---

## Visual Sizing Math

With `text-[12px]` on desktop:

**Monolith (80x45 canvas):**
- Width: ~80 chars × 7.2px ≈ 576px
- Height: ~45 lines × 12px ≈ 540px

**NeuralLattice (80x45 canvas):**
- Same dimensions

Both fit comfortably in the hero layout (especially with the container being ~50% width on desktop).

---

## Key Code Changes

### CyberGlobeHeader.tsx (Monolith)

Key structure from your shared code:

```tsx
// Cube geometry
const cubeSize = 12;
const step = 0.8;

// Draw cube faces
for (let i = -cubeSize; i <= cubeSize; i += step) {
  for (let j = -cubeSize; j <= cubeSize; j += step) {
    if (Math.abs(i) === cubeSize || Math.abs(j) === cubeSize) {
      drawPoint(i, cubeSize, j);
      drawPoint(i, -cubeSize, j);
    }
    drawPoint(cubeSize, i, j);
    drawPoint(-cubeSize, i, j);
  }
}

// Pulsing core sphere inside
const coreRadius = 4.5 + Math.sin(time * 2) * 0.5;
```

### NeuralLattice.tsx (Torus)

Keeps the existing torus geometry:

```tsx
// Torus lattice
const ringRadius = 14;
const tubeRadius = 5;
const latticePeriod = Math.PI / 4;

// Only draw on lattice lines (wireframe pattern)
const isLattice = latticeA || latticeB;
if (!isLattice) continue;

// Nodes at intersections
const isNode = latticeA && latticeB;
plot(x, y, z, nx, ny, nz, isNode ? "#" : null, false);
```

---

## Result

| Page | Shape | Description |
|------|-------|-------------|
| Home (`/`) | Monolith | Rotating cube with pulsing sphere core, mint color |
| Software (`/software`) | NeuralLattice | Rotating torus wireframe with pulsing sphere core, mint color |

Both shapes will have clearly visible characters at 8-12px font size with strong mint glow.

