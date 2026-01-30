

# Step 1: CRM Page Template and Structure

## Overview
This is the first of 7 steps in the Software section upgrade. Step 1 establishes the structural template that will be applied to all 4 product pages. We focus on CRM as the reference implementation.

---

## Key Problems Being Fixed in This Step

| Problem | Fix |
|---------|-----|
| UI snippets in hero instead of ASCII animation | Move UI previews below hero; add CyberHeart ASCII to hero |
| No product naming system | Introduce "Meridian" as CRM product name with TM |
| Sections lack structure | Add headline + subheadline + supporting copy to every section |
| Dark purple vignette backgrounds | Change to neutral (white/light gray) app-like surfaces |
| Mint used as text on light backgrounds | Use mint only for buttons, badges, and accents |

---

## Product Naming

| Product | Name | Format |
|---------|------|--------|
| CRM | Meridian | Meridian^TM for CRM |
| Accounting | Ledger | (Step 6) |
| Inventory | Stockroom | (Step 6) |
| Tasks | Cadence | (Step 6) |

---

## New Page Structure

The CRM page will follow this section order (template for all products):

```text
1. Hero (plate-astral background)
   - ASCII animation (CyberHeart)
   - Product name with TM + descriptor
   - Outcome-driven headline
   - Supporting subheadline
   - Primary CTA: "Request access"
   - Secondary CTA: "How onboarding works"

2. Product Preview Section (NEW - moved from hero)
   - Tabbed preview with 4 views
   - White/light gray app background
   - Centered with max-width container

3. Who It's For
   - Headline + subheadline
   - 3 persona cards (role, pain, payoff)
   - Interactive side preview

4. Problems It Replaces (NEW)
   - "From X chaos to Y clarity" framing
   - Before/after contrast cards

5. Outcomes
   - 4 outcome tiles
   - Mini dashboard vignette

6. Core Capabilities (NEW)
   - 6-8 capabilities in card grid
   - Grouped by category

7. Workflow Tour
   - Vertical stepper (4 steps)
   - Large UI preview per step

8. Governance and Controls
   - Roles/permissions matrix
   - Preset toggles (Simple/Strict)

9. Onboarding and Configuration
   - 3 setup cards
   - Support request vignette

10. Pricing + CTA Block
    - Pricing note
    - Strong dual-CTA
```

---

## File Changes

### 1. SoftwareCRM.tsx (Complete Rewrite)

The page will be restructured with:

**Hero Section:**
- Replace tabbed UI preview with CyberHeart ASCII animation
- Add product name: "Meridian^TM" with descriptor "for CRM"
- Headline: "Relationship management configured for adoption."
- Subheadline: "A clean CRM system provisioned with your pipeline stages, roles, and follow-up workflows. Configuration and ongoing admin support included."
- CTAs: "Request access" and "How onboarding works"

**Product Preview Section (New):**
- Full-width section below hero
- Headline: "See the product"
- Subheadline: "Pipeline tracking, contact management, task automation, and reporting in one clean interface."
- TabbedProductPreview component (will be upgraded in Step 2)
- Centered in a "browser window" style frame

**Who It's For:**
- Headline: "Built for teams who sell"
- Subheadline: "Whether you're tracking deals, managing accounts, or coordinating handovers."
- 3 persona cards with role/pain/payoff
- Interactive preview that changes per persona

**Problems It Replaces (New Section):**
- Headline: "Replace the chaos"
- Subheadline: "Move from scattered tools and manual tracking to structured operations."
- 3-4 contrast cards showing "From X to Y" transformations

**Outcomes:**
- Add subheadline: "Measurable improvements from day one."
- Keep existing tiles + dashboard layout

**Core Capabilities (New Section):**
- Headline: "What you can do"
- Subheadline: "Core features configured for your team."
- 6-8 capability cards with icons

**Workflow Tour:**
- Headline: "From configuration to operations"
- Subheadline: "A clear path from setup to daily use."
- Keep stepper, upgrade vignettes in Step 2

**Governance:**
- Headline: "Control who does what"
- Subheadline: "Roles, permissions, and approval chains built in from day one."
- Keep matrix with Simple/Strict toggle

**Onboarding:**
- Headline: "Configured for your team, not just activated"
- Subheadline: "We handle provisioning, configuration, training, and ongoing admin support."
- 3 cards + support vignette

**Pricing + CTA:**
- Standard pricing note
- Strong CTA block with reassurance line

---

### 2. New Shared Components

#### A. ProductHero.tsx
A specialized hero component for product pages:
- ASCII animation on right (respects site design language)
- Product name with TM styling
- Descriptor line ("for CRM")
- Standard CTA layout

```text
Props:
- productName: string
- productDescriptor: string
- headline: string
- subheadline: string
- primaryCta: { label, href }
- secondaryCta: { label, href }
- asciiComponent: React.ReactNode
- plate: PlateColor
```

#### B. ProductPreviewFrame.tsx
A wrapper that frames UI previews like real software:
- White/light gray background (not dark purple)
- Optional browser chrome (dots, URL bar)
- Centered with max-width
- Shadow and border styling

```text
Props:
- children: React.ReactNode
- variant: 'browser' | 'card' | 'minimal'
- className?: string
```

#### C. ProblemContrastCard.tsx
"From X to Y" transformation cards:
- Before state (muted, crossed out)
- After state (highlighted)
- Icon and short description

```text
Props:
- before: string
- after: string
- icon: LucideIcon
```

#### D. CapabilityCard.tsx
Compact feature cards:
- Icon
- Title
- One-line description

```text
Props:
- icon: LucideIcon
- title: string
- description: string
```

---

### 3. Hero.tsx Updates

Add support for product pages with:
- Product name + TM badge styling
- Descriptor line styling
- Ensure ASCII animation positions correctly

---

### 4. Color/Contrast Fixes

In all vignettes and previews:
- Change `bg-plate-astral` containers to `bg-white` or `bg-gray-50`
- Change `text-mint` on light backgrounds to `text-foreground` or darker
- Use mint only for:
  - Buttons and button-like elements
  - Status badges and chips
  - Active state indicators
  - Small accent elements

---

## Visual Structure Comparison

### Before (Current)
```text
Hero:
  [Left: Text]     [Right: Dark UI Preview]

Sections:
  [Headline only]
  [Content with mint text on light]
```

### After (Step 1)
```text
Hero:
  [Left: Product Name + TM]
  [Left: for CRM descriptor]
  [Left: Headline]
  [Left: Subheadline]     [Right: ASCII Animation]
  [Left: CTAs]

Product Preview Section:
  [Headline + Subheadline]
  [Centered White/Gray UI Preview in Browser Frame]

Other Sections:
  [Headline]
  [Subheadline/Explainer]
  [Short copy or bullets]
  [Visual component on neutral background]
```

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/sections/ProductHero.tsx` | Product page hero with ASCII + product name |
| `src/components/shared/ProductPreviewFrame.tsx` | Neutral-background UI wrapper |
| `src/components/sections/ProblemContrast.tsx` | "From chaos to clarity" cards |
| `src/components/sections/CapabilityGrid.tsx` | Feature capability cards |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/software/SoftwareCRM.tsx` | Complete restructure per new template |
| `src/components/shared/SectionHeader.tsx` | Ensure subheadline support |

---

## Typography and Copy Guidelines

### Section Structure
Every section must include:
1. **Headline** - Serif font, heading-lg or poster-lg
2. **Subheadline** - Sans-serif, body-lg, muted-foreground, 1-2 sentences
3. **Content** - Visual component or structured cards

### Mint Usage Rules (Enforced)
- **Allowed**: Buttons, badges, icons on dark backgrounds, active states
- **Not Allowed**: Body text on light backgrounds, borders on light backgrounds, icons on mint-tinted backgrounds

---

## Acceptance Criteria for Step 1

1. CRM page hero uses ASCII animation (CyberHeart), not UI preview
2. Product name "Meridian^TM for CRM" appears prominently
3. UI previews moved to dedicated section below hero
4. Every section has headline + subheadline + supporting copy
5. No mint text on light backgrounds
6. New "Problems It Replaces" section added
7. New "Core Capabilities" section added
8. All UI vignette containers use white/light gray backgrounds (not dark purple)
9. Copy focuses on configuration/onboarding (no custom development language)

---

## What's NOT in This Step
- UI preview component upgrades (Step 2)
- Product naming for other products (Step 6)
- Other product page updates (Step 6)
- Suite grid improvements (Step 5)

