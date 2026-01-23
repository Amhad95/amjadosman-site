

# Replace ASCII Cube with NeuralLattice (Torus)

## Issues Identified

1. **Wrong shape**: You shared a NeuralLattice (torus with lattice pattern + pulsing core), but the current code renders a cube
2. **Canvas too small**: Current 60x32 grid clips the rotating shape. NeuralLattice uses 80x45 - larger canvas gives the rotating shape room to breathe
3. **Poor character visibility**: Current uses a short ramp `" .:-=+*#"` with weak glow
4. **Performance**: Current triggers React re-renders every frame. NeuralLattice uses direct DOM `textContent` updates

---

## Implementation

### File: `src/components/shared/CyberGlobeHeader.tsx`

Replace entirely with the NeuralLattice implementation you shared:

**Key differences from current code:**

| Aspect | Current (Cube) | New (NeuralLattice) |
|--------|----------------|---------------------|
| Shape | Rotating cube | Torus lattice + pulsing core sphere |
| Canvas | 60 x 32 | 80 x 45 (larger = no clip) |
| Character ramp | 8 chars | 70+ chars for smooth gradients |
| Updates | React state (slow) | Direct DOM textContent (fast) |
| Lighting | Basic | Proper Lambertian with surface normals |
| Props | speed, color, showCore | speed, color, density, width, height |

**Component changes:**
- Larger canvas (80x45 default) gives rotating geometry room to move without clipping
- Torus with lattice wireframe pattern (nodes marked with `#`)
- Inner pulsing core sphere (marked with `•`)
- Rich 70-character gradient ramp for smooth shading
- Direct DOM updates via `preRef.current.textContent` instead of `setFrame()`
- Props stored in refs so animation loop doesn't restart on prop changes

**Styling changes:**
- Responsive font: `text-[5px] sm:text-[6px] md:text-[7px]` (slightly smaller base since canvas is bigger)
- Stronger glow: `textShadow: 0 0 6px ${color}90, 0 0 12px ${color}50`
- Keep `mint` in color map for project consistency

---

## Visual Result

```text
Canvas sizing math:
- 80 chars wide x 45 lines tall
- At 5px font: ~240px x 225px (mobile)
- At 7px font: ~336px x 315px (desktop)

The torus radius (~14 units) + rotation means the shape
needs canvas margin. 80x45 provides that breathing room.
```

The torus lattice will:
- Show a wireframe "donut" pattern with grid lines
- Have bright `#` nodes at intersections
- Contain a pulsing `•` sphere in the center
- Rotate smoothly on all 3 axes
- Never clip because the canvas is sized for the geometry

---

## Files to Modify

| File | Action |
|------|--------|
| `src/components/shared/CyberGlobeHeader.tsx` | Replace with NeuralLattice implementation |

No changes needed to Hero.tsx or Index.tsx - they already pass the right props.

---

## Technical Implementation

```tsx
// Key structure of the new component

const DEFAULT_W = 80;  // Wider canvas
const DEFAULT_H = 45;  // Taller canvas

// Rich gradient ramp for smooth shading
const RAMP = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

// Direct DOM update (no React state)
const preRef = useRef<HTMLPreElement>(null);

// In render loop:
pre.textContent = out.join("\n");  // Fast, no re-render

// Torus geometry with lattice pattern
const ringRadius = 14;
const tubeRadius = 5;
// Only draw points on lattice lines (not solid surface)

// Pulsing core sphere
const coreRadius = 3 + Math.sin(time * 3) * 0.8;
```

