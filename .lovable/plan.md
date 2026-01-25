

# Fix Tool Card Icon Backgrounds on Tools Page

## Problem

The `ToolList` component on the Tools page is not receiving the `plateColor` prop, causing it to default to `'violet'` instead of matching the page's emerald header.

## Solution

Add `plateColor="emerald"` to the `ToolList` component in `Tools.tsx` to match the Hero's `plate="emerald"`.

---

## File to Modify

### src/pages/Tools.tsx (line 30-38)

**Current:**
```tsx
<ToolList
  tools={tools.list.map((tool) => ({
    title: tool.title,
    description: tool.description,
    illustration: tool.illustration,
    href: tool.href,
  }))}
  variant="full"
/>
```

**Updated:**
```tsx
<ToolList
  tools={tools.list.map((tool) => ({
    title: tool.title,
    description: tool.description,
    illustration: tool.illustration,
    href: tool.href,
  }))}
  variant="full"
  plateColor="emerald"
/>
```

---

## Result

| Before | After |
|--------|-------|
| Violet background on icon containers | Emerald background matching page header |
| Icons already mint (from previous fix) | Icons remain mint |

The tool cards will now have:
- Emerald (`#034B3D`) background on the illustration container
- Mint (`#00FFD9`) colored animated line illustrations

