

# Fix Build Errors and Complete Design Refinements

## Current State Summary

The previous implementation left several issues:
1. **Build errors** - `size` prop used in Footer and CTABand but not defined in PrimaryButton
2. **Header still using "ADSI" text** - Not using the Logo component with actual SVG wordmark
3. **Header background is solid** - Missing scroll transparency effect
4. **Cards remain basic** - Need enhanced styling with gradients and hover effects

The typography scales in index.css are actually correct now:
- `text-heading-lg` (H2): `clamp(2.25rem, 4vw, 3.25rem)` - Good
- `text-heading-md` (H3): `clamp(1.5rem, 2.5vw, 2rem)` - Good

---

## Fixes Required

### 1. Add `size` prop to PrimaryButton.tsx

Add the missing `size` prop to fix build errors:

```
interface PrimaryButtonProps {
  size?: 'default' | 'lg';
  // ... existing props
}
```

Apply different sizing based on the prop:
- `default`: current sizing (h-12)
- `lg`: larger size (h-14, larger padding, slightly larger text)

### 2. Update Header.tsx with Logo and Scroll Detection

Replace the "ADSI" text link with the actual Logo component:
- Import and use `<Logo variant="wordmark" colorScheme="ink" />`
- Add scroll state detection using `useEffect` and `useState`
- When at top of page: transparent background
- When scrolled (past 20px): offwhite background with blur and border
- Smooth transition between states

### 3. Enhanced Card Styling

Update Card.tsx with premium styling:
- Gradient background: `bg-gradient-to-br from-white to-offwhite/50`
- Increased padding: `p-8 md:p-10`
- Better border: `border border-ink/8`
- Subtle shadow: `shadow-sm`
- Hover effects: scale transform, increased shadow, stronger border
- Featured variant with accent border

### 4. Apply Card Improvements Across Components

Update components that use cards:
- CardGrid.tsx
- ToolList.tsx
- PricingTable.tsx

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/shared/PrimaryButton.tsx` | Add `size` prop with 'default' and 'lg' variants |
| `src/components/layout/Header.tsx` | Use Logo component, add scroll detection for transparency |
| `src/components/shared/Card.tsx` | Enhanced styling with gradients, shadows, hover states |
| `src/components/sections/CardGrid.tsx` | Use enhanced Card styling |
| `src/components/sections/ToolList.tsx` | Use enhanced Card styling |
| `src/components/sections/PricingTable.tsx` | Use enhanced Card styling |

---

## Technical Details

### PrimaryButton Size Variants

```
size === 'lg'
  ? 'h-14 px-8 text-lg'
  : 'h-12 md:h-[48px] px-5 md:px-6 text-base'
```

### Header Scroll Detection

```
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

Header classes:
- Not scrolled: `bg-transparent`
- Scrolled: `bg-offwhite/95 backdrop-blur-sm border-b border-ink/10`

### Card Enhanced Styles

Base:
```
bg-gradient-to-br from-white to-offwhite/50
rounded-2xl
p-8 md:p-10
border border-ink/8
shadow-sm
transition-all duration-200
```

Hover:
```
hover:shadow-lg
hover:border-ink/16
hover:scale-[1.01]
```

Featured variant:
```
border-l-4 border-l-mint
```

---

## Implementation Order

1. Fix PrimaryButton with size prop (resolves build errors)
2. Update Header with Logo component and scroll behavior
3. Enhance Card component styling
4. Apply card improvements to CardGrid, ToolList, PricingTable

