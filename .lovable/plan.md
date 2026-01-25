

# Fix Home Tool Cards: Bigger Icons + Green Background

## Issues Identified

1. **Background color mismatch**: Home page uses `plateColor="violet"` (purple), but user wants it to match the Tools page which uses `plateColor="emerald"` (green)
2. **Icons too small**: Current icon size is `w-20 h-20` in preview variant, but needs to be larger to better fill the square container

---

## Changes

### 1. Index.tsx - Change plateColor to emerald

**Line 99** - Update the ToolList call:

```tsx
// Before
<ToolList tools={...} variant="preview" plateColor="violet" />

// After
<ToolList tools={...} variant="preview" plateColor="emerald" />
```

---

### 2. ToolList.tsx - Increase icon size in preview variant

**Line 83** - Increase icon container size:

```tsx
// Before
<div className="w-20 h-20 text-mint">

// After
<div className="w-28 h-28 text-mint">
```

This increases from 80px to 112px, filling approximately 70% of the square container (which has p-4 padding on all sides).

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Change `plateColor="violet"` to `plateColor="emerald"` |
| `src/components/sections/ToolList.tsx` | Increase preview icon size from `w-20 h-20` to `w-28 h-28` |

---

## Visual Result

| Before | After |
|--------|-------|
| Purple/violet background | Green/emerald background (matches Tools page) |
| Icon size: 80px | Icon size: 112px (~40% larger) |

