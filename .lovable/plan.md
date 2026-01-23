
# Change Mint Button Text Color to Match Page Plate Color

## The Problem

Currently, all mint-colored buttons (like "Book a Call", "Request Software Access") have black text (`text-ink`). You want the button text to match the plate/header color of each page.

## The Solution

Add a `textColor` prop to the `PrimaryButton` component that accepts plate color names, then update all usages to pass the appropriate plate color.

---

## Changes Required

### 1. Update PrimaryButton Component

**File:** `src/components/shared/PrimaryButton.tsx`

Add a new `textColor` prop that maps to plate colors:

```text
New prop: textColor?: 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy' | 'ink'

Text color mapping:
- violet → text-plate-violet
- navy → text-plate-navy  
- astral → text-plate-astral
- etc.
- ink → text-ink (default, for backwards compatibility)
```

### 2. Update Hero Component

**File:** `src/components/sections/Hero.tsx`

Pass the `plate` prop through to `PrimaryButton` as `textColor`:

```tsx
<PrimaryButton href={primaryCta.href} textColor={plate}>
  {primaryCta.label}
</PrimaryButton>
```

### 3. Update All Page Usages

Update buttons on colored sections to pass the matching plate color:

| File | Section | Button | textColor |
|------|---------|--------|-----------|
| `src/pages/Software.tsx` | Pricing section (bg-plate-astral) | PrimaryButton | `astral` |
| `src/pages/Index.tsx` | Pricing Teaser (bg-plate-navy) | PrimaryButton | `navy` |
| `src/components/layout/Header.tsx` | Header CTA | PrimaryButton | `violet` (or make dynamic) |

### 4. Update CTABand Component

**File:** `src/components/sections/CTABand.tsx`

For dark variant CTABands, add option to pass a plate color for button text.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/shared/PrimaryButton.tsx` | Add `textColor` prop with plate color mapping |
| `src/components/sections/Hero.tsx` | Pass `plate` to PrimaryButton as `textColor` |
| `src/pages/Software.tsx` | Add `textColor="astral"` to pricing section button |
| `src/pages/Index.tsx` | Add `textColor="navy"` to pricing teaser button |
| `src/components/layout/Header.tsx` | Add `textColor="violet"` to header CTA |
| `src/components/sections/CTABand.tsx` | Add optional `plateColor` prop to pass to buttons |

---

## Technical Details

### PrimaryButton textColor Implementation

```tsx
type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy' | 'ink';

const textColorClasses: Record<PlateColor, string> = {
  violet: 'text-plate-violet',
  navy: 'text-plate-navy',
  emerald: 'text-plate-emerald',
  blue: 'text-plate-blue',
  astral: 'text-plate-astral',
  burgundy: 'text-plate-burgundy',
  ink: 'text-ink',
};

// In baseStyles:
textColorClasses[textColor ?? 'ink']  // defaults to ink for backwards compatibility
```

---

## Visual Result

- **Software page** (plate-astral): Button text will be dark purple (astral)
- **Home page** (plate-violet): Button text will be violet
- **Home pricing teaser** (plate-navy): Button text will be navy blue
- Buttons on light backgrounds can remain black (`ink`) for contrast
