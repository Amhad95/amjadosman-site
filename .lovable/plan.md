

# Restructure AI Tools and Work/Portfolio Sections

## Understanding the Problem

There are two conceptual misunderstandings in the current implementation:

### Issue 1: AI Tools
**Current state**: AI Tools are presented like consulting services with small icon containers and "Want us to implement this?" CTAs
**What they actually are**: Online tools (like iLovePDF) where users get immediate outputs - audits, drafts, reports. They're a library of AI-powered utilities, not projects for hire.

### Issue 2: Work/Proof Section  
**Current state**: Using animated line illustrations (tree, document, website, brand) as thumbnails
**What they actually are**: Portfolio case studies that should have real project images/screenshots and link to detailed case study pages

---

## Solution

### Part A: Redesign AI Tools (ToolList component)

Transform the Tools page to match the iLovePDF pattern:
- Grid of tool cards with animated line illustrations as visual icons
- Each card is clickable and takes users directly to the tool
- Remove "Want us to implement this?" CTAs
- Add "Use this tool" or "Try now" action buttons

**Data changes in `content.ts`:**
```typescript
tools: {
  list: [
    {
      title: "SOP Draft Builder",
      description: "Generate a structured SOP draft from a messy process description.",
      outputs: ["Structured SOP draft", "Roles and responsibilities", ...],
      illustration: "document", // Use line illustrations
      href: "/tools/sop-builder", // Direct link to tool
    },
    // ...
  ]
}
```

**ToolList.tsx changes:**
- Use the line illustrations (LineDocument, LineChart, etc.) as visual thumbnails
- Display in a responsive grid (like iLovePDF: 5 columns on desktop, 2 on mobile)
- Card structure: illustration icon + title + short description
- Remove `implementLink` display
- Add direct action CTA: "Try this tool →"

### Part B: Redesign Work/Portfolio (ProofTiles component)

Transform to a proper portfolio grid:
- Support actual project thumbnail images (with placeholder for now)
- Each tile links to a case study page
- Remove line illustrations from this component

**Data changes in `content.ts`:**
```typescript
work: {
  tiles: [
    {
      title: "Sample SharePoint architecture walkthrough",
      description: "Interactive tour of intranet structure...",
      thumbnail: "/images/work/sharepoint-thumb.jpg", // Image path (placeholder for now)
      href: "/work/sharepoint-case-study", // Link to case study
      cta: "View case study",
    },
    // ...
  ]
}
```

**ProofTiles.tsx changes:**
- Replace line illustrations with image placeholders
- Use `bg-muted` or gradient as placeholder until real images are added
- Add category/tag support for filtering (optional future enhancement)
- Proper case study linking structure

---

## Files to Modify

### 1. `src/lib/content.ts`
- Update `tools.list` items: add `illustration` field, add direct `href`, update descriptions
- Update `work.tiles`: add `thumbnail` field, update `href` to case study routes

### 2. `src/components/sections/ToolList.tsx`
- Complete redesign to use line illustrations as thumbnails
- Grid layout (3-4 columns on desktop)
- Remove `implementLink` display
- Add "Try this tool" or "Use tool" CTA

### 3. `src/components/sections/ProofTiles.tsx`
- Replace line illustrations with image support
- Add image placeholder styling
- Update to proper portfolio card design

### 4. `src/pages/Tools.tsx`
- Update CTABand copy from "Want implementation help?" to something like "Need help with your project?"
- Ensure the Tools page presents tools as self-serve utilities

---

## Visual Comparison

### Current AI Tools (incorrect)
```text
┌─────────────────────────────────────┐
│ [Small Icon] SOP Draft Builder      │
│              Description text...    │
│              Want us to implement?→ │
└─────────────────────────────────────┘
```

### New AI Tools (like iLovePDF)
```text
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   ╭───╮      │ │   📊         │ │   🎨         │
│   │📄│      │ │   ////       │ │   ◇ ◇        │
│   ╰───╯      │ │   ▬▬▬       │ │   ∙ ∙        │
│              │ │              │ │              │
│ SOP Draft    │ │ Brand Audit  │ │ Page Critique│
│ Builder      │ │              │ │              │
│ Generate a...│ │ Get a...     │ │ Receive...   │
│ [Try tool →] │ │ [Try tool →] │ │ [Try tool →] │
└──────────────┘ └──────────────┘ └──────────────┘
```

### Current Work/Portfolio (incorrect)
```text
┌─────────────────┐ ┌─────────────────┐
│ [Line Drawing]  │ │ [Line Drawing]  │
│ ───╮╭───        │ │    ╱╲          │
│    ╰╯           │ │   ╱──╲         │
│ SharePoint...   │ │ SOP Pack...    │
│ Description     │ │ Description    │
└─────────────────┘ └─────────────────┘
```

### New Work/Portfolio (correct)
```text
┌─────────────────┐ ┌─────────────────┐
│ ┌─────────────┐ │ │ ┌─────────────┐ │
│ │   PROJECT   │ │ │ │   PROJECT   │ │
│ │   IMAGE     │ │ │ │   IMAGE     │ │
│ │  THUMBNAIL  │ │ │ │  THUMBNAIL  │ │
│ └─────────────┘ │ │ └─────────────┘ │
│ SharePoint...   │ │ SOP Pack...     │
│ Description     │ │ Description     │
│ View case study→│ │ View case study→│
└─────────────────┘ └─────────────────┘
```

---

## Technical Details

### ToolList Changes

Add illustration mapping:
```tsx
const toolIllustrations = {
  document: LineDocument,
  chart: LineChart,
  brand: LineBrand,
  website: LineWebsite,
  gear: LineGear,
  dashboard: LineDashboard,
  tree: LineTree,
};
```

New card structure with illustration thumbnail:
```tsx
<div className="group bg-card rounded-2xl border hover:shadow-lg">
  {/* Illustration area */}
  <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center p-6">
    <div className="w-16 h-16">
      <Illustration />
    </div>
  </div>
  {/* Content */}
  <div className="p-6">
    <h3>{tool.title}</h3>
    <p>{tool.description}</p>
    <Link to={tool.href}>Try this tool →</Link>
  </div>
</div>
```

### ProofTiles Changes

New image-based structure:
```tsx
<div className="group bg-card rounded-2xl overflow-hidden">
  {/* Image thumbnail */}
  <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50">
    {tile.thumbnail ? (
      <img src={tile.thumbnail} alt={tile.title} />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
        Project Preview
      </div>
    )}
  </div>
  {/* Content */}
  <div className="p-6">
    <h3>{tile.title}</h3>
    <p>{tile.description}</p>
    <Link to={tile.href}>View case study →</Link>
  </div>
</div>
```

---

## Result

After these changes:
- **AI Tools page** will function like iLovePDF - a library of self-serve tools users can use immediately
- **Work/Portfolio page** will display project thumbnails leading to case studies
- The animated line illustrations will be properly used for AI tool icons
- Clear separation between "tools you use" and "work we've done"

