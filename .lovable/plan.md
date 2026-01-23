

# Increase Navbar-to-Header Clearance and Decrease Header Text Size

## Changes Required

### 1. Hero.tsx - Add Top Padding for Navbar Clearance

Since the navbar is now fixed (overlays content), the hero content needs additional top padding to account for the navbar height and create visual breathing room.

**Current**: The hero uses `items-end` to position content at the bottom, with `py-12 md:py-16 lg:py-24` padding.

**Change**: Add explicit top padding to create clearance from the fixed navbar. The navbar is `h-20 md:h-28`, so adding `pt-28 md:pt-36` will create proper spacing.

```
Before: py-12 md:py-16 lg:py-24
After:  pt-28 md:pt-36 pb-12 md:pb-16 lg:pb-24
```

### 2. index.css - Reduce H1 (text-poster-xl) Size

**Current scale**:
```css
.text-poster-xl {
  font-size: clamp(3.5rem, 8vw, 6rem);  /* 56px to 96px */
}
```

**New scale** (reduced by ~20%):
```css
.text-poster-xl {
  font-size: clamp(2.75rem, 6vw, 4.5rem);  /* 44px to 72px */
}
```

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/sections/Hero.tsx` | Change `py-*` to `pt-28 md:pt-36 pb-12 md:pb-16 lg:pb-24` for navbar clearance |
| `src/index.css` | Reduce `.text-poster-xl` from `clamp(3.5rem, 8vw, 6rem)` to `clamp(2.75rem, 6vw, 4.5rem)` |

---

## Visual Result

- Hero headline will be smaller and more refined
- Content will start lower on the page, with proper clearance below the fixed navbar
- The overall hero will feel more balanced with better proportions

