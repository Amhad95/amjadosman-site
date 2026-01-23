

# Add 3D ASCII Cube Animation to Home Hero

## Overview

Add the CyberGlobeHeader (3D ASCII rotating cube with pulsing core) component to the home page Hero section, positioned to the right of the headline text, using the mint color.

---

## Implementation Steps

### 1. Create the Component

**File:** `src/components/shared/CyberGlobeHeader.tsx`

Create a new component file with the provided code, but update the color map to include the project's mint color:

```tsx
const COLOR_MAP = {
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  matrix: "#00ff41",
  blue: "#3b82f6",
  mint: "#00FFD9"  // Add mint to match project's accent
};
```

Also convert from Next.js ("use client") to standard React export.

### 2. Update Hero Component Layout

**File:** `src/components/sections/Hero.tsx`

Modify the Hero to support an optional right-side element:

| Current Layout | New Layout |
|----------------|------------|
| Single column with text | Two-column grid: text left, animation right |

**Changes:**
- Add optional `rightElement` prop to HeroProps
- Wrap content in a flex/grid container
- Text content on the left (existing)
- Right element (animation) on the right, hidden on mobile

```text
Container
├── Left Column (max-w-4xl)
│   ├── Headline
│   ├── Subheadline
│   ├── CTAs
│   └── Credibility Strip
└── Right Column (hidden on mobile, visible lg+)
    └── CyberGlobeHeader
```

### 3. Update Index Page

**File:** `src/pages/Index.tsx`

Pass the CyberGlobeHeader component to the Hero:

```tsx
import CyberGlobeHeader from '@/components/shared/CyberGlobeHeader';

<Hero
  ...existing props
  rightElement={<CyberGlobeHeader color="mint" speed={0.8} />}
/>
```

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/shared/CyberGlobeHeader.tsx` | **Create** - New animation component |
| `src/components/sections/Hero.tsx` | **Modify** - Add rightElement prop and two-column layout |
| `src/pages/Index.tsx` | **Modify** - Pass CyberGlobeHeader to Hero |

---

## Technical Details

### Hero Layout Update

```tsx
// New grid layout in Hero
<div className="container mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 md:pb-16 lg:pb-24">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
    {/* Left: Text content */}
    <div className="max-w-4xl lg:max-w-2xl">
      {/* Existing headline, subheadline, CTAs, credibility */}
    </div>
    
    {/* Right: Animation (hidden on mobile) */}
    {rightElement && (
      <div className="hidden lg:block lg:flex-shrink-0">
        {rightElement}
      </div>
    )}
  </div>
</div>
```

### CyberGlobeHeader Props for Home

```tsx
<CyberGlobeHeader 
  color="mint"      // Uses #00FFD9
  speed={0.8}       // Slightly slower for subtlety
  showCore={true}   // Show pulsing inner core
/>
```

---

## Visual Result

- Desktop: Headline text on left, rotating 3D ASCII cube in mint color on right
- Mobile/Tablet: Animation hidden, text-only layout (maintains current mobile experience)
- Animation renders as monospace ASCII art with mint (#00FFD9) color theme

