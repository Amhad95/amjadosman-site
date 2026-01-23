

# Fix ASCII Cube - Proper Centering and No Clipping

## Root Cause Identified

Looking at your screenshot, the cube is:
1. Pushed to the far right edge of its container (`lg:justify-end`)
2. CSS transform scaling expands the element from its center, but the element itself is positioned at the right edge
3. `overflow-hidden` on both Hero wrapper AND CyberGlobeHeader clips the right portion

## Solution

**Remove all the scaling complexity.** Instead, simply render the ASCII at a size that fits naturally without transforms.

### Math for proper sizing

The ASCII grid is 60 characters wide by 32 lines tall.

At `text-[4px]` with monospace:
- Width: ~60 x 2.4px (char width) = ~144px
- Height: ~32 x 4px = ~128px

This is small but fits perfectly. No scaling needed - just increase the font slightly and remove transforms entirely.

At `text-[6px]`:
- Width: ~60 x 3.6px = ~216px
- Height: ~32 x 6px = ~192px

Still fits within 300-400px container easily.

---

## Changes

### 1. CyberGlobeHeader.tsx - Remove transforms, use natural sizing

```tsx
// Remove: transform scale-[...] origin-center
// Remove: overflow-hidden (allow natural render)

<div className="flex items-center justify-center">
  <pre
    className="text-[6px] sm:text-[7px] md:text-[8px] leading-[1.0] font-mono select-none whitespace-pre"
    style={{ 
      color: themeColor,
      textShadow: `0 0 4px ${themeColor}80, 0 0 8px ${themeColor}40`
    }}
  >
    {frame.join("\n")}
  </pre>
</div>
```

Natural render sizes:
- Mobile (6px): ~216px wide x 192px tall
- Tablet (7px): ~252px wide x 224px tall
- Desktop (8px): ~288px wide x 256px tall

All fit within standard containers without clipping.

### 2. Hero.tsx - Remove overflow-hidden, keep simple centering

```tsx
{rightElement && (
  <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end mt-8 lg:mt-0">
    {rightElement}
  </div>
)}
```

Remove `max-w-full overflow-hidden` - not needed when content fits naturally.

### 3. Improve character visibility

To make the characters more visible against the purple background:
- Increase text-shadow glow radius (4px, 8px instead of 1px, 2px)
- Keep the mint color for good contrast

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/shared/CyberGlobeHeader.tsx` | Remove CSS transforms, use 6-8px font, remove overflow-hidden, increase glow |
| `src/components/sections/Hero.tsx` | Remove overflow-hidden from rightElement wrapper |

---

## Technical Details

### CyberGlobeHeader.tsx

```tsx
return (
  <div className="flex items-center justify-center">
    <pre
      className="text-[6px] sm:text-[7px] md:text-[8px] leading-[1.0] font-mono select-none whitespace-pre"
      style={{ 
        color: themeColor,
        textShadow: `0 0 4px ${themeColor}80, 0 0 8px ${themeColor}40`
      }}
    >
      {frame.join("\n")}
    </pre>
  </div>
);
```

### Hero.tsx

```tsx
{rightElement && (
  <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end mt-8 lg:mt-0">
    {rightElement}
  </div>
)}
```

---

## Why This Works

1. No CSS transforms = no centering/scaling mismatch
2. Natural font sizing means content dimensions are predictable
3. No `overflow-hidden` = no clipping
4. Increased glow improves visibility against dark/colored backgrounds
5. The cube will be smaller but fully visible and properly centered

