

# Fix 3D ASCII Cube Animation - Visibility and Responsiveness

## Problems Identified

| Issue | Current State | Root Cause |
|-------|--------------|------------|
| Barely visible / unclear | Muddy, tinted appearance | Font size too small (6-8px), too many faint shading characters |
| Hidden on mobile | Completely removed on smaller screens | `hidden lg:block` class on container |
| Doesn't match Gemini preview | Less defined, noisier | Shading ramp creates too many intermediate gray characters |

---

## Solution Overview

1. **Increase visibility** by using larger font sizes and reducing the shading complexity
2. **Improve contrast** by using a shorter/simpler ASCII ramp with bolder characters
3. **Show on all screens** by changing layout to stack (mobile) vs side-by-side (desktop)

---

## Changes Required

### 1. Update CyberGlobeHeader Component

**File:** `src/components/shared/CyberGlobeHeader.tsx`

**Changes:**
- Increase font sizes significantly: `text-[10px] sm:text-[12px] md:text-[14px] lg:text-[12px]`
- Simplify the ASCII ramp to use fewer, bolder characters for higher contrast
- Add a subtle text-shadow/glow effect for the mint color
- Reduce rendering dimensions or adjust projection for cleaner output

```tsx
// Current (too faint)
className="text-[6px] md:text-[7px] lg:text-[8px] leading-[1.2]"

// New (clearer, bolder)
className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[11px] leading-[1.15]"
```

**Shading ramp change:**
```tsx
// Current (70 characters - too many gradients)
const RAMP = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

// New (shorter, higher contrast)
const RAMP = "@#%*+=-:. ";
```

**Add glow effect:**
```tsx
style={{ 
  color: themeColor,
  textShadow: `0 0 10px ${themeColor}40, 0 0 20px ${themeColor}20`
}}
```

### 2. Update Hero Component Layout

**File:** `src/components/sections/Hero.tsx`

**Changes:**
- Remove `hidden lg:block` - show animation on all screen sizes
- On mobile/tablet: stack animation below text content
- On desktop (lg+): keep side-by-side layout

```tsx
// Current
{rightElement && (
  <div className="hidden lg:block lg:flex-shrink-0">
    {rightElement}
  </div>
)}

// New - visible on all screens, stacks on mobile
{rightElement && (
  <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end mt-8 lg:mt-0">
    {rightElement}
  </div>
)}
```

### 3. Adjust Animation Sizing

**File:** `src/components/shared/CyberGlobeHeader.tsx`

Add responsive container sizing:

```tsx
// Wrapper with explicit sizing
<div className="w-[320px] h-[200px] sm:w-[400px] sm:h-[240px] lg:w-[450px] lg:h-[280px] relative">
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/shared/CyberGlobeHeader.tsx` | Larger fonts, simpler ramp, glow effect, explicit sizing |
| `src/components/sections/Hero.tsx` | Remove hidden class, responsive stacking layout |

---

## Technical Details

### CyberGlobeHeader Updates

```tsx
// Simplified high-contrast ASCII ramp
const RAMP = "@#%*+=-:. ";

// Larger, clearer text rendering
<pre
  className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[11px] leading-[1.15] font-mono select-none whitespace-pre"
  style={{ 
    color: themeColor,
    textShadow: `0 0 8px ${themeColor}50`
  }}
>
```

### Hero Layout Updates

```tsx
// Flex container with responsive stacking
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
  {/* Left: Text content */}
  <div className="max-w-4xl lg:max-w-2xl">
    {/* ... existing content ... */}
  </div>

  {/* Right: Animation - visible on all screens */}
  {rightElement && (
    <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end">
      {rightElement}
    </div>
  )}
</div>
```

---

## Visual Result

| Screen Size | Layout | Animation |
|-------------|--------|-----------|
| Mobile (< 640px) | Stacked, animation below text | Centered, ~320px wide |
| Tablet (640-1023px) | Stacked, animation below text | Centered, ~400px wide |
| Desktop (1024px+) | Side-by-side | Right-aligned, ~450px wide |

- Clearer, bolder ASCII characters with higher contrast
- Subtle mint glow effect for depth
- Visible and centered on all screen sizes
- More defined wireframe edges on the cube

