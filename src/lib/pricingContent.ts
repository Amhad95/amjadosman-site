import { STRIPE_PRICES } from "@/lib/stripe";
import { useLocale, type Locale } from "@/lib/locale";

export interface PricingStarterOffer {
  name: string;
  inclusions: string[];
  timeline: string;
  price: string;
  payHref: string;
  bookHref: string;
  stripePriceId?: string;
}

export interface PricingMenuItem {
  name: string;
  startingPrice: string;
  payHref?: string;
  bookHref: string;
  stripePriceId?: string;
}

export interface PricingRetainerTier {
  tier: string;
  inclusions: string[];
  responseTime: string;
  price: string;
  subscribeHref: string;
  bookHref: string;
  stripePriceId?: string;
}

export interface ServicePricingTrack {
  id: "brand" | "ops" | "agents";
  anchor: string;
  name: string;
  summary: string;
  detailHref: string;
  pricingIntro: string;
  recommended: {
    headline: string;
    description: string;
    offers: PricingStarterOffer[];
  };
  menu: {
    headline: string;
    description: string;
    items: PricingMenuItem[];
  };
  retainer: {
    headline: string;
    description: string;
    tiers: PricingRetainerTier[];
  };
}

export interface SoftwarePricingSummary {
  anchor: string;
  eyebrow: string;
  headline: string;
  description: string;
  startingPrice: string;
  setupNote: string;
  products: {
    name: string;
    oneLiner: string;
  }[];
  supportIncludes: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

const defaultBookHref = "/book";

const servicePricingTracksEn: Record<ServicePricingTrack["id"], ServicePricingTrack> = {
  brand: {
    id: "brand",
    anchor: "brand-pricing",
    name: "Brand and Growth Systems",
    summary:
      "Brand, website, and sales-material pricing in one place, from contained starter offers to monthly retainers.",
    detailHref: "/services/brand",
    pricingIntro:
      "Choose a contained starting point, a broader project, or ongoing support once the foundations are in place.",
    recommended: {
      headline: "Recommended starting points",
      description: "Common entry offers with fixed scope and timeline.",
      offers: [
        {
          name: "Brand System Sprint",
          inclusions: ["Identity and guidelines", "Template pack", "Brand asset library"],
          timeline: "10-15 business days",
          price: "Starting from EUR 3,500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_sprint,
        },
        {
          name: "Website and CMS Build",
          inclusions: ["Site architecture", "CMS setup", "Conversion pages", "SEO foundation"],
          timeline: "2-4 weeks",
          price: "Starting from EUR 5,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.web_build,
        },
        {
          name: "Sales Materials Kit",
          inclusions: ["Pitch deck system", "Proposal templates", "Case study format"],
          timeline: "7-12 business days",
          price: "Starting from EUR 2,500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sales_kit,
        },
      ],
    },
    menu: {
      headline: "Pick individual services",
      description:
        "Available separately when you only need one contained improvement right now.",
      items: [
        {
          name: "Landing page conversion pass",
          startingPrice: "Starting from EUR 1,500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.landing_page,
        },
        {
          name: "Brand template pack",
          startingPrice: "Starting from EUR 1,200",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_template,
        },
        {
          name: "Pitch deck rebuild",
          startingPrice: "Starting from EUR 2,000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.pitch_deck,
        },
      ],
    },
    retainer: {
      headline: "Retainers",
      description:
        "Monthly support for updates, new assets, and iterative improvements after the main foundation is live.",
      tiers: [
        {
          tier: "Lite",
          inclusions: ["Minor content updates", "Design tweaks", "Monthly check-in"],
          responseTime: "Response within 3 business days",
          price: "EUR 800/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Content updates", "Design changes", "New page builds", "Priority support"],
          responseTime: "Response within 1 business day",
          price: "EUR 1,500/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Unlimited changes", "Strategy sessions", "Dedicated support", "Same-day response"],
          responseTime: "Same-day response",
          price: "EUR 2,500/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_priority,
        },
      ],
    },
  },
  ops: {
    id: "ops",
    anchor: "ops-pricing",
    name: "Internal Operations Systems",
    summary:
      "Operational setup pricing covering audits, SharePoint structure, SOP work, and monthly upkeep.",
    detailHref: "/services/ops",
    pricingIntro:
      "Start with an audit, a broader setup project, or ongoing support once the main operational layer is in place.",
    recommended: {
      headline: "Recommended starting points",
      description: "Common entry offers with fixed scope and timeline.",
      offers: [
        {
          name: "Ops Audit",
          inclusions: ["Current state assessment", "Gap analysis", "Recommendations report"],
          timeline: "5-7 business days",
          price: "Starting from EUR 2,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_audit,
        },
        {
          name: "SharePoint Setup",
          inclusions: ["Site architecture", "Document libraries", "Permissions model", "Governance rules"],
          timeline: "2-3 weeks",
          price: "Starting from EUR 4,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sharepoint_setup,
        },
        {
          name: "SOP Library Pack",
          inclusions: ["15-25 SOPs documented", "Role mapping", "QA checklists", "Update workflow"],
          timeline: "2-3 weeks",
          price: "Starting from EUR 3,500",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_pack,
        },
      ],
    },
    menu: {
      headline: "Pick individual services",
      description:
        "Available separately when you need one contained cleanup rather than a broader reset.",
      items: [
        {
          name: "Permissions overhaul",
          startingPrice: "Starting from EUR 1,500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.permissions_overhaul,
        },
        {
          name: "SOP creation (per SOP)",
          startingPrice: "Starting from EUR 800",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_creation,
        },
        {
          name: "Template library setup",
          startingPrice: "Starting from EUR 1,200",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.template_library,
        },
      ],
    },
    retainer: {
      headline: "Retainers",
      description:
        "Monthly support for updates, new documentation, and operational upkeep after the core setup is complete.",
      tiers: [
        {
          tier: "Ops Maintenance Lite",
          inclusions: ["SOP updates", "Minor SharePoint changes", "Monthly review"],
          responseTime: "Response within 3 business days",
          price: "EUR 600/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["SOP creation and updates", "SharePoint changes", "New workflows", "Priority support"],
          responseTime: "Response within 1 business day",
          price: "EUR 1,200/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Unlimited changes", "New system builds", "Training sessions", "Same-day response"],
          responseTime: "Same-day response",
          price: "EUR 2,000/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_priority,
        },
      ],
    },
  },
  agents: {
    id: "agents",
    anchor: "agents-pricing",
    name: "AI Agents and Automation",
    summary:
      "Automation pricing for pilot workflows, targeted use cases, and managed monitoring once the first layer is live.",
    detailHref: "/services/agents",
    pricingIntro:
      "Start with one contained automation pilot, expand into a broader workflow pack, or keep the system tuned through a managed retainer.",
    recommended: {
      headline: "Recommended starting points",
      description: "Controlled-scope automation engagements designed to create value quickly.",
      offers: [
        {
          name: "Agent Pilot",
          inclusions: ["One use case", "Controlled scope", "Approval workflows", "Monitoring setup"],
          timeline: "10-15 business days",
          price: "Starting from EUR 4,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pilot,
        },
        {
          name: "Agent Workflow Pack",
          inclusions: ["2-3 use cases", "Cross-workflow orchestration", "Governance setup", "Team training"],
          timeline: "3-5 weeks",
          price: "Starting from EUR 8,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pack,
        },
        {
          name: "Knowledge Agent Setup",
          inclusions: ["Permission-aware search", "Source citation", "Role-based access", "Monitoring dashboard"],
          timeline: "2-4 weeks",
          price: "Starting from EUR 5,000",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.knowledge_agent,
        },
      ],
    },
    menu: {
      headline: "Pick individual services",
      description:
        "Targeted workflows are available separately when you only need one contained automation use case right now.",
      items: [
        {
          name: "Workflow triage agent",
          startingPrice: "Starting from EUR 2,500",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.triage_agent,
        },
        {
          name: "Report summarization workflow",
          startingPrice: "Starting from EUR 2,000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.report_summarization,
        },
        {
          name: "Intake and routing workflow",
          startingPrice: "Starting from EUR 2,000",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.intake_routing,
        },
      ],
    },
    retainer: {
      headline: "Managed retainers",
      description:
        "Ongoing monitoring, workflow tuning, and support after the first automation layer is live.",
      tiers: [
        {
          tier: "Monitoring Lite",
          inclusions: ["Performance monitoring", "Monthly review", "Bug fixes"],
          responseTime: "Response within 3 business days",
          price: "EUR 1,000/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_lite,
        },
        {
          tier: "Standard",
          inclusions: ["Monitoring and tuning", "Prompt adjustments", "Workflow changes", "Priority support"],
          responseTime: "Response within 1 business day",
          price: "EUR 2,000/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_standard,
        },
        {
          tier: "Priority",
          inclusions: ["Full management", "New workflow builds", "Strategy sessions", "Same-day response"],
          responseTime: "Same-day response",
          price: "EUR 3,500/mo",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_priority,
        },
      ],
    },
  },
};

const servicePricingTracksAr: Record<ServicePricingTrack["id"], ServicePricingTrack> = {
  brand: {
    id: "brand",
    anchor: "brand-pricing",
    name: "أنظمة الهوية والنمو",
    summary:
      "تسعير الهوية والموقع ومواد البيع في مكان واحد، من عروض بداية محددة إلى دعم شهري مستمر.",
    detailHref: "/services/brand",
    pricingIntro:
      "اختر نقطة بداية محددة، أو مشروعاً أوسع، أو دعماً مستمراً بعد تثبيت الأساسيات.",
    recommended: {
      headline: "نقاط البداية المقترحة",
      description: "عروض دخول شائعة بنطاق وجدول زمني ثابتين.",
      offers: [
        {
          name: "Sprint نظام الهوية",
          inclusions: ["هوية وإرشادات", "حزمة قوالب", "مكتبة أصول الهوية"],
          timeline: "10-15 يوم عمل",
          price: "ابتداءً من 3,500 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_sprint,
        },
        {
          name: "بناء الموقع وCMS",
          inclusions: ["بنية الموقع", "إعداد CMS", "صفحات تحويل", "أساسيات SEO"],
          timeline: "2-4 أسابيع",
          price: "ابتداءً من 5,000 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.web_build,
        },
        {
          name: "حزمة مواد البيع",
          inclusions: ["نظام عرض تقديمي", "قوالب مقترحات", "صيغة دراسة حالة"],
          timeline: "7-12 يوم عمل",
          price: "ابتداءً من 2,500 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sales_kit,
        },
      ],
    },
    menu: {
      headline: "اختر خدمات منفردة",
      description: "متاحة بشكل منفصل عندما تحتاج تحسناً واحداً محدداً الآن.",
      items: [
        {
          name: "تحسين تحويل صفحة هبوط",
          startingPrice: "ابتداءً من 1,500 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.landing_page,
        },
        {
          name: "حزمة قوالب الهوية",
          startingPrice: "ابتداءً من 1,200 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_template,
        },
        {
          name: "إعادة بناء العرض التقديمي",
          startingPrice: "ابتداءً من 2,000 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.pitch_deck,
        },
      ],
    },
    retainer: {
      headline: "دعم مستمر",
      description:
        "دعم شهري للتحديثات والأصول الجديدة والتحسينات التدريجية بعد إطلاق الأساسيات.",
      tiers: [
        {
          tier: "خفيف",
          inclusions: ["تحديثات محتوى بسيطة", "تعديلات تصميم", "متابعة شهرية"],
          responseTime: "رد خلال 3 أيام عمل",
          price: "800 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_lite,
        },
        {
          tier: "قياسي",
          inclusions: ["تحديثات محتوى", "تغييرات تصميم", "بناء صفحات جديدة", "دعم أولوية"],
          responseTime: "رد خلال يوم عمل واحد",
          price: "1,500 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_standard,
        },
        {
          tier: "أولوية",
          inclusions: ["تغييرات غير محدودة", "جلسات استراتيجية", "دعم مخصص", "رد في نفس اليوم"],
          responseTime: "رد في نفس اليوم",
          price: "2,500 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.brand_retainer_priority,
        },
      ],
    },
  },
  ops: {
    id: "ops",
    anchor: "ops-pricing",
    name: "أنظمة العمليات الداخلية",
    summary:
      "تسعير إعداد العمليات الذي يغطي التدقيق وبنية SharePoint وأعمال SOP والدعم الشهري.",
    detailHref: "/services/ops",
    pricingIntro:
      "ابدأ بتدقيق أو مشروع إعداد أوسع أو دعم مستمر بعد تثبيت الطبقة التشغيلية الأساسية.",
    recommended: {
      headline: "نقاط البداية المقترحة",
      description: "عروض دخول شائعة بنطاق وجدول زمني ثابتين.",
      offers: [
        {
          name: "تدقيق العمليات",
          inclusions: ["تقييم الوضع الحالي", "تحليل الفجوات", "تقرير التوصيات"],
          timeline: "5-7 أيام عمل",
          price: "ابتداءً من 2,000 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_audit,
        },
        {
          name: "إعداد SharePoint",
          inclusions: ["بنية الموقع", "مكتبات المستندات", "نموذج الصلاحيات", "قواعد الحوكمة"],
          timeline: "2-3 أسابيع",
          price: "ابتداءً من 4,000 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sharepoint_setup,
        },
        {
          name: "حزمة مكتبة SOP",
          inclusions: ["توثيق 15-25 SOP", "توزيع الأدوار", "قوائم جودة", "آلية تحديث"],
          timeline: "2-3 أسابيع",
          price: "ابتداءً من 3,500 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_pack,
        },
      ],
    },
    menu: {
      headline: "اختر خدمات منفردة",
      description:
        "متاحة بشكل منفصل عندما تحتاج تنظيفاً واحداً محدداً بدلاً من إعادة ضبط شاملة.",
      items: [
        {
          name: "إعادة هيكلة الصلاحيات",
          startingPrice: "ابتداءً من 1,500 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.permissions_overhaul,
        },
        {
          name: "إنشاء SOP (لكل SOP)",
          startingPrice: "ابتداءً من 800 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.sop_creation,
        },
        {
          name: "إعداد مكتبة القوالب",
          startingPrice: "ابتداءً من 1,200 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.template_library,
        },
      ],
    },
    retainer: {
      headline: "دعم مستمر",
      description:
        "دعم شهري للتحديثات والتوثيق الجديد وصيانة العمليات بعد اكتمال الإعداد الأساسي.",
      tiers: [
        {
          tier: "صيانة خفيفة",
          inclusions: ["تحديثات SOP", "تعديلات SharePoint بسيطة", "مراجعة شهرية"],
          responseTime: "رد خلال 3 أيام عمل",
          price: "600 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_lite,
        },
        {
          tier: "قياسي",
          inclusions: ["إنشاء وتحديث SOP", "تغييرات SharePoint", "تدفقات جديدة", "دعم أولوية"],
          responseTime: "رد خلال يوم عمل واحد",
          price: "1,200 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_standard,
        },
        {
          tier: "أولوية",
          inclusions: ["تغييرات غير محدودة", "بناء أنظمة جديدة", "جلسات تدريب", "رد في نفس اليوم"],
          responseTime: "رد في نفس اليوم",
          price: "2,000 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.ops_retainer_priority,
        },
      ],
    },
  },
  agents: {
    id: "agents",
    anchor: "agents-pricing",
    name: "الوكلاء والعمليات المؤتمتة",
    summary:
      "تسعير الأتمتة لتجارب العمل الأولية وحالات الاستخدام المحددة والمراقبة المُدارة بعد إطلاق الطبقة الأولى.",
    detailHref: "/services/agents",
    pricingIntro:
      "ابدأ بتجربة أتمتة محددة، أو وسّعها إلى حزمة سير عمل أوسع، أو حافظ على النظام مضبوطاً عبر دعم مُدار.",
    recommended: {
      headline: "نقاط البداية المقترحة",
      description: "عمليات أتمتة مضبوطة النطاق مصممة لصناعة قيمة بسرعة.",
      offers: [
        {
          name: "تجربة وكيل",
          inclusions: ["حالة استخدام واحدة", "نطاق مضبوط", "مسارات موافقة", "إعداد مراقبة"],
          timeline: "10-15 يوم عمل",
          price: "ابتداءً من 4,000 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pilot,
        },
        {
          name: "حزمة تدفقات الوكلاء",
          inclusions: ["2-3 حالات استخدام", "تنسيق بين التدفقات", "إعداد الحوكمة", "تدريب الفريق"],
          timeline: "3-5 أسابيع",
          price: "ابتداءً من 8,000 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agent_pack,
        },
        {
          name: "إعداد وكيل معرفة",
          inclusions: ["بحث حسب الصلاحيات", "توثيق المصادر", "وصول حسب الدور", "لوحة مراقبة"],
          timeline: "2-4 أسابيع",
          price: "ابتداءً من 5,000 يورو",
          payHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.knowledge_agent,
        },
      ],
    },
    menu: {
      headline: "اختر خدمات منفردة",
      description:
        "تتوفر تدفقات محددة بشكل منفصل عندما تحتاج حالة استخدام أتمتة واحدة محددة الآن.",
      items: [
        {
          name: "وكيل فرز سير العمل",
          startingPrice: "ابتداءً من 2,500 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.triage_agent,
        },
        {
          name: "تدفق تلخيص التقارير",
          startingPrice: "ابتداءً من 2,000 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.report_summarization,
        },
        {
          name: "تدفق الاستقبال والتوجيه",
          startingPrice: "ابتداءً من 2,000 يورو",
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.intake_routing,
        },
      ],
    },
    retainer: {
      headline: "دعم مُدار",
      description:
        "مراقبة مستمرة وضبط التدفقات ودعم بعد إطلاق طبقة الأتمتة الأولى.",
      tiers: [
        {
          tier: "مراقبة خفيفة",
          inclusions: ["مراقبة الأداء", "مراجعة شهرية", "إصلاحات أعطال"],
          responseTime: "رد خلال 3 أيام عمل",
          price: "1,000 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_lite,
        },
        {
          tier: "قياسي",
          inclusions: ["مراقبة وضبط", "تعديلات الموجهات", "تغييرات سير العمل", "دعم أولوية"],
          responseTime: "رد خلال يوم عمل واحد",
          price: "2,000 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_standard,
        },
        {
          tier: "أولوية",
          inclusions: ["إدارة كاملة", "بناء تدفقات جديدة", "جلسات استراتيجية", "رد في نفس اليوم"],
          responseTime: "رد في نفس اليوم",
          price: "3,500 يورو/شهرياً",
          subscribeHref: defaultBookHref,
          bookHref: defaultBookHref,
          stripePriceId: STRIPE_PRICES.agents_retainer_priority,
        },
      ],
    },
  },
};

const softwarePricingSummaryEn: SoftwarePricingSummary = {
  anchor: "software-pricing",
  eyebrow: "Software pricing",
  headline: "Managed software starts from EUR 500 per month per product.",
  description:
    "Fheem configures and supports focused CRM, accounting, inventory, and task systems so teams get a usable operating layer instead of another abandoned tool.",
  startingPrice: "From EUR 500/mo per product",
  setupNote:
    "Setup is included in some packages or offered separately as a fixed onboarding fee, depending on complexity and data migration needs.",
  products: [
    {
      name: "CRM",
      oneLiner: "Pipeline, contact management, follow-up, and reporting in one controlled workspace.",
    },
    {
      name: "Accounting",
      oneLiner: "Invoicing, expenses, and finance visibility in a cleaner operating flow.",
    },
    {
      name: "Inventory and Assets",
      oneLiner: "Track stock, assets, and accountability with clearer access and auditability.",
    },
    {
      name: "Tasks and Work Management",
      oneLiner: "Assign ownership, keep work visible, and reduce dropped handoffs.",
    },
  ],
  supportIncludes: [
    "Roles and permissions configured around your team structure",
    "Templates and workflows set up before launch",
    "Data import and validation as part of onboarding",
    "Ongoing admin support available when you want managed upkeep",
  ],
  primaryCta: {
    label: "Book a Pricing Call",
    href: "/book?intent=suite-pricing",
  },
  secondaryCta: {
    label: "See software",
    href: "/software",
  },
};

const softwarePricingSummaryAr: SoftwarePricingSummary = {
  anchor: "software-pricing",
  eyebrow: "تسعير البرمجيات",
  headline: "تبدأ البرمجيات المُدارة من 500 يورو شهرياً لكل منتج.",
  description:
    "تقوم فهيم بتهيئة ودعم أنظمة CRM والمحاسبة والمخزون والمهام المركزة حتى تحصل الفرق على طبقة تشغيلية قابلة للاستخدام بدلاً من أداة مهجورة أخرى.",
  startingPrice: "ابتداءً من 500 يورو/شهرياً لكل منتج",
  setupNote:
    "يتم تضمين الإعداد في بعض الباقات أو يُقدّم بشكل منفصل كرسوم تأهيل ثابتة بحسب التعقيد واحتياجات ترحيل البيانات.",
  products: [
    {
      name: "CRM",
      oneLiner: "خط الأنابيب وإدارة جهات الاتصال والمتابعة والتقارير في مساحة عمل محكومة واحدة.",
    },
    {
      name: "المحاسبة",
      oneLiner: "الفواتير والمصروفات ورؤية مالية ضمن تدفق عمل أنظف.",
    },
    {
      name: "المخزون والأصول",
      oneLiner: "تتبع المخزون والأصول والمساءلة مع وصول أوضح وقابلية تدقيق أعلى.",
    },
    {
      name: "المهام وإدارة العمل",
      oneLiner: "توزيع الملكية وإبقاء العمل مرئياً وتقليل التسليمات الضائعة.",
    },
  ],
  supportIncludes: [
    "أدوار وصلاحيات مضبوطة على هيكل فريقك",
    "قوالب وتدفقات عمل جاهزة قبل الإطلاق",
    "استيراد البيانات والتحقق منها ضمن التأهيل",
    "دعم إداري مستمر متاح عندما ترغب في إدارة مُحكمة",
  ],
  primaryCta: {
    label: "احجز مكالمة تسعير",
    href: "/book?intent=suite-pricing",
  },
  secondaryCta: {
    label: "شاهد البرمجيات",
    href: "/software",
  },
};

const servicePricingTracksByLocale: Record<
  Locale,
  Record<ServicePricingTrack["id"], ServicePricingTrack>
> = {
  en: servicePricingTracksEn,
  ar: servicePricingTracksAr,
};

const softwarePricingSummaryByLocale: Record<Locale, SoftwarePricingSummary> = {
  en: softwarePricingSummaryEn,
  ar: softwarePricingSummaryAr,
};

// Compatibility export for existing service pages that still read the
// default pricing track object directly.
export const servicePricingTracks = servicePricingTracksEn;

export const getServicePricingTracks = (locale: Locale) =>
  servicePricingTracksByLocale[locale];

export const getOrderedServicePricingTracks = (locale: Locale) => {
  const tracks = getServicePricingTracks(locale);
  return [tracks.brand, tracks.ops, tracks.agents];
};

export const getSoftwarePricingSummary = (locale: Locale) =>
  softwarePricingSummaryByLocale[locale];

export const usePricingContent = () => {
  const { locale } = useLocale();

  return {
    servicePricingTracks: getServicePricingTracks(locale),
    orderedServicePricingTracks: getOrderedServicePricingTracks(locale),
    softwarePricingSummary: getSoftwarePricingSummary(locale),
  };
};
