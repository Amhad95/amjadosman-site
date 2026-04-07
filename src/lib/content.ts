import { useLocale, type Locale } from "@/lib/locale";

const siteContentEn = {
  meta: {
    title: "ADSI - Applied Design and Strategy Institute",
    description:
      "ADSI helps growing teams improve brand, websites, internal operations, and practical AI workflows with clear scope and clean handover.",
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
    servicesDropdown: [
      { label: "Services Overview", href: "/services" },
      { label: "Brand and Growth Systems", href: "/services/brand" },
      { label: "Internal Operations Systems", href: "/services/ops" },
      { label: "AI Agents and Automation", href: "/services/agents" },
    ],
    cta: { label: "Book a Call", href: "/book" },
    footer: [
      { label: "Delivery Process", href: "/process" },
      { label: "Resources", href: "/resources" },
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
      "ADSI designs the brand, operations, and AI systems that help growing teams move with more clarity.",
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
    caseStudiesSubheadline: "Sample deliverables from real projects.",
    lastUpdatedLabel: "Last updated",
    workSectionHeadline: "What we built",
    workApproachLabel: "Approach",
    workDeliverablesLabel: "Deliverables",
    workChangesLabel: "What changed",
    clientProfileLabel: "Client profile",
    challengeLabel: "Challenge",
    resourceCtaHeadline: "Turn this into delivery.",
    resourceCtaDescription:
      "We'll implement the system behind the guide and show the pricing.",
  },

  home: {
    hero: {
      headline:
        "Sharper brand, cleaner operations, and practical AI systems for growing teams.",
      subheadline:
        "ADSI helps ambitious teams improve how they show up, how they operate, and how they scale. Brand systems, websites, SOPs, workflow design, and automation delivered with clear scope and clean handover.",
      credibilityStrip:
        "Clear scope. Faster decisions. Clean handover. Ongoing support if you need it.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "Run a Free Audit", href: "/tools" },
    },
    whatWeDeliver: {
      headline: "Where ADSI usually steps in.",
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
      headline: "Proof you can evaluate quickly.",
      subheadline:
        "Review tangible samples quickly so decisions are based on evidence, not promises.",
      eyebrow: "Proof",
      tiles: [
        {
          title: "SharePoint walkthrough",
          description: "See a sample architecture in action.",
        },
        {
          title: "SOP pack",
          description: "Table of contents and excerpt from a real pack.",
        },
        {
          title: "Before and after",
          description: "Landing page with rationale.",
        },
        {
          title: "Brand excerpt",
          description: "Guideline pages from a delivered system.",
        },
      ],
      tileCta: "View sample",
      cta: { label: "See work", href: "/work" },
    },
    aiTools: {
      eyebrow: "AI tools",
      headline: "Get a useful output in minutes.",
      subheadline:
        "Our free tools generate drafts and audits. Use them now, or let us implement the results.",
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
      cta: { label: "Explore AI tools", href: "/tools" },
    },
    pricingTeaser: {
      headline: "Clear packages. No vague billing.",
      description:
        "Choose a focused package, a broader delivery project, or ongoing support. Every engagement starts with scope, timing, and a concrete next step.",
      cta: { label: "View pricing and packages", href: "/pricing" },
    },
    finalCta: {
      headline: "Book the right next step.",
      description: "We'll help you choose the starting package and show the pricing.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  services: {
    hero: {
      headline: "Choose the service track that fits your next bottleneck.",
      subheadline:
        "Whether you need a stronger market presence, cleaner internal operations, or practical automation, ADSI scopes the work around usable deliverables your team can keep building on.",
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
        "ADSI deploys focused CRM, operations, and document workflows so your team gets a usable system, not another tool to figure out alone.",
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
        "We only offer modules we can implement properly and support long-term.",
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
      headline: "Tools that turn messy inputs into structured outputs.",
      subheadline:
        "Run an audit or generate a draft. Get a useful output in minutes. Then decide if you want us to implement it properly.",
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
      headline: "Download the full report as a PDF.",
      description:
        "Enter your email and receive a downloadable report plus a one-page implementation plan.",
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
      headline: "Proof you can evaluate.",
      subheadline:
        "Sample deliverables from real projects. Review the quality before you commit.",
    },
    tiles: [
      {
        title: "SharePoint Architecture Walkthrough",
        description:
          "Interactive tour of intranet structure, document libraries, and permissions.",
        thumbnail: null,
        href: "/work/sharepoint-case-study",
        cta: "View case study",
      },
      {
        title: "SOP Library Implementation",
        description:
          "Complete procedure library with table of contents and role mapping.",
        thumbnail: null,
        href: "/work/sop-case-study",
        cta: "View case study",
      },
      {
        title: "Landing Page Redesign",
        description:
          "Conversion-focused redesign with before/after comparison and rationale.",
        thumbnail: null,
        href: "/work/landing-page-case-study",
        cta: "View case study",
      },
      {
        title: "Brand System Delivery",
        description:
          "Complete identity system from logo to guidelines to template pack.",
        thumbnail: null,
        href: "/work/brand-case-study",
        cta: "View case study",
      },
    ],
    requestCta: {
      headline: "Scope similar work.",
      description:
        "We'll shape the first engagement around your bottleneck, timeline, and price.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  about: {
    hero: {
      eyebrow: "About ADSI",
      headline: "ADSI builds the business layer around growing teams.",
      subheadline:
        "We help companies close the gap between strong underlying work and the brand, operations, and workflow systems that support it.",
      credibilityStrip:
        "Clear scope. Practical delivery. Clean handover. Ongoing support if useful.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
    story: {
      eyebrow: "About us",
      headline:
        "ADSI exists because growing businesses often outgrow the systems around good work.",
      subheadline:
        "The business may already be delivering strong outcomes, but the surrounding layer often starts falling behind as the company grows.",
      paragraphs: [
        "That gap can show up externally. The website, brand, or sales materials are not creating enough clarity or trust for buyers.",
        "It can also show up internally. Files are harder to find, SOPs are too thin, onboarding depends on memory, and repeat work keeps getting rebuilt from scratch.",
        "ADSI exists to close that gap with practical systems. We help teams strengthen how the business shows up, how it operates, and where automation can remove repeat work without creating more confusion.",
      ],
    },
    drivers: {
      eyebrow: "Our why",
      headline: "What drives the way ADSI works.",
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
      eyebrow: "Who we work best with",
      headline:
        "The fit is usually strongest when the business already has momentum.",
      subheadline:
        "ADSI is usually most useful when the company is already doing meaningful work, but the business layer around that work needs catching up.",
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
      eyebrow: "Working with ADSI",
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
      headline: "See if we're the fit.",
      description:
        "Book a short call and we'll tell you the right starting package.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  book: {
    hero: {
      headline: "Book a short call with ADSI",
      subheadline:
        "You will be redirected to the live Google Meet booking page to pick a time directly.",
    },
    redirectingMessage:
      "Redirecting you to the live Google Meet booking page now.",
    openBookingPage: "Open booking page",
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
        "We'll match the delivery process to the first problem you need to fix.",
      primaryCta: { label: "Book a Call", href: "/book" },
      secondaryCta: { label: "View pricing", href: "/pricing" },
    },
  },

  resources: {
    hero: {
      headline: "Resources",
      subheadline:
        "Practical guides for teams improving brand, operations, and automation.",
    },
    emptyState: {
      message:
        "More guides are on the way. If you need something specific, reach out and we can point you in the right direction.",
      cta: { label: "Contact us", href: "/contact" },
    },
  },

  contact: {
    hero: {
      headline: "Tell us what you are trying to fix",
      subheadline:
        "Questions, project requests, and sample requests are all welcome.",
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
    title: "Privacy Policy",
    lastUpdated: "January 2025",
    placeholder: "Privacy policy content will be added here.",
  },

  terms: {
    title: "Terms of Service",
    lastUpdated: "January 2025",
    placeholder: "Terms of service content will be added here.",
  },
};

const siteContentAr: typeof siteContentEn = {
  meta: {
    title: "ADSI | أنظمة التصميم والعمليات والذكاء الاصطناعي للفرق المتنامية",
    description:
      "تساعد ADSI الفرق المتنامية على تطوير الهوية والمواقع والعمليات الداخلية وتدفقات الذكاء الاصطناعي العملية ضمن نطاق واضح وتسليم نظيف.",
  },

  navigation: {
    primary: [
      { label: "الخدمات", href: "/services" },
      { label: "البرمجيات", href: "/software" },
      { label: "أدوات الذكاء الاصطناعي", href: "/tools" },
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
    cta: { label: "احجز مكالمة", href: "/book" },
    footer: [
      { label: "آلية التسليم", href: "/process" },
      { label: "الموارد", href: "/resources" },
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
      "تصمم ADSI أنظمة الهوية والعمليات والذكاء الاصطناعي التي تساعد الفرق المتنامية على التحرك بوضوح أكبر.",
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
    caseStudiesSubheadline: "نماذج عملية من مشاريع حقيقية.",
    lastUpdatedLabel: "آخر تحديث",
    workSectionHeadline: "ما الذي قمنا ببنائه",
    workApproachLabel: "المنهج",
    workDeliverablesLabel: "المخرجات",
    workChangesLabel: "ما الذي تغيّر",
    clientProfileLabel: "ملف العميل",
    challengeLabel: "التحدي",
    resourceCtaHeadline: "حوّل هذا إلى تنفيذ فعلي.",
    resourceCtaDescription:
      "سننفذ النظام الكامن وراء الدليل ونوضح لك التسعير.",
  },

  home: {
    hero: {
      headline:
        "هوية أوضح، عمليات أنظف، وأنظمة ذكاء اصطناعي عملية للفرق المتنامية.",
      subheadline:
        "تساعد ADSI الفرق الطموحة على تحسين صورتها، وطريقة عملها، وكيفية توسعها. أنظمة الهوية، المواقع، أدلة الإجراءات، تصميم سير العمل، والأتمتة ضمن نطاق واضح وتسليم منظم.",
      credibilityStrip:
        "نطاق واضح. قرارات أسرع. تسليم نظيف. ودعم مستمر إذا احتجته.",
      primaryCta: { label: "احجز مكالمة", href: "/book" },
      secondaryCta: { label: "شغّل تدقيقاً مجانياً", href: "/tools" },
    },
    whatWeDeliver: {
      headline: "أين تتدخل ADSI عادة.",
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
      headline: "أدلة يمكنك تقييمها بسرعة.",
      subheadline:
        "راجع نماذج ملموسة بسرعة حتى تُبنى القرارات على أدلة لا على وعود.",
      eyebrow: "الأدلة",
      tiles: [
        { title: "استعراض SharePoint", description: "شاهد بنية نموذجية أثناء العمل." },
        { title: "حزمة SOP", description: "فهرس ومقتطف من حزمة حقيقية." },
        { title: "قبل وبعد", description: "صفحة هبوط مع التبرير." },
        { title: "مقتطف من الهوية", description: "صفحات إرشادية من نظام تم تسليمه." },
      ],
      tileCta: "عرض النموذج",
      cta: { label: "شاهد الأعمال", href: "/work" },
    },
    aiTools: {
      eyebrow: "أدوات الذكاء الاصطناعي",
      headline: "احصل على مخرجات مفيدة خلال دقائق.",
      subheadline:
        "أدواتنا المجانية تولّد مسودات وتقارير تدقيق. استخدمها الآن أو دعنا ننفذ النتائج بالشكل الصحيح.",
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
      cta: { label: "استكشف الأدوات", href: "/tools" },
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
        "سواء كنت تحتاج إلى حضور أقوى في السوق أو عمليات داخلية أنظف أو أتمتة عملية، تقوم ADSI بتحديد العمل حول مخرجات قابلة للاستخدام يمكن لفريقك البناء عليها.",
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
        "تقوم ADSI بنشر أنظمة CRM وعمليات ومستندات مركزة حتى يحصل فريقك على نظام قابل للاستخدام، لا أداة إضافية عليهم فهمها وحدهم.",
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
      headline: "أدوات تحوّل المدخلات المبعثرة إلى مخرجات منظمة.",
      subheadline:
        "شغّل تدقيقاً أو ولّد مسودة. احصل على مخرجات مفيدة خلال دقائق، ثم قرر إن كنت تريدنا أن ننفذها بالشكل الصحيح.",
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
      headline: "حمّل التقرير الكامل بصيغة PDF.",
      description:
        "أدخل بريدك الإلكتروني لتصلك نسخة قابلة للتنزيل مع خطة تنفيذ من صفحة واحدة.",
      buttonLabel: "احصل على PDF",
      successMessage: "تحقق من بريدك لاستلام التقرير.",
      downloadLabel: "تحميل PDF",
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
      headline: "أدلة يمكنك تقييمها.",
      subheadline:
        "نماذج تسليم من مشاريع حقيقية. راجع الجودة قبل أن تلتزم.",
    },
    tiles: [
      {
        title: "استعراض بنية SharePoint",
        description:
          "جولة تفاعلية في بنية الإنترانت ومكتبات المستندات والصلاحيات.",
        thumbnail: null,
        href: "/work/sharepoint-case-study",
        cta: "عرض دراسة الحالة",
      },
      {
        title: "تنفيذ مكتبة SOP",
        description: "مكتبة إجراءات كاملة مع فهرس وتوزيع أدوار.",
        thumbnail: null,
        href: "/work/sop-case-study",
        cta: "عرض دراسة الحالة",
      },
      {
        title: "إعادة تصميم صفحة هبوط",
        description:
          "إعادة تصميم تركّز على التحويل مع مقارنة قبل وبعد وتبرير.",
        thumbnail: null,
        href: "/work/landing-page-case-study",
        cta: "عرض دراسة الحالة",
      },
      {
        title: "تسليم نظام هوية",
        description:
          "نظام هوية كامل من الشعار إلى الإرشادات إلى القوالب.",
        thumbnail: null,
        href: "/work/brand-case-study",
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
      eyebrow: "عن ADSI",
      headline: "تبني ADSI طبقة الأعمال المحيطة بالفرق المتنامية.",
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
        "توجد ADSI لأن الشركات المتنامية غالباً ما تتجاوز الأنظمة المحيطة بالعمل الجيد.",
      subheadline:
        "قد تكون الشركة تحقق نتائج قوية بالفعل، لكن الطبقة المحيطة بذلك العمل تبدأ غالباً بالتأخر مع نمو الشركة.",
      paragraphs: [
        "يمكن أن تظهر هذه الفجوة خارجياً. فالموقع أو الهوية أو مواد البيع لا تخلق القدر الكافي من الوضوح والثقة لدى المشترين.",
        "ويمكن أن تظهر داخلياً أيضاً. يصبح العثور على الملفات أصعب، وتبقى أدلة الإجراءات سطحية، ويعتمد الانضمام على الذاكرة، ويُعاد بناء العمل المتكرر من الصفر.",
        "توجد ADSI لسد هذه الفجوة بأنظمة عملية. نحن نساعد الفرق على تقوية صورة العمل، وطريقة تشغيله، وأين يمكن للأتمتة أن تزيل العمل المتكرر دون خلق مزيد من الالتباس.",
      ],
    },
    drivers: {
      eyebrow: "لماذا نعمل بهذه الطريقة",
      headline: "ما الذي يقود طريقة عمل ADSI.",
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
        "تكون ADSI أكثر فائدة عادة عندما تكون الشركة تقوم بعمل مهم بالفعل، لكن طبقة الأعمال المحيطة بذلك العمل تحتاج إلى اللحاق.",
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
      eyebrow: "العمل مع ADSI",
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
      headline: "احجز مكالمة قصيرة مع ADSI",
      subheadline:
        "سيتم تحويلك إلى صفحة الحجز المباشرة في Google Meet لاختيار الوقت مباشرة.",
    },
    redirectingMessage: "يتم الآن تحويلك إلى صفحة الحجز المباشرة في Google Meet.",
    openBookingPage: "افتح صفحة الحجز",
  },

  process: {
    hero: {
      headline: "كيف نُسلّم",
      subheadline: "عملية منظمة. اجتماعات أقل. وتسليم نظيف.",
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
      headline: "الموارد",
      subheadline:
        "أدلة عملية للفرق التي تطور الهوية والعمليات والأتمتة.",
    },
    emptyState: {
      message:
        "المزيد من الأدلة قادم. إذا كنت تحتاج شيئاً محدداً، تواصل معنا وسنوجّهك إلى المسار المناسب.",
      cta: { label: "تواصل معنا", href: "/contact" },
    },
  },

  contact: {
    hero: {
      headline: "أخبرنا بما تحاول إصلاحه",
      subheadline:
        "الأسئلة وطلبات المشاريع وطلبات النماذج كلها مرحب بها.",
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
    title: "سياسة الخصوصية",
    lastUpdated: "يناير 2025",
    placeholder: "سيتم إضافة محتوى سياسة الخصوصية هنا.",
  },

  terms: {
    title: "شروط الخدمة",
    lastUpdated: "يناير 2025",
    placeholder: "سيتم إضافة محتوى شروط الخدمة هنا.",
  },
};

export type SiteContent = typeof siteContentEn;

export const siteContentByLocale: Record<Locale, SiteContent> = {
  en: siteContentEn,
  ar: siteContentAr,
};

export const siteContent = siteContentEn;

export const getSiteContent = (locale: Locale) => siteContentByLocale[locale];

export const useSiteContent = () => {
  const { locale } = useLocale();
  return getSiteContent(locale);
};
