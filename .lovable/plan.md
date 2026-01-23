

# Fix Header Transparency and Logo

## Problem Summary

The header currently:
1. Uses `sticky` positioning, which pushes content down (creates a bar above hero)
2. Uses the custom `<Logo>` component with generated SVG paths instead of the user's actual logo.svg
3. Has dark text colors (`text-ink`) that won't be visible against dark plate backgrounds

## Solution

### 1. Copy Logo SVG to Assets

Copy the user-uploaded `logo.svg` (which is already mint #00ffd4 colored) to `src/assets/logo.svg`

### 2. Update Header.tsx

**Position Changes:**
- Change from `sticky` to `fixed top-0 left-0 right-0`
- This makes the header overlay content instead of pushing it down

**Background Behavior:**
- Default (not scrolled): `bg-transparent`
- Scrolled (past 20px): `bg-ink/80 backdrop-blur-md border-b border-white/10` (frosted dark glass)

**Logo:**
- Replace `<Logo>` component with direct `<img>` using the uploaded SVG
- The mint color in the SVG works on all dark plate backgrounds

**Nav Link Colors:**
- Change from `text-ink/70` to `text-offwhite/70 hover:text-offwhite`
- These light colors will be visible against dark hero backgrounds

**Mobile Menu Button:**
- Change from `text-ink` to `text-offwhite`

**Mobile Menu Panel:**
- Use `bg-ink` solid background for readability
- Light text colors for links

---

## Files to Modify

| File | Change |
|------|--------|
| `src/assets/logo.svg` | Copy from user upload (already mint colored) |
| `src/components/layout/Header.tsx` | Fixed positioning, transparent/glass bg, use logo.svg image, light nav colors |

---

## Technical Details

### Header Classes

```text
Base (not scrolled):
- fixed top-0 left-0 right-0 z-50
- bg-transparent

Scrolled (past 20px):
- bg-ink/80 backdrop-blur-md
- border-b border-white/10
```

### Logo Implementation

```tsx
import logoSvg from '@/assets/logo.svg';

<img 
  src={logoSvg}
  alt="Applied Design & Strategy Institute" 
  className="h-7 md:h-8 w-auto"
/>
```

### Nav Link Colors

```tsx
// Desktop nav
text-offwhite/70 hover:text-offwhite

// Active state
text-offwhite (fully opaque)

// Mobile menu button
text-offwhite

// Mobile menu panel
bg-ink with text-offwhite links
```

---

## Visual Result

- Header will be invisible at top of page (transparent)
- Mint logo visible against violet/navy/emerald/etc. hero backgrounds  
- When user scrolls, header transitions to frosted dark glass effect
- Navigation links remain readable in both states

