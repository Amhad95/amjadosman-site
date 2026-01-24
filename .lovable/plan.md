
# Add Mint Line Separator Below Animations

## Change Overview
Add a mint-colored horizontal line at the bottom border of the animation thumbnail area to create a visual separation between the animation and the card content.

## File to Modify

### src/components/sections/ServiceCardGrid.tsx

**Line 55-57 - Update the animation thumbnail container:**

```tsx
{/* Animation Thumbnail */}
<div className="aspect-[16/9] relative overflow-hidden border-b-2 border-mint">
  <Animation color="mint" speed={0.8} />
</div>
```

## Technical Details
- Adding `border-b-2` creates a 2px bottom border
- Adding `border-mint` uses the mint accent color (#00FFD9) for the separator
- This creates a clean visual separation between the dark animation area and the colored card content below

## Result
Each service card will have a thin mint-colored line separating the animation thumbnail from the title and description content, reinforcing the mint accent used throughout the site.
