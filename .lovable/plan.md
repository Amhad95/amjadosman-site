
# Fix All Marketing H2 Headlines to Use text-poster-lg

## Problem Identified

The `SectionHeader` component now correctly defaults to `variant='poster'` (using `text-poster-lg`), but **other h2 elements are hardcoded to smaller sizes**:

| File | Line | Current Class | Issue |
|------|------|---------------|-------|
| `CTABand.tsx` | 48 | `text-heading-lg` / `text-heading-md` | CTA band headlines too small |
| `Footer.tsx` | 16 | `text-heading-lg` | Footer CTA headline too small |

Per your preference, **pricing table group titles will remain smaller** (`text-heading-lg`) since those are interface elements, not marketing headlines.

---

## Files to Modify

### 1. src/components/sections/CTABand.tsx (Line 48)

Change the h2 sizing logic to use `text-poster-lg` for large CTAs:

```tsx
// Before (line 48)
size === 'large' ? 'text-heading-lg' : 'text-heading-md',

// After
size === 'large' ? 'text-poster-lg' : 'text-heading-md',
```

### 2. src/components/layout/Footer.tsx (Line 16)

Change the footer CTA headline to use the larger size:

```tsx
// Before (line 16)
<h2 className="font-serif text-heading-lg text-mint mb-4">

// After
<h2 className="font-serif text-poster-lg text-mint mb-4">
```

---

## Files NOT Modified (Per Your Preference)

- **PricingTable.tsx** - Group titles remain at `text-heading-lg` (interface mode)

---

## Result

All marketing section headlines (SectionHeader, CTABand with `size="large"`, Footer CTA) will now use `text-poster-lg` which renders at `clamp(2.75rem, 5vw, 4.5rem)` - the big, impactful size matching your design intent.
