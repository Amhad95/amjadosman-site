import { useLocale, type Locale } from "@/lib/locale";

const siteContentEn = {
  meta: {
    title: "Amjad Osman - Brand, Operations, Software, and AI Systems",
    description:
      "Amjad Osman helps growing teams improve brand, websites, internal operations, and practical AI workflows with clear scope and clean handover.",
  },

  navigation: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "Software", href: "/software" },
      { label: "Resources", href: "/resources" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ],
    servicesDropdown: [
      { label: "Services Overview", href: "/services" },
      { label: "Brand and Growth Systems", href: "/services/brand" },
      { label: "Internal Operations Systems", href: "/services/ops" },
      { label: "AI Agents and Automation", href: "/services/agents" },
    ],
    resourcesDropdown: [
      { label: "Insight notes", href: "/resources" },
      { label: "Self-help tools", href: "/tools" },
    ],
    cta: { label: "Book a Call", href: "/book" },
    footer: [
      { label: "Delivery Process", href: "/process" },
      { label: "Insights", href: "/resources" },
      { label: "Self-help tools", href: "/tools" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    languageToggle: {
      english: "EN",
      arabic: "عربي",
      label: "Language",
    },
  },

  footer: {
    tagline:
      "Amjad Osman designs brand, operations, software, and AI systems that help growing teams move with more clarity.",
    pagesLabel: "Pages",
    legalLabel: "Legal",
    copyright: "All rights reserved.",
  },

  common: {
    skipToContent: "Skip to main content",
    backToResources: "Back to Resources",
    backToWork: "Back to Work",
    articleNotFound: "Article not found",
    articleUnavailable: "This article doesn't exist or has been removed.",
    caseStudyNotFound: "Case study not found",
    caseStudyUnavailable: "The case study you requested is not available right now.",
    readArticle: "Read article",
    caseStudies: "Case studies",
    caseStudiesSubheadline: "Real projects, outcomes, and implementation lessons.",
    lastUpdatedLabel: "Last updated",
    workSectionHeadline: "What we built",
    workApproachLabel: "Approach",
    workDeliverablesLabel: "Deliverables",
    workChangesLabel: "What changed",
    clientProfileLabel: "Client profile",
    challengeLabel: "Challenge",
    resourceCtaHeadline: "Turn this into delivery.",
    resourceCtaDescription:
      "I can implement the system behind the guide and show the pricing.",
  },

  home: {
    hero: {
      headline:
        "Sharper brand, cleaner operations, and practical AI systems for growing teams.",
      subheadline:
        "I help ambitious teams improve how they show up, how they operate, and how they scale. Brand systems, websites, SOPs, workflow design, and automation delivered with clear scope and clean handover.",
      credibilityStrip:
        "Clear scope. Faster decisions. Clean handover. Ongoing support if you need it.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "Run a Free Audit", href: "/tools" },
    },
    whatWeDeliver: {
      headline: "Where I usually step in.",
      subheadline:
        "Brand, web, operations, and software support delivered as one practical system.",
      eyebrow: "Services",
      cards: [
        {
          title: "Brand and Communications",
          description:
            "Identity, messaging, and materials that make the business feel more established.",
        },
        {
          title: "Web and CMS",
          description:
            "Websites and landing pages built to convert and stay easy to update.",
        },
        {
          title: "Workflow Apps",
          description:
            "Client portals, dashboards, and operational tools shaped around real workflows.",
        },
        {
          title: "Internal Operations",
          description:
            "SharePoint, SOPs, templates, onboarding packs, and governance foundations.",
        },
        {
          title: "Managed Software",
          description:
            "CRM, operations workspace, and document systems configured around your team.",
        },
        {
          title: "AI Agents",
          description:
            "Practical agent workflows for routing, drafting, and knowledge support.",
        },
      ],
      cta: { label: "See packages", href: "/pricing" },
    },
    outcomesImpact: {
      eyebrow: "Outcomes",
      headline: "What working together actually produces",
      subheadline:
        "Six things clients consistently walk away with — regardless of whether the engagement is brand, operations, web, or AI.",
      items: [
        {
          title: "You know exactly what you're getting",
          body: 'A one-page brief per engagement — no ambiguity about scope, timeline, or what "done" means.',
        },
        {
          title: "Your brand holds together under pressure",
          body: "Identity, messaging, and visual standards that don't fall apart when a new team member joins.",
        },
        {
          title: "Your site earns its keep",
          body: "A web presence that converts visitors into conversations, not just a digital brochure.",
        },
        {
          title: "Your team stops re-explaining things",
          body: "SOPs, governance, and templates that new people can pick up without hand-holding.",
        },
        {
          title: "Decisions get made faster",
          body: "Dashboards and briefs that cut the opinions loop and give leads clarity when it counts.",
        },
        {
          title: "AI tools your team actually uses",
          body: "Workflows with guardrails and adoption hooks — not automation for its own sake.",
        },
      ],
      primaryCta: { label: "Book a 20-minute fit check", href: "/book" },
      secondaryCta: { label: "See case studies", href: "/work" },
    },
    deliveryProcess: {
      eyebrow: "Delivery",
      headline: "Structured delivery, fewer meetings",
      subheadline:
        "Clear artifacts, async updates, and focused checkpoints. You get momentum without calendar chaos.",
      rhythmLabel: "Delivery rhythm",
      marqueeText:
        "[ intake ] → [ map ] → [ design ] → [ build ] → [ launch ] → [ iterate ] → ",
      expectationsLabel: "What you can expect",
      steps: [
        {
          title: "Align",
          ascii: "[ ALIGN ]",
          summary:
            "Scope, success metrics, constraints, and risks are locked before delivery starts.",
          artifacts: ["One-page brief", "Success metrics", "Risks & assumptions"],
          touchpoints: "1 kickoff",
        },
        {
          title: "Map",
          ascii: "[ MAP ]",
          summary:
            "Research findings and flow mapping create a shared model for design and implementation.",
          artifacts: ["Journey / flow map", "Requirements set", "Prioritisation list"],
          touchpoints: "1 review",
        },
        {
          title: "Design",
          ascii: "[ DESIGN ]",
          summary:
            "UX and interface decisions are validated early with async feedback loops.",
          artifacts: ["Clickable prototype", "Design specs", "Content outlines"],
          touchpoints: "Async reviews + 1 checkpoint",
        },
        {
          title: "Build",
          ascii: "[ BUILD ]",
          summary:
            "Implementation moves in working increments with integration and QA built in.",
          artifacts: ["Working increments", "QA notes", "Release plan"],
          touchpoints: "Weekly 20-min checkpoint (only if needed)",
        },
        {
          title: "Launch",
          ascii: "[ LAUNCH ]",
          summary:
            "Launch with handover, training, and a practical backlog for continuous improvements.",
          artifacts: ["Handover pack", "Tracking plan", "Iteration backlog"],
          touchpoints: "1 handover",
        },
      ],
      expectations: [
        "Weekly async update",
        "Decision log",
        "Scope control",
        "Working demos over slides",
      ],
    },
    outcomes: {
      headline: "What clients are really buying.",
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
        {
          title: "Architecture",
          description: "Structure and specifications confirmed before build.",
        },
        { title: "Build", description: "Execution in sprints. Updates async." },
        {
          title: "Handover",
          description: "Documentation, training, and clean file transfer.",
        },
        {
          title: "Optional Retainer",
          description: "Monthly support if you want ongoing coverage.",
        },
      ],
      cta: { label: "See how delivery works", href: "/process" },
    },
    proofTiles: {
      headline: "Case studies you can evaluate quickly.",
      subheadline:
        "Selected real projects from strategy, systems, product, and delivery work.",
      eyebrow: "Work",
      tiles: [
        {
          title: "Radiance Co. Ltd.",
          description: "Solar power systems for health facilities in Red Sea and Kassala.",
        },
        {
          title: "TadmeenPro",
          description: "An operations core for insurers that is ready for AI.",
        },
        {
          title: "National Trade Facilitation Platform",
          description: "A single-window platform with A4 Group for a confidential authority.",
        },
      ],
      tileCta: "View case study",
      cta: { label: "See all case studies", href: "/work" },
    },
    aiTools: {
      eyebrow: "Self-help tools",
      headline: "Get a useful output in minutes.",
      subheadline:
        "These free tools give surface-level drafts and audits. Use them now, or let me implement the results properly.",
      tools: [
        {
          title: "SOP Draft Builder",
          description:
            "Generate a structured SOP draft from a messy process description.",
        },
        {
          title: "Brand Consistency Audit",
          description:
            "Get a consistency report across your assets with priority fixes.",
        },
        {
          title: "Landing Page Critique",
          description: "Receive conversion friction notes and hierarchy fixes.",
        },
      ],
      cta: { label: "Explore self-help tools", href: "/tools" },
    },
    pricingTeaser: {
      headline: "Clear packages. No vague billing.",
      description:
        "Choose a focused package, a broader delivery project, or ongoing support. Every engagement starts with scope, timing, and a concrete next step.",
      cta: { label: "View pricing and packages", href: "/pricing" },
    },
    finalCta: {
      headline: "Book the right next step.",
      description: "I can help you choose the starting package and show the pricing.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  services: {
    hero: {
      headline: "Choose the service track that fits your next bottleneck.",
      subheadline:
        "Whether you need a stronger market presence, cleaner internal operations, or practical automation, I scope the work around usable deliverables your team can keep building on.",
      primaryCta: { label: "Book a Call", href: "/book" },
    },
    tracks: [
      {
        id: "external-credibility",
        title: "Track A: External credibility",
        description: "What clients, investors, and partners see.",
        items: [
          { title: "Brand system", description: "Logo, identity, guidelines, templates." },
          {
            title: "Website and CMS",
            description: "Marketing site built for conversion and updates.",
          },
          {
            title: "Sales and pitch materials",
            description: "Decks, one-pagers, proposals that close.",
          },
        ],
      },
      {
        id: "internal-execution",
        title: "Track B: Internal execution",
        description: "What your team uses every day.",
        items: [
          { title: "SharePoint", description: "Intranet, document libraries, team hubs." },
          { title: "SOP library", description: "Procedures that get followed." },
          {
            title: "Templates and governance",
            description: "Consistent outputs, clear accountability.",
          },
          { title: "Onboarding pack", description: "New hires productive faster." },
        ],
      },
      {
        id: "workflow-automation",
        title: "Track C: Workflow automation",
        description: "Custom tools that fit your process.",
        items: [
          { title: "Portals", description: "Client or vendor facing interfaces." },
          {
            title: "Dashboards",
            description: "Operational visibility without spreadsheet chaos.",
          },
          { title: "Workflow apps", description: "Approvals, requests, tracking." },
          {
            title: "Lightweight internal tools",
            description: "Custom solutions for specific needs.",
          },
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
      headline:
        "Operational software configured around how your team actually works.",
      subheadline:
        "I deploy focused CRM, operations, and document workflows so your team gets a usable system, not another tool to figure out alone.",
      primaryCta: { label: "Book a Demo", href: "/book" },
      secondaryCta: { label: "Book a Call", href: "/book" },
    },
    modules: {
      headline: "Core modules available by subscription.",
      items: [
        {
          title: "CRM (Core)",
          features: [
            "Contacts",
            "Pipeline",
            "Tasks",
            "Email templates",
            "Basic reporting",
          ],
        },
        {
          title: "Operations Workspace",
          features: [
            "Requests and approvals",
            "Internal tickets",
            "Dashboards",
            "Role-based access",
          ],
        },
        {
          title: "Document and Template Center",
          features: [
            "Central library",
            "Version control",
            "Approval workflows",
            "Controlled sharing",
          ],
        },
        {
          title: "Optional add-ons",
          features: ["Inventory-lite", "Basic finance", "Field reporting"],
          note: "Only if you truly want them.",
        },
      ],
      keyLine:
        "I only offer modules I can implement properly and support long-term.",
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
      setupNote:
        "Setup is included in Foundation Build packages or available separately.",
      cta: { label: "Book a Pricing Call", href: "/book" },
    },
  },

  tools: {
    hero: {
      headline: "Self-help tools that turn messy inputs into structured outputs.",
      subheadline:
        "Run a surface-level audit or generate a practical draft. Get a useful starting point in minutes. Then decide if you want me to implement it properly.",
      primaryCta: { label: "Run a Free Audit", href: "#tools-list" },
      secondaryCta: { label: "Book a Call", href: "/book" },
    },
    list: [
      {
        title: "SOP Draft Builder",
        description:
          "Generate a structured SOP draft from a messy process description.",
        illustration: "document" as const,
        href: "/tools/sop-builder",
      },
      {
        title: "Brand Consistency Audit",
        description:
          "Get a consistency report across your assets with priority fixes.",
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
        description:
          "Analyze your metrics and get recommendations for tracking.",
        illustration: "chart" as const,
        href: "/tools/kpi-audit",
      },
    ],
    emailCapture: {
      headline: "Download the self-help tools starter pack.",
      description:
        "Enter your email to unlock a practical input checklist and a one-page implementation review guide.",
      buttonLabel: "Unlock the pack",
      successMessage: "Your starter pack is ready to download.",
      downloadLabel: "Download starter pack",
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
        {
          label: "We need external credibility (Brand + Web)",
          anchor: "#external-credibility",
        },
        {
          label: "We need internal execution (SharePoint + SOPs)",
          anchor: "#internal-execution",
        },
        {
          label: "We need both (Foundation Build)",
          anchor: "#foundation-build",
        },
      ],
    },
    includedStrip: {
      headline: "Included in every package",
      items: [
        "Clear scope",
        "Timeline",
        "Documentation",
        "Handover session",
        "Optional retainer",
      ],
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
            includes: [
              "Logo and identity",
              "Brand guidelines",
              "Template pack",
              "Collateral design",
            ],
          },
          {
            title: "Website and CMS",
            whoFor: "Teams that need a marketing site that converts.",
            startingPrice: "From EUR 12,000",
            includes: [
              "Marketing site",
              "CMS setup",
              "SEO foundation",
              "Analytics",
            ],
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
            includes: [
              "Intranet architecture",
              "Document libraries",
              "Team hubs",
              "Permissions",
            ],
          },
          {
            title: "SOP Library",
            whoFor: "Teams without documented processes.",
            startingPrice: "From EUR 6,000",
            includes: [
              "Process documentation",
              "Role mapping",
              "QA checklists",
              "Update workflow",
            ],
          },
          {
            title: "Onboarding Pack",
            whoFor: "Teams with slow new hire ramp-up.",
            startingPrice: "From EUR 4,000",
            includes: [
              "First-week guide",
              "Role-specific training",
              "Checklists",
              "Video walkthroughs",
            ],
          },
        ],
      },
      foundationBuild: {
        id: "foundation-build",
        title: "Foundation Build",
        description:
          "Everything you need to look credible externally and run cleanly internally.",
        whoFor:
          "Teams building proper infrastructure from scratch or replacing fragmented systems.",
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
      headline: "Case studies you can evaluate.",
      subheadline:
        "Real projects across strategy, systems, product, and delivery. Review the work before you commit.",
    },
    tiles: [
      {
        title: "Radiance Co. Ltd.",
        description:
          "Solar power systems for health facilities in Red Sea and Kassala.",
        thumbnail: null,
        href: "/work/radiance-co-ltd-solar-power-for-health-facilities-in-red-sea-and-kassala",
        cta: "View case study",
      },
      {
        title: "TadmeenPro",
        description:
          "An operations core for insurers that is ready for AI.",
        thumbnail: null,
        href: "/work/tadmeenpro-an-operations-core-for-insurers-that-is-ready-for-ai",
        cta: "View case study",
      },
      {
        title: "Talya Properties",
        description:
          "Steering a real estate business through a cooling market.",
        thumbnail: null,
        href: "/work/talya-properties-steering-a-real-estate-business-through-a-cooling-market",
        cta: "View case study",
      },
      {
        title: "National Trade Facilitation Platform",
        description:
          "A single-window platform with A4 Group for a confidential authority.",
        thumbnail: null,
        href: "/work/national-trade-facilitation-platform-with-a4-group-for-a-confidential-authority",
        cta: "View case study",
      },
    ],
    requestCta: {
      headline: "Scope similar work.",
      description:
        "I can shape the first engagement around your bottleneck, timeline, and price.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  about: {
    hero: {
      eyebrow: "How I work",
      headline: "I build the business layer around growing teams.",
      subheadline:
        "I help companies close the gap between strong underlying work and the brand, operations, and workflow systems that support it.",
      credibilityStrip:
        "Clear scope. Practical delivery. Clean handover. Ongoing support if useful.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
    story: {
      eyebrow: "About me",
      headline:
        "I do this work because growing businesses often outgrow the systems around good work.",
      subheadline:
        "The business may already be delivering strong outcomes, but the surrounding layer often starts falling behind as the company grows.",
      paragraphs: [
        "That gap can show up externally. The website, brand, or sales materials are not creating enough clarity or trust for buyers.",
        "It can also show up internally. Files are harder to find, SOPs are too thin, onboarding depends on memory, and repeat work keeps getting rebuilt from scratch.",
        "I close that gap with practical systems. I help teams strengthen how the business shows up, how it operates, and where automation can remove repeat work without creating more confusion.",
      ],
    },
    drivers: {
      eyebrow: "My why",
      headline: "What drives the way I work.",
      subheadline:
        "The work is shaped by a few practical beliefs about what actually helps growing teams move better.",
      items: [
        {
          title: "Clarity before execution",
          body: "We define the problem, the deliverables, and the decision points before the work starts multiplying.",
        },
        {
          title: "Adoption over launch-day polish",
          body: "If the team cannot keep using the system after delivery, the work is not finished properly.",
        },
        {
          title: "Structure that survives growth",
          body: "The output should stay useful when the company hires, changes roles, or adds complexity.",
        },
        {
          title: "Practical automation, not AI theatre",
          body: "Automation is only worth doing when it removes real friction and still keeps the right controls in place.",
        },
      ],
    },
    fit: {
      eyebrow: "Who I work best with",
      headline:
        "The fit is usually strongest when the business already has momentum.",
      subheadline:
        "I am usually most useful when the company is already doing meaningful work, but the business layer around that work needs catching up.",
      items: [
        {
          title: "Teams with strong underlying work",
          body: "The offer, service, or product is already valuable, but the way the business presents or runs it still feels behind.",
        },
        {
          title: "Companies feeling operational drag",
          body: "Growth has introduced more files, more handoffs, and more repeated questions than the current structure can handle cleanly.",
        },
        {
          title: "Leads carrying too much context themselves",
          body: "Too much of the business still depends on a few people remembering how everything works.",
        },
        {
          title: "Teams ready for practical AI",
          body: "The business wants automation to save time, but does not want to give up visibility, approvals, or sensible boundaries.",
        },
      ],
    },
    workingWithUs: {
      eyebrow: "Working together",
      headline: "The work is structured to stay clear, calm, and useful.",
      subheadline:
        "Clients usually want fewer meetings, faster decisions, and a final system they can actually keep using. That is how the work is set up.",
      steps: [
        {
          title: "Scope the real bottleneck",
          description:
            "We identify the business problem clearly and choose the right entry point instead of trying to fix everything at once.",
        },
        {
          title: "Build the right layer",
          description:
            "That might mean brand and website work, internal operations structure, or contained automation around repetitive tasks.",
        },
        {
          title: "Hand over cleanly",
          description:
            "The work is documented and transferred in a way the team can keep using after launch.",
        },
        {
          title: "Continue only if useful",
          description:
            "Retainers are available when ongoing support makes sense, but the initial delivery is meant to stand on its own.",
        },
      ],
      expectationsTitle: "What clients can expect",
      expectations: [
        "A clear scope before build begins",
        "Working milestones instead of late-stage surprises",
        "Documentation and handover guidance at delivery",
        "Optional retainers when ongoing support is useful",
      ],
    },
    cta: {
      headline: "See if I am the fit.",
      description:
        "Book a short call and I will tell you the right starting package.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  book: {
    hero: {
      headline: "Book a short call with Amjad",
      subheadline:
        "You will be redirected to the live Google Meet booking page to pick a time directly.",
    },
    redirectingMessage:
      "Redirecting you to the live Google Meet booking page now.",
    openBookingPage: "Open booking page",
  },

  process: {
    hero: {
      eyebrow: "Delivery process",
      headline: "How we deliver",
      subheadline: "Structured process. Minimal meetings. Clean handover.",
      credibilityStrip:
        "Clear entry point. Working milestones. Clean handover. Support only when useful.",
    },
    steps: [
      {
        number: 1,
        title: "Intake",
        description:
          "Brief call to understand your needs. We document requirements and lock scope before any build work begins.",
        outcome: "Requirements document + fixed scope",
      },
      {
        number: 2,
        title: "Architecture",
        description:
          "Structure and specifications confirmed. We show you the blueprint before execution.",
        outcome: "Architecture deck + approval to proceed",
      },
      {
        number: 3,
        title: "Build",
        description:
          "Execution in focused sprints. Updates delivered async. No unnecessary meetings.",
        outcome: "Working deliverables in stages",
      },
      {
        number: 4,
        title: "Handover",
        description:
          "Documentation, training, and clean file transfer. You own everything.",
        outcome: "Complete documentation + training session",
      },
      {
        number: 5,
        title: "Optional Retainer",
        description:
          "Monthly support if you want ongoing coverage. Updates, fixes, and optimization.",
        outcome: "Dedicated support hours each month",
      },
    ],
    cta: {
      headline: "Start with a clear scope.",
      description:
        "I will match the delivery process to the first problem you need to fix.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  resources: {
    hero: {
      eyebrow: "Insight notes",
      headline: "Practical resources for clearer delivery.",
      subheadline:
        "Articles and notes for teams improving brand, operations, software, and automation.",
      credibilityStrip:
        "Useful context. No theatre. Practical next steps when you are ready to build.",
    },
    emptyState: {
      message:
        "More guides are on the way. If you need something specific, reach out and I can point you in the right direction.",
      cta: { label: "Contact", href: "/contact" },
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      headline: "Tell me what you are trying to fix",
      subheadline:
        "Questions, project requests, and sample requests are all welcome.",
      credibilityStrip:
        "Short message. Clear next step. No pressure to start before the fit is obvious.",
    },
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
      submitLabel: "Send message",
      subject: "Website contact from",
      newMessage: "New contact message from the website",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      messageHeading: "Message:",
    },
    directEmail: {
      label: "Prefer email?",
      email: "hello@adsi.io",
    },
  },

  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    lastUpdated: "June 2026",
    subheadline:
      "How contact details, booking information, and site messages are handled.",
    credibilityStrip:
      "Minimal collection. Practical use. No resale of personal data.",
    sections: [
      {
        title: "Who is responsible for your data",
        body: [
          "This website is operated by Amjad Osman / ADSI as an EU-based independent service provider, unless a specific proposal or contract names a different contracting entity. For privacy questions, requests, or deletion enquiries, contact hello@adsi.io.",
          "For normal website enquiries, project discussions, bookings, and delivery communication, I act as the controller of the personal data I decide to collect and use. For client systems, documents, or datasets handled inside a paid engagement, the signed scope or data processing terms may define a different role, including processor or subcontractor.",
        ],
      },
      {
        title: "What this policy covers",
        body: [
          "This policy covers personal data processed through this website, booking links, email conversations, free self-help tools, project enquiries, and ordinary service delivery communication.",
          "It does not replace a project-specific data processing agreement, non-disclosure agreement, statement of work, or client security requirement. Where a signed project document conflicts with this website policy, the signed project document controls for that engagement.",
        ],
      },
      {
        title: "Personal data I may collect",
        body: [
          "I try to collect only what is needed to understand a request, reply properly, and deliver agreed work. Depending on how you interact with the site or services, this may include:",
        ],
        bullets: [
          "Contact details such as name, email address, company, role, country, and preferred communication channel.",
          "Project information you choose to send, including business goals, website URLs, brand assets, process descriptions, operational documents, or examples of current workflows.",
          "Booking information such as selected meeting time, meeting notes, calendar metadata, and any message you add to the booking form.",
          "Free tool inputs and outputs, such as text you paste into an audit, SOP builder, KPI audit, dashboard builder, or page critique tool.",
          "Technical information normally sent by browsers and hosting providers, such as IP address, device/browser type, approximate location, pages visited, timestamps, and security logs.",
          "Billing and commercial information if you become a client, such as proposal details, invoices, payment status, tax or business registration details, and contract records.",
        ],
      },
      {
        title: "Sensitive and confidential information",
        body: [
          "Please do not submit passwords, payment card numbers, government ID numbers, health information, special-category data, children’s data, or highly confidential client data through public forms or free tools unless I have specifically agreed a secure method with you.",
          "If a project requires sensitive, regulated, or confidential data, we should agree the handling method, access controls, retention period, and any data processing agreement before the data is shared.",
        ],
      },
      {
        title: "Why I use personal data",
        body: [
          "I use personal data for practical business purposes connected to this website and services:",
        ],
        bullets: [
          "To respond to enquiries, prepare proposals, and decide whether a project is a good fit.",
          "To schedule calls and manage calendar invitations.",
          "To run free self-help tools and return the requested output.",
          "To deliver agreed services, manage project communication, prepare documents, configure systems, and provide handover support.",
          "To maintain business records, invoices, accounting, compliance, and tax documentation.",
          "To protect the website, prevent abuse, debug errors, monitor service availability, and maintain security.",
          "To improve content, services, and tools based on aggregated or non-identifying usage patterns.",
        ],
      },
      {
        title: "Legal bases for EU/EEA users",
        body: [
          "Where the GDPR or similar EU/EEA data protection rules apply, I rely on one or more legal bases depending on the context:",
        ],
        bullets: [
          "Contract or pre-contract steps: when you ask for a proposal, book a call, or engage me to deliver services.",
          "Legitimate interests: to respond to business enquiries, maintain records, secure the website, improve services, and communicate with existing or prospective clients in a proportionate way.",
          "Consent: where I ask for optional permission, such as optional marketing emails or optional cookies if they are added later.",
          "Legal obligation: where records must be kept for accounting, tax, compliance, dispute, or regulatory reasons.",
        ],
      },
      {
        title: "Free tools and AI-assisted outputs",
        body: [
          "The free self-help tools are intended to provide surface-level audits, drafts, and structured starting points. They are not legal, financial, security, HR, or compliance advice. You should review outputs before using them operationally.",
          "Some tool or automation features may use third-party infrastructure or AI services to process the text you submit. Do not paste confidential, regulated, or sensitive data into free tools unless you are comfortable with that processing and the data is appropriate for the tool.",
        ],
      },
      {
        title: "Third-party services",
        body: [
          "This website and service workflow may rely on trusted third-party providers for hosting, analytics or diagnostics, calendar booking, email, document storage, payments, project management, automation, and AI-assisted processing. These providers process data only for the relevant operational purpose.",
          "Examples may include website hosting providers, calendar and meeting platforms, email providers, cloud document tools, payment or invoicing providers, and AI API providers. Each provider may also have its own privacy terms when you interact with it directly.",
        ],
      },
      {
        title: "International transfers",
        body: [
          "Because I work with clients in the EU, GCC, and other regions, and because common cloud providers may operate internationally, personal data may be processed outside your country. When EU/EEA personal data is transferred internationally, I aim to use appropriate safeguards such as reputable providers, contractual protections, EU adequacy decisions where available, or standard contractual clauses where relevant.",
          "For GCC clients, I aim to handle data in a way that respects applicable local privacy expectations and any project-specific requirements agreed in writing, including restrictions on cross-border transfers where they apply.",
        ],
      },
      {
        title: "How long I keep data",
        body: [
          "I keep personal data only as long as reasonably needed for the purpose it was collected, unless a longer period is required for legal, tax, accounting, dispute, or legitimate business reasons.",
        ],
        bullets: [
          "Enquiry and contact messages: usually kept for up to 24 months unless they become part of a client record.",
          "Project and delivery records: usually kept for up to 7 years where needed for business, tax, warranty, or dispute records.",
          "Free tool inputs and outputs: kept only as needed to provide the output, debug abuse or errors, or improve the tool, unless a tool states otherwise.",
          "Invoices, contracts, and accounting records: kept for the period required by applicable tax and accounting law.",
          "Security logs: kept for a limited period appropriate to security, debugging, and abuse prevention.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "Depending on where you are located, you may have rights to access, correct, delete, restrict, object to, or receive a copy of your personal data. EU/EEA users also have GDPR rights, including the right to complain to a supervisory authority.",
          "GCC privacy laws, including frameworks such as the UAE Personal Data Protection Law and Saudi Arabia’s Personal Data Protection Law, also recognise transparency and individual rights in various contexts. If those laws apply to your data, I will handle requests in line with the applicable project and legal context.",
          "To make a request, email hello@adsi.io. I may need to verify your identity before acting on the request. I aim to respond within one month where GDPR applies, unless the request is complex or the law allows more time.",
        ],
      },
      {
        title: "Security",
        body: [
          "I use reasonable technical and organisational measures to protect personal data, including controlled access, reputable hosting and cloud providers, account security practices, and project-specific access controls where needed.",
          "No website, email system, or cloud service can be guaranteed completely secure. If you believe information has been sent to me by mistake or there is a security issue, contact hello@adsi.io promptly.",
        ],
      },
      {
        title: "Cookies and analytics",
        body: [
          "This site currently aims to keep tracking minimal. If optional analytics, advertising pixels, or non-essential cookies are added later, the site should provide a clear notice and, where required, a consent choice.",
          "Essential technical storage may be used where needed for security, language preferences, routing, forms, or normal website operation.",
        ],
      },
      {
        title: "Changes to this policy",
        body: [
          "I may update this policy when the website, services, tools, providers, or legal requirements change. The latest version will be posted on this page with the updated date.",
        ],
      },
    ],
  },

  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    lastUpdated: "June 2026",
    subheadline:
      "Plain-language terms for using this website and starting a project conversation.",
    credibilityStrip:
      "Website use is simple. Paid work is governed by a separate written scope.",
    sections: [
      {
        title: "Who these terms apply to",
        body: [
          "These terms apply when you use this website, read articles, use free self-help tools, contact me, book a call, or discuss a potential project with Amjad Osman / ADSI.",
          "Paid services are governed by the written proposal, statement of work, invoice terms, data processing terms, or contract agreed for that engagement. If those documents conflict with these website terms, the signed project documents control for the paid engagement.",
        ],
      },
      {
        title: "Website content is general information",
        body: [
          "The articles, examples, tools, pricing descriptions, and page content on this website are provided for general business information. They are not legal, tax, financial, investment, employment, cybersecurity, procurement, medical, or regulated professional advice.",
          "You are responsible for reviewing outputs, decisions, workflows, documents, and recommendations before using them in your organisation.",
        ],
      },
      {
        title: "Free self-help tools",
        body: [
          "The free tools are designed to create surface-level audits, drafts, checklists, and structured starting points. They may be incomplete, inaccurate, or unsuitable for your specific context.",
          "Do not submit passwords, secret keys, payment details, special-category personal data, children’s data, regulated information, or confidential client material into free tools unless I have specifically agreed a secure process with you.",
          "Tool outputs do not create a client relationship, warranty, or obligation for me to implement anything unless we agree a paid scope in writing.",
        ],
      },
      {
        title: "Project enquiries and proposals",
        body: [
          "A call, email exchange, audit result, or proposal discussion does not create a paid engagement by itself. A project starts only when the scope, deliverables, price, payment terms, timeline, and handover expectations are agreed in writing.",
          "I may decline a project if the scope is unclear, outside my service area, legally sensitive without proper review, conflicts with another commitment, or requires access or assurances I cannot responsibly provide.",
        ],
      },
      {
        title: "Services I provide",
        body: [
          "Services may include brand systems, communication materials, websites and CMS work, internal operations systems, SOPs, workflow design, software configuration, dashboards, automation, and practical AI-agent workflows.",
          "Unless agreed otherwise, services are delivered as professional design, operations, software, and implementation support. They are not a replacement for legal counsel, tax advice, regulated financial advice, formal cybersecurity certification, or statutory compliance sign-off.",
        ],
      },
      {
        title: "Client responsibilities",
        body: [
          "For a project to succeed, you are responsible for providing accurate information, timely feedback, access to necessary systems, decision-maker availability, and the right to use any materials you provide.",
        ],
        bullets: [
          "You must not provide unlawful, infringing, misleading, or unauthorised material.",
          "You are responsible for final business approval of public claims, legal statements, pricing, compliance language, and operational policies.",
          "You are responsible for reviewing deliverables before publishing or relying on them operationally.",
          "You must maintain your own backups, access controls, internal approvals, and account security unless the written scope says otherwise.",
        ],
      },
      {
        title: "Payment and scheduling",
        body: [
          "Prices, deposits, milestones, subscription fees, taxes, expenses, renewal terms, and payment deadlines are defined in the relevant proposal or invoice. Unless agreed otherwise, work may pause if invoices are overdue or required feedback/access is delayed.",
          "Delivery timelines depend on timely client input, access, approvals, and third-party platform availability. A timeline is a working plan, not a guarantee, unless the written agreement explicitly says otherwise.",
        ],
      },
      {
        title: "Intellectual property and usage rights",
        body: [
          "Unless a project agreement says otherwise, you receive the right to use final paid deliverables for your own business once the relevant invoices are paid. Drafts, unused concepts, internal methods, reusable templates, code patterns, know-how, tool logic, and pre-existing materials remain mine or belong to their existing owners.",
          "You may not copy, resell, repackage, or offer this website’s content, free tools, prompts, workflows, visuals, or outputs as a competing service without written permission.",
          "Open-source libraries, third-party platforms, fonts, stock assets, plugins, and external tools remain subject to their own licences and terms.",
        ],
      },
      {
        title: "Portfolio use",
        body: [
          "Unless confidentiality terms or a written agreement say otherwise, I may reference non-sensitive project work in a portfolio, case study, proposal, or capability discussion after delivery. If a project is confidential, sensitive, or under NDA, the written confidentiality terms control.",
        ],
      },
      {
        title: "Confidentiality",
        body: [
          "I treat non-public client information shared for a project as confidential and use it only for the relevant discussion or engagement. If stronger confidentiality terms are required, we should sign an NDA or include confidentiality language in the project agreement before sensitive material is shared.",
        ],
      },
      {
        title: "Third-party platforms",
        body: [
          "Many projects depend on third-party platforms such as hosting providers, CMS tools, email services, payment processors, analytics, cloud storage, automation platforms, AI providers, CRM systems, accounting tools, or client-owned infrastructure.",
          "I am not responsible for outages, pricing changes, policy changes, data loss, security incidents, or feature changes caused by third-party platforms. I can help configure or manage them only within the agreed scope.",
        ],
      },
      {
        title: "No guarantee of results",
        body: [
          "I aim to deliver useful, practical work with clear scope and clean handover. However, I do not guarantee revenue, investment, ranking, conversion rate, funding, regulatory approval, procurement success, operational adoption, or AI performance unless a specific written guarantee is included in the project agreement.",
        ],
      },
      {
        title: "Limitation of liability",
        body: [
          "To the maximum extent allowed by applicable law, I am not liable for indirect, incidental, consequential, special, punitive, or lost-profit damages arising from website use, free tool use, or service discussions.",
          "For paid engagements, any liability cap or remedy should be defined in the signed proposal or contract. Nothing in these terms limits liability where the law does not allow it to be limited.",
        ],
      },
      {
        title: "Regional legal and compliance review",
        body: [
          "Because clients may operate in the EU, GCC, and other jurisdictions, final legal, tax, regulatory, employment, procurement, data protection, and sector-specific compliance review remains the client’s responsibility unless separately agreed with qualified counsel.",
          "If a deliverable will be used in a regulated sector, public procurement, healthcare, finance, insurance, education, government, or cross-border data environment, you should flag that early so the scope can include the right review path.",
        ],
      },
      {
        title: "Governing terms and disputes",
        body: [
          "The governing law, venue, dispute process, and contracting entity for paid work should be stated in the relevant proposal or contract. If no separate written agreement exists, any dispute should first be handled by good-faith discussion using the contact details on this site.",
        ],
      },
      {
        title: "Changes to these terms",
        body: [
          "I may update these terms when services, tools, providers, or legal requirements change. The latest version will be posted on this page with the updated date.",
        ],
      },
    ],
  },
};

const siteContentAr: typeof siteContentEn = {
  meta: {
    title: "أمجد عثمان | أنظمة التصميم والعمليات والذكاء الاصطناعي للفرق المتنامية",
    description:
      "يساعد أمجد عثمان الفرق المتنامية على تطوير الهوية والمواقع والعمليات الداخلية وتدفقات الذكاء الاصطناعي العملية ضمن نطاق واضح وتسليم نظيف.",
  },

  navigation: {
    primary: [
      { label: "الخدمات", href: "/services" },
      { label: "البرمجيات", href: "/software" },
      { label: "الموارد", href: "/resources" },
      { label: "الأعمال", href: "/work" },
      { label: "الأسعار", href: "/pricing" },
      { label: "من نحن", href: "/about" },
    ],
    servicesDropdown: [
      { label: "نظرة عامة على الخدمات", href: "/services" },
      { label: "أنظمة الهوية والنمو", href: "/services/brand" },
      { label: "أنظمة العمليات الداخلية", href: "/services/ops" },
      { label: "الوكلاء والعمليات المؤتمتة", href: "/services/agents" },
    ],
    resourcesDropdown: [
      { label: "مقالات وأفكار", href: "/resources" },
      { label: "أدوات مساعدة ذاتية", href: "/tools" },
    ],
    cta: { label: "احجز مكالمة", href: "/book" },
    footer: [
      { label: "آلية التسليم", href: "/process" },
      { label: "مقالات وأفكار", href: "/resources" },
      { label: "أدوات مساعدة ذاتية", href: "/tools" },
      { label: "تواصل معنا", href: "/contact" },
      { label: "الخصوصية", href: "/privacy" },
      { label: "الشروط", href: "/terms" },
    ],
    languageToggle: {
      english: "EN",
      arabic: "عربي",
      label: "اللغة",
    },
  },

  footer: {
    tagline:
      "يصمم أمجد عثمان أنظمة الهوية والعمليات والبرمجيات والذكاء الاصطناعي التي تساعد الفرق المتنامية على التحرك بوضوح أكبر.",
    pagesLabel: "الصفحات",
    legalLabel: "قانوني",
    copyright: "جميع الحقوق محفوظة.",
  },

  common: {
    skipToContent: "تخطي إلى المحتوى الرئيسي",
    backToResources: "العودة إلى الموارد",
    backToWork: "العودة إلى الأعمال",
    articleNotFound: "المقال غير موجود",
    articleUnavailable: "هذا المقال غير موجود أو تمت إزالته.",
    caseStudyNotFound: "دراسة الحالة غير موجودة",
    caseStudyUnavailable: "دراسة الحالة المطلوبة غير متاحة حالياً.",
    readArticle: "اقرأ المقال",
    caseStudies: "دراسات حالة",
    caseStudiesSubheadline: "مشاريع حقيقية ونتائج ودروس تنفيذية.",
    lastUpdatedLabel: "آخر تحديث",
    workSectionHeadline: "ما الذي قمنا ببنائه",
    workApproachLabel: "المنهج",
    workDeliverablesLabel: "المخرجات",
    workChangesLabel: "ما الذي تغيّر",
    clientProfileLabel: "ملف العميل",
    challengeLabel: "التحدي",
    resourceCtaHeadline: "حوّل هذا إلى تنفيذ فعلي.",
    resourceCtaDescription:
      "يمكنني تنفيذ النظام الكامن وراء الدليل وتوضيح التسعير.",
  },

  home: {
    hero: {
      headline:
        "هوية أوضح، عمليات أنظف، وأنظمة ذكاء اصطناعي عملية للفرق المتنامية.",
      subheadline:
        "أساعد الفرق الطموحة على تحسين صورتها، وطريقة عملها، وكيفية توسعها. أنظمة الهوية، المواقع، أدلة الإجراءات، تصميم سير العمل، والأتمتة ضمن نطاق واضح وتسليم منظم.",
      credibilityStrip:
        "نطاق واضح. قرارات أسرع. تسليم نظيف. ودعم مستمر إذا احتجته.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "شغّل تدقيقاً مجانياً", href: "/tools" },
    },
    whatWeDeliver: {
      headline: "أين أتدخل عادة.",
      subheadline:
        "الهوية، الويب، العمليات، ودعم البرمجيات ضمن نظام عملي واحد.",
      eyebrow: "الخدمات",
      cards: [
        {
          title: "الهوية والتواصل",
          description:
            "هوية ورسائل ومواد تجعل العمل يبدو أكثر رسوخاً واحترافية.",
        },
        {
          title: "الويب وأنظمة إدارة المحتوى",
          description:
            "مواقع وصفحات هبوط مبنية للتحويل وتبقى سهلة التحديث.",
        },
        {
          title: "تطبيقات سير العمل",
          description:
            "بوابات عملاء ولوحات تحكم وأدوات تشغيل مصممة حول سير العمل الحقيقي.",
        },
        {
          title: "العمليات الداخلية",
          description:
            "SharePoint وأدلة الإجراءات والقوالب وحزم الانضمام وأسس الحوكمة.",
        },
        {
          title: "برمجيات مُدارة",
          description:
            "أنظمة CRM ومساحات تشغيل وأنظمة مستندات مضبوطة حول فريقك.",
        },
        {
          title: "وكلاء الذكاء الاصطناعي",
          description:
            "تدفقات عملية للوكلاء من أجل التوجيه والصياغة ودعم المعرفة.",
        },
      ],
      cta: { label: "عرض الباقات", href: "/pricing" },
    },
    outcomesImpact: {
      eyebrow: "النتائج",
      headline: "ما الذي ينتج فعلاً عن العمل معنا",
      subheadline:
        "ستة أمور يخرج بها العملاء باستمرار، سواء كان العمل متعلقاً بالهوية أو العمليات أو الويب أو الذكاء الاصطناعي.",
      items: [
        {
          title: "تعرف بالضبط ما الذي ستحصل عليه",
          body: "موجز من صفحة واحدة لكل مشروع، من دون غموض حول النطاق أو الجدول أو معنى اكتمال العمل.",
        },
        {
          title: "تحافظ الهوية على تماسكها تحت الضغط",
          body: "هوية ورسائل ومعايير بصرية لا تنهار كلما انضم شخص جديد إلى الفريق.",
        },
        {
          title: "يصبح للموقع دور فعلي",
          body: "حضور ويب يحول الزوار إلى محادثات، لا مجرد كتيب رقمي.",
        },
        {
          title: "يتوقف الفريق عن إعادة شرح كل شيء",
          body: "إجراءات وحوكمة وقوالب يستطيع القادمون الجدد استخدامها دون اعتماد دائم على أحد.",
        },
        {
          title: "تُتخذ القرارات أسرع",
          body: "لوحات وموجزات تقلل دوامة الآراء وتمنح القادة وضوحاً حين يكون الوقت مهماً.",
        },
        {
          title: "أدوات AI يستخدمها الفريق فعلاً",
          body: "تدفقات عمل مع ضوابط وعناصر تبنٍ حقيقي، لا أتمتة من أجل الأتمتة فقط.",
        },
      ],
      primaryCta: { label: "احجز فحص ملاءمة لمدة 20 دقيقة", href: "/book" },
      secondaryCta: { label: "شاهد دراسات الحالة", href: "/work" },
    },
    deliveryProcess: {
      eyebrow: "التسليم",
      headline: "تسليم منظم واجتماعات أقل",
      subheadline:
        "مخرجات واضحة وتحديثات غير متزامنة ونقاط مراجعة مركزة. تحصل على زخم فعلي من دون فوضى في التقويم.",
      rhythmLabel: "إيقاع التسليم",
      marqueeText:
        "[ استقبال ] ← [ تخطيط ] ← [ تصميم ] ← [ بناء ] ← [ إطلاق ] ← [ تحسين ] ← ",
      expectationsLabel: "ما الذي يمكن توقعه",
      steps: [
        {
          title: "المواءمة",
          ascii: "[ ALIGN ]",
          summary:
            "يتم تثبيت النطاق ومؤشرات النجاح والقيود والمخاطر قبل بدء التنفيذ.",
          artifacts: ["موجز من صفحة واحدة", "مؤشرات نجاح", "مخاطر وافتراضات"],
          touchpoints: "اجتماع افتتاحي واحد",
        },
        {
          title: "الرسم",
          ascii: "[ MAP ]",
          summary:
            "تُنشئ نتائج البحث ورسم التدفقات نموذجاً مشتركاً للتصميم والتنفيذ.",
          artifacts: ["خريطة رحلة / تدفق", "مجموعة متطلبات", "قائمة أولويات"],
          touchpoints: "مراجعة واحدة",
        },
        {
          title: "التصميم",
          ascii: "[ DESIGN ]",
          summary:
            "تُراجع قرارات التجربة والواجهة مبكراً عبر دورات ملاحظات غير متزامنة.",
          artifacts: ["نموذج قابل للنقر", "مواصفات تصميم", "خطوط محتوى"],
          touchpoints: "مراجعات غير متزامنة + نقطة تحقق واحدة",
        },
        {
          title: "البناء",
          ascii: "[ BUILD ]",
          summary:
            "يتقدم التنفيذ ضمن وحدات عاملة مع دمج واختبارات جودة مدمجة في الطريق.",
          artifacts: ["إصدارات عاملة", "ملاحظات QA", "خطة إطلاق"],
          touchpoints: "مراجعة أسبوعية 20 دقيقة عند الحاجة فقط",
        },
        {
          title: "الإطلاق",
          ascii: "[ LAUNCH ]",
          summary:
            "يتم الإطلاق مع تسليم وتدريب وقائمة عملية للتحسينات المستمرة.",
          artifacts: ["حزمة تسليم", "خطة تتبع", "قائمة تحسينات"],
          touchpoints: "جلسة تسليم واحدة",
        },
      ],
      expectations: [
        "تحديث أسبوعي غير متزامن",
        "سجل للقرارات",
        "ضبط للنطاق",
        "نماذج عمل بدلاً من الشرائح",
      ],
    },
    outcomes: {
      headline: "ما الذي يشتريه العملاء فعلاً.",
      items: [
        "مصداقية تُسرّع إغلاق الصفقات.",
        "أنظمة داخلية يستخدمها الناس فعلاً.",
        "توثيق يصمد أمام تغيّر الموظفين.",
        "برمجيات تستمر في الاعتماد.",
        "اجتماعات أقل وتسليم أنظف.",
      ],
    },
    howWeWork: {
      headline: "تنفيذ منظم. اجتماعات أقل.",
      steps: [
        { title: "الاستيعاب", description: "مكالمة قصيرة. وثيقة متطلبات. تثبيت النطاق." },
        {
          title: "البنية",
          description: "تأكيد الهيكل والمواصفات قبل البناء.",
        },
        { title: "التنفيذ", description: "تنفيذ على دفعات. التحديثات غير متزامنة." },
        {
          title: "التسليم",
          description: "توثيق وتدريب وتسليم ملفات بشكل منظم.",
        },
        {
          title: "دعم اختياري",
          description: "دعم شهري إذا رغبت في تغطية مستمرة.",
        },
      ],
      cta: { label: "شاهد كيف يتم التسليم", href: "/process" },
    },
    proofTiles: {
      headline: "دراسات حالة يمكنك تقييمها بسرعة.",
      subheadline:
        "مشاريع حقيقية مختارة من أعمال الاستراتيجية والأنظمة والمنتجات والتنفيذ.",
      eyebrow: "الأعمال",
      tiles: [
        { title: "Radiance Co. Ltd.", description: "أنظمة طاقة شمسية لمرافق صحية في البحر الأحمر وكسلا." },
        { title: "TadmeenPro", description: "نظام تشغيل أساسي لشركات التأمين جاهز للذكاء الاصطناعي." },
        { title: "منصة وطنية لتسهيل التجارة", description: "منصة نافذة واحدة مع A4 Group لجهة سرية." },
      ],
      tileCta: "عرض دراسة الحالة",
      cta: { label: "شاهد كل دراسات الحالة", href: "/work" },
    },
    aiTools: {
      eyebrow: "أدوات مساعدة ذاتية",
      headline: "احصل على مخرجات مفيدة خلال دقائق.",
      subheadline:
        "هذه الأدوات المجانية تعطيك مسودات وتدقيقات أولية. استخدمها الآن أو دعني أنفذ النتائج بالشكل الصحيح.",
      tools: [
        {
          title: "منشئ مسودة SOP",
          description: "حوّل وصفاً غير منظم إلى مسودة SOP منظمة.",
        },
        {
          title: "تدقيق اتساق الهوية",
          description: "احصل على تقرير اتساق عبر أصولك مع أولويات الإصلاح.",
        },
        {
          title: "نقد صفحة الهبوط",
          description: "احصل على ملاحظات حول عوائق التحويل وتحسين التسلسل البصري.",
        },
      ],
      cta: { label: "استكشف أدوات المساعدة الذاتية", href: "/tools" },
    },
    pricingTeaser: {
      headline: "باقات واضحة. بلا فواتير ضبابية.",
      description:
        "اختر باقة مركزة، أو مشروع تنفيذ أوسع، أو دعماً مستمراً. كل تعاون يبدأ بنطاق وتوقيت وخطوة تالية واضحة.",
      cta: { label: "عرض الأسعار والباقات", href: "/pricing" },
    },
    finalCta: {
      headline: "احجز الخطوة التالية المناسبة.",
      description: "سنساعدك على اختيار باقة البداية المناسبة ونوضح التسعير.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "عرض الأسعار", href: "/pricing" },
    },
  },

  services: {
    hero: {
      headline: "اختر مسار الخدمة المناسب للاختناق التالي في عملك.",
      subheadline:
        "سواء كنت تحتاج إلى حضور أقوى في السوق أو عمليات داخلية أنظف أو أتمتة عملية، أحدد العمل حول مخرجات قابلة للاستخدام يمكن لفريقك البناء عليها.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
    },
    tracks: [
      {
        id: "external-credibility",
        title: "المسار أ: المصداقية الخارجية",
        description: "ما يراه العملاء والمستثمرون والشركاء.",
        items: [
          { title: "نظام الهوية", description: "شعار، هوية، إرشادات، قوالب." },
          {
            title: "الموقع وCMS",
            description: "موقع تسويقي مبني للتحويل وسهل التحديث.",
          },
          {
            title: "مواد البيع والعروض",
            description: "عروض وملفات تعريف ومقترحات تساعد على الإغلاق.",
          },
        ],
      },
      {
        id: "internal-execution",
        title: "المسار ب: التنفيذ الداخلي",
        description: "ما يستخدمه فريقك كل يوم.",
        items: [
          { title: "SharePoint", description: "إنترانت ومكتبات مستندات ومحاور فرق." },
          { title: "مكتبة SOP", description: "إجراءات يتم اتباعها فعلاً." },
          {
            title: "قوالب وحوكمة",
            description: "مخرجات متسقة ومساءلة واضحة.",
          },
          { title: "حزمة الانضمام", description: "جعل الموظفين الجدد منتجين أسرع." },
        ],
      },
      {
        id: "workflow-automation",
        title: "المسار ج: أتمتة سير العمل",
        description: "أدوات مخصصة تناسب عمليتك.",
        items: [
          { title: "بوابات", description: "واجهات للعملاء أو المورّدين." },
          {
            title: "لوحات تحكم",
            description: "رؤية تشغيلية بدون فوضى الجداول.",
          },
          { title: "تطبيقات سير العمل", description: "موافقات وطلبات وتتبع." },
          {
            title: "أدوات داخلية خفيفة",
            description: "حلول مخصصة لاحتياجات محددة.",
          },
        ],
      },
    ],
    ctaBand: {
      primaryCta: { label: "عرض الأسعار والباقات", href: "/pricing" },
      secondaryCta: { label: "احجز مكالمة", href: "/book" },
    },
  },

  software: {
    hero: {
      headline:
        "برمجيات تشغيلية مهيأة حول طريقة عمل فريقك فعلاً.",
      subheadline:
        "أنشر أنظمة CRM وعمليات ومستندات مركزة حتى يحصل فريقك على نظام قابل للاستخدام، لا أداة إضافية عليهم فهمها وحدهم.",
      primaryCta: { label: "احجز عرضاً", href: "/book" },
      secondaryCta: { label: "احجز مكالمة", href: "/book" },
    },
    modules: {
      headline: "الوحدات الأساسية المتاحة بالاشتراك.",
      items: [
        {
          title: "CRM (أساسي)",
          features: [
            "جهات الاتصال",
            "خط الأنابيب",
            "المهام",
            "قوالب البريد",
            "تقارير أساسية",
          ],
        },
        {
          title: "مساحة العمليات",
          features: [
            "طلبات وموافقات",
            "تذاكر داخلية",
            "لوحات تحكم",
            "صلاحيات حسب الدور",
          ],
        },
        {
          title: "مركز المستندات والقوالب",
          features: [
            "مكتبة مركزية",
            "التحكم في الإصدارات",
            "مسارات موافقة",
            "مشاركة محكومة",
          ],
        },
        {
          title: "إضافات اختيارية",
          features: ["مخزون خفيف", "مالية أساسية", "تقارير ميدانية"],
          note: "فقط إذا كنت تحتاجها فعلاً.",
        },
      ],
      keyLine:
        "نحن لا نقدم إلا الوحدات التي يمكننا تنفيذها ودعمها بشكل صحيح على المدى الطويل.",
    },
    differentiator: {
      headline: "برمجيات بلا فشل في التبني.",
      points: [
        "صلاحيات وأدوار مضبوطة على هيكل فريقك.",
        "ترحيل نظيف من أدواتك الحالية.",
        "تكامل SharePoint عندما يكون منطقياً.",
        "دعم شهري متضمن.",
      ],
    },
    pricing: {
      note: "يبدأ اشتراك البرمجيات من 500 يورو شهرياً لكل وحدة.",
      setupNote:
        "يتم تضمين الإعداد ضمن بعض الباقات أو يُقدّم بشكل منفصل.",
      cta: { label: "احجز مكالمة تسعير", href: "/book" },
    },
  },

  tools: {
    hero: {
      headline: "أدوات مساعدة ذاتية تحوّل المدخلات المبعثرة إلى مخرجات منظمة.",
      subheadline:
        "شغّل تدقيقاً أولياً أو ولّد مسودة عملية. احصل على نقطة بداية مفيدة خلال دقائق، ثم قرر إن كنت تريدني أن أنفذها بالشكل الصحيح.",
      primaryCta: { label: "شغّل تدقيقاً مجانياً", href: "#tools-list" },
      secondaryCta: { label: "احجز مكالمة", href: "/book" },
    },
    list: [
      {
        title: "منشئ مسودة SOP",
        description: "أنشئ مسودة SOP منظمة من وصف عملية غير مرتب.",
        illustration: "document" as const,
        href: "/tools/sop-builder",
      },
      {
        title: "تدقيق اتساق الهوية",
        description: "احصل على تقرير اتساق لأصولك مع أولويات الإصلاح.",
        illustration: "brand" as const,
        href: "/tools/brand-audit",
      },
      {
        title: "نقد صفحة الهبوط",
        description: "احصل على ملاحظات حول عوائق التحويل وتسلسل المحتوى.",
        illustration: "website" as const,
        href: "/tools/page-critique",
      },
      {
        title: "مخطط تدفق العمليات",
        description: "حوّل وصف سير العمل إلى مخططات عملية بصرية.",
        illustration: "tree" as const,
        href: "/tools/process-mapper",
      },
      {
        title: "منشئ متطلبات لوحة التحكم",
        description: "أنشئ مواصفات لوحة تحكم من احتياجات التقارير لديك.",
        illustration: "dashboard" as const,
        href: "/tools/dashboard-builder",
      },
      {
        title: "تدقيق مؤشرات الأداء",
        description: "حلّل المقاييس واحصل على توصيات للتتبع.",
        illustration: "chart" as const,
        href: "/tools/kpi-audit",
      },
    ],
    emailCapture: {
      headline: "حمّل حزمة البدء لأدوات المساعدة الذاتية.",
      description:
        "أدخل بريدك الإلكتروني لفتح قائمة عملية لتحسين المدخلات ودليل مراجعة من صفحة واحدة.",
      buttonLabel: "افتح الحزمة",
      successMessage: "حزمة البدء جاهزة للتنزيل.",
      downloadLabel: "تحميل حزمة البدء",
      followUpCta: { label: "احجز مكالمة", href: "/book" },
    },
  },

  pricing: {
    hero: {
      headline: "باقات بنطاق واضح وتسعير ثابت.",
      subheadline: "اختر ما تحتاجه. احصل على جدول زمني. بلا فواتير غامضة.",
    },
    decisionHelper: {
      headline: "غير متأكد مما تختار؟",
      options: [
        {
          label: "نحتاج إلى مصداقية خارجية (هوية + ويب)",
          anchor: "#external-credibility",
        },
        {
          label: "نحتاج إلى تنفيذ داخلي (SharePoint + SOPs)",
          anchor: "#internal-execution",
        },
        {
          label: "نحتاج إلى الاثنين (Foundation Build)",
          anchor: "#foundation-build",
        },
      ],
    },
    includedStrip: {
      headline: "مضمن في كل باقة",
      items: [
        "نطاق واضح",
        "جدول زمني",
        "توثيق",
        "جلسة تسليم",
        "دعم اختياري",
      ],
    },
    packages: {
      externalCredibility: {
        id: "external-credibility",
        title: "المصداقية الخارجية",
        description: "الهوية والويب ومواد البيع.",
        items: [
          {
            title: "نظام الهوية",
            whoFor: "للفرق التي لا تملك هوية متسقة.",
            startingPrice: "ابتداءً من 8,000 يورو",
            includes: [
              "شعار وهوية",
              "إرشادات الهوية",
              "حزمة قوالب",
              "تصميم مواد داعمة",
            ],
          },
          {
            title: "الموقع وCMS",
            whoFor: "للفرق التي تحتاج موقعاً تسويقياً يحقق التحويل.",
            startingPrice: "ابتداءً من 12,000 يورو",
            includes: [
              "موقع تسويقي",
              "إعداد CMS",
              "أساسيات SEO",
              "تحليلات",
            ],
          },
          {
            title: "مواد البيع",
            whoFor: "للفرق التي تغلق الصفقات بعروض قديمة.",
            startingPrice: "ابتداءً من 5,000 يورو",
            includes: ["عرض تقديمي", "ملفات تعريف", "قوالب مقترحات"],
          },
        ],
      },
      internalExecution: {
        id: "internal-execution",
        title: "التنفيذ الداخلي",
        description: "SharePoint وأدلة الإجراءات والبنية التشغيلية.",
        items: [
          {
            title: "إعداد SharePoint",
            whoFor: "للفرق التي تعاني من تخزين ملفات فوضوي وغياب الإنترانت.",
            startingPrice: "ابتداءً من 10,000 يورو",
            includes: [
              "بنية الإنترانت",
              "مكتبات مستندات",
              "محاور فرق",
              "صلاحيات",
            ],
          },
          {
            title: "مكتبة SOP",
            whoFor: "للفرق التي تفتقر إلى عمليات موثقة.",
            startingPrice: "ابتداءً من 6,000 يورو",
            includes: [
              "توثيق العمليات",
              "توزيع الأدوار",
              "قوائم جودة",
              "آلية تحديث",
            ],
          },
          {
            title: "حزمة الانضمام",
            whoFor: "للفرق التي تعاني من بطء تأهيل الموظفين الجدد.",
            startingPrice: "ابتداءً من 4,000 يورو",
            includes: [
              "دليل الأسبوع الأول",
              "تدريب خاص بالدور",
              "قوائم تحقق",
              "شروحات فيديو",
            ],
          },
        ],
      },
      foundationBuild: {
        id: "foundation-build",
        title: "Foundation Build",
        description:
          "كل ما تحتاجه لتبدو أكثر مصداقية خارجياً وتعمل بانسيابية داخلياً.",
        whoFor:
          "للفرق التي تبني بنية صحيحة من الصفر أو تستبدل أنظمة متشظية.",
        startingPrice: "ابتداءً من 35,000 يورو",
        includes: [
          "نظام الهوية",
          "الموقع وCMS",
          "إعداد SharePoint",
          "مكتبة SOP",
          "حزمة الانضمام",
          "إعداد البرمجيات (اختياري)",
        ],
        timeline: "مدة التنفيذ المعتادة: 8 إلى 12 أسبوعاً",
      },
    },
    finalCta: {
      headline: "احصل على نطاق وجدول زمني ثابتين.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "شغّل تدقيقاً مجانياً", href: "/tools" },
    },
  },

  work: {
    hero: {
      headline: "دراسات حالة يمكنك تقييمها.",
      subheadline:
        "مشاريع حقيقية في الاستراتيجية والأنظمة والمنتجات والتنفيذ. راجع العمل قبل أن تلتزم.",
    },
    tiles: [
      {
        title: "Radiance Co. Ltd.",
        description:
          "أنظمة طاقة شمسية لمرافق صحية في البحر الأحمر وكسلا.",
        thumbnail: null,
        href: "/work/radiance-co-ltd-solar-power-for-health-facilities-in-red-sea-and-kassala",
        cta: "عرض دراسة الحالة",
      },
      {
        title: "TadmeenPro",
        description: "نظام تشغيل أساسي لشركات التأمين جاهز للذكاء الاصطناعي.",
        thumbnail: null,
        href: "/work/tadmeenpro-an-operations-core-for-insurers-that-is-ready-for-ai",
        cta: "عرض دراسة الحالة",
      },
      {
        title: "Talya Properties",
        description:
          "توجيه شركة عقارية خلال سوق بدأ يهدأ.",
        thumbnail: null,
        href: "/work/talya-properties-steering-a-real-estate-business-through-a-cooling-market",
        cta: "عرض دراسة الحالة",
      },
      {
        title: "منصة وطنية لتسهيل التجارة",
        description:
          "منصة نافذة واحدة مع A4 Group لجهة سرية.",
        thumbnail: null,
        href: "/work/national-trade-facilitation-platform-with-a4-group-for-a-confidential-authority",
        cta: "عرض دراسة الحالة",
      },
    ],
    requestCta: {
      headline: "حدّد عملاً مشابهاً.",
      description:
        "سنشكّل التعاون الأول حول الاختناق والجدول الزمني والسعر المناسب.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "عرض الأسعار", href: "/pricing" },
    },
  },

  about: {
    hero: {
      eyebrow: "كيف أعمل",
      headline: "أبني طبقة الأعمال المحيطة بالفرق المتنامية.",
      subheadline:
        "نساعد الشركات على ردم الفجوة بين العمل القوي في جوهره وبين أنظمة الهوية والعمليات وسير العمل التي يجب أن تدعمه.",
      credibilityStrip:
        "نطاق واضح. تنفيذ عملي. تسليم نظيف. ودعم مستمر عند الحاجة.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "عرض الأسعار", href: "/pricing" },
    },
    story: {
      eyebrow: "من نحن",
      headline:
        "أقوم بهذا العمل لأن الشركات المتنامية غالباً ما تتجاوز الأنظمة المحيطة بالعمل الجيد.",
      subheadline:
        "قد تكون الشركة تحقق نتائج قوية بالفعل، لكن الطبقة المحيطة بذلك العمل تبدأ غالباً بالتأخر مع نمو الشركة.",
      paragraphs: [
        "يمكن أن تظهر هذه الفجوة خارجياً. فالموقع أو الهوية أو مواد البيع لا تخلق القدر الكافي من الوضوح والثقة لدى المشترين.",
        "ويمكن أن تظهر داخلياً أيضاً. يصبح العثور على الملفات أصعب، وتبقى أدلة الإجراءات سطحية، ويعتمد الانضمام على الذاكرة، ويُعاد بناء العمل المتكرر من الصفر.",
        "أسد هذه الفجوة بأنظمة عملية. أساعد الفرق على تقوية صورة العمل، وطريقة تشغيله، وأين يمكن للأتمتة أن تزيل العمل المتكرر دون خلق مزيد من الالتباس.",
      ],
    },
    drivers: {
      eyebrow: "لماذا نعمل بهذه الطريقة",
      headline: "ما الذي يقود طريقة عملي.",
      subheadline:
        "يتشكل العمل وفق مجموعة من القناعات العملية حول ما يساعد الفرق المتنامية فعلاً على التحرك بشكل أفضل.",
      items: [
        {
          title: "الوضوح قبل التنفيذ",
          body: "نحدد المشكلة والمخرجات ونقاط القرار قبل أن يبدأ العمل في التضاعف.",
        },
        {
          title: "التبني أهم من البريق عند الإطلاق",
          body: "إذا لم يستطع الفريق الاستمرار في استخدام النظام بعد التسليم، فالأمر لم يُنجز كما يجب.",
        },
        {
          title: "هيكل يصمد أمام النمو",
          body: "يجب أن تبقى المخرجات مفيدة عندما تتوسع الشركة أو تتغير الأدوار أو يزداد التعقيد.",
        },
        {
          title: "أتمتة عملية لا استعراضاً للذكاء الاصطناعي",
          body: "الأتمتة تستحق فقط عندما تزيل احتكاكاً حقيقياً وتحافظ على الضوابط اللازمة.",
        },
      ],
    },
    fit: {
      eyebrow: "من يناسبه العمل معنا",
      headline: "يكون التوافق أقوى عادة عندما يكون لدى الشركة زخم فعلي.",
      subheadline:
        "أكون أكثر فائدة عادة عندما تكون الشركة تقوم بعمل مهم بالفعل، لكن طبقة الأعمال المحيطة بذلك العمل تحتاج إلى اللحاق.",
      items: [
        {
          title: "فرق تملك عملاً قوياً في الأساس",
          body: "القيمة موجودة بالفعل، لكن طريقة عرض العمل أو تشغيله ما زالت متأخرة.",
        },
        {
          title: "شركات تشعر بضغط تشغيلي",
          body: "النمو أضاف ملفات وتسليمات وأسئلة متكررة أكثر مما يستطيع الهيكل الحالي التعامل معه بسلاسة.",
        },
        {
          title: "قادة يحملون سياقاً أكثر مما ينبغي",
          body: "جزء كبير من العمل ما زال يعتمد على تذكّر عدد قليل من الأشخاص لكيفية سير كل شيء.",
        },
        {
          title: "فرق جاهزة لذكاء اصطناعي عملي",
          body: "ترغب الشركة في توفير الوقت عبر الأتمتة، لكنها لا تريد خسارة الرؤية أو الموافقات أو الحدود المنطقية.",
        },
      ],
    },
    workingWithUs: {
      eyebrow: "العمل معاً",
      headline: "نُنظّم العمل ليبقى واضحاً وهادئاً ومفيداً.",
      subheadline:
        "يريد العملاء عادة اجتماعات أقل وقرارات أسرع ونظاماً نهائياً يمكنهم الاستمرار في استخدامه. لذلك نُعدّ العمل بهذه الطريقة.",
      steps: [
        {
          title: "نحدد الاختناق الحقيقي",
          description:
            "نوضح مشكلة العمل ونختار نقطة الدخول الصحيحة بدلاً من محاولة إصلاح كل شيء دفعة واحدة.",
        },
        {
          title: "نبني الطبقة المناسبة",
          description:
            "قد يعني ذلك عملاً على الهوية والموقع، أو بنية للعمليات الداخلية، أو أتمتة محدودة حول المهام المتكررة.",
        },
        {
          title: "نسلّم بشكل نظيف",
          description:
            "يتم توثيق العمل ونقله بطريقة يستطيع الفريق الاستمرار في استخدامها بعد الإطلاق.",
        },
        {
          title: "نواصل فقط إذا كان مفيداً",
          description:
            "يتوفر الدعم المستمر عندما يكون منطقياً، لكن التسليم الأولي مصمم ليقف وحده.",
        },
      ],
      expectationsTitle: "ما الذي يمكن أن يتوقعه العملاء",
      expectations: [
        "نطاق واضح قبل بدء التنفيذ",
        "مراحل عمل واضحة بدلاً من مفاجآت متأخرة",
        "توثيق وإرشاد للتسليم عند الإنهاء",
        "دعم مستمر اختياري عندما تكون هناك حاجة فعلية",
      ],
    },
    cta: {
      headline: "تأكد إن كان هناك توافق.",
      description: "احجز مكالمة قصيرة وسنخبرك بباقة البداية المناسبة.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "عرض الأسعار", href: "/pricing" },
    },
  },

  book: {
    hero: {
      headline: "احجز مكالمة قصيرة مع أمجد",
      subheadline:
        "سيتم تحويلك إلى صفحة الحجز المباشرة في Google Meet لاختيار الوقت مباشرة.",
    },
    redirectingMessage: "يتم الآن تحويلك إلى صفحة الحجز المباشرة في Google Meet.",
    openBookingPage: "افتح صفحة الحجز",
  },

  process: {
    hero: {
      eyebrow: "عملية التسليم",
      headline: "كيف نُسلّم",
      subheadline: "عملية منظمة. اجتماعات أقل. وتسليم نظيف.",
      credibilityStrip:
        "نقطة بداية واضحة. مراحل عمل ملموسة. تسليم نظيف. دعم فقط عندما يكون مفيداً.",
    },
    steps: [
      {
        number: 1,
        title: "الاستيعاب",
        description:
          "مكالمة قصيرة لفهم ما تحتاجه. نوثّق المتطلبات ونثبت النطاق قبل بدء أي بناء.",
        outcome: "وثيقة متطلبات + نطاق ثابت",
      },
      {
        number: 2,
        title: "البنية",
        description:
          "تأكيد الهيكل والمواصفات. نعرض لك المخطط قبل التنفيذ.",
        outcome: "مخطط بنية + موافقة على المتابعة",
      },
      {
        number: 3,
        title: "التنفيذ",
        description:
          "تنفيذ على دفعات مركزة. تحديثات غير متزامنة. بلا اجتماعات غير ضرورية.",
        outcome: "مخرجات عاملة على مراحل",
      },
      {
        number: 4,
        title: "التسليم",
        description:
          "توثيق وتدريب ونقل ملفات بشكل نظيف. كل شيء يصبح ملكك.",
        outcome: "توثيق كامل + جلسة تدريب",
      },
      {
        number: 5,
        title: "دعم اختياري",
        description:
          "دعم شهري إذا أردت تغطية مستمرة. تحديثات وإصلاحات وتحسينات.",
        outcome: "ساعات دعم مخصصة كل شهر",
      },
    ],
    cta: {
      headline: "ابدأ بنطاق واضح.",
      description: "سنربط عملية التسليم بأول مشكلة تحتاج إلى حلها.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "عرض الأسعار", href: "/pricing" },
    },
  },

  resources: {
    hero: {
      eyebrow: "مقالات وأفكار",
      headline: "موارد عملية لتسليم أوضح.",
      subheadline:
        "مقالات وملاحظات للفرق التي تطور الهوية والعمليات والبرمجيات والأتمتة.",
      credibilityStrip:
        "سياق مفيد. بلا استعراض. وخطوات عملية عندما تكون جاهزاً للبناء.",
    },
    emptyState: {
      message:
        "المزيد من الأدلة قادم. إذا كنت تحتاج شيئاً محدداً، تواصل معنا وسنوجّهك إلى المسار المناسب.",
      cta: { label: "تواصل معنا", href: "/contact" },
    },
  },

  contact: {
    hero: {
      eyebrow: "التواصل",
      headline: "أخبرنا بما تحاول إصلاحه",
      subheadline:
        "الأسئلة وطلبات المشاريع وطلبات النماذج كلها مرحب بها.",
      credibilityStrip:
        "رسالة قصيرة. خطوة تالية واضحة. بلا ضغط قبل أن يكون التوافق واضحاً.",
    },
    form: {
      fields: [
        { name: "name", label: "الاسم", type: "text", required: true },
        { name: "email", label: "البريد الإلكتروني", type: "email", required: true },
        { name: "message", label: "الرسالة", type: "textarea", required: true },
      ],
      submitLabel: "إرسال الرسالة",
      subject: "رسالة من الموقع من",
      newMessage: "رسالة تواصل جديدة من الموقع",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "الرسالة",
      messageHeading: "الرسالة:",
    },
    directEmail: {
      label: "تفضل البريد المباشر؟",
      email: "hello@adsi.io",
    },
  },

  privacy: {
    eyebrow: "قانوني",
    title: "سياسة الخصوصية",
    lastUpdated: "يونيو 2026",
    subheadline:
      "كيف يتم التعامل مع بيانات التواصل والحجوزات ورسائل الموقع.",
    credibilityStrip:
      "جمع محدود. استخدام عملي. لا بيع للبيانات الشخصية.",
    sections: [
      {
        title: "من المسؤول عن بياناتك",
        body: [
          "يتم تشغيل هذا الموقع بواسطة أمجد عثمان / ADSI كمقدم خدمات مستقل مقره في الاتحاد الأوروبي، ما لم يذكر عرض أو عقد محدد جهة تعاقد مختلفة. للاستفسارات المتعلقة بالخصوصية أو الحذف أو الوصول إلى البيانات، راسل hello@adsi.io.",
          "في استفسارات الموقع والحجوزات ومناقشات المشاريع والتواصل المعتاد، أتعامل مع البيانات الشخصية بصفتي الجهة التي تحدد سبب استخدامها وطريقة استخدامها. أما بيانات العملاء داخل مشروع مدفوع فقد يحدد نطاق العمل أو اتفاق معالجة البيانات دوراً مختلفاً، مثل معالج بيانات أو متعاقد فرعي.",
        ],
      },
      {
        title: "ما الذي تغطيه هذه السياسة",
        body: [
          "تغطي هذه السياسة البيانات الشخصية التي تتم معالجتها من خلال الموقع، وروابط الحجز، ورسائل البريد، والأدوات المجانية، واستفسارات المشاريع، وتواصل تسليم الخدمات.",
          "لا تستبدل هذه السياسة أي اتفاق معالجة بيانات أو اتفاق سرية أو نطاق عمل أو متطلبات أمنية خاصة بالعميل. إذا تعارض مستند مشروع موقع مع هذه السياسة، فيسري المستند الموقع على ذلك المشروع.",
        ],
      },
      {
        title: "البيانات التي قد يتم جمعها",
        body: [
          "أحاول جمع الحد الأدنى اللازم لفهم الطلب والرد عليه وتسليم العمل المتفق عليه. وقد يشمل ذلك:",
        ],
        bullets: [
          "بيانات التواصل مثل الاسم والبريد الإلكتروني والشركة والدور والدولة وقناة التواصل المفضلة.",
          "معلومات المشروع التي ترسلها، مثل أهداف العمل وروابط المواقع وملفات الهوية ووصف العمليات أو أمثلة سير العمل.",
          "معلومات الحجز مثل وقت الاجتماع وملاحظاته وبيانات التقويم وأي رسالة تضيفها.",
          "مدخلات ومخرجات الأدوات المجانية مثل نصوص التدقيق أو بناء الإجراءات أو مراجعة مؤشرات الأداء أو نقد الصفحات.",
          "معلومات تقنية عادية مثل عنوان IP ونوع الجهاز والمتصفح والموقع التقريبي والصفحات التي تمت زيارتها وسجلات الأمان.",
          "معلومات تجارية أو فواتير إذا أصبحت عميلاً، مثل العروض والفواتير وحالة الدفع والبيانات الضريبية أو التعاقدية.",
        ],
      },
      {
        title: "المعلومات الحساسة والسرية",
        body: [
          "لا ترسل كلمات مرور أو أرقام بطاقات دفع أو وثائق هوية أو معلومات صحية أو بيانات خاصة أو بيانات أطفال أو معلومات شديدة السرية عبر النماذج العامة أو الأدوات المجانية ما لم نتفق على طريقة آمنة لذلك.",
          "إذا احتاج المشروع إلى بيانات حساسة أو منظمة أو سرية، يجب الاتفاق مسبقاً على طريقة التعامل معها وضوابط الوصول ومدة الاحتفاظ وأي اتفاق لمعالجة البيانات.",
        ],
      },
      {
        title: "أسباب استخدام البيانات",
        body: [
          "أستخدم البيانات الشخصية لأغراض عملية مرتبطة بالموقع والخدمات:",
        ],
        bullets: [
          "الرد على الاستفسارات وإعداد العروض وتقييم ملاءمة المشروع.",
          "جدولة المكالمات وإدارة دعوات التقويم.",
          "تشغيل الأدوات المجانية وإرجاع المخرجات المطلوبة.",
          "تسليم الخدمات المتفق عليها وإدارة التواصل والوثائق والأنظمة والتسليم النهائي.",
          "الاحتفاظ بسجلات الأعمال والفواتير والمحاسبة والضرائب والامتثال.",
          "حماية الموقع ومنع إساءة الاستخدام ومعالجة الأخطاء ومراقبة التوفر والأمان.",
          "تحسين المحتوى والخدمات والأدوات بناءً على أنماط مجمعة أو غير معرفة.",
        ],
      },
      {
        title: "الأسس القانونية لمستخدمي الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية",
        body: [
          "عندما تنطبق قواعد حماية البيانات الأوروبية، أعتمد على أساس قانوني واحد أو أكثر حسب السياق:",
        ],
        bullets: [
          "العقد أو خطوات ما قبل العقد عند طلب عرض أو حجز مكالمة أو بدء خدمة.",
          "المصلحة المشروعة للرد على استفسارات الأعمال وحفظ السجلات وتأمين الموقع وتحسين الخدمات.",
          "الموافقة عندما أطلب إذناً اختيارياً، مثل الرسائل التسويقية أو ملفات تعريف الارتباط غير الضرورية إذا أضيفت لاحقاً.",
          "الالتزام القانوني عندما يلزم الاحتفاظ بسجلات للضرائب أو المحاسبة أو الامتثال أو النزاعات.",
        ],
      },
      {
        title: "الأدوات المجانية والمخرجات المدعومة بالذكاء الاصطناعي",
        body: [
          "الأدوات المجانية تقدم تدقيقات ومسودات ونقاط بداية سطحية. هي ليست مشورة قانونية أو مالية أو أمنية أو موارد بشرية أو امتثال. يجب مراجعة المخرجات قبل استخدامها تشغيلياً.",
          "قد تستخدم بعض الأدوات بنية تحتية أو خدمات ذكاء اصطناعي خارجية لمعالجة النص الذي ترسله. لا تلصق بيانات سرية أو منظمة أو حساسة في الأدوات المجانية إلا إذا كان ذلك مناسباً ومقبولاً لك.",
        ],
      },
      {
        title: "الخدمات الخارجية",
        body: [
          "قد يعتمد الموقع وسير العمل على مزودين موثوقين للاستضافة والتحليلات أو التشخيص والحجز والبريد وتخزين الوثائق والمدفوعات وإدارة المشاريع والأتمتة والمعالجة المدعومة بالذكاء الاصطناعي.",
          "قد تكون لهذه الخدمات سياسات خصوصية خاصة بها عندما تتفاعل معها مباشرة.",
        ],
      },
      {
        title: "نقل البيانات دولياً",
        body: [
          "لأنني أعمل مع عملاء في الاتحاد الأوروبي ودول مجلس التعاون ومناطق أخرى، ولأن خدمات السحابة قد تعمل دولياً، قد تتم معالجة البيانات خارج بلدك. عند نقل بيانات من الاتحاد الأوروبي أو المنطقة الاقتصادية الأوروبية، أسعى لاستخدام ضمانات مناسبة مثل مزودين موثوقين أو شروط تعاقدية أو قرارات ملاءمة أوروبية حيث تنطبق.",
          "لعملاء دول مجلس التعاون، أسعى لاحترام توقعات الخصوصية والمتطلبات الخاصة بالمشروع، بما في ذلك قيود النقل عبر الحدود إذا تم الاتفاق عليها أو فرضها القانون.",
        ],
      },
      {
        title: "مدة الاحتفاظ",
        body: [
          "أحتفظ بالبيانات فقط للمدة اللازمة للغرض الذي جُمعت من أجله، ما لم تتطلب أسباب قانونية أو ضريبية أو محاسبية أو نزاعية أو تجارية مدة أطول.",
        ],
        bullets: [
          "رسائل الاستفسار والتواصل: غالباً حتى 24 شهراً ما لم تصبح جزءاً من سجل عميل.",
          "سجلات المشاريع والتسليم: غالباً حتى 7 سنوات لأغراض الأعمال أو الضرائب أو النزاعات.",
          "مدخلات ومخرجات الأدوات المجانية: فقط بقدر الحاجة لتقديم المخرج أو إصلاح الأخطاء أو منع الإساءة أو تحسين الأداة.",
          "الفواتير والعقود والسجلات المحاسبية: حسب المدد المطلوبة بالقانون.",
          "سجلات الأمان: لمدة محدودة مناسبة للتشخيص والأمان ومنع الإساءة.",
        ],
      },
      {
        title: "حقوقك",
        body: [
          "بحسب موقعك، قد يكون لك حق الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييدها أو الاعتراض على استخدامها أو الحصول على نسخة منها. لمستخدمي الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية حقوق بموجب GDPR، بما في ذلك حق الشكوى إلى جهة رقابية.",
          "تتضمن أطر الخصوصية في دول مجلس التعاون، مثل قانون حماية البيانات الشخصية في الإمارات ونظام حماية البيانات الشخصية في السعودية، مبادئ للشفافية وحقوق الأفراد في سياقات مختلفة.",
          "لتقديم طلب، راسل hello@adsi.io. قد أحتاج إلى التحقق من هويتك قبل تنفيذ الطلب. أهدف للرد خلال شهر عندما ينطبق GDPR، ما لم يكن الطلب معقداً أو يسمح القانون بمدة أطول.",
        ],
      },
      {
        title: "الأمان",
        body: [
          "أستخدم إجراءات تقنية وتنظيمية معقولة لحماية البيانات، مثل تقييد الوصول واستخدام مزودين موثوقين وممارسات أمان الحسابات وضوابط خاصة بالمشروع عند الحاجة.",
          "لا يمكن ضمان أمان أي موقع أو بريد أو خدمة سحابية بالكامل. إذا اعتقدت أن معلومات أُرسلت بالخطأ أو توجد مشكلة أمنية، راسل hello@adsi.io فوراً.",
        ],
      },
      {
        title: "ملفات تعريف الارتباط والتحليلات",
        body: [
          "يهدف هذا الموقع إلى إبقاء التتبع في حدوده الدنيا. إذا أضيفت تحليلات اختيارية أو بكسلات إعلانية أو ملفات تعريف ارتباط غير ضرورية لاحقاً، يجب عرض إشعار واضح وخيار موافقة حيث يلزم.",
          "قد يستخدم الموقع تخزيناً تقنياً ضرورياً للأمان أو اللغة أو التوجيه أو النماذج أو التشغيل العادي.",
        ],
      },
      {
        title: "تحديثات السياسة",
        body: [
          "قد يتم تحديث هذه السياسة عند تغير الموقع أو الخدمات أو الأدوات أو المزودين أو المتطلبات القانونية. ستُنشر النسخة الأحدث في هذه الصفحة مع تاريخ التحديث.",
        ],
      },
    ],
  },

  terms: {
    eyebrow: "قانوني",
    title: "شروط الخدمة",
    lastUpdated: "يونيو 2026",
    subheadline:
      "شروط مبسطة لاستخدام هذا الموقع وبدء محادثة مشروع.",
    credibilityStrip:
      "استخدام الموقع بسيط. والعمل المدفوع يخضع لنطاق مكتوب منفصل.",
    sections: [
      {
        title: "على من تنطبق هذه الشروط",
        body: [
          "تنطبق هذه الشروط عند استخدامك للموقع أو قراءة المقالات أو استخدام الأدوات المجانية أو التواصل أو حجز مكالمة أو مناقشة مشروع محتمل مع أمجد عثمان / ADSI.",
          "الخدمات المدفوعة تخضع للعرض أو نطاق العمل أو الفاتورة أو العقد أو شروط معالجة البيانات المتفق عليها. إذا تعارضت تلك المستندات مع شروط الموقع، تسري مستندات المشروع الموقع على العمل المدفوع.",
        ],
      },
      {
        title: "محتوى الموقع معلومات عامة",
        body: [
          "المقالات والأمثلة والأدوات ووصف الأسعار والمحتوى المنشور على الموقع هي معلومات عامة للأعمال. ليست مشورة قانونية أو ضريبية أو مالية أو استثمارية أو توظيفية أو أمن سيبراني أو مشورة مهنية منظمة.",
          "أنت مسؤول عن مراجعة المخرجات والقرارات وسير العمل والوثائق والتوصيات قبل استخدامها داخل مؤسستك.",
        ],
      },
      {
        title: "الأدوات المجانية",
        body: [
          "الأدوات المجانية مصممة لإنتاج تدقيقات ومسودات وقوائم بداية سطحية، وقد تكون غير مكتملة أو غير دقيقة أو غير مناسبة لسياقك.",
          "لا ترسل كلمات مرور أو مفاتيح سرية أو بيانات دفع أو بيانات شخصية خاصة أو بيانات أطفال أو معلومات منظمة أو مواد سرية عبر الأدوات المجانية ما لم نتفق على عملية آمنة.",
          "مخرجات الأدوات لا تنشئ علاقة عميل ولا ضماناً ولا التزاماً بالتنفيذ ما لم نتفق على نطاق مدفوع كتابةً.",
        ],
      },
      {
        title: "الاستفسارات والعروض",
        body: [
          "لا تنشئ المكالمة أو البريد أو نتيجة التدقيق أو مناقشة العرض مشروعاً مدفوعاً بحد ذاتها. يبدأ المشروع فقط عندما يتم الاتفاق كتابةً على النطاق والمخرجات والسعر وشروط الدفع والجدول والتسليم.",
          "يجوز لي رفض مشروع إذا كان نطاقه غير واضح أو خارج مجال الخدمة أو حساساً قانونياً دون مراجعة مناسبة أو يتعارض مع التزام آخر أو يتطلب وصولاً أو ضمانات لا أستطيع تقديمها بمسؤولية.",
        ],
      },
      {
        title: "الخدمات المقدمة",
        body: [
          "قد تشمل الخدمات أنظمة الهوية والاتصال، المواقع وأنظمة إدارة المحتوى، أنظمة العمليات الداخلية، إجراءات العمل، تصميم التدفقات، إعداد البرمجيات، اللوحات، الأتمتة، وتدفقات الذكاء الاصطناعي العملية.",
          "ما لم يُتفق خلاف ذلك، تُقدّم الخدمات كدعم مهني في التصميم والعمليات والبرمجيات والتنفيذ، وليست بديلاً عن محامٍ أو مستشار ضريبي أو مشورة مالية منظمة أو اعتماد أمن سيبراني أو توقيع امتثال قانوني.",
        ],
      },
      {
        title: "مسؤوليات العميل",
        body: [
          "لنجاح المشروع، أنت مسؤول عن تقديم معلومات دقيقة وردود في الوقت المناسب ووصول للأنظمة اللازمة وتوفر أصحاب القرار وحق استخدام المواد التي تقدمها.",
        ],
        bullets: [
          "يجب ألا تقدم مواد غير قانونية أو منتهكة للحقوق أو مضللة أو غير مصرح بها.",
          "أنت مسؤول عن الموافقة النهائية على الادعاءات العامة والنصوص القانونية والأسعار وسياسات التشغيل.",
          "أنت مسؤول عن مراجعة المخرجات قبل نشرها أو الاعتماد عليها تشغيلياً.",
          "يجب أن تحافظ على النسخ الاحتياطية وضوابط الوصول والموافقات الداخلية وأمان الحسابات ما لم ينص النطاق المكتوب على خلاف ذلك.",
        ],
      },
      {
        title: "الدفع والجدولة",
        body: [
          "تحدد العروض أو الفواتير الأسعار والدفعات والمراحل والاشتراكات والضرائب والمصاريف والتجديدات ومواعيد الدفع. ما لم يُتفق خلاف ذلك، قد يتوقف العمل إذا تأخرت الفواتير أو الملاحظات أو صلاحيات الوصول.",
          "تعتمد الجداول الزمنية على مدخلات العميل والموافقات وتوفر منصات الأطراف الثالثة. الجدول خطة عمل وليس ضماناً إلا إذا نص الاتفاق كتابة على ذلك.",
        ],
      },
      {
        title: "الملكية الفكرية وحقوق الاستخدام",
        body: [
          "ما لم ينص اتفاق المشروع على خلاف ذلك، تحصل على حق استخدام المخرجات النهائية المدفوعة لأعمالك بعد سداد الفواتير ذات الصلة. تبقى المسودات والمفاهيم غير المستخدمة والطرق الداخلية والقوالب القابلة لإعادة الاستخدام وأنماط الكود والمعرفة والمواد السابقة ملكاً لي أو لأصحابها.",
          "لا يجوز نسخ أو إعادة بيع أو إعادة تغليف محتوى الموقع أو الأدوات أو المطالبات أو التدفقات أو المرئيات أو المخرجات كخدمة منافسة دون إذن مكتوب.",
          "تخضع المكتبات مفتوحة المصدر والمنصات والخطوط والأصول والإضافات والأدوات الخارجية لتراخيصها وشروطها الخاصة.",
        ],
      },
      {
        title: "استخدام الأعمال في المعرض",
        body: [
          "ما لم تنص السرية أو اتفاق مكتوب على خلاف ذلك، قد أشير إلى أعمال غير حساسة ضمن المعرض أو دراسة حالة أو عرض قدرات بعد التسليم. إذا كان المشروع سرياً أو حساساً أو خاضعاً لاتفاق عدم إفشاء، تسري شروط السرية المكتوبة.",
        ],
      },
      {
        title: "السرية",
        body: [
          "أتعامل مع معلومات العملاء غير العامة التي تُشارك لمشروع باعتبارها سرية وأستخدمها فقط للنقاش أو المشروع المعني. إذا كانت هناك حاجة لشروط أقوى، يجب توقيع اتفاق سرية أو إدراجها في اتفاق المشروع قبل مشاركة المواد الحساسة.",
        ],
      },
      {
        title: "منصات الأطراف الثالثة",
        body: [
          "تعتمد مشاريع كثيرة على منصات خارجية مثل الاستضافة وأنظمة المحتوى والبريد والمدفوعات والتحليلات والتخزين السحابي والأتمتة ومزودي الذكاء الاصطناعي وCRM والمحاسبة أو بنية العميل.",
          "لست مسؤولاً عن الانقطاعات أو تغير الأسعار أو السياسات أو فقدان البيانات أو الحوادث الأمنية أو تغير الميزات لدى تلك المنصات. يمكنني المساعدة في إعدادها أو إدارتها فقط ضمن النطاق المتفق عليه.",
        ],
      },
      {
        title: "لا ضمان للنتائج",
        body: [
          "أهدف إلى تقديم عمل عملي ومفيد بنطاق واضح وتسليم نظيف، لكنني لا أضمن الإيرادات أو الاستثمار أو الترتيب في البحث أو معدل التحويل أو التمويل أو الموافقة التنظيمية أو نجاح المشتريات أو تبني العمليات أو أداء الذكاء الاصطناعي ما لم يتضمن الاتفاق ضماناً مكتوباً محدداً.",
        ],
      },
      {
        title: "حدود المسؤولية",
        body: [
          "إلى أقصى حد يسمح به القانون، لا أتحمل مسؤولية الأضرار غير المباشرة أو العرضية أو اللاحقة أو الخاصة أو العقابية أو خسارة الأرباح الناتجة عن استخدام الموقع أو الأدوات المجانية أو مناقشات الخدمات.",
          "في المشاريع المدفوعة، يجب تحديد أي حد للمسؤولية أو علاج في العرض أو العقد الموقع. لا تحد هذه الشروط أي مسؤولية لا يسمح القانون بتقييدها.",
        ],
      },
      {
        title: "المراجعة القانونية والامتثالية الإقليمية",
        body: [
          "لأن العملاء قد يعملون في الاتحاد الأوروبي ودول مجلس التعاون ومناطق أخرى، تبقى المراجعة القانونية والضريبية والتنظيمية والتوظيفية وحماية البيانات والامتثال القطاعي مسؤولية العميل، ما لم يُتفق بشكل منفصل مع مستشار مؤهل.",
          "إذا كان المخرج سيستخدم في قطاع منظم أو مشتريات عامة أو صحة أو تمويل أو تأمين أو تعليم أو حكومة أو بيئة بيانات عابرة للحدود، يجب توضيح ذلك مبكراً حتى يتضمن النطاق مسار المراجعة المناسب.",
        ],
      },
      {
        title: "الشروط الحاكمة والنزاعات",
        body: [
          "يجب أن يحدد العرض أو العقد القانون الحاكم ومكان التقاضي وآلية حل النزاعات والجهة المتعاقدة للعمل المدفوع. إذا لم يوجد اتفاق مكتوب منفصل، يجب محاولة حل أي نزاع أولاً بحسن نية عبر بيانات التواصل في الموقع.",
        ],
      },
      {
        title: "تحديثات الشروط",
        body: [
          "قد يتم تحديث هذه الشروط عند تغير الخدمات أو الأدوات أو المزودين أو المتطلبات القانونية. ستُنشر النسخة الأحدث في هذه الصفحة مع تاريخ التحديث.",
        ],
      },
    ],
  },
};

export type SiteContent = typeof siteContentEn;

import { siteContentDe } from "./contentDe";
import { siteContentFr } from "./contentFr";
import { siteContentBg } from "./contentBg";

export const siteContentByLocale: Record<Locale, SiteContent> = {
  en: siteContentEn,
  ar: siteContentAr,
  de: siteContentDe,
  fr: siteContentFr,
  bg: siteContentBg,
};

export const siteContent = siteContentEn;

export const getSiteContent = (locale: Locale) => siteContentByLocale[locale];

export const useSiteContent = () => {
  const { locale } = useLocale();
  return getSiteContent(locale);
};
