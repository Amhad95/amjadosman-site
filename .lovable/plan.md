

# Fix Section Headlines

## The Problem

Headlines like "Get a useful output in minutes" are too small because `SectionHeader` defaults to `variant="interface"` (uses `text-heading-lg`) instead of `variant="poster"` (uses `text-poster-lg`).

## The Fix

One line change in `src/components/shared/SectionHeader.tsx`:

**Line 17**: Change default value from `'interface'` to `'poster'`

```tsx
// Before
variant = 'interface',

// After  
variant = 'poster',
```

This makes all section headlines use the larger `text-poster-lg` size by default, matching the Pricing page's visual weight.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/shared/SectionHeader.tsx` | Change default variant from `'interface'` to `'poster'` (line 17) |

---

## Result

All pages will now have consistent, large section headlines without any other changes needed.

