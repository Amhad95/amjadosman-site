
# Header Refinements: Mint Separator, Reduced Height, and Island Navbar

## Overview

Three enhancements to the header/navbar:
1. Add a mint-colored line separator below the navbar
2. Reduce the default header height
3. Transform into a compact "island" navbar on scroll with only text links

---

## Changes

### 1. Mint Line Separator

Add a horizontal mint-colored line at the bottom of the header (visible in default/non-scrolled state):

```text
Default state: border-b border-mint/40 (subtle mint line)
Scrolled state: Remove this border (island navbar has its own styling)
```

### 2. Reduce Header Height

Current height is `h-20 md:h-28` (80px / 112px). Reduce to a more compact size:

```text
Before: h-20 md:h-28
After:  h-16 md:h-20  (64px / 80px)
```

This also requires adjusting the Hero.tsx top padding from `pt-28 md:pt-36` to `pt-24 md:pt-28` to match.

### 3. Island Navbar on Scroll

When scrolled, the header transforms into a floating "island" centered navbar:

**Structural Changes:**
- When scrolled: Add horizontal margin/padding and max-width to create the island shape
- Hide logo and CTA button (only show text links)
- Add rounded corners for pill/island effect
- Apply translucent glass effect with enhanced blur

**Scrolled Island Styling:**
```text
Container: max-w-fit mx-auto px-6 py-2.5 rounded-full
Background: bg-ink/60 backdrop-blur-xl
Border: border border-white/15
Shadow: shadow-lg shadow-black/10
```

**Content When Scrolled:**
- Logo: Hidden
- Nav links: Visible, centered
- CTA button: Hidden
- Only the text navigation links appear in the floating island

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/layout/Header.tsx` | Add mint separator, reduce height, implement island navbar on scroll |
| `src/components/sections/Hero.tsx` | Adjust top padding to match new header height |

---

## Technical Implementation

### Header.tsx Structure

```tsx
<header className={cn(
  'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
  isScrolled ? 'py-3' : ''  // Add padding when in island mode
)}>
  {/* Wrapper that becomes island on scroll */}
  <nav className={cn(
    'transition-all duration-300',
    isScrolled
      ? 'max-w-fit mx-auto px-6 py-2 rounded-full bg-ink/60 backdrop-blur-xl border border-white/15 shadow-lg'
      : 'container mx-auto px-4 md:px-6 border-b border-mint/40'
  )}>
    {/* Default: Logo + Nav + CTA */}
    {/* Scrolled: Only Nav links centered */}
  </nav>
</header>
```

### Conditional Content

```tsx
{/* Logo - hide when scrolled */}
{!isScrolled && (
  <Link to="/">
    <img src={logoSvg} ... />
  </Link>
)}

{/* Nav links - always visible, but centered when scrolled */}
<div className={cn(
  'hidden lg:flex items-center gap-6',
  isScrolled && 'justify-center'
)}>
  {navigation.primary.map(...)}
</div>

{/* CTA - hide when scrolled */}
{!isScrolled && (
  <PrimaryButton>...</PrimaryButton>
)}
```

---

## Visual Result

**Not Scrolled (at top of page):**
- Full-width transparent header
- Logo on left, nav links center-right, CTA on right
- Mint horizontal line separator at bottom
- Height: 64px mobile / 80px desktop

**Scrolled (past threshold):**
- Floating pill-shaped island centered at top
- Only navigation text links visible
- Translucent dark glass effect with blur
- Subtle border and shadow for depth
- No logo or CTA button
