
# Design Refinement Plan

## Issues Identified

Based on review of the codebase and screenshot:

1. **Cards are visually primitive** - Basic white boxes with minimal styling, no visual depth or hierarchy
2. **H2 typography too small** - Current: `clamp(1.75rem, 3vw, 2.5rem)` is undersized for premium B2B
3. **H3 typography too small** - Current: `clamp(1.25rem, 2vw, 1.75rem)` needs to be larger
4. **Footer CTA is small** - The CTA band lacks a prominent headline when placed in footer
5. **Header is solid white** - Should be transparent with blur, adapting to page context
6. **Logo not using provided SVGs** - Current wordmark is just "ADSI" text; the actual SVG has the full elaborate wordmark "Applied Design & Strategy Institute"

---

## Solution Design

### 1. Enhanced Card Design

**Card.tsx Updates:**
- Add subtle gradient background overlay
- Implement stronger border styling with hover states
- Add inner shadow/glow effects for depth
- Increase padding for better breathing room
- Add optional icon slot for visual interest
- Create "featured" variant with accent color treatment

**CardTitle Updates:**
- Larger font size
- Add bottom border accent option
- Better spacing

### 2. Typography Scale Increase

**Update `index.css` type scale:**

| Token | Current | New |
|-------|---------|-----|
| `text-poster-xl` | `clamp(3rem, 6vw, 5.25rem)` | `clamp(3.5rem, 8vw, 6rem)` |
| `text-poster-lg` | `clamp(2.25rem, 4.5vw, 3.5rem)` | `clamp(2.75rem, 5vw, 4.5rem)` |
| `text-heading-lg` (H2) | `clamp(1.75rem, 3vw, 2.5rem)` | `clamp(2.25rem, 4vw, 3.25rem)` |
| `text-heading-md` (H3) | `clamp(1.25rem, 2vw, 1.75rem)` | `clamp(1.5rem, 2.5vw, 2rem)` |

### 3. Footer CTA Enhancement

**CTABand.tsx Updates:**
- Increase headline size in dark variant
- Add more vertical padding
- Make primary CTA button larger
- Add decorative accent elements

**Footer.tsx Updates:**
- Add a proper CTA section above the footer nav
- Larger typography for the tagline

### 4. Transparent Header

**Header.tsx Updates:**
- Default to transparent background
- Add scroll detection to apply solid background on scroll
- Adapt text colors based on page context (dark on light pages, light on dark heroes)
- Smooth transition on background change

### 5. Logo Implementation with Actual SVGs

**Logo.tsx Complete Rewrite:**
- Embed the actual wordmark SVG paths from `wordmark.svg` (the full "Applied Design & Strategy Institute" logotype)
- Embed the actual logmark SVG from `logmark.svg` 
- Apply dynamic coloring to the SVG paths based on `colorScheme` prop
- Maintain all color variants (mint-lavender, mint-blue, magenta, ink, offwhite)

The wordmark SVG shows "Applied Design & Strategy Institute" with detailed typography paths - not just "ADSI" text.

### 6. Pricing Page Completion

**Pricing.tsx Updates:**
- Add proper hero section with plate background (Poster Mode)
- Improve spacing and visual hierarchy
- Ensure all package cards use enhanced Card styling
- Add comparison highlights to Foundation Build

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Increase typography scale values |
| `src/tailwind.config.ts` | Add new spacing tokens if needed |
| `src/components/shared/Card.tsx` | Enhanced styling, variants, icon support |
| `src/components/shared/Logo.tsx` | Complete rewrite with actual SVG paths |
| `src/components/layout/Header.tsx` | Transparent background, scroll behavior |
| `src/components/layout/Footer.tsx` | Add CTA section, larger typography |
| `src/components/sections/CTABand.tsx` | Larger headline, enhanced styling |
| `src/components/sections/CardGrid.tsx` | Use enhanced Card component |
| `src/components/sections/PricingTable.tsx` | Enhanced card styling |
| `src/components/sections/ToolList.tsx` | Enhanced card styling |
| `src/pages/Pricing.tsx` | Add Poster Mode hero, better layout |
| `src/pages/Services.tsx` | Apply enhanced cards |

---

## Technical Details

### Header Scroll Detection

```text
State: isScrolled (boolean)
Effect: Listen to scroll event
Threshold: 20px from top
Classes when scrolled: bg-offwhite/95 backdrop-blur-sm border-b
Classes when not scrolled: bg-transparent
Text colors adapt based on page plate color prop
```

### Logo SVG Implementation

The wordmark.svg contains approximately 29 detailed path elements spelling out "Applied Design & Strategy Institute" across two lines. These paths will be embedded directly in the Logo component with dynamic fill colors.

The logmark.svg contains:
- Base rectangle (primary color)
- Geometric "A" shape (secondary color)  
- Diagonal stripe element (secondary color)

### Card Enhancement Approach

```text
Base styles:
- bg-gradient-to-br from-white to-offwhite/50
- rounded-2xl (16px)
- p-8 md:p-10 (increased padding)
- border border-ink/8
- shadow-sm

Hover styles:
- border-ink/20
- shadow-lg
- slight scale transform (1.01)

Featured variant:
- border-l-4 border-l-mint
- or gradient border effect
```

---

## Implementation Order

1. Typography scale (foundation)
2. Card component enhancement
3. Logo SVG implementation
4. Header transparency with scroll
5. CTABand and Footer enhancements
6. Apply changes across pages (Services, Pricing, Tools, etc.)
7. Pricing page completion
