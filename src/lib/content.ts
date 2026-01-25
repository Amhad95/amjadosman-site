// ADSI Website Content - Source of Truth
// All copy must match exactly. No marketing fluff. No em dashes.

export const siteContent = {
  meta: {
    title: "ADSI - Applied Design and Strategy Institute",
    description: "Design and operating systems for teams that need to move fast without losing control.",
  },

  navigation: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "Software", href: "/software" },
      { label: "AI Tools", href: "/tools" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Book a Call", href: "/book" },
    footer: [
      { label: "Delivery Process", href: "/process" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },

  home: {
    hero: {
      headline: "Design and operating systems for teams that need to move fast without losing control.",
      subheadline: "ADSI builds the customer-facing layer and the internal execution layer. Brand, web, SharePoint, SOPs, and subscription software. Productized scope. Clear timelines. Clean handover. Optional monthly support.",
      credibilityStrip: "Productized scope. Clear timelines. Clean handover. Optional monthly support.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "Run a Free Audit", href: "/tools" },
    },
    whatWeDeliver: {
      headline: "Everything you need to look credible and run cleanly.",
      cards: [
        {
          title: "Brand and Communications",
          description: "Logo, identity system, pitch decks, and collateral that actually get used.",
        },
        {
          title: "Web and CMS",
          description: "Marketing sites and landing pages built for conversion and easy updates.",
        },
        {
          title: "Digital Apps",
          description: "Client portals, dashboards, and lightweight internal tools.",
        },
        {
          title: "Internal Operations",
          description: "SharePoint, SOPs, templates, onboarding packs, and governance documentation.",
        },
        {
          title: "Subscription Software",
          description: "CRM, operations workspace, and document center. Deployed and managed for you.",
        },
      ],
      cta: { label: "See packages", href: "/pricing" },
    },
    outcomes: {
      headline: "The outcomes teams pay for.",
      items: [
        "Credibility that closes deals faster.",
        "Internal systems people actually use.",
        "Documentation that survives staff turnover.",
        "Software that stays adopted.",
        "Fewer meetings. Cleaner handover.",
      ],
    },
    howWeWork: {
      headline: "Structured delivery. Minimal meetings.",
      steps: [
        { title: "Intake", description: "Brief call. Requirements doc. Scope locked." },
        { title: "Architecture", description: "Structure and specifications confirmed before build." },
        { title: "Build", description: "Execution in sprints. Updates async." },
        { title: "Handover", description: "Documentation, training, and clean file transfer." },
        { title: "Optional Retainer", description: "Monthly support if you want ongoing coverage." },
      ],
      cta: { label: "See how delivery works", href: "/process" },
    },
    proofTiles: {
      headline: "Proof you can evaluate quickly.",
      tiles: [
        { title: "SharePoint walkthrough", description: "See a sample architecture in action." },
        { title: "SOP pack", description: "Table of contents and excerpt from a real pack." },
        { title: "Before and after", description: "Landing page with rationale." },
        { title: "Brand excerpt", description: "Guideline pages from a delivered system." },
      ],
      cta: { label: "See work", href: "/work" },
    },
    aiTools: {
      headline: "Get a useful output in minutes.",
      subheadline: "Our free tools generate drafts and audits. Use them now, or let us implement the results.",
      tools: [
        { title: "SOP Draft Builder", description: "Generate a structured SOP draft from a messy process description." },
        { title: "Brand Consistency Audit", description: "Get a consistency report across your assets." },
        { title: "Landing Page Critique", description: "Receive conversion friction notes and hierarchy fixes." },
      ],
      cta: { label: "Explore AI tools", href: "/tools" },
    },
    pricingTeaser: {
      headline: "Clear packages. No vague billing.",
      description: "Foundation Build starts at a fixed price for brand, web, SharePoint, and SOPs. Internal Ops Setup available separately. Software subscription optional.",
      cta: { label: "View pricing and packages", href: "/pricing" },
    },
    finalCta: {
      headline: "If you want a clean plan, book a short call.",
      cta: { label: "Book a Call", href: "/book" },
    },
  },

  services: {
    hero: {
      headline: "Project services with clean scope and real deliverables.",
      subheadline: "ADSI ships systems that teams adopt. Not decks that gather dust. Not tools that get abandoned. Real infrastructure for external credibility and internal execution.",
      primaryCta: { label: "Book a Call", href: "/book" },
    },
    tracks: [
      {
        id: "external-credibility",
        title: "Track A: External credibility",
        description: "What clients, investors, and partners see.",
        items: [
          { title: "Brand system", description: "Logo, identity, guidelines, templates." },
          { title: "Website and CMS", description: "Marketing site built for conversion and updates." },
          { title: "Sales and pitch materials", description: "Decks, one-pagers, proposals that close." },
        ],
      },
      {
        id: "internal-execution",
        title: "Track B: Internal execution",
        description: "What your team uses every day.",
        items: [
          { title: "SharePoint", description: "Intranet, document libraries, team hubs." },
          { title: "SOP library", description: "Procedures that get followed." },
          { title: "Templates and governance", description: "Consistent outputs, clear accountability." },
          { title: "Onboarding pack", description: "New hires productive faster." },
        ],
      },
      {
        id: "workflow-automation",
        title: "Track C: Workflow automation",
        description: "Custom tools that fit your process.",
        items: [
          { title: "Portals", description: "Client or vendor facing interfaces." },
          { title: "Dashboards", description: "Operational visibility without spreadsheet chaos." },
          { title: "Workflow apps", description: "Approvals, requests, tracking." },
          { title: "Lightweight internal tools", description: "Custom solutions for specific needs." },
        ],
      },
    ],
    ctaBand: {
      primaryCta: { label: "View pricing and packages", href: "/pricing" },
      secondaryCta: { label: "Book a Call", href: "/book" },
    },
  },

  software: {
    hero: {
      headline: "Subscription software, deployed as part of your operating system.",
      subheadline: "ADSI provides selected operational software modules deployed, configured, and managed for your team. Not self-serve SaaS. Not a platform you figure out alone.",
      primaryCta: { label: "Request software access", href: "/book" },
      secondaryCta: { label: "Book a Call", href: "/book" },
    },
    modules: {
      headline: "Core modules available by subscription.",
      items: [
        {
          title: "CRM (Core)",
          features: ["Contacts", "Pipeline", "Tasks", "Email templates", "Basic reporting"],
        },
        {
          title: "Operations Workspace",
          features: ["Requests and approvals", "Internal tickets", "Dashboards", "Role-based access"],
        },
        {
          title: "Document and Template Center",
          features: ["Central library", "Version control", "Approval workflows", "Controlled sharing"],
        },
        {
          title: "Optional add-ons",
          features: ["Inventory-lite", "Basic finance", "Field reporting"],
          note: "Only if you truly want them.",
        },
      ],
      keyLine: "We only offer modules we can implement properly and support long-term.",
    },
    differentiator: {
      headline: "Software without adoption failure.",
      points: [
        "Roles and permissions configured for your structure.",
        "Clean migration from your current tools.",
        "SharePoint integration where it makes sense.",
        "Monthly support included.",
      ],
    },
    pricing: {
      note: "Software subscription starts from EUR 500 per month per module.",
      setupNote: "Setup is included in Foundation Build packages or available separately.",
      cta: { label: "Get software pricing", href: "/book" },
    },
  },

  tools: {
    hero: {
      headline: "Tools that turn messy inputs into structured outputs.",
      subheadline: "Run an audit or generate a draft. Get a useful output in minutes. Then decide if you want us to implement it properly.",
      primaryCta: { label: "Run a Free Audit", href: "#tools-list" },
      secondaryCta: { label: "Book a Call", href: "/book" },
    },
    list: [
      {
        title: "SOP Draft Builder",
        description: "Generate a structured SOP draft from a messy process description.",
        illustration: "document" as const,
        href: "/tools/sop-builder",
      },
      {
        title: "Brand Consistency Audit",
        description: "Get a consistency report across your assets with priority fixes.",
        illustration: "brand" as const,
        href: "/tools/brand-audit",
      },
      {
        title: "Landing Page Critique",
        description: "Receive conversion friction notes and hierarchy fixes.",
        illustration: "website" as const,
        href: "/tools/page-critique",
      },
      {
        title: "Process Flow Mapper",
        description: "Turn workflow descriptions into visual process diagrams.",
        illustration: "tree" as const,
        href: "/tools/process-mapper",
      },
      {
        title: "Dashboard Requirements Builder",
        description: "Generate a dashboard spec from your reporting needs.",
        illustration: "dashboard" as const,
        href: "/tools/dashboard-builder",
      },
      {
        title: "KPI Audit",
        description: "Analyze your metrics and get recommendations for tracking.",
        illustration: "chart" as const,
        href: "/tools/kpi-audit",
      },
    ],
    emailCapture: {
      headline: "Download the full report as a PDF.",
      description: "Enter your email and receive a downloadable report plus a one-page implementation plan.",
      buttonLabel: "Get the PDF",
      successMessage: "Check your inbox for the report.",
      downloadLabel: "Download PDF",
      followUpCta: { label: "Book a Call", href: "/book" },
    },
  },

  pricing: {
    hero: {
      headline: "Packages with clear scope and fixed pricing.",
      subheadline: "Pick what you need. Get a timeline. No vague billing.",
    },
    decisionHelper: {
      headline: "Not sure what to pick?",
      options: [
        { label: "We need external credibility (Brand + Web)", anchor: "#external-credibility" },
        { label: "We need internal execution (SharePoint + SOPs)", anchor: "#internal-execution" },
        { label: "We need both (Foundation Build)", anchor: "#foundation-build" },
      ],
    },
    includedStrip: {
      headline: "Included in every package",
      items: ["Clear scope", "Timeline", "Documentation", "Handover session", "Optional retainer"],
    },
    packages: {
      externalCredibility: {
        id: "external-credibility",
        title: "External Credibility",
        description: "Brand, web, and sales materials.",
        items: [
          {
            title: "Brand System",
            whoFor: "Teams without a consistent identity.",
            startingPrice: "From EUR 8,000",
            includes: ["Logo and identity", "Brand guidelines", "Template pack", "Collateral design"],
          },
          {
            title: "Website and CMS",
            whoFor: "Teams that need a marketing site that converts.",
            startingPrice: "From EUR 12,000",
            includes: ["Marketing site", "CMS setup", "SEO foundation", "Analytics"],
          },
          {
            title: "Sales Materials",
            whoFor: "Teams closing deals with outdated decks.",
            startingPrice: "From EUR 5,000",
            includes: ["Pitch deck", "One-pagers", "Proposal templates"],
          },
        ],
      },
      internalExecution: {
        id: "internal-execution",
        title: "Internal Execution",
        description: "SharePoint, SOPs, and operational infrastructure.",
        items: [
          {
            title: "SharePoint Setup",
            whoFor: "Teams with messy file storage and no intranet.",
            startingPrice: "From EUR 10,000",
            includes: ["Intranet architecture", "Document libraries", "Team hubs", "Permissions"],
          },
          {
            title: "SOP Library",
            whoFor: "Teams without documented processes.",
            startingPrice: "From EUR 6,000",
            includes: ["Process documentation", "Role mapping", "QA checklists", "Update workflow"],
          },
          {
            title: "Onboarding Pack",
            whoFor: "Teams with slow new hire ramp-up.",
            startingPrice: "From EUR 4,000",
            includes: ["First-week guide", "Role-specific training", "Checklists", "Video walkthroughs"],
          },
        ],
      },
      foundationBuild: {
        id: "foundation-build",
        title: "Foundation Build",
        description: "Everything you need to look credible externally and run cleanly internally.",
        whoFor: "Teams building proper infrastructure from scratch or replacing fragmented systems.",
        startingPrice: "From EUR 35,000",
        includes: [
          "Brand system",
          "Website and CMS",
          "SharePoint setup",
          "SOP library",
          "Onboarding pack",
          "Software setup (optional)",
        ],
        timeline: "Typical delivery: 8-12 weeks",
      },
    },
    finalCta: {
      headline: "Get a fixed scope and timeline.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "Run a Free Audit", href: "/tools" },
    },
  },

  work: {
    hero: {
      headline: "Proof you can evaluate.",
      subheadline: "Sample deliverables from real projects. Review the quality before you commit.",
    },
    tiles: [
      {
        title: "SharePoint Architecture Walkthrough",
        description: "Interactive tour of intranet structure, document libraries, and permissions.",
        thumbnail: null,
        href: "/work/sharepoint-case-study",
        cta: "View case study",
      },
      {
        title: "SOP Library Implementation",
        description: "Complete procedure library with table of contents and role mapping.",
        thumbnail: null,
        href: "/work/sop-case-study",
        cta: "View case study",
      },
      {
        title: "Landing Page Redesign",
        description: "Conversion-focused redesign with before/after comparison and rationale.",
        thumbnail: null,
        href: "/work/landing-page-case-study",
        cta: "View case study",
      },
      {
        title: "Brand System Delivery",
        description: "Complete identity system from logo to guidelines to template pack.",
        thumbnail: null,
        href: "/work/brand-case-study",
        cta: "View case study",
      },
    ],
    requestCta: {
      headline: "Want to see more?",
      description: "Request sample deliverables relevant to your project.",
      cta: { label: "Request samples", href: "/contact" },
    },
  },

  about: {
    hero: {
      headline: "Applied Design and Strategy Institute",
      subheadline: "We build the systems that make teams look credible and run cleanly.",
    },
    content: {
      intro: "ADSI delivers design infrastructure and operational systems for teams that need to move fast without losing control.",
      approach: [
        "We productize scope so projects stay on track.",
        "We document everything so handover is clean.",
        "We support long-term so systems stay adopted.",
      ],
      focus: "Our focus: brand, web, SharePoint, SOPs, and subscription software. Deployed and managed for clients, not self-serve.",
    },
    cta: { label: "Book a Call", href: "/book" },
  },

  book: {
    hero: {
      headline: "Book a call",
      subheadline: "Short call to understand your needs and confirm scope.",
    },
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "company", label: "Company", type: "text", required: true },
        {
          name: "needs",
          label: "What do you need?",
          type: "select",
          options: [
            "Brand and identity",
            "Website",
            "SharePoint and intranet",
            "SOPs and documentation",
            "Software modules",
            "Foundation Build (everything)",
            "Not sure yet",
          ],
          required: true,
        },
        { name: "description", label: "Brief description", type: "textarea", required: false },
      ],
      submitLabel: "Submit request",
    },
    nextSteps: {
      headline: "What happens next",
      steps: [
        "We review your submission within 1 business day.",
        "You receive a calendar link for a 30-minute call.",
        "After the call, you get a scope document with timeline and pricing.",
      ],
    },
  },

  process: {
    hero: {
      headline: "How we deliver",
      subheadline: "Structured process. Minimal meetings. Clean handover.",
    },
    steps: [
      {
        number: 1,
        title: "Intake",
        description: "Brief call to understand your needs. We document requirements and lock scope before any build work begins.",
        outcome: "Requirements document + fixed scope",
      },
      {
        number: 2,
        title: "Architecture",
        description: "Structure and specifications confirmed. We show you the blueprint before execution.",
        outcome: "Architecture deck + approval to proceed",
      },
      {
        number: 3,
        title: "Build",
        description: "Execution in focused sprints. Updates delivered async. No unnecessary meetings.",
        outcome: "Working deliverables in stages",
      },
      {
        number: 4,
        title: "Handover",
        description: "Documentation, training, and clean file transfer. You own everything.",
        outcome: "Complete documentation + training session",
      },
      {
        number: 5,
        title: "Optional Retainer",
        description: "Monthly support if you want ongoing coverage. Updates, fixes, and optimization.",
        outcome: "Dedicated support hours each month",
      },
    ],
    cta: { label: "Book a Call", href: "/book" },
  },

  resources: {
    hero: {
      headline: "Resources",
      subheadline: "Guides, templates, and insights for teams building operational infrastructure.",
    },
    emptyState: {
      message: "Resources coming soon. Subscribe to get notified.",
      cta: { label: "Get notified", href: "/contact" },
    },
  },

  contact: {
    hero: {
      headline: "Contact",
      subheadline: "Questions, sample requests, or just want to talk.",
    },
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
      submitLabel: "Send message",
    },
    directEmail: {
      label: "Or email directly",
      email: "hello@adsi.io",
    },
  },

  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 2025",
  },

  terms: {
    title: "Terms of Service",
    lastUpdated: "January 2025",
  },
};
