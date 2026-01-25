

# Fix Icon and Illustration Flickering Issues

## Problem Identified

The icons and illustrations are flickering because:

1. **Pulse Animation Too Aggressive**: The `icon-pulse` animation fades icons to 50% opacity, making them appear to disappear
2. **SVG Draw Animation Resets**: The stroke-draw animation restarts every time React re-renders the component, causing illustrations to flicker

## Solution

### Fix 1: Adjust Icon Animation Opacity

Modify the `icon-pulse` keyframe to use a subtler opacity change (0.7 instead of 0.5) so icons don't appear to vanish.

**File: `src/index.css`**

Change line 208-210:
```css
/* Before */
@keyframes icon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }  /* Too aggressive */
}

/* After */
@keyframes icon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }  /* Subtler effect */
}
```

### Fix 2: Prevent SVG Animation Restart

Add `animation-fill-mode: forwards` combined with a unique key based on content (not just index) to prevent the draw animation from restarting on re-renders.

Also, use React's `useMemo` or stable keys to prevent unnecessary re-renders of the SVG illustrations.

**File: `src/components/sections/ProofTiles.tsx`**

Add a stable key based on the tile title instead of just the index:
```tsx
{tiles.map((tile, index) => {
  // Use tile.title as part of the key for stability
  const stableKey = `${tile.title}-${index}`;
  return (
    <div key={stableKey} ...>
```

### Fix 3: Memoize Icon Components

Wrap the `AnimatedIcon` component with `React.memo` to prevent unnecessary re-renders:

**File: `src/components/shared/AnimatedIcon.tsx`**

```tsx
export const AnimatedIcon: React.FC<AnimatedIconProps> = React.memo(({
  icon: Icon,
  animation = 'float',
  ...
}) => {
  // existing code
});
```

### Fix 4: Memoize Line Illustration Components

Similarly, wrap each line illustration with `React.memo`:

**Files: All line illustration components**
- `src/components/ui/line-illustrations/LineDocument.tsx`
- `src/components/ui/line-illustrations/LineChart.tsx`
- `src/components/ui/line-illustrations/LineDashboard.tsx`
- `src/components/ui/line-illustrations/LineTree.tsx`
- `src/components/ui/line-illustrations/LineGear.tsx`
- `src/components/ui/line-illustrations/LineBrand.tsx`
- `src/components/ui/line-illustrations/LineWebsite.tsx`

```tsx
export const LineDocument: React.FC<LineDocumentProps> = React.memo(({ className, delay = 0 }) => {
  // existing code
});
```

## Files to Modify

1. `src/index.css` - Adjust pulse animation opacity (0.5 → 0.8)
2. `src/components/shared/AnimatedIcon.tsx` - Add React.memo wrapper
3. `src/components/ui/line-illustrations/LineDocument.tsx` - Add React.memo
4. `src/components/ui/line-illustrations/LineChart.tsx` - Add React.memo
5. `src/components/ui/line-illustrations/LineDashboard.tsx` - Add React.memo
6. `src/components/ui/line-illustrations/LineTree.tsx` - Add React.memo
7. `src/components/ui/line-illustrations/LineGear.tsx` - Add React.memo
8. `src/components/ui/line-illustrations/LineBrand.tsx` - Add React.memo
9. `src/components/ui/line-illustrations/LineWebsite.tsx` - Add React.memo
10. `src/components/sections/ProofTiles.tsx` - Use stable keys

## Result

After these changes:
- Icons will have a subtle pulse effect that doesn't make them appear to disappear
- SVG illustrations will draw once and stay drawn, not restart on every re-render
- Memoization will prevent unnecessary re-renders that cause animation restarts

