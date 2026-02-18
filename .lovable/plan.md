
# Database + AI Tools: Full Implementation Plan

## Overview

Two major workstreams:

1. **Database** — Lovable Cloud (Supabase) database for Work case studies and Articles/Resources, with an admin-style management approach
2. **AI Tools** — All 6 tools built as real, standalone pages with functional AI (Lovable AI gateway via edge functions), each optimised for direct traffic from Google

---

## Part 1: Database Architecture

### Tables

**`work_cases`** — Portfolio case studies shown on `/work`
```
id, title, description, thumbnail_url, href, cta_label, category, 
published (bool), sort_order, created_at, updated_at
```

**`articles`** — Resources / blog content shown on `/resources`
```
id, title, slug, excerpt, body (rich text), thumbnail_url, 
category, published (bool), sort_order, created_at, updated_at
```

Both tables are **public read** (no auth required for visitors), no user-auth needed since this is a content site. An admin seeder will populate the initial data from `content.ts`.

### RLS Policy
- `SELECT`: public (anyone can read published rows)
- `INSERT/UPDATE/DELETE`: locked (no anonymous mutations — content managed via Lovable Cloud dashboard or future admin panel)

---

## Part 2: AI Tools — Architecture

### Shared Pattern Per Tool

Every tool page follows this layout:
```
[Hero: Tool name, description, animated illustration]
[Input Form: Tool-specific fields]
[Output Panel: Streaming AI response rendered as markdown]
[CTA Band: "Want us to implement this?" → /book]
```

### Edge Function Per Tool (or one shared function with branching)
One shared edge function `ai-tool` with a `tool` parameter to branch on system prompt. This avoids deploying 6 separate functions.

```
POST /functions/v1/ai-tool
Body: { tool: "page-critique" | "sop-builder" | ... , input: { ... } }
```

### Streaming
All tools stream the response token-by-token using SSE, rendered live using a markdown renderer so the user sees output appear as it's generated — feels alive, shows the AI working.

---

## Part 3: Tool Pages Detail

### 6 Tool Pages (standalone routes, good for SEO)

| Tool | Route | Input | System Prompt Focus |
|------|-------|-------|---------------------|
| Landing Page Critique | `/tools/page-critique` | URL or pasted copy | Conversion audit: hierarchy, CTA clarity, friction points |
| SOP Draft Builder | `/tools/sop-builder` | Process description (textarea) | Structured SOP: purpose, scope, roles, steps, notes |
| Brand Consistency Audit | `/tools/brand-audit` | Brand description + 3-5 assets described | Consistency report: visual, tone, typography priorities |
| Process Flow Mapper | `/tools/process-mapper` | Workflow description | Structured flow: inputs, steps, decision points, outputs |
| Dashboard Requirements Builder | `/tools/dashboard-builder` | Reporting needs description | Dashboard spec: KPIs, data sources, layout recommendations |
| KPI Audit | `/tools/kpi-audit` | Current metrics list | KPI critique: what's missing, what's vanity, what to add |

### Tool Page Structure (each page)

```
<Layout>
  Hero (plate color, tool icon, headline, 1-line description)
  Input Section (card with form fields + "Generate" button)
  Output Section (appears after submit — streaming markdown + copy button)
  CTA Band ("Want us to implement this?" → /book)
</Layout>
```

**No email gate** — tools are fully free and open. Email capture only on the `/tools` index page (already exists). This maximises Google traffic conversion (user gets value immediately, then sees the CTA).

---

## Part 4: Files to Create / Modify

### New Files

#### Database
- `supabase/migrations/001_work_cases.sql` — `work_cases` table + RLS
- `supabase/migrations/002_articles.sql` — `articles` table + RLS

#### Edge Function
- `supabase/functions/ai-tool/index.ts` — Single shared edge function with system prompts for all 6 tools

#### Shared Tool Components
- `src/components/tools/ToolHero.tsx` — Reusable hero for tool pages (plate, icon, headline, description)
- `src/components/tools/ToolInputForm.tsx` — Generic wrapper (renders children, handles submit state)
- `src/components/tools/ToolOutputPanel.tsx` — Streaming markdown renderer with copy button, loading skeleton
- `src/lib/streamTool.ts` — Client-side SSE streaming utility (reused across all 6 tool pages)

#### Tool Pages (6 new pages)
- `src/pages/tools/PageCritique.tsx`
- `src/pages/tools/SopBuilder.tsx`
- `src/pages/tools/BrandAudit.tsx`
- `src/pages/tools/ProcessMapper.tsx`
- `src/pages/tools/DashboardBuilder.tsx`
- `src/pages/tools/KpiAudit.tsx`

#### Updated Pages
- `src/App.tsx` — Add 6 new tool routes + future article/work routes
- `src/pages/Work.tsx` — Read from `work_cases` table (with fallback to static content)
- `src/pages/Resources.tsx` — Read from `articles` table and show article grid (replacing "coming soon")

### Modified Files

- `src/lib/content.ts` — No changes needed (static data still used as fallback)
- `src/pages/Tools.tsx` — Minor: tool cards now link to real standalone pages (already have `href` set)

---

## Part 5: Tool Pages Visual Design

Each tool page uses the existing design system:

**Hero section**: Uses existing `Hero` component with `plate` color unique per tool:
- Page Critique → `blue`
- SOP Builder → `violet`
- Brand Audit → `burgundy`
- Process Mapper → `emerald`
- Dashboard Builder → `astral`
- KPI Audit → `navy`

**Input area**: Clean white card, `bg-card border border-ink/10 rounded-2xl p-6 md:p-8`

**Output area**: Appears below input after generation starts. Contains:
- Animated "Generating..." skeleton while streaming begins
- Streamed markdown as it arrives (using a light markdown renderer)
- "Copy output" button top-right
- Word count / estimated read time

**CTAs at bottom**: Use existing `CTABand` component

---

## Part 6: Database-Driven Work + Resources Pages

### Work page (`/work`)
- Fetches `work_cases` table on load (published = true, ordered by sort_order)
- Falls back to static `siteContent.work.tiles` if DB returns empty
- Each case study card: title, description, thumbnail_url (or placeholder), cta link
- Add "Add case study" note visible only in dev (or admin link)

### Resources page (`/resources`)
- Fetches `articles` table (published = true, ordered by sort_order)
- Replaces current "coming soon" state with real article grid
- Each article card: thumbnail, category chip, title, excerpt, "Read article" link
- Individual article pages at `/resources/:slug` render the `body` field as markdown

---

## Part 7: Implementation Order

1. Enable Lovable Cloud
2. Run migrations (work_cases + articles tables)
3. Seed initial data from content.ts
4. Create edge function `ai-tool` with all 6 system prompts
5. Build shared tool components (ToolHero, ToolInputForm, ToolOutputPanel, streamTool utility)
6. Build 6 tool pages
7. Add routes to App.tsx
8. Update Work.tsx to read from DB
9. Update Resources.tsx to read from DB + article grid
10. Create article detail page `/resources/:slug`

---

## Technical Notes

- **Streaming**: Edge function returns `text/event-stream` — the client reads SSE line by line and appends delta content to state, which renders in a `<div className="prose prose-sm max-w-none">` block using a markdown component
- **react-markdown**: Already a viable dep or can add it — used to render AI output with proper headings, lists, bold text
- **No auth needed**: All tools are public. No login wall.
- **SEO**: Each tool page has its own `<title>` and `<meta description>` via document.title + meta tags set in useEffect — this makes each page indexable independently
- **Lovable AI model**: `google/gemini-3-flash-preview` (default, fast, balanced)
- **Rate limiting**: 429 and 402 errors caught in edge function and surfaced as toast notifications on the frontend

