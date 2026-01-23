
## Goal
Make the ASCII cube fit inside its allocated area (no cropping, no overflowing past the page), while improving readability by changing the “building blocks” (characters/contrast/glow) rather than making the whole thing larger.

## What’s going wrong (based on current code)
- The cube is rendered on a **60×32 character grid**.
- Even with a small base font (`text-[5px]`), the current **scale factors (1.8 → 2.8)** make the rendered block effectively ~540px+ wide on mobile/desktop.
- The wrapper only reserves ~340–450px width, so the scaled `<pre>` can:
  - overflow its wrapper (and sometimes the page), and/or
  - appear “cropped” depending on ancestor layout/paint.

## Fix strategy (do not increase absolute size)
1. **Hard-cap the visual footprint** so it always stays within the wrapper width/height.
2. **Increase legibility via contrast**, not size:
   - make “non-edge” shading less dominant
   - strengthen edges
   - adjust glow to help visibility without increasing geometry size

---

## Implementation plan

### 1) Constrain the cube to never exceed its wrapper (primary fix)
**File:** `src/components/shared/CyberGlobeHeader.tsx`

**Change A — reduce base font and lower the scale**
- Switch base font from `text-[5px]` to `text-[4px]` (smaller “canvas pixels”).
- Reduce scaling to values that mathematically fit:
  - Mobile wrapper max ~340px:
    - width at 4px base ≈ 60×4 = 240px
    - safe scale ≈ 1.35–1.4 (240×1.4 = 336px)
  - Desktop wrapper max ~450px:
    - safe scale ≈ 1.7–1.8 (240×1.8 = 432px)

Proposed responsive scale caps (example):
- `scale-[1.35] sm:scale-[1.5] md:scale-[1.65] lg:scale-[1.8]`

This keeps it inside the wrapper instead of spilling out.

**Change B — make wrapper sizing match the content**
- Keep `w-full` and `max-w-*`, but ensure the wrapper also has `max-w-full` (belt-and-suspenders).
- Keep a predictable height, but ensure it’s sufficient for the scaled height:
  - base height at 4px ≈ 32×4 = 128px
  - at 1.8 scale => 230px
  - so use something like `h-[220px] sm:h-[240px] lg:h-[260px]` (tuned to your layout)

**Change C — prevent page overflow explicitly**
- Add `max-w-full` on the wrapper and optionally `overflow-hidden` (only if needed).
  - If we set `overflow-hidden`, we’ll also reduce glow blur so it doesn’t look clipped.
  - If we keep `overflow-visible`, we rely on the new scale caps to prevent overflow.

Decision for implementation:
- Start with **overflow-hidden** + smaller glow (most robust for “no page boundary overflow”).
- If you want glow to breathe outside slightly later, we can switch back to `overflow-visible` after we confirm it never exceeds width.

---

### 2) Improve “visibility of building characters” without enlarging the cube (readability fix)
**File:** `src/components/shared/CyberGlobeHeader.tsx`

Right now, faces use `RAMP = "@#%*+=-:. "` which can still read as “tinted” because many points fill faces.

We’ll change how faces are drawn so the cube reads more like a wireframe/defined shape:

**Option implemented (recommended): edge-first rendering**
- Keep edges as `#` (already there).
- For non-edge points, reduce density:
  - either draw fewer face points by increasing `step` slightly (e.g. 0.7 → 0.85 or 0.9)
  - or gate face drawing by brightness threshold (only draw face char if lum > threshold)
- Use a ramp that biases toward “blank” more aggressively, so faces don’t fill in as haze. Example:
  - `const RAMP = " .:-=+*#"` (more whitespace early, fewer mid tones)
- Keep core as `•`, but ensure it doesn’t dominate.

This increases perceived shape clarity without increasing the overall footprint.

---

### 3) Ensure Hero layout doesn’t accidentally create overflow
**File:** `src/components/sections/Hero.tsx`

The hero currently centers the animation below text on mobile (good), but we’ll add one extra safeguard:
- Ensure the animation container can’t exceed the section width:
  - add `max-w-full` and possibly `overflow-hidden` at that container level too.

This prevents any transform from causing horizontal scrollbars if something upstream changes later.

---

## Testing checklist (what I’ll verify after implementation)
- Mobile: no horizontal scroll, cube fully visible, centered below text, not clipped.
- Tablet: same; cube remains within content column.
- Desktop: cube remains within right column width and doesn’t push layout.
- No “cropping”: the entire 60×32 frame is visible within the reserved height.
- Cube readability: edges clearly visible; faces not washed/tinted.

---

## Files to change
1. `src/components/shared/CyberGlobeHeader.tsx`
   - base font from 5px → 4px
   - scale caps reduced (fit-to-wrapper math)
   - wrapper sizing tuned to scaled height
   - optional `overflow-hidden` for hard prevention of page overflow
   - reduce face haze via step/threshold/ramp tweak
2. `src/components/sections/Hero.tsx`
   - add `max-w-full`/overflow safeguard on the rightElement wrapper (small defensive change)

---

## Notes / trade-offs
- This deliberately prioritizes “never overflow/crop” over “largest possible cube.”
- If you later want a bigger cube on desktop only, we can increase **desktop wrapper max width** (not scale) so it grows without breaking page bounds.
