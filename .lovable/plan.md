

# Fix Alternating Colors on Tools Page

## Issue Identified

The Tools page (`src/pages/Tools.tsx`) is explicitly passing `plateColor="emerald"` on line 38, which overrides the alternating color logic in `ToolList.tsx`.

The alternating logic uses: `const cardColor = plateColor || alternatingColors[index % 2]`

When `plateColor="emerald"` is passed, it always evaluates to `"emerald"` and never falls through to the alternating logic.

---

## Fix

### Tools.tsx - Remove plateColor prop

**Line 38** - Remove the `plateColor="emerald"` prop:

```tsx
// Before
<ToolList
  tools={...}
  variant="full"
  plateColor="emerald"
/>

// After
<ToolList
  tools={...}
  variant="full"
/>
```

---

## File Modified

| File | Change |
|------|--------|
| `src/pages/Tools.tsx` | Remove `plateColor="emerald"` from ToolList call |

---

## Result

Both Home and Tools pages will now show alternating green/purple (emerald/violet) backgrounds:
- Card 1: Emerald (green)
- Card 2: Violet (purple)
- Card 3: Emerald (green)
- Card 4: Violet (purple)
- ...and so on

