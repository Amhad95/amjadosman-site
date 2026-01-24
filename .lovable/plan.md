

# Fix: Configure tailwind-merge to Preserve Custom Typography Classes

## Root Cause

The `cn()` utility function uses `tailwind-merge` which intelligently merges Tailwind CSS classes. However, **`tailwind-merge` doesn't recognize your custom `text-poster-lg`, `text-poster-xl`, `text-heading-lg`, `text-heading-md`, etc. classes** as valid font-size utilities.

When processing `cn('adsi-section-header font-serif', 'text-poster-lg', 'text-foreground mb-4')`, tailwind-merge may strip or incorrectly handle `text-poster-lg` because it's not in its known list of font-size classes.

This explains why DevTools shows:
```html
<h2 class="font-serif text-foreground mb-4">
```
Instead of:
```html
<h2 class="adsi-section-header font-serif text-poster-lg text-foreground mb-4">
```

---

## Solution

Update `src/lib/utils.ts` to use `extendTailwindMerge` and explicitly register your custom typography classes in the `font-size` class group.

---

## File to Modify

### src/lib/utils.ts

**Current code:**
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**New code:**
```typescript
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "poster-xl",
            "poster-lg",
            "heading-lg",
            "heading-md",
            "body-lg",
            "body-md",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
```

---

## Why This Works

1. `extendTailwindMerge` creates a custom merge function that knows about your typography classes
2. By adding `poster-xl`, `poster-lg`, etc. to the `font-size` class group, tailwind-merge will:
   - Recognize `text-poster-lg` as a valid font-size class
   - Properly preserve it in the merged output
   - Correctly handle conflicts (e.g., if `text-sm` and `text-poster-lg` were both passed, it would keep the last one)

---

## Technical Details

| Custom Class | Purpose | Size |
|--------------|---------|------|
| `text-poster-xl` | Hero headlines | `clamp(2.75rem, 6vw, 4.5rem)` |
| `text-poster-lg` | Section headlines | `clamp(2.75rem, 5vw, 4.5rem)` |
| `text-heading-lg` | Interface headings | `clamp(2.25rem, 4vw, 3.25rem)` |
| `text-heading-md` | Subheadings | `clamp(1.5rem, 2.5vw, 2rem)` |
| `text-body-lg` | Large body text | `1.125rem` |
| `text-body-md` | Regular body text | `1rem` |

---

## Secondary Fix: CSS Indentation

There's also an indentation issue in `src/index.css` at line 140 where `.text-poster-xl` is not properly indented inside the `@layer base` block. This should be fixed to ensure proper CSS structure:

### src/index.css (line 140)

**Current:**
```css
.text-poster-xl {
```

**Should be:**
```css
  .text-poster-xl {
```

---

## Expected Result

After this fix:
1. All `SectionHeader` headings will correctly output `text-poster-lg` in their class attribute
2. The CSS will apply the large `clamp(2.75rem, 5vw, 4.5rem)` sizing
3. Both preview and published versions will show the correct heading sizes

---

## Verification

After implementing, inspect any section heading (e.g., "Everything you need to look credible...") and confirm:
- Class includes `text-poster-lg`
- Class includes `adsi-section-header`
- Computed font-size is approximately 44-72px depending on viewport

