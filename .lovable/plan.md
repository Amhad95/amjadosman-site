

# Make Navbar Links Bolder and Bigger

## Simple Change

Update the navigation link styling in `src/components/layout/Header.tsx`:

| Property | Before | After |
|----------|--------|-------|
| Font size | `text-xs` | `text-sm` |
| Font weight | `font-medium` | `font-semibold` |

## File to Modify

**`src/components/layout/Header.tsx`** - Line ~66

Current:
```tsx
className={cn(
  'text-xs font-medium transition-colors',
  ...
)}
```

Updated:
```tsx
className={cn(
  'text-sm font-semibold transition-colors',
  ...
)}
```

This applies to both the default state nav links and the scrolled island nav links.

