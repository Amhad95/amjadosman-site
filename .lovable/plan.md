
# ADSI Marketing Website Implementation Plan

## Project Overview

Building a production-ready, high-conversion B2B marketing website for ADSI (Applied Design and Strategy Institute) using React + Tailwind CSS with the existing project setup. The site emphasizes "deployed and managed for clients" positioning, not self-serve SaaS.

---

## Architecture Summary

```text
src/
├── assets/
│   ├── logmark.svg
│   └── wordmark.svg
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Sticky nav with logo + primary nav + CTA
│   │   ├── Footer.tsx           # Secondary nav + contact info
│   │   └── Layout.tsx           # Wrapper component
│   ├── ui/                      # Existing shadcn components
│   ├── sections/
│   │   ├── Hero.tsx             # Poster Mode hero sections
│   │   ├── CTABand.tsx          # Full-width CTA strips
│   │   ├── CardGrid.tsx         # Service/module cards grid
│   │   ├── Steps.tsx            # 5-step delivery process
│   │   ├── ProofTiles.tsx       # Work samples grid
│   │   ├── ToolList.tsx         # AI Tools listing
│   │   ├── EmailCapture.tsx     # Lead capture form
│   │   ├── DecisionHelper.tsx   # Pricing anchor navigation
│   │   ├── PricingTable.tsx     # Package pricing display
│   │   └── IncludedStrip.tsx    # "Included in every package" bar
│   └── shared/
│       ├── Logo.tsx             # Dynamic color variant logo
│       ├── PrimaryButton.tsx    # Mint CTA button
│       ├── SecondaryButton.tsx  # Ghost/outline button
│       ├── Card.tsx             # Interface Mode card
│       └── SectionHeader.tsx    # Reusable section titles
├── pages/
│   ├── Index.tsx                # Home page
│   ├── Services.tsx             # Services page
│   ├── Software.tsx             # Software modules page
│   ├── Tools.tsx                # AI Tools page
│   ├── Work.tsx                 # Portfolio/proof page
│   ├── Pricing.tsx              # Packages and pricing
│   ├── About.tsx                # About ADSI
│   ├── Book.tsx                 # Book a Call page
│   ├── Process.tsx              # Delivery Process detail
│   ├── Resources.tsx            # Resources listing
│   ├── Contact.tsx              # Contact form
│   ├── Privacy.tsx              # Privacy policy
│   └── Terms.tsx                # Terms of service
├── styles/
│   └── globals.css              # Updated with brand tokens
├── lib/
│   └── content.ts               # Centralized copy from spec
└── App.tsx                      # Updated with routes
```

---

## Phase 1: Design System Foundation

### 1.1 CSS Variables and Tokens
Update `src/index.css` with the complete ADSI design system:

**Plate Colors (Backgrounds)**
- `--plate-violet: #9600FF` (Tier 1 primary)
- `--plate-navy: #022D71` (Tier 1)
- `--plate-emerald: #034B3D` (Tier 1)
- `--plate-blue: #015AE8` (Tier 2)
- `--plate-astral: #48136F` (Tier 2)
- `--plate-burgundy: #860434` (Tier 3 special)

**Neutrals**
- `--ink: #0B0F14`
- `--offwhite: #F6F4EF`
- `--white: #FFFFFF`
- `--border-light: rgba(11,15,20,0.18)`
- `--border-dark: rgba(246,244,239,0.18)`

**Accents**
- `--mint: #00FFD9`
- `--lavender: #AD68E9`
- `--magenta: #BE0347`

**Semantic Tokens**
- `--text-on-plate: var(--mint)`
- `--text-on-light: var(--ink)`
- `--text-muted: rgba(11,15,20,0.70)`
- `--text-muted-dark: rgba(246,244,239,0.78)`
- `--cta-bg: var(--mint)`
- `--cta-text: var(--ink)`
- `--cta-border: rgba(0,255,217,0.55)`

### 1.2 Typography Setup
- Import Google Fonts: Instrument Serif (400, 500) and Inter (400, 500, 600)
- Configure Tailwind with custom font families
- Define type scale:
  - H1 Poster XL: `clamp(3rem, 6vw, 5.25rem)`, line-height 0.95
  - H1 Web: `clamp(2.25rem, 4.5vw, 3.5rem)`, line-height 1.02
  - H2: `clamp(1.75rem, 3vw, 2.5rem)`, line-height 1.05
  - Body L: 1.125rem, line-height 1.6
  - Body M: 1rem, line-height 1.65

### 1.3 Tailwind Configuration Updates
Extend `tailwind.config.ts` with:
- Custom colors referencing CSS variables
- Custom font families
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
- Border radius: 12px (sm), 16px (md)
- Container max-widths: 1200px (content), 1320px (wide)

---

## Phase 2: Core Components

### 2.1 Layout Components

**Header.tsx**
- Sticky positioning with Interface Mode neutral background (offwhite)
- Logo (wordmark) on left
- Primary nav: Services, Software, AI Tools, Work, Pricing, About
- "Book a Call" as primary button (mint background)
- Mobile hamburger menu with slide drawer
- Logo color adapts based on scroll/page context

**Footer.tsx**
- Secondary nav: Delivery Process, Resources, Contact, Privacy, Terms
- Logmark with appropriate color variant
- Clean minimal layout

### 2.2 Button Components

**PrimaryButton.tsx**
- Height: 48px desktop, 44px mobile
- Padding: 16px 20px
- Border-radius: 12px
- Background: mint (#00FFD9)
- Text: ink (#0B0F14), Inter 600
- Hover: rgba(0,255,217,0.88)
- Focus ring: 2px lavender with 2px offset

**SecondaryButton.tsx**
- Transparent background
- Border: 1px solid (context-dependent)
- On plates: mint-tinted border, mint text
- On light: ink border, ink text
- Hover: subtle 5-8% tint fill

### 2.3 Section Components

**Hero.tsx (Poster Mode)**
- Full-bleed plate background
- Oversized Instrument Serif headline
- Minimal elements, large negative space
- Lockup positioned bottom-left
- Props: plate color, headline, subheadline, CTAs

**CardGrid.tsx (Interface Mode)**
- Responsive grid: 3 cols desktop, 2 tablet, 1 mobile
- Cards with 16px radius, 24px padding
- Subtle borders using design tokens
- Used for services, modules, tool cards

**Steps.tsx**
- Numbered step display (1-5)
- Horizontal on desktop, vertical on mobile
- Step title + description
- Clean connecting lines

**EmailCapture.tsx**
- Headline: "Download the full report as a PDF."
- Description text
- Email input (48px height, 12px radius)
- Submit button
- Success state with "Download PDF" + "Book a Call" CTAs
- Form validation with zod

**DecisionHelper.tsx**
- Headline: "Not sure what to pick?"
- Three buttons that smooth-scroll to anchors:
  - "We need external credibility (Brand + Web)" -> #external-credibility
  - "We need internal execution (SharePoint + SOPs)" -> #internal-execution
  - "We need both (Foundation Build)" -> #foundation-build

### 2.4 Logo Component

**Logo.tsx**
- Props: variant (logmark/wordmark), colorScheme
- Color mapping logic:
  - On violet/astral/emerald: Mint + Lavender
  - On navy/blue: Mint + Blue-tonal
  - On burgundy: Magenta mode
  - Fallback: single color (mint or offwhite)
- SVG inline with dynamic fill colors

---

## Phase 3: Page Implementation

### 3.1 Home Page (/)

**Sections in order:**
1. **Hero** (Poster Mode - violet plate)
   - Headline: "Design and operating systems for teams that need to move fast without losing control."
   - Subheadline: "ADSI builds the customer-facing layer..."
   - Primary CTA: "Book a Call"
   - Secondary CTA: "Run a Free Audit"
   - Credibility strip: "Productized scope. Clear timelines. Clean handover. Optional monthly support."

2. **What We Deliver** (Interface Mode)
   - Headline: "Everything you need to look credible and run cleanly."
   - 5 cards: Brand and Communications, Web and CMS, Digital Apps, Internal Operations, Subscription Software
   - CTA: "See packages" -> /pricing

3. **Outcomes** (Interface Mode)
   - Headline: "The outcomes teams pay for."
   - 5 bullet points (exactly as spec)

4. **How We Work** (Interface Mode)
   - Headline: "Structured delivery. Minimal meetings."
   - 5 steps component
   - CTA: "See how delivery works" -> /process

5. **Proof Tiles**
   - Headline: "Proof you can evaluate quickly."
   - 4 tiles: SharePoint walkthrough, SOP pack, Before/after, Brand excerpt
   - CTA: "See work" -> /work

6. **AI Tools Preview**
   - Headline: "Get a useful output in minutes."
   - Subheadline: "Our free tools generate drafts and audits..."
   - 3 tool cards preview
   - CTA: "Explore AI tools" -> /tools

7. **Pricing Teaser + Final CTA** (Poster Mode - emerald or navy plate)
   - Headline: "Clear packages. No vague billing."
   - Copy about Foundation Build/Internal Ops Setup
   - CTA: "View pricing and packages" -> /pricing
   - Final block: "If you want a clean plan, book a short call."
   - CTA: "Book a Call" -> /book

### 3.2 Services Page (/services)

**Sections:**
1. **Hero** (Poster Mode - navy plate)
   - Headline: "Project services with clean scope and real deliverables."
   - Subheadline: "ADSI ships systems that teams adopt..."
   - CTA: "Book a Call"

2. **Service Tracks** (Interface Mode)
   - Three track cards:
     - **Track A: External credibility** - Brand system, Website and CMS, Sales and pitch materials
     - **Track B: Internal execution** - SharePoint, SOP library, Templates and governance, Onboarding pack
     - **Track C: Workflow automation** - Portals, dashboards, workflow apps, Lightweight internal tools
   - Each item links to relevant Pricing anchors

3. **CTA Band**
   - "View pricing and packages" -> /pricing
   - "Book a Call" -> /book

### 3.3 Software Page (/software)

**Sections:**
1. **Hero** (Poster Mode - astral plate)
   - Headline: "Subscription software, deployed as part of your operating system."
   - Subheadline: "ADSI provides selected operational software modules..."
   - Primary CTA: "Request software access"
   - Secondary CTA: "Book a Call"

2. **Core Modules** (Interface Mode)
   - Section headline: "Core modules available by subscription."
   - 4 module cards:
     - CRM (Core): Contacts, Pipeline, Tasks, Email templates, Basic reporting
     - Operations Workspace: Requests/approvals, Internal tickets, Dashboards, Role-based access
     - Document and Template Center: Central library, Version control, Approval workflows, Controlled sharing
     - Optional add-ons: Inventory-lite, Basic finance, Field reporting (with "only if you truly want them" note)
   - Key line below: "We only offer modules we can implement properly..."

3. **Differentiator Block**
   - Headline: "Software without adoption failure."
   - 4 points: roles/permissions, clean migration, SharePoint integration, monthly support

4. **Pricing Note + CTA**
   - "Software subscription starts from EUR X per month..."
   - "Setup is included in some packages..."
   - CTA: "Get software pricing" -> /book

### 3.4 AI Tools Page (/tools)

**Sections:**
1. **Hero** (Poster Mode - emerald plate)
   - Headline: "Tools that turn messy inputs into structured outputs."
   - Subheadline: "Run an audit or generate a draft..."
   - Primary CTA: "Run a Free Audit"
   - Secondary CTA: "Book a Call"

2. **Tool Listing** (Interface Mode)
   - 3 tool cards with full details:
     - **SOP Draft Builder**
       - Outputs: Structured SOP draft, Roles and responsibilities, Exceptions and escalation, QA checklist
       - For: Teams documenting a process for the first time or standardizing execution
       - Link: "Want us to implement this?" -> /pricing#internal-execution
     - **Brand Consistency Audit**
       - Outputs: Consistency report, Priority fixes, Guideline gaps
       - For: Teams with inconsistent brand assets across documents and web
       - Link: "Want us to implement this?" -> /pricing#external-credibility
     - **Landing Page Critique**
       - Outputs: Conversion friction notes, Hierarchy fixes, Clarity improvements
       - For: Teams optimizing a marketing page for better conversion
       - Link: "Want us to implement this?" -> /pricing#external-credibility

3. **Email Capture Block**
   - Headline: "Download the full report as a PDF."
   - Copy: "Enter your email and receive a downloadable report plus a one-page implementation plan."
   - Email input + "Get the PDF" button
   - Success state: Download link (placeholder) + "Book a Call" CTA

### 3.5 Pricing Page (/pricing)

**Sections:**
1. **Hero** (Interface Mode with clean header)
   - No heavy poster; clean pricing focus

2. **Decision Helper**
   - Headline: "Not sure what to pick?"
   - 3 buttons with smooth-scroll:
     - "We need external credibility (Brand + Web)" -> #external-credibility
     - "We need internal execution (SharePoint + SOPs)" -> #internal-execution
     - "We need both (Foundation Build)" -> #foundation-build

3. **Included in Every Package Strip**
   - 5 items: Clear scope, Timeline, Documentation, Handover session, Optional retainer

4. **Package Groups** (with anchor IDs)
   - **#external-credibility**: Brand + Web packages
   - **#internal-execution**: SharePoint + SOPs packages
   - **#foundation-build**: Foundation Build combined package
   - Each package shows: one-line "who this is for", starting price visible

5. **Final CTA**
   - Headline: "Get a fixed scope and timeline."
   - Primary: "Book a Call"
   - Secondary: "Run a Free Audit"

### 3.6 Supporting Pages

**Work (/work)**
- Interface Mode with Poster Mode header
- Grid of proof tiles with modals or anchor sections:
  - Sample SharePoint architecture walkthrough
  - Sample SOP pack (TOC + excerpt)
  - Before and after landing page with rationale
  - Brand system excerpt (guideline pages)
- Neutral placeholder labels: "Request sample deliverables"

**About (/about)**
- Clean, minimal, structured
- Short credible description of ADSI
- No fluff, operational tone
- CTA to Book a Call

**Book (/book)**
- Qualification form layout:
  - Name, Email, Company
  - What do you need? (dropdown or checkboxes)
  - Brief description field
- Clear promise of next steps
- Placeholder for scheduling integration

**Delivery Process (/process)**
- Expanded 5-step process from Home
- More detail but still scannable
- Steps: Intake, Architecture, Build, Handover, Optional Retainer
- Interface Mode layout

**Resources (/resources)**
- List layout for future posts/templates
- Empty state with appropriate messaging
- Clean card-based list structure

**Contact (/contact)**
- Contact form with validation
- Direct email placeholder display
- Clean Interface Mode layout

**Privacy (/privacy) and Terms (/terms)**
- Clean legal page templates
- Proper heading hierarchy
- Readable body text with Interface Mode styling

---

## Phase 4: Routing and Navigation

Update `App.tsx` with all routes:
- `/` - Home
- `/services` - Services
- `/software` - Software
- `/tools` - AI Tools
- `/work` - Work/Portfolio
- `/pricing` - Pricing
- `/about` - About
- `/book` - Book a Call
- `/process` - Delivery Process
- `/resources` - Resources
- `/contact` - Contact
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

---

## Phase 5: Content Management

Create `src/lib/content.ts` with all copy from specification:
- Centralized object with page sections and exact copy
- No invented positioning copy
- No marketing fluff or em dashes
- No mention of internal build tools

---

## Technical Requirements

### Accessibility
- Keyboard focus states on all interactive elements (lavender ring)
- Proper heading hierarchy (h1 per page, descending)
- Sufficient color contrast (WCAG AA minimum)
- ARIA labels where needed
- Skip navigation link

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Motion
- Duration: 160-220ms
- Easing: ease-out
- Allowed: button hover, card hover lift, drawer slide, modal fade
- No continuous animated backgrounds

### Form Validation
- Use zod for schema validation
- Client-side validation with proper error messages
- Input length limits
- Proper encoding for any external API calls

---

## Implementation Order

1. **Foundation** (CSS tokens, Tailwind config, fonts)
2. **Logo assets** (copy SVGs, create Logo component)
3. **Core components** (Header, Footer, Layout, Buttons)
4. **Section components** (Hero, CardGrid, Steps, etc.)
5. **Home page** (all sections)
6. **Core pages** (Services, Software, AI Tools, Pricing)
7. **Supporting pages** (Work, About, Book, Process, Resources, Contact, Privacy, Terms)
8. **Polish** (accessibility audit, responsive testing, motion refinement)

---

## File Count Estimate

- ~15 new page files
- ~20 new component files
- 2 asset files (logo SVGs)
- 1 content file
- 2 config updates (Tailwind, CSS)

Total: approximately 40 new/modified files
