

# Decrease Animation Thumbnail Height

## Current State
The animation thumbnail area uses `aspect-[4/3]` which creates a 4:3 ratio (height is 75% of width). This makes the animation area quite tall relative to the card content.

## Solution
Change the aspect ratio to make the thumbnail area shorter. Options:

| Aspect Ratio | Height % of Width | Visual Effect |
|--------------|-------------------|---------------|
| `aspect-[4/3]` (current) | 75% | Tall, square-ish |
| `aspect-[16/9]` | 56% | Widescreen, balanced |
| `aspect-[2/1]` | 50% | Wide, compact |
| `aspect-[5/2]` | 40% | Very wide, minimal |

**Recommended: `aspect-[16/9]`** - This provides a good balance between showing enough animation and keeping the card compact.

## File to Modify

### src/components/sections/ServiceCardGrid.tsx

**Line 55 - Change:**
```tsx
<div className="aspect-[4/3] relative overflow-hidden">
```

**To:**
```tsx
<div className="aspect-[16/9] relative overflow-hidden">
```

## Result
The animation thumbnail will be noticeably shorter (56% of width instead of 75%), making the card content area more prominent relative to the animation.

