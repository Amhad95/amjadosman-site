
# Match Icon Container Colors to Page Header Colors

## Problem

The icon container background colors are currently hardcoded in components and don't always match the page's header plate color:

| Page | Header Plate | Current Icon Container | Should Be |
|------|-------------|----------------------|-----------|
| Home (violet) | `violet` | `emerald` (ToolList) | `violet` |
| Pricing (navy) | `navy` | `violet` (PricingTable) | `navy` |
| Services (navy) | `navy` | `navy` | Correct |
| Software (astral) | `astral` | `astral` | Correct |
| Tools (emerald) | `emerald` | `emerald` | Correct |

## Solution

Add a `plateColor` prop to the relevant components so each page can specify the correct plate color for icon containers.

---

## Files to Modify

### 1. PricingTable.tsx

Add a `plateColor` prop and use it for icon containers:

```tsx
interface PricingTableProps {
  groups: PackageGroup[];
  foundation?: FoundationPackage;
  plateColor?: 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';
  className?: string;
}

// In the component, use dynamic class:
const plateClasses = {
  violet: 'bg-plate-violet',
  navy: 'bg-plate-navy',
  emerald: 'bg-plate-emerald',
  blue: 'bg-plate-blue',
  astral: 'bg-plate-astral',
  burgundy: 'bg-plate-burgundy',
};

<div className={`flex-shrink-0 w-10 h-10 rounded-lg ${plateClasses[plateColor]} ...`}>
```

### 2. ToolList.tsx

Add a `plateColor` prop:

```tsx
interface ToolListProps {
  tools: Tool[];
  variant?: 'preview' | 'full';
  plateColor?: 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';
  className?: string;
}
```

### 3. Pricing.tsx

Pass the correct plate color to match the header:

```tsx
<PricingTable
  groups={packageGroups}
  foundation={pricing.packages.foundationBuild}
  plateColor="navy"  // Matches Hero plate="navy"
/>
```

### 4. Index.tsx (Home page)

Pass the correct plate color to ToolList:

```tsx
<ToolList 
  tools={home.aiTools.tools} 
  variant="preview" 
  plateColor="violet"  // Matches Hero plate="violet"
/>
```

### 5. Tools.tsx

Update ToolList to use the correct plate color:

```tsx
<ToolList 
  tools={tools.toolsList} 
  variant="full" 
  plateColor="emerald"  // Matches Hero plate="emerald"
/>
```

---

## Visual Result

After these changes, all icon containers will use the same plate color as the page's header:

| Page | Header Color | Icon Container Color |
|------|-------------|---------------------|
| Home | Violet | Violet |
| Pricing | Navy | Navy |
| Services | Navy | Navy |
| Software | Astral | Astral |
| Tools | Emerald | Emerald |
| Work | Navy | Navy |
| About | Emerald | Emerald |

This creates a cohesive visual identity where the branded plate colors flow consistently from the header into the content cards.
