
# Software Suite Restructuring Implementation Plan

## Overview
Transform the current `/software` page from a "one product with modules" model to a **suite of 4 distinct cloud SaaS products**, each with its own high-conversion landing page featuring animated UI vignettes.

---

## Architecture Summary

```text
Routes to Create/Modify:
-------------------------
/software          -> Suite Hub (modified existing page)
/software/crm      -> CRM Product Page (new)
/software/accounting -> Accounting Product Page (new)
/software/inventory  -> Inventory Product Page (new)
/software/tasks      -> Tasks Product Page (new)
```

---

## Files to Create

### 1. Product Landing Page Components (4 pages)
| File | Purpose |
|------|---------|
| `src/pages/software/SoftwareCRM.tsx` | CRM product landing page |
| `src/pages/software/SoftwareAccounting.tsx` | Accounting product landing page |
| `src/pages/software/SoftwareInventory.tsx` | Inventory product landing page |
| `src/pages/software/SoftwareTasks.tsx` | Tasks product landing page |

### 2. Animated UI Vignettes (8-12 components)
| File | Purpose |
|------|---------|
| `src/components/ui/vignettes/PipelineBoard.tsx` | CRM - Kanban pipeline with moving cards |
| `src/components/ui/vignettes/ContactTimeline.tsx` | CRM - Contact profile with activity feed |
| `src/components/ui/vignettes/InvoiceFlow.tsx` | Accounting - Step-based invoice creation |
| `src/components/ui/vignettes/PaymentDashboard.tsx` | Accounting - Payment status updates |
| `src/components/ui/vignettes/InventoryList.tsx` | Inventory - Filterable stock list |
| `src/components/ui/vignettes/ReorderAlert.tsx` | Inventory - Alert appearing animation |
| `src/components/ui/vignettes/TaskKanban.tsx` | Tasks - Moving task cards |
| `src/components/ui/vignettes/ChecklistApproval.tsx` | Tasks - Toggle checklist items |

### 3. Shared Components
| File | Purpose |
|------|---------|
| `src/components/sections/SuiteGrid.tsx` | 4-card grid for suite hub |
| `src/components/sections/ProductSection.tsx` | Reusable section component for product pages |
| `src/components/shared/VignetteContainer.tsx` | Wrapper for animated vignettes with reduced-motion support |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Software.tsx` | Complete rewrite to suite hub layout |
| `src/App.tsx` | Add 4 new routes for product pages |
| `src/lib/content.ts` | Update software section content |
| `src/components/layout/Header.tsx` | Add route mappings for new pages |

---

## Implementation Details

### A. Suite Hub (`/software`)

#### Section 1: Hero
- Headline: "A focused suite of enterprise software, configured and managed for your team."
- Subheadline: "ADSI provides a small set of high-usage cloud business softwares. Each one is provisioned, configured, and supported for you with governance, permissions, and clean onboarding."
- Primary CTA: "Request software access" -> `/book?intent=suite`
- Secondary CTA: "Book a Call" -> `/book`
- Plate: `astral` (existing)
- Right element: CyberGlobeHeader (existing)

#### Section 2: Suite Grid (4 Product Cards)
Each card contains:
- Icon in plate-astral container
- Product name (serif heading)
- One-liner description
- 3 outcome bullets with check marks
- CTA button linking to product page

Card data:
1. **CRM** - "Manage relationships, pipeline, and follow-up without chaos."
2. **Accounting** - "Invoicing, expenses, and basic finance visibility in a clean workflow."
3. **Inventory and Assets** - "Track items and assets with controlled access and auditability."
4. **Tasks and Work Management** - "Plan work, assign ownership, and keep delivery visible."

#### Section 3: Shared Foundation
- Headline: "Configured for adoption, not just access."
- 5 bullets describing configuration/onboarding value

#### Section 4: Expansion Note
- Single paragraph about future product expansion

#### Section 5: Pricing Note + CTA
- Pricing text with EUR placeholder
- CTA: "Get suite pricing" -> `/book?intent=suite-pricing`

---

### B. Product Landing Page Template

Each product page follows the same section structure:

#### Section 1: Hero
- Product-specific headline and subheadline
- Primary CTA: "Request access" -> `/book?intent={product-id}`
- Secondary CTA: "Book a Call" -> `/book`
- Plate color: `astral`
- Right element: Product-specific ASCII animation

#### Section 2: Who It's For (3 bullets)
Audience description with check marks

#### Section 3: Outcomes (4 bullets)
Business outcomes with check marks

#### Section 4: Key Workflows (4-6 bullets)
Specific workflows enabled

#### Section 5: Animated UI Vignettes (2-4 per product)
Interactive UI demonstrations in a responsive grid:
- Dark background container (plate-astral)
- Subtle animations (CSS transitions, progressive reveal)
- Reduced-motion fallback (static state)

#### Section 6: Configuration and Onboarding
- Headline: "Configured for your team, not just activated."
- 5 standard bullets about provisioning, roles, templates, data import, support

#### Section 7: Pricing Note + CTA
- Same structure as suite hub, with product-specific intent

---

### C. Animated UI Vignettes

Technical approach for each vignette:
- Built as React components with CSS animations
- Use `useReducedMotion` hook to detect `prefers-reduced-motion`
- Static fallback when motion is reduced
- Subtle transitions (opacity, transform, color changes)
- Premium aesthetic matching site design tokens

#### CRM Vignettes:
1. **PipelineBoard**: 3-column kanban with cards that slide between columns on interval
2. **ContactTimeline**: Profile card with activity items fading in sequentially

#### Accounting Vignettes:
1. **InvoiceFlow**: Step indicator progressing through invoice creation
2. **PaymentDashboard**: Status badges updating, progress bar filling

#### Inventory Vignettes:
1. **InventoryList**: Table rows with stock levels changing, filter highlight
2. **ReorderAlert**: Warning badge appearing with subtle pulse

#### Tasks Vignettes:
1. **TaskKanban**: Cards moving between Todo/In Progress/Done columns
2. **ChecklistApproval**: Checkboxes toggling with strikethrough animation

---

### D. Content Updates (`src/lib/content.ts`)

Replace existing `software` object with new structure:

```typescript
software: {
  hub: {
    hero: { headline, subheadline, primaryCta, secondaryCta },
    products: [
      { id: 'crm', name, oneLiner, outcomes: [], cta },
      { id: 'accounting', ... },
      { id: 'inventory', ... },
      { id: 'tasks', ... }
    ],
    foundation: { headline, bullets: [] },
    expansion: { text },
    pricing: { note, setupNote, cta }
  },
  products: {
    crm: {
      hero: { headline, subheadline },
      whoFor: [],
      outcomes: [],
      workflows: [],
      configuration: { headline, bullets: [] },
      pricing: { ... }
    },
    accounting: { ... },
    inventory: { ... },
    tasks: { ... }
  }
}
```

---

### E. Route Configuration (`src/App.tsx`)

Add 4 new routes:
```tsx
<Route path="/software/crm" element={<SoftwareCRM />} />
<Route path="/software/accounting" element={<SoftwareAccounting />} />
<Route path="/software/inventory" element={<SoftwareInventory />} />
<Route path="/software/tasks" element={<SoftwareTasks />} />
```

---

### F. Header Route Mapping

Add to `routePlateMap` in `Header.tsx`:
```tsx
'/software/crm': 'astral',
'/software/accounting': 'astral',
'/software/inventory': 'astral',
'/software/tasks': 'astral',
```

---

## Technical Details

### Reduced Motion Hook
Create `src/hooks/useReducedMotion.ts`:
```tsx
import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
};
```

### Vignette Animation Pattern
Each vignette uses:
- CSS transitions for smooth state changes
- `setInterval` for automated cycling (5-8 second loops)
- `opacity` and `transform` for enter/exit effects
- Pause on hover for accessibility

### VignetteContainer Component
Provides consistent:
- Dark background (plate-astral or ink)
- Aspect ratio (16:9 or 4:3)
- Border and rounded corners
- Caption/label for workflow description
- Reduced motion fallback wrapper

---

## Summary

| Item | Count |
|------|-------|
| New page components | 4 |
| New vignette components | 8 |
| New shared components | 3 |
| Modified files | 4 |
| New routes | 4 |

This implementation maintains the existing ADSI styling, layout system, and global components while completely restructuring the Software section to match the correct business model of a managed SaaS suite.
