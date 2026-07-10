import type { Locale } from "@/lib/locale";

export type ServiceDetailId = "brand" | "ops" | "agents";

interface ServiceOutcomeItem {
  title: string;
  body: string;
}

interface ServiceSummaryCard {
  label: string;
  title: string;
  body: string;
}

interface ServiceDeliverable {
  title: string;
  body: string;
}

interface ServiceFaqItem {
  q: string;
  a: string;
}

interface ServiceDeliveryStep {
  title: string;
  description: string;
}

export interface ServiceDetailContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  summaryPanel: {
    mostRequested: ServiceSummaryCard;
    typicalStart: ServiceSummaryCard;
    includedLabel: string;
    readyToScopeLabel: string;
    includedItems: string[];
  };
  outcomesSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: ServiceOutcomeItem[];
  };
  whyHireSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    reasons: string[];
  };
  deliverablesSection: {
    title: string;
    items: ServiceDeliverable[];
  };
  signalSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: ServiceOutcomeItem[];
  };
  controlsSection?: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: string[];
  };
  pricingSection: {
    eyebrow: string;
    headline: string;
  };
  deliverySection: {
    subheadline: string;
    steps: ServiceDeliveryStep[];
  };
  faqSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: ServiceFaqItem[];
  };
  ctaBand: {
    headline: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
}

const servicePageContentEn: Record<ServiceDetailId, ServiceDetailContent> = {
  brand: {
    hero: {
      eyebrow: "Brand and Growth Systems",
      headline: "Give buyers a clearer reason to trust you.",
      subheadline:
        "I shape the brand, website, and sales materials so the business feels sharper, more established, and easier to choose.",
      primaryCtaLabel: "See pricing",
      secondaryCtaLabel: "Book a call",
    },
    summaryPanel: {
      mostRequested: {
        label: "Most requested",
        title: "Website refresh",
        body: "Often paired with clearer messaging and case-study structure.",
      },
      typicalStart: {
        label: "Typical start",
        title: "Brand sprint",
        body: "A contained way to fix the foundation before scaling it across assets.",
      },
      includedLabel: "Included in this service",
      readyToScopeLabel: "Ready to scope",
      includedItems: ["Brand system", "Website and CMS", "Sales materials"],
    },
    outcomesSection: {
      eyebrow: "What improves",
      headline:
        "What changes when your brand and website finally pull in the same direction",
      subheadline:
        "This service is designed for businesses that already do good work, but are not presenting that quality clearly enough to buyers.",
      items: [
        {
          title: "A stronger first impression",
          body: "The company feels more established, more coherent, and easier to trust at first glance.",
        },
        {
          title: "Clearer positioning",
          body: "Prospects understand what you do, what makes the offer different, and why they should keep reading.",
        },
        {
          title: "Sales materials that stay aligned",
          body: "Decks, proposals, and one-pagers stop drifting every time someone rebuilds them from scratch.",
        },
        {
          title: "A system that keeps working",
          body: "Templates, CMS structure, and guidance make future updates far less chaotic.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Why clients hire us",
      headline:
        "The business feels good on the inside, but the outside still feels behind",
      subheadline:
        "When credibility, conversion, or consistency is weak, buyers feel it before anyone on the team has a chance to explain the nuance.",
      reasons: [
        "The work is strong, but the brand and website are underselling it.",
        "Buyers are not getting enough clarity or confidence from the current site.",
        "The business has grown, but its materials still feel stitched together.",
        "You need to sharpen the story before a launch, growth push, or sales cycle.",
      ],
    },
    deliverablesSection: {
      title: "What gets delivered",
      items: [
        {
          title: "Brand system",
          body: "Identity direction, visual rules, messaging hierarchy, and reusable templates that stop the brand from drifting.",
        },
        {
          title: "Website and CMS",
          body: "Pages, structure, and publishing logic built around buyer questions and conversion flow, not just page count.",
        },
        {
          title: "Sales materials",
          body: "Decks, proposals, and case-study formats that feel consistent with the brand and easier to update under pressure.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Signal points",
      headline: "Where the difference is usually felt first",
      subheadline:
        "These are the parts of the brand and growth system that tend to create faster buyer confidence once they are cleaned up.",
      items: [
        {
          title: "Website hierarchy",
          body: "Sharper page structure, stronger proof placement, and clearer next-step logic.",
        },
        {
          title: "Reusable collateral",
          body: "Materials built so the team can create new assets without re-inventing the design every time.",
        },
        {
          title: "Brand consistency",
          body: "The company starts looking like one business again across web, documents, and presentations.",
        },
        {
          title: "Confidence in the room",
          body: "Stronger visual and verbal coherence tends to improve how seriously the business is taken.",
        },
      ],
    },
    controlsSection: {
      eyebrow: "Controls",
      headline: "What keeps the workflows usable and safe",
      subheadline:
        "Practical automation needs more than a model. It needs approvals, visibility, and rules for what happens when confidence is low.",
      items: [
        "Human approvals where the workflow still needs judgment",
        "Role-based permissions for source systems and outputs",
        "Audit logs and monitoring for visibility",
        "Fallback paths so failures do not disappear silently",
      ],
    },
    pricingSection: {
      eyebrow: "Pricing",
      headline: "Ways clients usually get started",
    },
    deliverySection: {
      subheadline:
        "This service is structured to make decisions early, build in stages, and leave you with a system that can keep moving after launch.",
      steps: [
        {
          title: "Clarify the positioning",
          description:
            "We align on audience, offer, proof, and the parts of the current brand that need to be kept, tightened, or replaced.",
        },
        {
          title: "Shape the system",
          description:
            "Messaging, page structure, and reusable assets are defined before detail work starts multiplying.",
        },
        {
          title: "Build the visible layer",
          description:
            "The brand, website, and sales materials are executed in milestones so feedback stays focused.",
        },
        {
          title: "Launch and hand over",
          description:
            "Templates, logic, and publishing guidance are delivered so the business can keep using the system well.",
        },
        {
          title: "Keep improving if useful",
          description:
            "Retainers can pick up updates, new pages, and future material needs without restarting from zero.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Questions clients usually ask before starting",
      subheadline:
        "If you already know you need stronger brand and website foundations, these are the practical questions that usually come next.",
      items: [
        {
          q: "Can we start with just the website?",
          a: "Yes. Many clients start there. If the messaging or identity needs tightening first, we will flag that early so the site does not inherit the same weaknesses.",
        },
        {
          q: "Do you write the copy?",
          a: "I can shape the messaging framework, page structure, and page-level direction. Full copywriting can also be included if needed.",
        },
        {
          q: "Will we be able to update things after launch?",
          a: "Yes. The goal is a system your business can keep using, not a one-time visual refresh that becomes hard to maintain.",
        },
        {
          q: "Do you only work with one CMS?",
          a: "No. We recommend the setup that fits your publishing cadence, team size, and technical comfort level.",
        },
        {
          q: "Can you work with an existing brand?",
          a: "Yes. I can refine what already exists, build the missing pieces around it, or create a cleaner system if the current one is getting in the way.",
        },
        {
          q: "What is included in a retainer?",
          a: "Retainers cover updates, new pages, design adjustments, and iterative improvement once the main foundations are in place.",
        },
      ],
    },
    ctaBand: {
      headline: "Sharpen buyer trust.",
      description:
        "I will scope the first brand, website, or sales fix and show the pricing.",
      primaryLabel: "Book a Call",
      secondaryLabel: "View pricing",
    },
  },
  ops: {
    hero: {
      eyebrow: "Internal Operations Systems",
      headline: "Replace scattered files and tribal knowledge with a cleaner operating system.",
      subheadline:
        "I structure the systems behind the business so information is easier to find, recurring work is easier to follow, and onboarding creates less daily drag.",
      primaryCtaLabel: "See pricing",
      secondaryCtaLabel: "Book a call",
    },
    summaryPanel: {
      mostRequested: {
        label: "Most requested",
        title: "SOP library",
        body: "Usually paired with clearer document structure and ownership rules.",
      },
      typicalStart: {
        label: "Typical start",
        title: "Ops audit",
        body: "A contained way to see what needs rebuilding and what can stay.",
      },
      includedLabel: "Included in this service",
      readyToScopeLabel: "Ready to scope",
      includedItems: [
        "SharePoint architecture",
        "SOP library",
        "Onboarding and governance",
      ],
    },
    outcomesSection: {
      eyebrow: "What improves",
      headline:
        "What changes once the operating layer stops living in people's heads",
      subheadline:
        "This service is for businesses that need more clarity behind the scenes so everyday work becomes easier to run and easier to hand off.",
      items: [
        {
          title: "Less time lost to file chaos",
          body: "People know where things live, how access works, and where recurring work is meant to start.",
        },
        {
          title: "Processes people can actually follow",
          body: "Recurring work becomes easier to repeat because steps, ownership, and expectations are clearer.",
        },
        {
          title: "Faster onboarding",
          body: "New hires get a cleaner ramp path instead of learning the role by chasing tribal knowledge.",
        },
        {
          title: "Better operational handoffs",
          body: "Approvals, requests, and repeat work move through more predictable paths instead of inbox chains.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Why clients hire us",
      headline:
        "The business has momentum, but the internal structure has not caught up",
      subheadline:
        "That gap usually shows up as repeat questions, weak handoffs, slow onboarding, and too much operational dependence on a few people.",
      reasons: [
        "The business has grown, but the internal structure behind it still feels improvised.",
        "Managers are re-explaining the same tasks because the process layer is too thin.",
        "Files, permissions, or document ownership feel messy and inconsistent.",
        "Onboarding depends too much on shadowing and memory instead of a repeatable system.",
      ],
    },
    deliverablesSection: {
      title: "What gets delivered",
      items: [
        {
          title: "Information structure",
          body: "SharePoint architecture, library logic, permissions, and document organization that are easier to navigate.",
        },
        {
          title: "SOPs and templates",
          body: "Recurring work documented clearly enough to reduce re-explaining, errors, and manager dependence.",
        },
        {
          title: "Onboarding and governance",
          body: "Role guides, governance notes, and operational expectations that create a cleaner baseline for the team.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Signal points",
      headline: "Where the difference is usually felt first",
      subheadline:
        "These are the operating improvements clients usually feel quickly once the structure becomes clearer.",
      items: [
        {
          title: "Findability improves",
          body: "The right documents and process references stop being buried in personal folders or memory.",
        },
        {
          title: "Requests move cleaner",
          body: "Approvals and recurring tasks start following a visible path instead of an improvised one.",
        },
        {
          title: "Documentation becomes usable",
          body: "SOPs are written to be followed, updated, and found at the point where the work happens.",
        },
        {
          title: "Ownership gets clearer",
          body: "Permissions, update ownership, and governance rules stop being implied and start being explicit.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "Pricing",
      headline: "Ways clients usually get started",
    },
    deliverySection: {
      subheadline:
        "This service is designed to reduce operational drag quickly without turning into a six-month documentation exercise.",
      steps: [
        {
          title: "Audit the current state",
          description:
            "We identify the friction points, repeat questions, and structural issues causing daily drag.",
        },
        {
          title: "Define the operating model",
          description:
            "We map ownership, access, document structure, and the workflows that need to become repeatable.",
        },
        {
          title: "Build the new layer",
          description:
            "The structure, SOPs, templates, and request paths are created in a usable sequence rather than all at once.",
        },
        {
          title: "Train and hand over",
          description:
            "Managers and team members get the guidance needed to use the system well and keep it current.",
        },
        {
          title: "Maintain if useful",
          description:
            "Retainers can continue updates, new SOP creation, and incremental improvements after launch.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Questions clients usually ask before starting",
      subheadline:
        "If you know the business needs cleaner operations, these are the practical questions that usually come next.",
      items: [
        {
          q: "Do you work with an existing SharePoint setup?",
          a: "Yes. I can restructure what already exists, simplify it, or build a cleaner operating layer around the parts that are worth keeping.",
        },
        {
          q: "How many SOPs are usually included?",
          a: "It depends on the scope, but we usually start with the workflows creating the most friction or repetition so the documentation becomes useful quickly.",
        },
        {
          q: "Can you train people after rollout?",
          a: "Yes. Handover can include walkthroughs, training sessions, and ownership guidance so the system is easier to maintain.",
        },
        {
          q: "What if we use Google Workspace or another platform?",
          a: "The same operating principles still apply. I can adapt the structure to the platform your business actually uses.",
        },
        {
          q: "How long does a setup usually take?",
          a: "Smaller cleanups can move quickly. Broader architecture and SOP projects usually take a few weeks, depending on the number of workflows involved.",
        },
        {
          q: "Can retainers include new SOP creation?",
          a: "Yes. Standard and Priority tiers can cover new documentation, updates, and ongoing workflow improvements after the main setup is complete.",
        },
      ],
    },
    ctaBand: {
      headline: "Clean up operations.",
      description: "I will scope the first operational reset and show the pricing.",
      primaryLabel: "Book a Call",
      secondaryLabel: "View pricing",
    },
  },
  agents: {
    hero: {
      eyebrow: "AI Agents and Automation",
      headline: "Automate repeat work without giving up control.",
      subheadline:
        "I design practical agent workflows for routing, drafting, reporting, and knowledge support, with approvals, boundaries, and safer failure handling built in from the start.",
      primaryCtaLabel: "See pricing",
      secondaryCtaLabel: "Book a call",
    },
    summaryPanel: {
      mostRequested: {
        label: "Most requested",
        title: "Intake automation",
        body: "A safe place to start when repetitive routing is eating time.",
      },
      typicalStart: {
        label: "Typical start",
        title: "Agent pilot",
        body: "A contained way to prove value before scaling to more workflows.",
      },
      includedLabel: "Included in this service",
      readyToScopeLabel: "Ready to scope",
      includedItems: [
        "Workflow automation",
        "Knowledge support",
        "Controls and approvals",
      ],
    },
    outcomesSection: {
      eyebrow: "What improves",
      headline: "What changes when automation is built around the real workflow",
      subheadline:
        "This service is for teams that want automation to save time, support decisions, and stay visible enough to trust in day-to-day use.",
      items: [
        {
          title: "Less repetitive admin work",
          body: "Automations take on repeat routing, drafting, summaries, and prep work that should not need full human attention every time.",
        },
        {
          title: "Cleaner handoffs",
          body: "Requests move through more visible, more predictable paths instead of getting stuck in individual inboxes.",
        },
        {
          title: "Faster access to approved knowledge",
          body: "Teams get grounded answers and context from the right sources without digging across tools or asking the same questions again.",
        },
        {
          title: "Safer automation",
          body: "Approvals, logs, and fallback logic make the workflows easier to trust because you can actually see what they are doing.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "Why clients hire us",
      headline:
        "The opportunity is obvious, but the business needs a safer way to start",
      subheadline:
        "Most teams do not need a grand AI strategy first. They need one contained workflow that proves value, keeps approvals in place, and does not create new risk.",
      reasons: [
        "The same repetitive work is draining time across support, operations, or reporting.",
        "The business is curious about AI, but wants a practical operating model instead of a risky leap.",
        "Knowledge is scattered across tools and people, which makes simple answers slower than they should be.",
        "You want automation to save time without removing human checkpoints where judgment still matters.",
      ],
    },
    deliverablesSection: {
      title: "What gets delivered",
      items: [
        {
          title: "Workflow automation",
          body: "Intake, routing, drafting, summaries, and repeatable operational tasks designed around the real workflow instead of a demo scenario.",
        },
        {
          title: "Knowledge support",
          body: "Permission-aware answers and search flows grounded in approved source material, with context and citations where needed.",
        },
        {
          title: "Control layer",
          body: "Approvals, role boundaries, logging, and escalation rules that keep the workflow visible and easier to trust.",
        },
      ],
    },
    signalSection: {
      eyebrow: "Signal points",
      headline: "Where the difference is usually felt first",
      subheadline:
        "These are the improvements clients usually notice early when an automation pilot has been scoped around the right repetitive work.",
      items: [
        {
          title: "Less manual routing",
          body: "Requests and inputs start moving to the right place faster, with less sorting and chasing from the team.",
        },
        {
          title: "Better first drafts",
          body: "Automation creates a useful starting point so people spend more time reviewing and improving instead of rebuilding from zero.",
        },
        {
          title: "Operational visibility",
          body: "Monitoring and logs make it easier to understand how the workflow is behaving and where it needs adjustment.",
        },
        {
          title: "Safer failure handling",
          body: "Uncertain cases escalate instead of pretending to know the answer, which is usually what makes a pilot workable in the real world.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "Pricing",
      headline: "Ways clients usually get started",
    },
    deliverySection: {
      subheadline:
        "This service is designed to prove value with one contained workflow before you decide how far to scale the approach.",
      steps: [
        {
          title: "Map the workflow",
          description:
            "We isolate the repetitive work, decision points, and source systems involved in the use case.",
        },
        {
          title: "Define the control points",
          description:
            "Approvals, logs, escalation rules, and access boundaries are shaped before build starts.",
        },
        {
          title: "Build the pilot",
          description:
            "The workflow is implemented and tested in a controlled way so its real operating behavior is visible.",
        },
        {
          title: "Launch carefully",
          description:
            "The first release goes live with monitoring and human checkpoints still in place.",
        },
        {
          title: "Tune and expand",
          description:
            "If the pilot proves itself, we refine it or extend the same operating model into adjacent workflows.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      headline: "Questions clients usually ask before starting",
      subheadline:
        "If the business wants practical automation rather than vague AI experimentation, these are the questions that usually come next.",
      items: [
        {
          q: "Do automations replace our staff?",
          a: "No. The goal is to remove repetitive work and improve handoffs so people spend more time on judgment, relationships, and exceptions.",
        },
        {
          q: "Can we start with one use case?",
          a: "Yes. In most cases that is the right way to begin. A contained pilot is the fastest way to prove value and check operating fit.",
        },
        {
          q: "How do you handle security and permissions?",
          a: "We scope access carefully, keep approvals where needed, and add logs so the team can review what happened and why.",
        },
        {
          q: "What happens when the workflow is uncertain?",
          a: "It should escalate cleanly instead of bluffing. Safe failure handling is part of the delivery, not an afterthought.",
        },
        {
          q: "What platforms do you use?",
          a: "We choose the stack based on the workflow, reliability needs, and the systems already in place. The operating model matters more than the trendiest tool choice.",
        },
        {
          q: "Do you monitor workflows after deployment?",
          a: "Yes. Retainers can cover monitoring, logic updates, tuning, and incremental workflow improvements after launch.",
        },
      ],
    },
    ctaBand: {
      headline: "Pilot automation safely.",
      description:
        "I will identify the first workflow worth automating and show the pricing.",
      primaryLabel: "Book a Call",
      secondaryLabel: "View pricing",
    },
  },
};

const servicePageContentAr: Record<ServiceDetailId, ServiceDetailContent> = {
  brand: {
    hero: {
      eyebrow: "أنظمة الهوية والنمو",
      headline: "امنح المشترين سبباً أوضح للثقة بك.",
      subheadline:
        "نصمم الهوية والموقع ومواد المبيعات بحيث يبدو العمل أكثر وضوحاً ورسوخاً وأسهل في الاختيار.",
      primaryCtaLabel: "عرض الأسعار",
      secondaryCtaLabel: "احجز مكالمة",
    },
    summaryPanel: {
      mostRequested: {
        label: "الأكثر طلباً",
        title: "تحديث الموقع",
        body: "غالباً ما يُنفَّذ مع تحسين الرسائل وبنية دراسات الحالة.",
      },
      typicalStart: {
        label: "البداية المعتادة",
        title: "Sprint للهوية",
        body: "طريقة مركزة لمعالجة الأساس قبل تعميمه على بقية الأصول.",
      },
      includedLabel: "يشمله هذا المسار",
      readyToScopeLabel: "جاهز لتحديد النطاق",
      includedItems: ["نظام الهوية", "الموقع وCMS", "مواد المبيعات"],
    },
    outcomesSection: {
      eyebrow: "ما الذي يتحسن",
      headline: "ما الذي يتغير عندما تبدأ الهوية والموقع بالعمل في الاتجاه نفسه",
      subheadline:
        "هذه الخدمة موجهة للشركات التي تقدم عملاً جيداً فعلاً، لكن جودة هذا العمل لا تظهر بوضوح كافٍ للمشتري.",
      items: [
        {
          title: "انطباع أول أقوى",
          body: "يبدو العمل أكثر رسوخاً واتساقاً وأسهل في الثقة منذ النظرة الأولى.",
        },
        {
          title: "تموضع أوضح",
          body: "يفهم العملاء المحتملون ما الذي تقدمه، وما الذي يميز العرض، ولماذا يجب أن يواصلوا القراءة.",
        },
        {
          title: "مواد مبيعات تبقى متسقة",
          body: "تتوقف العروض والملفات والصفحات التعريفية عن الانجراف كلما أعاد أحدهم بناءها من الصفر.",
        },
        {
          title: "نظام يستمر بالعمل",
          body: "القوالب وهيكل الـ CMS والإرشادات تجعل التحديثات اللاحقة أقل فوضى بكثير.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "لماذا يلجأ العملاء إلينا",
      headline: "العمل من الداخل جيد، لكن الصورة الخارجية ما زالت متأخرة",
      subheadline:
        "عندما تضعف المصداقية أو التحويل أو الاتساق، يشعر المشتري بذلك قبل أن تتاح للفريق فرصة شرح التفاصيل.",
      reasons: [
        "العمل قوي، لكن الهوية والموقع لا يعكسانه كما يجب.",
        "المشترون لا يحصلون على الوضوح أو الثقة الكافيين من الموقع الحالي.",
        "الشركة كبرت، لكن موادها ما زالت تبدو مركبة على أجزاء.",
        "تحتاجون إلى صقل القصة قبل إطلاق أو دفعة نمو أو دورة مبيعات.",
      ],
    },
    deliverablesSection: {
      title: "ما الذي يتم تسليمه",
      items: [
        {
          title: "نظام الهوية",
          body: "اتجاه الهوية والقواعد البصرية وتسلسل الرسائل وقوالب قابلة لإعادة الاستخدام تمنع الهوية من الانجراف.",
        },
        {
          title: "الموقع وCMS",
          body: "صفحات وهيكل ومنطق نشر مبني حول أسئلة المشتري ومسار التحويل، لا حول عدد الصفحات فقط.",
        },
        {
          title: "مواد المبيعات",
          body: "عروض وملفات وصيغ دراسات حالة تبدو منسجمة مع الهوية وأسهل في التحديث تحت الضغط.",
        },
      ],
    },
    signalSection: {
      eyebrow: "نقاط الإشارة",
      headline: "أين يظهر الفرق عادة أولاً",
      subheadline:
        "هذه هي الأجزاء التي ترفع ثقة المشتري بسرعة أكبر عندما يتم تنظيف نظام الهوية والنمو.",
      items: [
        {
          title: "هيكل أوضح للموقع",
          body: "ترتيب صفحات أقوى، ووضع أفضل لعناصر الإثبات، ومنطق أوضح للخطوة التالية.",
        },
        {
          title: "مواد قابلة لإعادة الاستخدام",
          body: "تُبنى المواد بحيث يتمكن الفريق من إنشاء أصول جديدة دون إعادة اختراع التصميم كل مرة.",
        },
        {
          title: "اتساق الهوية",
          body: "تبدأ الشركة بالظهور كعمل واحد متماسك عبر الويب والوثائق والعروض.",
        },
        {
          title: "ثقة أكبر في الغرفة",
          body: "الانسجام البصري واللفظي الأقوى يحسن عادةً مستوى الجدية الذي يُنظر به إلى الشركة.",
        },
      ],
    },
    controlsSection: {
      eyebrow: "الضوابط",
      headline: "ما الذي يبقي التدفقات قابلة للاستخدام وآمنة",
      subheadline:
        "الأتمتة العملية تحتاج إلى أكثر من نموذج. تحتاج إلى اعتمادات ورؤية واضحة وقواعد لما يحدث عندما تكون الثقة منخفضة.",
      items: [
        "اعتمادات بشرية حيث ما زال سير العمل يحتاج إلى حكم",
        "صلاحيات مبنية على الدور للأنظمة المصدر والمخرجات",
        "سجلات تدقيق ومراقبة من أجل الرؤية",
        "مسارات تراجع حتى لا تختفي الأعطال بصمت",
      ],
    },
    pricingSection: {
      eyebrow: "الأسعار",
      headline: "الطرق التي يبدأ بها العملاء غالباً",
    },
    deliverySection: {
      subheadline:
        "هذه الخدمة مبنية لاتخاذ القرارات مبكراً، والبناء على مراحل، وترككم مع نظام يواصل العمل بعد الإطلاق.",
      steps: [
        {
          title: "توضيح التموضع",
          description:
            "نحدد الجمهور والعرض وعناصر الإثبات وما يجب الإبقاء عليه أو تحسينه أو استبداله من الهوية الحالية.",
        },
        {
          title: "صياغة النظام",
          description:
            "نحدد الرسائل وبنية الصفحات والأصول القابلة لإعادة الاستخدام قبل أن يبدأ العمل التفصيلي بالتكاثر.",
        },
        {
          title: "بناء الطبقة المرئية",
          description:
            "يتم تنفيذ الهوية والموقع ومواد المبيعات ضمن مراحل واضحة ليبقى التغذية الراجعة مركزة.",
        },
        {
          title: "الإطلاق والتسليم",
          description:
            "نسلّم القوالب والمنطق وإرشادات النشر بحيث يستطيع الفريق مواصلة استخدام النظام جيداً.",
        },
        {
          title: "التحسين المستمر إذا كان مفيداً",
          description:
            "يمكن أن تستوعب الاشتراكات التحديثات والصفحات الجديدة والمواد المستقبلية دون إعادة البدء من الصفر.",
        },
      ],
    },
    faqSection: {
      eyebrow: "الأسئلة الشائعة",
      headline: "الأسئلة التي يطرحها العملاء عادة قبل البدء",
      subheadline:
        "إذا كنتم تعرفون أنكم تحتاجون إلى أساس أقوى للهوية والموقع، فهذه هي الأسئلة العملية التي تأتي غالباً بعد ذلك.",
      items: [
        {
          q: "هل يمكن أن نبدأ بالموقع فقط؟",
          a: "نعم. كثير من العملاء يبدأون من هناك. وإذا كانت الرسائل أو الهوية تحتاج إلى ضبط أولاً، سنوضح ذلك مبكراً حتى لا يرث الموقع نفس نقاط الضعف.",
        },
        {
          q: "هل تكتبون المحتوى؟",
          a: "يمكننا صياغة إطار الرسائل وهيكل الصفحات واتجاه المحتوى على مستوى الصفحة. كما يمكن تضمين كتابة المحتوى بالكامل عند الحاجة.",
        },
        {
          q: "هل سنستطيع تحديث الأشياء بعد الإطلاق؟",
          a: "نعم. الهدف هو بناء نظام يستطيع العمل الاستمرار باستخدامه، لا مجرد تجميل بصري يصعب الحفاظ عليه لاحقاً.",
        },
        {
          q: "هل تعملون مع نظام CMS واحد فقط؟",
          a: "لا. نوصي بالحل الذي يناسب وتيرة النشر وحجم الفريق ومستوى الراحة التقنية لديكم.",
        },
        {
          q: "هل يمكنكم العمل على هوية موجودة بالفعل؟",
          a: "نعم. يمكننا تحسين الموجود، أو بناء العناصر الناقصة حوله، أو إنشاء نظام أنظف إذا كان النظام الحالي يعيق التقدم.",
        },
        {
          q: "ما الذي يشمله الاشتراك الشهري؟",
          a: "تغطي الاشتراكات التحديثات والصفحات الجديدة وتعديلات التصميم والتحسينات التكرارية بعد أن تصبح الأسس الرئيسية جاهزة.",
        },
      ],
    },
    ctaBand: {
      headline: "صقل ثقة المشتري.",
      description: "سنحدد أول إصلاح في الهوية أو الموقع أو مواد المبيعات ونوضح السعر.",
      primaryLabel: "احجز مكالمة",
      secondaryLabel: "عرض الأسعار",
    },
  },
  ops: {
    hero: {
      eyebrow: "أنظمة العمليات الداخلية",
      headline: "استبدل الملفات المبعثرة والمعرفة الضمنية بنظام تشغيل أنظف.",
      subheadline:
        "ننظم الأنظمة خلف العمل بحيث يصبح العثور على المعلومات أسهل، وتتبع الأعمال المتكررة أوضح، والانضمام الجديد أقل إرباكاً يومياً.",
      primaryCtaLabel: "عرض الأسعار",
      secondaryCtaLabel: "احجز مكالمة",
    },
    summaryPanel: {
      mostRequested: {
        label: "الأكثر طلباً",
        title: "مكتبة SOP",
        body: "غالباً ما تُنفذ مع بنية وثائق أوضح وقواعد ملكية أنظف.",
      },
      typicalStart: {
        label: "البداية المعتادة",
        title: "تدقيق العمليات",
        body: "طريقة مركزة لمعرفة ما يحتاج إلى إعادة بناء وما الذي يمكن الإبقاء عليه.",
      },
      includedLabel: "يشمله هذا المسار",
      readyToScopeLabel: "جاهز لتحديد النطاق",
      includedItems: ["بنية SharePoint", "مكتبة SOP", "الانضمام والحوكمة"],
    },
    outcomesSection: {
      eyebrow: "ما الذي يتحسن",
      headline: "ما الذي يتغير عندما تتوقف طبقة التشغيل عن العيش داخل رؤوس الناس",
      subheadline:
        "هذه الخدمة للشركات التي تحتاج إلى وضوح أكبر خلف الكواليس حتى يصبح العمل اليومي أسهل في التشغيل والتسليم.",
      items: [
        {
          title: "وقت أقل يضيع في فوضى الملفات",
          body: "يعرف الناس أين توجد الأشياء، وكيف تعمل الصلاحيات، ومن أين يجب أن يبدأ العمل المتكرر.",
        },
        {
          title: "إجراءات يمكن اتباعها فعلاً",
          body: "يصبح تكرار العمل أسهل لأن الخطوات والملكية والتوقعات أوضح.",
        },
        {
          title: "انضمام أسرع",
          body: "يحصل الموظفون الجدد على مسار أوضح بدلاً من تعلم الدور عبر مطاردة المعرفة الضمنية.",
        },
        {
          title: "تسليمات تشغيلية أنظف",
          body: "تتحرك الموافقات والطلبات والعمل المتكرر عبر مسارات أكثر وضوحاً بدلاً من سلاسل البريد.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "لماذا يلجأ العملاء إلينا",
      headline: "الشركة لديها زخم، لكن البنية الداخلية لم تلحق بعد",
      subheadline:
        "عادة ما تظهر هذه الفجوة على شكل أسئلة متكررة، وتسليمات ضعيفة، وانضمام بطيء، واعتماد تشغيلي زائد على عدد قليل من الأشخاص.",
      reasons: [
        "الشركة نمت، لكن الهيكل الداخلي خلفها ما زال يبدو مرتجلاً.",
        "المديرون يعيدون شرح نفس المهام لأن طبقة الإجراءات ما زالت رقيقة جداً.",
        "الملفات أو الصلاحيات أو ملكية الوثائق تبدو فوضوية وغير متسقة.",
        "الانضمام يعتمد أكثر من اللازم على التظليل والذاكرة بدلاً من نظام قابل للتكرار.",
      ],
    },
    deliverablesSection: {
      title: "ما الذي يتم تسليمه",
      items: [
        {
          title: "هيكل المعلومات",
          body: "بنية SharePoint ومنطق المكتبات والصلاحيات وتنظيم الوثائق بطريقة أسهل في التصفح.",
        },
        {
          title: "إجراءات وقوالب",
          body: "توثيق واضح للعمل المتكرر بما يكفي لتقليل إعادة الشرح والأخطاء والاعتماد الزائد على المدير.",
        },
        {
          title: "الانضمام والحوكمة",
          body: "أدلة أدوار وملاحظات حوكمة وتوقعات تشغيلية تصنع خط أساس أنظف للفريق.",
        },
      ],
    },
    signalSection: {
      eyebrow: "نقاط الإشارة",
      headline: "أين يظهر الفرق عادة أولاً",
      subheadline:
        "هذه هي التحسينات التشغيلية التي يشعر بها العملاء بسرعة عندما يصبح الهيكل أوضح.",
      items: [
        {
          title: "تحسن إمكانية العثور",
          body: "تتوقف الوثائق والمراجع الصحيحة عن الاختباء داخل مجلدات شخصية أو ذاكرة فردية.",
        },
        {
          title: "الطلبات تتحرك بشكل أنظف",
          body: "تبدأ الموافقات والمهام المتكررة باتباع مسار واضح بدلاً من مسار مرتجل.",
        },
        {
          title: "التوثيق يصبح قابلاً للاستخدام",
          body: "تُكتب إجراءات التشغيل بحيث يمكن اتباعها وتحديثها والعثور عليها في المكان الذي يحدث فيه العمل.",
        },
        {
          title: "الملكية تصبح أوضح",
          body: "تتوقف الصلاحيات وملكية التحديث وقواعد الحوكمة عن كونها ضمنية وتصبح واضحة وصريحة.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "الأسعار",
      headline: "الطرق التي يبدأ بها العملاء غالباً",
    },
    deliverySection: {
      subheadline:
        "هذه الخدمة مصممة لتخفيف الاحتكاك التشغيلي بسرعة دون أن تتحول إلى مشروع توثيق يمتد ستة أشهر.",
      steps: [
        {
          title: "تدقيق الوضع الحالي",
          description:
            "نحدد نقاط الاحتكاك والأسئلة المتكررة والمشكلات الهيكلية التي تسبب عبئاً يومياً.",
        },
        {
          title: "تعريف نموذج التشغيل",
          description:
            "نرسم الملكية والصلاحيات وهيكل الوثائق وسير العمل الذي يجب أن يصبح قابلاً للتكرار.",
        },
        {
          title: "بناء الطبقة الجديدة",
          description:
            "يتم إنشاء الهيكل والإجراءات والقوالب ومسارات الطلبات بتسلسل عملي بدلاً من تنفيذ كل شيء دفعة واحدة.",
        },
        {
          title: "التدريب والتسليم",
          description:
            "يحصل المديرون وأعضاء الفريق على الإرشاد اللازم لاستخدام النظام جيداً وإبقائه محدثاً.",
        },
        {
          title: "الصيانة إذا كانت مفيدة",
          description:
            "يمكن للاشتراكات أن تواصل التحديثات وإنشاء إجراءات جديدة والتحسينات التدريجية بعد الإطلاق.",
        },
      ],
    },
    faqSection: {
      eyebrow: "الأسئلة الشائعة",
      headline: "الأسئلة التي يطرحها العملاء عادة قبل البدء",
      subheadline:
        "إذا كنتم تعرفون أن العمل يحتاج إلى عمليات أنظف، فهذه هي الأسئلة العملية التي تأتي غالباً بعد ذلك.",
      items: [
        {
          q: "هل تعملون على SharePoint موجود بالفعل؟",
          a: "نعم. يمكننا إعادة تنظيم الموجود أو تبسيطه أو بناء طبقة تشغيل أنظف حول الأجزاء التي تستحق الاحتفاظ بها.",
        },
        {
          q: "كم عدد إجراءات SOP التي تُضمَّن عادة؟",
          a: "يعتمد ذلك على النطاق، لكننا نبدأ عادةً بسير العمل الذي يسبب أكبر احتكاك أو تكرار حتى يصبح التوثيق مفيداً بسرعة.",
        },
        {
          q: "هل يمكنكم تدريب الفريق بعد الإطلاق؟",
          a: "نعم. يمكن أن يشمل التسليم جلسات شرح وتدريباً وتوجيهات ملكية بحيث يصبح الحفاظ على النظام أسهل.",
        },
        {
          q: "ماذا لو كنا نستخدم Google Workspace أو منصة أخرى؟",
          a: "تنطبق نفس مبادئ التشغيل. يمكننا تكييف الهيكل مع المنصة التي يستخدمها العمل فعلياً.",
        },
        {
          q: "كم تستغرق عملية الإعداد عادة؟",
          a: "يمكن أن تتحرك عمليات التنظيف الأصغر بسرعة. أما مشاريع البنية الأوسع وإجراءات SOP فعادة ما تستغرق بضعة أسابيع بحسب عدد التدفقات المعنية.",
        },
        {
          q: "هل يمكن أن تشمل الاشتراكات إنشاء SOP جديدة؟",
          a: "نعم. يمكن لطبقات Standard وPriority أن تغطي توثيقاً جديداً وتحديثات وتحسينات تشغيلية مستمرة بعد اكتمال الإعداد الأساسي.",
        },
      ],
    },
    ctaBand: {
      headline: "رتّب العمليات من جديد.",
      description: "سنحدد أول إعادة ضبط تشغيلية ونوضح التسعير.",
      primaryLabel: "احجز مكالمة",
      secondaryLabel: "عرض الأسعار",
    },
  },
  agents: {
    hero: {
      eyebrow: "الوكلاء والعمليات المؤتمتة",
      headline: "أتمت العمل المتكرر دون أن تتخلى عن التحكم.",
      subheadline:
        "نصمم تدفقات عملية للوكلاء في التوجيه والصياغة والتقارير ودعم المعرفة، مع اعتمادات وحدود ومعالجة فشل أكثر أماناً من البداية.",
      primaryCtaLabel: "عرض الأسعار",
      secondaryCtaLabel: "احجز مكالمة",
    },
    summaryPanel: {
      mostRequested: {
        label: "الأكثر طلباً",
        title: "أتمتة الاستقبال",
        body: "بداية آمنة عندما يستهلك التوجيه المتكرر وقت الفريق.",
      },
      typicalStart: {
        label: "البداية المعتادة",
        title: "Pilot للوكلاء",
        body: "طريقة مركزة لإثبات القيمة قبل التوسع إلى تدفقات إضافية.",
      },
      includedLabel: "يشمله هذا المسار",
      readyToScopeLabel: "جاهز لتحديد النطاق",
      includedItems: ["أتمتة سير العمل", "دعم المعرفة", "الضوابط والاعتمادات"],
    },
    outcomesSection: {
      eyebrow: "ما الذي يتحسن",
      headline: "ما الذي يتغير عندما تُبنى الأتمتة حول سير العمل الحقيقي",
      subheadline:
        "هذه الخدمة للفرق التي تريد من الأتمتة أن توفر الوقت، وتدعم القرار، وتبقى مرئية بما يكفي لتكون موثوقة يومياً.",
      items: [
        {
          title: "عمل إداري متكرر أقل",
          body: "تتولى الأتمتة التوجيه والصياغة والملخصات وأعمال التحضير المتكررة التي لا يجب أن تستهلك انتباهاً بشرياً كاملاً كل مرة.",
        },
        {
          title: "تسليمات أنظف",
          body: "تتحرك الطلبات عبر مسارات أوضح وأكثر قابلية للتوقع بدلاً من أن تعلق في صناديق بريد فردية.",
        },
        {
          title: "وصول أسرع إلى المعرفة المعتمدة",
          body: "يحصل الفريق على إجابات وسياق من المصادر الصحيحة دون البحث عبر الأدوات أو إعادة طرح نفس الأسئلة.",
        },
        {
          title: "أتمتة أكثر أماناً",
          body: "تجعل الاعتمادات والسجلات ومنطق التراجع هذه التدفقات أسهل في الثقة لأنك ترى فعلاً ما الذي تفعله.",
        },
      ],
    },
    whyHireSection: {
      eyebrow: "لماذا يلجأ العملاء إلينا",
      headline: "الفرصة واضحة، لكن العمل يحتاج إلى طريقة أكثر أماناً للبدء",
      subheadline:
        "معظم الفرق لا تحتاج أولاً إلى استراتيجية AI كبيرة. ما تحتاجه هو تدفق واحد محدد يثبت القيمة ويحافظ على الاعتمادات ولا يخلق خطراً جديداً.",
      reasons: [
        "العمل المتكرر نفسه يستهلك الوقت عبر الدعم أو العمليات أو التقارير.",
        "العمل مهتم بالذكاء الاصطناعي، لكنه يريد نموذج تشغيل عملياً لا قفزة محفوفة بالمخاطر.",
        "المعرفة موزعة بين الأدوات والأشخاص، مما يجعل الإجابات البسيطة أبطأ مما ينبغي.",
        "تريدون أتمتة توفر الوقت من دون إزالة نقاط التحقق البشرية حيث ما زال الحكم مطلوباً.",
      ],
    },
    deliverablesSection: {
      title: "ما الذي يتم تسليمه",
      items: [
        {
          title: "أتمتة سير العمل",
          body: "الاستقبال والتوجيه والصياغة والملخصات والمهام التشغيلية المتكررة المصممة حول سير العمل الحقيقي لا حول سيناريو عرض تجريبي.",
        },
        {
          title: "دعم المعرفة",
          body: "إجابات وتدفقات بحث تراعي الصلاحيات وتعتمد على مصادر معتمدة مع سياق ومراجع عند الحاجة.",
        },
        {
          title: "طبقة التحكم",
          body: "اعتمادات وحدود أدوار وسجلات وقواعد تصعيد تبقي سير العمل مرئياً وأسهل في الثقة.",
        },
      ],
    },
    signalSection: {
      eyebrow: "نقاط الإشارة",
      headline: "أين يظهر الفرق عادة أولاً",
      subheadline:
        "هذه هي التحسينات التي يلاحظها العملاء مبكراً عندما يكون Pilot الأتمتة مبنياً حول العمل المتكرر الصحيح.",
      items: [
        {
          title: "توجيه يدوي أقل",
          body: "تبدأ الطلبات والمدخلات بالوصول إلى المكان الصحيح بسرعة أكبر، مع قدر أقل من الفرز والمطاردة من الفريق.",
        },
        {
          title: "مسودات أولية أفضل",
          body: "تخلق الأتمتة نقطة بداية مفيدة بحيث يقضي الناس وقتاً أطول في المراجعة والتحسين بدلاً من إعادة البناء من الصفر.",
        },
        {
          title: "رؤية تشغيلية أوضح",
          body: "تجعل المراقبة والسجلات فهم سلوك التدفق ونقاط تعديله أسهل بكثير.",
        },
        {
          title: "تعامل أكثر أماناً مع الفشل",
          body: "تُصعَّد الحالات غير الواضحة بدلاً من الادعاء بمعرفة الإجابة، وهو ما يجعل Pilot قابلاً للعمل في الواقع عادة.",
        },
      ],
    },
    pricingSection: {
      eyebrow: "الأسعار",
      headline: "الطرق التي يبدأ بها العملاء غالباً",
    },
    deliverySection: {
      subheadline:
        "هذه الخدمة مصممة لإثبات القيمة عبر تدفق واحد محدد قبل أن تقرروا إلى أي مدى تريدون توسيع النهج.",
      steps: [
        {
          title: "رسم سير العمل",
          description:
            "نعزل العمل المتكرر ونقاط القرار والأنظمة المصدر المشاركة في حالة الاستخدام.",
        },
        {
          title: "تعريف نقاط التحكم",
          description:
            "تُصاغ الاعتمادات والسجلات وقواعد التصعيد وحدود الوصول قبل بدء البناء.",
        },
        {
          title: "بناء الـ Pilot",
          description:
            "يتم تنفيذ التدفق واختباره بطريقة مضبوطة بحيث يصبح سلوكه التشغيلي الحقيقي مرئياً.",
        },
        {
          title: "إطلاق بحذر",
          description:
            "يذهب الإصدار الأول إلى العمل مع بقاء المراقبة ونقاط التحقق البشرية في مكانها.",
        },
        {
          title: "الضبط والتوسع",
          description:
            "إذا أثبت الـ Pilot نفسه، نقوم بتحسينه أو توسيع نفس نموذج التشغيل إلى تدفقات مجاورة.",
        },
      ],
    },
    faqSection: {
      eyebrow: "الأسئلة الشائعة",
      headline: "الأسئلة التي يطرحها العملاء عادة قبل البدء",
      subheadline:
        "إذا كان العمل يريد أتمتة عملية لا تجارب AI غامضة، فهذه هي الأسئلة التي تأتي غالباً بعد ذلك.",
      items: [
        {
          q: "هل تستبدل الأتمتة موظفينا؟",
          a: "لا. الهدف هو إزالة العمل المتكرر وتحسين التسليمات حتى يقضي الناس وقتاً أكبر في الحكم والعلاقات والاستثناءات.",
        },
        {
          q: "هل يمكن أن نبدأ بحالة استخدام واحدة؟",
          a: "نعم. وفي أغلب الحالات هذا هو الأسلوب الصحيح. فالـ Pilot المحدد هو أسرع طريقة لإثبات القيمة واختبار ملاءمة التشغيل.",
        },
        {
          q: "كيف تتعاملون مع الأمان والصلاحيات؟",
          a: "نحدد الوصول بعناية، ونبقي الاعتمادات حيث تلزم، ونضيف سجلات بحيث يستطيع الفريق مراجعة ما حدث ولماذا.",
        },
        {
          q: "ماذا يحدث عندما يكون سير العمل غير واثق؟",
          a: "يجب أن يصعّد الحالة بوضوح بدلاً من التخمين. فالتعامل الآمن مع الفشل جزء من التسليم وليس إضافة لاحقة.",
        },
        {
          q: "ما المنصات التي تستخدمونها؟",
          a: "نختار البنية حسب سير العمل واحتياجات الاعتمادية والأنظمة الموجودة بالفعل. نموذج التشغيل أهم من أداة رائجة بعينها.",
        },
        {
          q: "هل تراقبون التدفقات بعد الإطلاق؟",
          a: "نعم. يمكن للاشتراكات أن تغطي المراقبة وتحديث المنطق والتحسينات والتطوير التدريجي بعد الإطلاق.",
        },
      ],
    },
    ctaBand: {
      headline: "ابدأ الأتمتة بأمان.",
      description: "سنحدد أول تدفق يستحق الأتمتة ونوضح لك التسعير.",
      primaryLabel: "احجز مكالمة",
      secondaryLabel: "عرض الأسعار",
    },
  },
};

import { servicePageContentDe } from "./servicePageContentDe";
import { servicePageContentFr } from "./servicePageContentFr";
import { servicePageContentBg } from "./servicePageContentBg";

const servicePageContentByLocale: Record<
  Locale,
  Record<ServiceDetailId, ServiceDetailContent>
> = {
  en: servicePageContentEn,
  ar: servicePageContentAr,
  de: servicePageContentDe,
  fr: servicePageContentFr,
  bg: servicePageContentBg,
};

export const getServicePageContent = (locale: Locale) =>
  servicePageContentByLocale[locale];
