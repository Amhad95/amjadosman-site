
# Fix Footer Logo

## Summary

Replace the broken `Logo` component in the footer with a simple `<img>` tag using the same SVG file as the navbar.

---

## Change

| File | Action |
|------|--------|
| `src/components/layout/Footer.tsx` | **Modify** - Replace Logo component with img tag |

---

## Implementation

**Line 4**: Change import from:
```tsx
import { Logo } from '@/components/shared/Logo';
```
To:
```tsx
import logoSvg from '@/assets/logo.svg';
```

**Lines 35-39**: Replace:
```tsx
<Logo 
  variant="wordmark" 
  colorScheme="offwhite" 
  className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
/>
```
With:
```tsx
<img
  src={logoSvg}
  alt="Applied Design & Strategy Institute"
  className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
/>
```

That's it.
