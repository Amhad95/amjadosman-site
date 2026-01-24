

# Solution: Visual Elements for White/Light Background Cards

## The Problem

The mint ASCII animations require dark backgrounds to work visually (the glowing mint characters need contrast). But converting all cards to dark backgrounds would break the visual hierarchy of the site.

## Available Approaches

| Approach | Works on Light BG | Brand Consistent | Complexity |
|----------|------------------|------------------|------------|
| **SVG Line Illustrations** | Yes | Yes (use ink/navy strokes) | Medium |
| **Animated Lucide Icons** | Yes | Yes (mint or ink color) | Low |
| **CSS-only shape animations** | Yes | Yes | Low |
| **Install Framer Motion + path animations** | Yes | Yes | Medium |

## Recommended Solution: Dual-Mode Visual System

### For Light/White Cards
Use **SVG line illustrations** with stroke animations and **animated Lucide icons**:
- Ink/navy stroke color on white backgrounds
- CSS `stroke-dasharray` animation for "drawing" effect
- Subtle hover interactions (scale, glow, translate)

### For Dark/Colored Cards (already working)
Keep the existing ASCII animations with mint glow.

---

## Implementation Plan

### Phase 1: Animated Icon System (Simple Cards)

Create a reusable `AnimatedIcon` component for Steps, simple feature cards, and list items.

**New file: `src/components/shared/AnimatedIcon.tsx`**

```tsx
// Wraps any Lucide icon with CSS animation
interface AnimatedIconProps {
  icon: LucideIcon;
  animation?: 'pulse' | 'float' | 'glow' | 'breathe';
  color?: 'mint' | 'ink' | 'lavender';
  size?: number;
}
```

**CSS additions to `src/index.css`:**
```css
@keyframes icon-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

@keyframes icon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

@keyframes icon-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### Phase 2: SVG Line Illustrations (Feature Cards)

Create custom SVG illustrations that animate their stroke on mount or hover. These use ink/navy color and work perfectly on white backgrounds.

**New files:**
```text
src/components/ui/line-illustrations/
  ├── LineDocument.tsx      (document/page drawing)
  ├── LineChart.tsx         (bar/line chart drawing)
  ├── LineDashboard.tsx     (dashboard wireframe)
  ├── LineTree.tsx          (org chart/file tree)
  └── LineGear.tsx          (settings/process cog)
```

Each illustration:
- Uses `stroke-dasharray` + `stroke-dashoffset` CSS animation
- Draws itself over ~1.5 seconds on mount
- Uses `currentColor` so parent can set ink/navy/lavender
- Has a subtle loop or hover redraw effect

### Phase 3: Apply to Card Components

**Update existing components to include visuals:**

| Component | Visual Type | Placement |
|-----------|------------|-----------|
| `Steps.tsx` | AnimatedIcon above number | Icon floats above step number |
| `ProofTiles.tsx` | Line illustration thumbnail | 16:9 area above title |
| `ToolList.tsx` (preview) | AnimatedIcon or line illustration | Left of title or above |
| `PricingTable.tsx` | AnimatedIcon badge | Corner or beside package name |
| Services page cards | AnimatedIcon | Left of item text |
| Software page modules | AnimatedIcon | Card header area |

---

## Technical Approach: SVG Stroke Animation

Since Framer Motion is not installed, we'll use pure CSS:

```tsx
// Example: LineDocument.tsx
const LineDocument = () => {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path
        d="M8 4h24l8 8v32H8V4z M32 4v8h8 M12 20h24 M12 28h24 M12 36h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
      />
    </svg>
  );
};

// CSS
.animate-draw-line {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw 1.5s ease-out forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

---

## Files to Create

1. `src/components/shared/AnimatedIcon.tsx` - Icon wrapper with animations
2. `src/components/ui/line-illustrations/LineDocument.tsx` - Document SVG
3. `src/components/ui/line-illustrations/LineChart.tsx` - Chart SVG
4. `src/components/ui/line-illustrations/LineDashboard.tsx` - Dashboard SVG
5. `src/components/ui/line-illustrations/LineTree.tsx` - Tree/hierarchy SVG
6. `src/components/ui/line-illustrations/LineGear.tsx` - Process/gear SVG
7. `src/components/ui/line-illustrations/index.ts` - Barrel export

## Files to Modify

1. `src/index.css` - Add icon and SVG animation keyframes
2. `src/components/sections/Steps.tsx` - Add animated icons
3. `src/components/sections/ProofTiles.tsx` - Add line illustrations
4. `src/components/sections/ToolList.tsx` - Add tool icons/illustrations
5. `src/components/sections/PricingTable.tsx` - Add package icons
6. `src/pages/Services.tsx` - Add service icons
7. `src/pages/Software.tsx` - Add module icons
8. `src/lib/content.ts` - Add icon/illustration mappings

---

## Visual Examples

**Steps Component (after):**
```text
   [Icon]          [Icon]          [Icon]
     ↓               ↓               ↓
    (1)  ─────────  (2)  ─────────  (3)
   Intake        Architecture      Build
```

**ProofTiles (after):**
```text
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │   [Line Drawing   │  │  ← SVG illustration
│  │    animates in]   │  │     ink color on white
│  └───────────────────┘  │
│  SharePoint Walkthrough │
│  Description text...    │
│  View sample →          │
└─────────────────────────┘
```

**ToolList Preview Cards (after):**
```text
┌─────────────────────────┐
│  [📄]  SOP Draft Builder │  ← Animated icon left of title
│  AI-powered document...  │
└─────────────────────────┘
```

---

## Color Strategy

| Background | Visual Color | Effect |
|------------|--------------|--------|
| White/Light cards | Ink (#0F1218) or Navy | Clean, professional |
| White cards (accent) | Lavender (#B794F4) | Highlight/emphasis |
| Colored plate cards | Mint (#00FFD9) | Existing glow effect |
| Dark cards | Mint (#00FFD9) | Existing ASCII animations |

This maintains the two-mode aesthetic (Poster vs Interface) while ensuring all cards have appropriate visual branding.

