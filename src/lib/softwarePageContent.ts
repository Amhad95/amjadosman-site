import type { Locale } from "@/lib/locale";

export type SoftwareDetailId = "crm" | "accounting" | "inventory" | "tasks";

interface TextPair {
  headline: string;
  subheadline: string;
}

interface SoftwareProblemItem {
  before: string;
  after: string;
}

interface SoftwareOutcomeItem {
  headline: string;
  description: string;
}

interface SoftwareCapabilityItem {
  title: string;
  description: string;
}

interface SoftwareWorkflowStep {
  title: string;
  description: string;
}

export interface SoftwareDetailContent {
  hero: {
    productDescriptor: string;
    headline: string;
    subheadline: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  previewSection: TextPair & {
    frameTitle: string;
    searchPlaceholder: string;
    filters: [string, string];
    tabLabels: string[];
  };
  personaSection: TextPair;
  problemSection: TextPair & {
    items: SoftwareProblemItem[];
  };
  outcomesSection: TextPair & {
    snapshotLabel: string;
    items: SoftwareOutcomeItem[];
  };
  capabilitiesSection: TextPair & {
    items: SoftwareCapabilityItem[];
  };
  workflowSection: TextPair & {
    steps: SoftwareWorkflowStep[];
  };
  governanceSection: TextPair;
  onboardingSection: TextPair;
  pricingSection: {
    note: string;
    setupNote: string;
    ctaLabel: string;
  };
  finalCta: {
    headline: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
}

export const getSoftwareSectionEyebrows = (locale: Locale) => {
  const labels = {
    en: {
      preview: "Product preview",
      personas: "Best fit",
      problems: "What it replaces",
      outcomes: "Day-one value",
      capabilities: "Capabilities",
      workflow: "Setup journey",
      governance: "Controls",
      onboarding: "Onboarding",
    },
    ar: {
      preview: "معاينة المنتج",
      personas: "الأنسب له",
      problems: "ما الذي يستبدله",
      outcomes: "قيمة من اليوم الأول",
      capabilities: "القدرات",
      workflow: "رحلة الإعداد",
      governance: "الضوابط",
      onboarding: "التشغيل الأولي",
    },
    de: {
      preview: "Produktvorschau",
      personas: "Beste Passung",
      problems: "Was es ersetzt",
      outcomes: "Wert ab Tag eins",
      capabilities: "Funktionen",
      workflow: "Einrichtungsweg",
      governance: "Kontrollen",
      onboarding: "Onboarding",
    },
    fr: {
      preview: "Aperçu produit",
      personas: "Meilleure adéquation",
      problems: "Ce que cela remplace",
      outcomes: "Valeur dès le premier jour",
      capabilities: "Capacités",
      workflow: "Parcours de configuration",
      governance: "Contrôles",
      onboarding: "Onboarding",
    },
    bg: {
      preview: "Преглед на продукта",
      personas: "Най-добро съответствие",
      problems: "Какво заменя",
      outcomes: "Стойност от първия ден",
      capabilities: "Възможности",
      workflow: "Път на настройка",
      governance: "Контроли",
      onboarding: "Въвеждане",
    },
  } satisfies Record<Locale, Record<string, string>>;

  return labels[locale];
};

const softwarePageContentEn: Record<SoftwareDetailId, SoftwareDetailContent> = {
  crm: {
    hero: {
      productDescriptor: "for CRM",
      headline: "Relationship management configured for adoption.",
      subheadline:
        "A clean CRM system provisioned with your pipeline stages, roles, and follow-up workflows. Configuration and ongoing admin support included.",
      primaryCtaLabel: "Book a Demo",
      secondaryCtaLabel: "How onboarding works",
    },
    previewSection: {
      headline: "Meridian in action",
      subheadline: "Unified pipeline, contacts, tasks, and reporting.",
      frameTitle: "Meridian CRM",
      searchPlaceholder: "Search contacts, deals...",
      filters: ["Status", "Owner"],
      tabLabels: ["Pipeline", "Contacts", "Tasks", "Reports"],
    },
    personaSection: {
      headline: "Built for teams who sell",
      subheadline:
        "Whether you're tracking deals, managing accounts, or coordinating handovers.",
    },
    problemSection: {
      headline: "Replace the chaos",
      subheadline:
        "Move from scattered tools and manual tracking to structured operations.",
      items: [
        { before: "Deals tracked in spreadsheets", after: "Visual pipeline with clear stages" },
        { before: "Follow-ups lost in email", after: "Automated task reminders" },
        { before: "No visibility on team activity", after: "Real-time dashboards and reports" },
        { before: "Handovers lose context", after: "Full history travels with contacts" },
      ],
    },
    outcomesSection: {
      headline: "What changes on day one",
      subheadline: "Clear, immediate value—not promises.",
      snapshotLabel: "Activity snapshot",
      items: [
        {
          headline: "Clear pipeline stages and ownership",
          description: "Every deal has a stage, an owner, and a clear next action.",
        },
        {
          headline: "Reliable follow-up and activity tracking",
          description: "No more lost threads—every interaction logged automatically.",
        },
        {
          headline: "Simple reporting for decisions",
          description: "Dashboards that show pipeline value and team activity.",
        },
        {
          headline: "Clean handover when roles change",
          description: "Complete history travels with contacts and deals.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Core capabilities",
      subheadline: "Everything you need, configured and ready.",
      items: [
        {
          title: "Pipeline management",
          description: "Visual kanban boards with customizable stages and deal values.",
        },
        {
          title: "Contact management",
          description: "Unified profiles with interaction history and linked deals.",
        },
        {
          title: "Task automation",
          description: "Scheduled follow-ups, reminders, and activity logging.",
        },
        {
          title: "Reporting dashboards",
          description: "Pipeline value, conversion rates, and team performance.",
        },
        {
          title: "Email integration",
          description: "Log communications and sync with your email client.",
        },
        {
          title: "Role-based access",
          description: "Control who sees, edits, and approves at each level.",
        },
      ],
    },
    workflowSection: {
      headline: "Your setup journey",
      subheadline: "From first login to daily operations in four steps.",
      steps: [
        {
          title: "Configure structure",
          description: "Pipeline stages, custom fields, and deal values set up.",
        },
        {
          title: "Assign roles and permissions",
          description: "Team visibility rules and approval chains defined.",
        },
        {
          title: "Import data",
          description: "Existing contacts and deals migrated cleanly.",
        },
        {
          title: "Run day-to-day workflow",
          description: "Track deals, log activities, generate reports.",
        },
      ],
    },
    governanceSection: {
      headline: "Control who does what",
      subheadline: "Roles, permissions, and approval chains built in from day one.",
    },
    onboardingSection: {
      headline: "Configured for your team, not just activated",
      subheadline:
        "We handle provisioning, configuration, training, and ongoing admin support.",
    },
    pricingSection: {
      note:
        "Meridian™ for CRM starts from EUR 500 per month, depending on users and configuration.",
      setupNote:
        "Setup is included in Foundation Build packages or available as a fixed onboarding fee.",
      ctaLabel: "Book a Pricing Call",
    },
    finalCta: {
      headline: "Scope CRM around your process.",
      description:
        "We'll review the workflow, recommend the setup, and show the starting price.",
      primaryLabel: "Book a Call",
      secondaryLabel: "View pricing",
    },
  },
  accounting: {
    hero: {
      productDescriptor: "for Accounting",
      headline: "Financial workflows configured for clarity, not complexity.",
      subheadline:
        "Invoicing, expenses, and basic finance visibility in a clean system. Provisioned with your approval flows, categories, and reporting needs.",
      primaryCtaLabel: "Book a Demo",
      secondaryCtaLabel: "How onboarding works",
    },
    previewSection: {
      headline: "Ledger in action",
      subheadline: "Invoicing, expenses, approvals, and reporting in one place.",
      frameTitle: "Ledger Accounting",
      searchPlaceholder: "Search invoices, expenses...",
      filters: ["Status", "Category"],
      tabLabels: ["Invoices", "Expenses", "Approvals", "Dashboard"],
    },
    personaSection: {
      headline: "Built for teams who manage money",
      subheadline:
        "Whether you're sending invoices, approving expenses, or tracking cash flow.",
    },
    problemSection: {
      headline: "Replace the chaos",
      subheadline:
        "Move from scattered spreadsheets and manual approvals to structured operations.",
      items: [
        { before: "Invoices created in Word or Excel", after: "Templated invoices with auto-numbering" },
        { before: "Expenses tracked in spreadsheets", after: "Structured submission with category rules" },
        { before: "Approvals handled over email", after: "Built-in approval chains with audit trail" },
        { before: "No real-time visibility on cash flow", after: "Live dashboards with payment status" },
      ],
    },
    outcomesSection: {
      headline: "What changes on day one",
      subheadline: "Clear, immediate value—not promises.",
      snapshotLabel: "Activity snapshot",
      items: [
        {
          headline: "Faster invoicing and payment tracking",
          description: "Create, send, and track invoices with templates and status updates.",
        },
        {
          headline: "Cleaner expense capture and approvals",
          description: "Structured expense submission with category rules and approval chains.",
        },
        {
          headline: "A dashboard that stays readable",
          description: "Key metrics without the complexity of full accounting software.",
        },
        {
          headline: "Audit-ready records without manual cleanup",
          description: "Clean categorization and proper documentation from day one.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Core capabilities",
      subheadline: "Everything you need, configured and ready.",
      items: [
        {
          title: "Invoicing",
          description: "Templated invoices with auto-numbering, status tracking, and payment reminders.",
        },
        {
          title: "Expense tracking",
          description: "Categorized expenses with receipt uploads and recurring entries.",
        },
        {
          title: "Approval workflows",
          description: "Multi-level approval chains with spending limits and escalation rules.",
        },
        {
          title: "Financial dashboards",
          description: "Revenue, expenses, and cash flow visibility in real time.",
        },
        {
          title: "Tax categories",
          description: "Pre-configured tax rules and category mappings for compliance.",
        },
        {
          title: "Audit trail",
          description: "Complete history of every transaction, edit, and approval decision.",
        },
      ],
    },
    workflowSection: {
      headline: "Your setup journey",
      subheadline: "From first login to daily operations in four steps.",
      steps: [
        {
          title: "Configure structure",
          description: "Categories, invoice templates, and numbering set up.",
        },
        {
          title: "Assign roles and permissions",
          description: "Approver roles, spending limits, and workflows defined.",
        },
        {
          title: "Import data",
          description: "Client and vendor records migrated with opening balances.",
        },
        {
          title: "Run day-to-day workflow",
          description: "Create invoices, track payments, manage expenses.",
        },
      ],
    },
    governanceSection: {
      headline: "Control who does what",
      subheadline: "Roles, permissions, and approval chains built in from day one.",
    },
    onboardingSection: {
      headline: "Configured for your team, not just activated",
      subheadline:
        "We handle provisioning, configuration, training, and ongoing admin support.",
    },
    pricingSection: {
      note:
        "Ledger™ for Accounting starts from EUR 500 per month, depending on users and configuration.",
      setupNote:
        "Setup is included in Foundation Build packages or available as a fixed onboarding fee.",
      ctaLabel: "Book a Pricing Call",
    },
    finalCta: {
      headline: "Set up cleaner finance ops.",
      description:
        "We'll review the finance workflow, recommend the setup, and show the starting price.",
      primaryLabel: "Book a Call",
      secondaryLabel: "View pricing",
    },
  },
  inventory: {
    hero: {
      productDescriptor: "for Inventory",
      headline: "Inventory and asset tracking with controlled access.",
      subheadline:
        "Know what exists, where it is, and who is accountable. Provisioned with your locations, categories, and reorder workflows.",
      primaryCtaLabel: "Book a Demo",
      secondaryCtaLabel: "How onboarding works",
    },
    previewSection: {
      headline: "Stockroom in action",
      subheadline: "Items, locations, reorder alerts, and asset tracking.",
      frameTitle: "Stockroom Inventory",
      searchPlaceholder: "Search items, locations...",
      filters: ["Location", "Category"],
      tabLabels: ["Items", "Locations", "Reorder", "Assets"],
    },
    personaSection: {
      headline: "Built for teams who track and manage",
      subheadline:
        "Whether you're counting stock, managing equipment, or running audits.",
    },
    problemSection: {
      headline: "Replace the chaos",
      subheadline:
        "Move from manual counts and missing records to structured inventory operations.",
      items: [
        { before: "Stock counted manually on paper", after: "Real-time stock levels with location tracking" },
        { before: "Reorders triggered by guesswork", after: "Threshold-based alerts before items run out" },
        { before: "No record of who has what equipment", after: "Full checkout history with return tracking" },
        { before: "Audit prep takes days of cleanup", after: "Always-current records ready for review" },
      ],
    },
    outcomesSection: {
      headline: "What changes on day one",
      subheadline: "Clear, immediate value—not promises.",
      snapshotLabel: "Activity snapshot",
      items: [
        {
          headline: "Know what exists and where it is",
          description: "Searchable records with location tracking and category filtering.",
        },
        {
          headline: "Reorder alerts and basic controls",
          description: "Threshold-based alerts before items run out.",
        },
        {
          headline: "Cleaner handovers and accountability",
          description: "Assignment history for equipment and assets.",
        },
        {
          headline: "Audit-ready records for assets and stock",
          description: "Clean documentation for compliance and reporting.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Core capabilities",
      subheadline: "Everything you need, configured and ready.",
      items: [
        {
          title: "Item tracking",
          description: "SKU-based catalog with quantities, costs, and category management.",
        },
        {
          title: "Location management",
          description: "Multi-warehouse tracking with sub-locations and transfer workflows.",
        },
        {
          title: "Reorder alerts",
          description: "Configurable thresholds with notifications and suggested quantities.",
        },
        {
          title: "Asset tracking",
          description: "Equipment lifecycle from procurement to depreciation and disposal.",
        },
        {
          title: "Checkout and return",
          description: "Track who has what with checkout approval and return reminders.",
        },
        {
          title: "Audit trail",
          description: "Complete history of every movement, adjustment, and transfer.",
        },
      ],
    },
    workflowSection: {
      headline: "Your setup journey",
      subheadline: "From first login to daily operations in four steps.",
      steps: [
        {
          title: "Configure structure",
          description: "Locations, categories, and thresholds set up.",
        },
        {
          title: "Assign roles and permissions",
          description: "Warehouse roles, access levels, and checkout rules defined.",
        },
        {
          title: "Import data",
          description: "Item records and stock levels imported and validated.",
        },
        {
          title: "Run day-to-day workflow",
          description: "Track stock, process reorders, manage checkouts.",
        },
      ],
    },
    governanceSection: {
      headline: "Control who does what",
      subheadline: "Roles, permissions, and approval chains built in from day one.",
    },
    onboardingSection: {
      headline: "Configured for your team, not just activated",
      subheadline:
        "We handle provisioning, configuration, training, and ongoing admin support.",
    },
    pricingSection: {
      note:
        "Stockroom™ for Inventory starts from EUR 500 per month, depending on users and configuration.",
      setupNote:
        "Setup is included in Foundation Build packages or available as a fixed onboarding fee.",
      ctaLabel: "Book a Pricing Call",
    },
    finalCta: {
      headline: "Set up inventory with control.",
      description:
        "We'll review the stock workflow, recommend the setup, and show the starting price.",
      primaryLabel: "Book a Call",
      secondaryLabel: "View pricing",
    },
  },
  tasks: {
    hero: {
      productDescriptor: "for Tasks",
      headline: "Task and work management configured for delivery.",
      subheadline:
        "Plan work, assign ownership, and keep delivery visible. Provisioned with your project structures, workflows, and team roles.",
      primaryCtaLabel: "Book a Demo",
      secondaryCtaLabel: "How onboarding works",
    },
    previewSection: {
      headline: "Cadence in action",
      subheadline: "Boards, lists, approvals, and timelines in one workspace.",
      frameTitle: "Cadence Tasks",
      searchPlaceholder: "Search tasks, projects...",
      filters: ["Project", "Assignee"],
      tabLabels: ["Board", "List", "Approvals", "Timeline"],
    },
    personaSection: {
      headline: "Built for teams who deliver",
      subheadline:
        "Whether you're managing projects, coordinating teams, or tracking approvals.",
    },
    problemSection: {
      headline: "Replace the chaos",
      subheadline:
        "Move from scattered threads and manual tracking to structured task management.",
      items: [
        { before: "Tasks tracked in chat threads", after: "Structured task boards with deadlines and owners" },
        { before: "No clear ownership or accountability", after: "Every task assigned with visible status" },
        { before: "Progress reported manually in meetings", after: "Real-time boards and dashboards" },
        { before: "Recurring work falls through the cracks", after: "Automated recurring tasks with reminders" },
      ],
    },
    outcomesSection: {
      headline: "What changes on day one",
      subheadline: "Clear, immediate value—not promises.",
      snapshotLabel: "Activity snapshot",
      items: [
        {
          headline: "Clear assignments and deadlines",
          description: "Every task has an owner, a due date, and a visible status.",
        },
        {
          headline: "Fewer dropped tasks",
          description: "Nothing lost in chat threads or scattered spreadsheets.",
        },
        {
          headline: "Better coordination across teams",
          description: "Cross-team visibility without micromanagement.",
        },
        {
          headline: "Visible progress without manual updates",
          description: "Status boards and reports update as work gets done.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "Core capabilities",
      subheadline: "Everything you need, configured and ready.",
      items: [
        {
          title: "Kanban boards",
          description: "Visual boards with drag-and-drop stages and swimlanes.",
        },
        {
          title: "Task assignments",
          description: "Assign owners, watchers, and due dates with notifications.",
        },
        {
          title: "Approval workflows",
          description: "Built-in review and sign-off steps for deliverables.",
        },
        {
          title: "Project timelines",
          description: "Gantt-style views with milestones and dependencies.",
        },
        {
          title: "Recurring tasks",
          description: "Automated task creation on schedules with templates.",
        },
        {
          title: "Progress dashboards",
          description: "Completion rates, overdue items, and team workload views.",
        },
      ],
    },
    workflowSection: {
      headline: "Your setup journey",
      subheadline: "From first login to daily operations in four steps.",
      steps: [
        {
          title: "Configure structure",
          description: "Projects, workflow stages, and templates set up.",
        },
        {
          title: "Assign roles and permissions",
          description: "Team roles, task visibility, and approval flows defined.",
        },
        {
          title: "Import data",
          description: "Existing tasks and recurring items imported.",
        },
        {
          title: "Run day-to-day workflow",
          description: "Assign tasks, track progress, complete deliverables.",
        },
      ],
    },
    governanceSection: {
      headline: "Control who does what",
      subheadline: "Roles, permissions, and approval chains built in from day one.",
    },
    onboardingSection: {
      headline: "Configured for your team, not just activated",
      subheadline:
        "We handle provisioning, configuration, training, and ongoing admin support.",
    },
    pricingSection: {
      note:
        "Cadence™ for Tasks starts from EUR 500 per month, depending on users and configuration.",
      setupNote:
        "Setup is included in Foundation Build packages or available as a fixed onboarding fee.",
      ctaLabel: "Book a Pricing Call",
    },
    finalCta: {
      headline: "Run work in one system.",
      description:
        "We'll review the task flow, recommend the setup, and show the starting price.",
      primaryLabel: "Book a Call",
      secondaryLabel: "View pricing",
    },
  },
};

const softwarePageContentAr: Record<SoftwareDetailId, SoftwareDetailContent> = {
  crm: {
    hero: {
      productDescriptor: "لنظام CRM",
      headline: "إدارة علاقات مهيأة للتبني الفعلي.",
      subheadline:
        "نظام CRM نظيف يتم تجهيزه بمراحل المسار والأدوار وتدفقات المتابعة الخاصة بفريقك. يشمل التهيئة والدعم الإداري المستمر.",
      primaryCtaLabel: "احجز عرضاً",
      secondaryCtaLabel: "كيف يعمل الإعداد",
    },
    previewSection: {
      headline: "Meridian أثناء العمل",
      subheadline: "مسار موحد وجهات اتصال ومهام وتقارير في مكان واحد.",
      frameTitle: "Meridian CRM",
      searchPlaceholder: "ابحث في جهات الاتصال والصفقات...",
      filters: ["الحالة", "المسؤول"],
      tabLabels: ["المسار", "جهات الاتصال", "المهام", "التقارير"],
    },
    personaSection: {
      headline: "مصمم للفرق التي تبيع",
      subheadline:
        "سواء كنتم تتابعون الصفقات أو تديرون الحسابات أو تنسقون التسليم بين الفرق.",
    },
    problemSection: {
      headline: "استبدل الفوضى",
      subheadline: "انتقل من الأدوات المتفرقة والتتبع اليدوي إلى تشغيل أكثر تنظيماً.",
      items: [
        { before: "الصفقات تُتابَع في جداول", after: "مسار مرئي بمراحل واضحة" },
        { before: "المتابعات تضيع في البريد", after: "تذكيرات مهام مؤتمتة" },
        { before: "لا توجد رؤية لنشاط الفريق", after: "لوحات وتقارير فورية" },
        { before: "التسليم يفقد السياق", after: "تاريخ كامل ينتقل مع جهة الاتصال" },
      ],
    },
    outcomesSection: {
      headline: "ما الذي يتغير من اليوم الأول",
      subheadline: "قيمة واضحة ومباشرة، لا وعود عامة.",
      snapshotLabel: "لقطة النشاط",
      items: [
        {
          headline: "مراحل مسار وملكية واضحتان",
          description: "كل صفقة لها مرحلة ومالك وخطوة تالية واضحة.",
        },
        {
          headline: "متابعة موثوقة وتتبّع للنشاط",
          description: "لا مزيد من الخيوط الضائعة، فكل تفاعل يتم تسجيله تلقائياً.",
        },
        {
          headline: "تقارير بسيطة تدعم القرار",
          description: "لوحات تُظهر قيمة المسار ونشاط الفريق بوضوح.",
        },
        {
          headline: "تسليم نظيف عند تغير الأدوار",
          description: "ينتقل التاريخ الكامل مع جهات الاتصال والصفقات.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "القدرات الأساسية",
      subheadline: "كل ما تحتاجه، مهيأ وجاهز للعمل.",
      items: [
        {
          title: "إدارة المسار",
          description: "لوحات مرئية بمراحل قابلة للتخصيص وقيم صفقات واضحة.",
        },
        {
          title: "إدارة جهات الاتصال",
          description: "ملفات موحدة مع سجل التفاعلات والصفقات المرتبطة بها.",
        },
        {
          title: "أتمتة المهام",
          description: "متابعات مجدولة وتذكيرات وتسجيل تلقائي للنشاط.",
        },
        {
          title: "لوحات التقارير",
          description: "رؤية لقيمة المسار ومعدلات التحويل وأداء الفريق.",
        },
        {
          title: "تكامل البريد",
          description: "تسجيل المراسلات والربط مع عميل البريد لديكم.",
        },
        {
          title: "الوصول حسب الدور",
          description: "تحكم في من يرى ومن يعدّل ومن يعتمد في كل مستوى.",
        },
      ],
    },
    workflowSection: {
      headline: "رحلة الإعداد",
      subheadline: "من أول دخول إلى التشغيل اليومي في أربع خطوات.",
      steps: [
        {
          title: "تهيئة الهيكل",
          description: "إعداد مراحل المسار والحقول المخصصة وقيم الصفقات.",
        },
        {
          title: "توزيع الأدوار والصلاحيات",
          description: "تحديد قواعد رؤية الفريق وسلاسل الاعتماد.",
        },
        {
          title: "استيراد البيانات",
          description: "نقل جهات الاتصال والصفقات الحالية بشكل نظيف.",
        },
        {
          title: "تشغيل العمل اليومي",
          description: "تتبّع الصفقات وتسجيل النشاط وإصدار التقارير.",
        },
      ],
    },
    governanceSection: {
      headline: "تحكم في من يفعل ماذا",
      subheadline: "الأدوار والصلاحيات وسلاسل الاعتماد مدمجة من اليوم الأول.",
    },
    onboardingSection: {
      headline: "مهيأ لفريقك، لا مجرد مفعّل",
      subheadline: "نتولى التجهيز والتهيئة والتدريب والدعم الإداري المستمر.",
    },
    pricingSection: {
      note: "يبدأ Meridian™ لنظام CRM من 500 يورو شهرياً بحسب عدد المستخدمين ومستوى التهيئة.",
      setupNote: "الإعداد مشمول في بعض الباقات أو متاح كرسوم تهيئة ثابتة.",
      ctaLabel: "احجز مكالمة تسعير",
    },
    finalCta: {
      headline: "اضبط CRM حول طريقتكم في العمل.",
      description: "سنراجع سير العمل ونوصي بالإعداد المناسب ونوضح سعر البداية.",
      primaryLabel: "احجز مكالمة",
      secondaryLabel: "عرض الأسعار",
    },
  },
  accounting: {
    hero: {
      productDescriptor: "للمحاسبة",
      headline: "تدفقات مالية مهيأة للوضوح لا للتعقيد.",
      subheadline:
        "الفوترة والمصروفات ورؤية مالية أساسية داخل نظام نظيف، مع إعداد يتوافق مع الاعتمادات والتصنيفات واحتياجات التقارير لديكم.",
      primaryCtaLabel: "احجز عرضاً",
      secondaryCtaLabel: "كيف يعمل الإعداد",
    },
    previewSection: {
      headline: "Ledger أثناء العمل",
      subheadline: "الفواتير والمصروفات والاعتمادات والتقارير في مكان واحد.",
      frameTitle: "Ledger Accounting",
      searchPlaceholder: "ابحث في الفواتير والمصروفات...",
      filters: ["الحالة", "الفئة"],
      tabLabels: ["الفواتير", "المصروفات", "الاعتمادات", "اللوحة"],
    },
    personaSection: {
      headline: "مصمم للفرق التي تدير المال",
      subheadline: "سواء كنتم ترسلون الفواتير أو تعتمدون المصروفات أو تتابعون التدفق النقدي.",
    },
    problemSection: {
      headline: "استبدل الفوضى",
      subheadline: "انتقل من الجداول المتناثرة والاعتمادات اليدوية إلى تشغيل مالي منظم.",
      items: [
        { before: "إنشاء الفواتير في Word أو Excel", after: "فواتير بقوالب وترقيم تلقائي" },
        { before: "تتبّع المصروفات في جداول", after: "تقديم منظم مع قواعد للفئات" },
        { before: "الاعتمادات عبر البريد", after: "سلاسل اعتماد مدمجة مع سجل تدقيق" },
        { before: "لا توجد رؤية فورية للتدفق النقدي", after: "لوحات مباشرة مع حالة الدفعات" },
      ],
    },
    outcomesSection: {
      headline: "ما الذي يتغير من اليوم الأول",
      subheadline: "قيمة واضحة ومباشرة، لا وعود عامة.",
      snapshotLabel: "لقطة النشاط",
      items: [
        {
          headline: "فوترة أسرع وتتبّع أفضل للدفعات",
          description: "أنشئ الفواتير وأرسلها وتتبعها باستخدام قوالب وحالات محدثة.",
        },
        {
          headline: "التقاط أنظف للمصروفات والاعتمادات",
          description: "تقديم منظم للمصروفات مع قواعد فئات وسلاسل اعتماد.",
        },
        {
          headline: "لوحة تبقى مقروءة",
          description: "مؤشرات أساسية واضحة دون تعقيد برامج المحاسبة الثقيلة.",
        },
        {
          headline: "سجلات جاهزة للتدقيق من دون تنظيف يدوي",
          description: "تصنيف نظيف وتوثيق صحيح منذ اليوم الأول.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "القدرات الأساسية",
      subheadline: "كل ما تحتاجه، مهيأ وجاهز للعمل.",
      items: [
        {
          title: "الفوترة",
          description: "فواتير بقوالب وترقيم تلقائي وتتبع للحالة وتذكيرات بالدفع.",
        },
        {
          title: "تتبّع المصروفات",
          description: "مصروفات مصنفة مع رفع للإيصالات وإدخالات متكررة.",
        },
        {
          title: "سير عمل الاعتمادات",
          description: "سلاسل اعتماد متعددة المستويات مع حدود للإنفاق وقواعد تصعيد.",
        },
        {
          title: "لوحات مالية",
          description: "رؤية فورية للإيرادات والمصروفات والتدفق النقدي.",
        },
        {
          title: "فئات ضريبية",
          description: "قواعد ضريبية وتجهيزات فئات مسبقة للامتثال.",
        },
        {
          title: "سجل تدقيق",
          description: "تاريخ كامل لكل معاملة وتعديل وقرار اعتماد.",
        },
      ],
    },
    workflowSection: {
      headline: "رحلة الإعداد",
      subheadline: "من أول دخول إلى التشغيل اليومي في أربع خطوات.",
      steps: [
        {
          title: "تهيئة الهيكل",
          description: "إعداد الفئات وقوالب الفواتير والترقيم.",
        },
        {
          title: "توزيع الأدوار والصلاحيات",
          description: "تعريف أدوار الاعتماد وحدود الإنفاق وسير العمل.",
        },
        {
          title: "استيراد البيانات",
          description: "نقل سجلات العملاء والموردين مع الأرصدة الافتتاحية.",
        },
        {
          title: "تشغيل العمل اليومي",
          description: "إنشاء الفواتير وتتبع الدفعات وإدارة المصروفات.",
        },
      ],
    },
    governanceSection: {
      headline: "تحكم في من يفعل ماذا",
      subheadline: "الأدوار والصلاحيات وسلاسل الاعتماد مدمجة من اليوم الأول.",
    },
    onboardingSection: {
      headline: "مهيأ لفريقك، لا مجرد مفعّل",
      subheadline: "نتولى التجهيز والتهيئة والتدريب والدعم الإداري المستمر.",
    },
    pricingSection: {
      note: "يبدأ Ledger™ للمحاسبة من 500 يورو شهرياً بحسب عدد المستخدمين ومستوى التهيئة.",
      setupNote: "الإعداد مشمول في بعض الباقات أو متاح كرسوم تهيئة ثابتة.",
      ctaLabel: "احجز مكالمة تسعير",
    },
    finalCta: {
      headline: "أنشئ عمليات مالية أنظف.",
      description: "سنراجع التدفق المالي ونوصي بالإعداد المناسب ونوضح سعر البداية.",
      primaryLabel: "احجز مكالمة",
      secondaryLabel: "عرض الأسعار",
    },
  },
  inventory: {
    hero: {
      productDescriptor: "للمخزون",
      headline: "تتبّع للمخزون والأصول مع وصول مضبوط.",
      subheadline:
        "اعرف ما الموجود وأين يوجد ومن يتحمل مسؤوليته، ضمن إعداد يتوافق مع المواقع والفئات وتدفقات إعادة الطلب لديكم.",
      primaryCtaLabel: "احجز عرضاً",
      secondaryCtaLabel: "كيف يعمل الإعداد",
    },
    previewSection: {
      headline: "Stockroom أثناء العمل",
      subheadline: "العناصر والمواقع وتنبيهات إعادة الطلب وتتبع الأصول.",
      frameTitle: "Stockroom Inventory",
      searchPlaceholder: "ابحث في العناصر والمواقع...",
      filters: ["الموقع", "الفئة"],
      tabLabels: ["العناصر", "المواقع", "إعادة الطلب", "الأصول"],
    },
    personaSection: {
      headline: "مصمم للفرق التي تتتبع وتدير",
      subheadline: "سواء كنتم تعدّون المخزون أو تديرون المعدات أو تجرون عمليات تدقيق.",
    },
    problemSection: {
      headline: "استبدل الفوضى",
      subheadline: "انتقل من العد اليدوي والسجلات الناقصة إلى تشغيل منظم للمخزون.",
      items: [
        { before: "عدّ المخزون يدوياً على الورق", after: "مستويات مباشرة مع تتبّع للمواقع" },
        { before: "إعادة الطلب بالحدس", after: "تنبيهات حسب الحد الأدنى قبل النفاد" },
        { before: "لا سجل واضح لمن يملك أي معدات", after: "تاريخ كامل للاستلام والإرجاع" },
        { before: "التحضير للتدقيق يستغرق أياماً", after: "سجلات محدثة دائماً وجاهزة للمراجعة" },
      ],
    },
    outcomesSection: {
      headline: "ما الذي يتغير من اليوم الأول",
      subheadline: "قيمة واضحة ومباشرة، لا وعود عامة.",
      snapshotLabel: "لقطة النشاط",
      items: [
        {
          headline: "اعرف ما الموجود وأين يوجد",
          description: "سجلات قابلة للبحث مع تتبع للمواقع وتصفية حسب الفئات.",
        },
        {
          headline: "تنبيهات إعادة طلب وضوابط أساسية",
          description: "تنبيهات مبنية على الحدود قبل نفاد العناصر.",
        },
        {
          headline: "تسليمات ومساءلة أنظف",
          description: "تاريخ إسناد واضح للمعدات والأصول.",
        },
        {
          headline: "سجلات جاهزة للتدقيق للأصول والمخزون",
          description: "توثيق نظيف للامتثال والتقارير.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "القدرات الأساسية",
      subheadline: "كل ما تحتاجه، مهيأ وجاهز للعمل.",
      items: [
        {
          title: "تتبّع العناصر",
          description: "كتالوج قائم على SKU مع الكميات والتكاليف وإدارة الفئات.",
        },
        {
          title: "إدارة المواقع",
          description: "تتبّع متعدد المستودعات مع مواقع فرعية وتدفقات نقل.",
        },
        {
          title: "تنبيهات إعادة الطلب",
          description: "حدود قابلة للتهيئة مع إشعارات وكميات مقترحة.",
        },
        {
          title: "تتبّع الأصول",
          description: "دورة حياة المعدات من الشراء حتى الإهلاك أو التخلص.",
        },
        {
          title: "الاستلام والإرجاع",
          description: "تتبّع من يملك ماذا مع اعتماد للاستلام وتذكيرات بالإرجاع.",
        },
        {
          title: "سجل تدقيق",
          description: "تاريخ كامل لكل حركة أو تعديل أو تحويل.",
        },
      ],
    },
    workflowSection: {
      headline: "رحلة الإعداد",
      subheadline: "من أول دخول إلى التشغيل اليومي في أربع خطوات.",
      steps: [
        {
          title: "تهيئة الهيكل",
          description: "إعداد المواقع والفئات والحدود.",
        },
        {
          title: "توزيع الأدوار والصلاحيات",
          description: "تعريف أدوار المستودع ومستويات الوصول وقواعد الاستلام.",
        },
        {
          title: "استيراد البيانات",
          description: "نقل سجلات العناصر ومستويات المخزون والتحقق منها.",
        },
        {
          title: "تشغيل العمل اليومي",
          description: "تتبّع المخزون ومعالجة إعادة الطلب وإدارة الاستلام.",
        },
      ],
    },
    governanceSection: {
      headline: "تحكم في من يفعل ماذا",
      subheadline: "الأدوار والصلاحيات وسلاسل الاعتماد مدمجة من اليوم الأول.",
    },
    onboardingSection: {
      headline: "مهيأ لفريقك، لا مجرد مفعّل",
      subheadline: "نتولى التجهيز والتهيئة والتدريب والدعم الإداري المستمر.",
    },
    pricingSection: {
      note: "يبدأ Stockroom™ للمخزون من 500 يورو شهرياً بحسب عدد المستخدمين ومستوى التهيئة.",
      setupNote: "الإعداد مشمول في بعض الباقات أو متاح كرسوم تهيئة ثابتة.",
      ctaLabel: "احجز مكالمة تسعير",
    },
    finalCta: {
      headline: "اضبط المخزون مع تحكم أوضح.",
      description: "سنراجع تدفق المخزون ونوصي بالإعداد المناسب ونوضح سعر البداية.",
      primaryLabel: "احجز مكالمة",
      secondaryLabel: "عرض الأسعار",
    },
  },
  tasks: {
    hero: {
      productDescriptor: "للمهام",
      headline: "إدارة مهام وعمل مهيأة للتسليم.",
      subheadline:
        "خططوا العمل ووزعوا الملكية وأبقوا التسليم مرئياً، ضمن إعداد يتوافق مع بنية المشاريع وسير العمل وأدوار الفريق لديكم.",
      primaryCtaLabel: "احجز عرضاً",
      secondaryCtaLabel: "كيف يعمل الإعداد",
    },
    previewSection: {
      headline: "Cadence أثناء العمل",
      subheadline: "لوحات وقوائم واعتمادات وجداول زمنية في مساحة واحدة.",
      frameTitle: "Cadence Tasks",
      searchPlaceholder: "ابحث في المهام والمشاريع...",
      filters: ["المشروع", "المسؤول"],
      tabLabels: ["اللوحة", "القائمة", "الاعتمادات", "الجدول الزمني"],
    },
    personaSection: {
      headline: "مصمم للفرق التي تسلّم",
      subheadline: "سواء كنتم تديرون المشاريع أو تنسقون الفرق أو تتابعون الاعتمادات.",
    },
    problemSection: {
      headline: "استبدل الفوضى",
      subheadline: "انتقل من الخيوط المتناثرة والتتبع اليدوي إلى إدارة مهام منظمة.",
      items: [
        { before: "المهام تُتابَع في المحادثات", after: "لوحات منظمة بمواعيد ومسؤولين" },
        { before: "لا توجد ملكية أو مساءلة واضحة", after: "كل مهمة لها مسؤول وحالة ظاهرة" },
        { before: "التقدم يُبلغ عنه يدوياً", after: "لوحات وتقارير فورية" },
        { before: "العمل المتكرر يسقط من بين الشقوق", after: "مهام متكررة تلقائية مع تذكيرات" },
      ],
    },
    outcomesSection: {
      headline: "ما الذي يتغير من اليوم الأول",
      subheadline: "قيمة واضحة ومباشرة، لا وعود عامة.",
      snapshotLabel: "لقطة النشاط",
      items: [
        {
          headline: "تكليفات ومواعيد واضحة",
          description: "كل مهمة لها مالك وموعد نهائي وحالة مرئية.",
        },
        {
          headline: "مهام ضائعة أقل",
          description: "لا شيء يضيع داخل المحادثات أو الجداول المتفرقة.",
        },
        {
          headline: "تنسيق أفضل بين الفرق",
          description: "رؤية مشتركة عبر الفرق من دون إدارة دقيقة مرهقة.",
        },
        {
          headline: "تقدم مرئي من دون تحديثات يدوية",
          description: "تتحدث لوحات الحالة والتقارير مع إنجاز العمل.",
        },
      ],
    },
    capabilitiesSection: {
      headline: "القدرات الأساسية",
      subheadline: "كل ما تحتاجه، مهيأ وجاهز للعمل.",
      items: [
        {
          title: "لوحات كانبان",
          description: "لوحات مرئية بمراحل قابلة للسحب والمسارات التنظيمية.",
        },
        {
          title: "إسناد المهام",
          description: "توزيع المسؤولين والمتابعين والمواعيد مع إشعارات مناسبة.",
        },
        {
          title: "سير عمل الاعتمادات",
          description: "مراحل مراجعة واعتماد مدمجة للمخرجات.",
        },
        {
          title: "جداول المشاريع",
          description: "عروض شبيهة بـ Gantt مع معالم وتبعيات.",
        },
        {
          title: "مهام متكررة",
          description: "إنشاء تلقائي للمهام على جداول محددة مع قوالب.",
        },
        {
          title: "لوحات التقدم",
          description: "معدلات الإنجاز والتأخير وتوزيع عبء العمل على الفريق.",
        },
      ],
    },
    workflowSection: {
      headline: "رحلة الإعداد",
      subheadline: "من أول دخول إلى التشغيل اليومي في أربع خطوات.",
      steps: [
        {
          title: "تهيئة الهيكل",
          description: "إعداد المشاريع ومراحل سير العمل والقوالب.",
        },
        {
          title: "توزيع الأدوار والصلاحيات",
          description: "تعريف أدوار الفريق ورؤية المهام وتدفقات الاعتماد.",
        },
        {
          title: "استيراد البيانات",
          description: "نقل المهام الحالية والعناصر المتكررة.",
        },
        {
          title: "تشغيل العمل اليومي",
          description: "إسناد المهام وتتبّع التقدم وإنجاز المخرجات.",
        },
      ],
    },
    governanceSection: {
      headline: "تحكم في من يفعل ماذا",
      subheadline: "الأدوار والصلاحيات وسلاسل الاعتماد مدمجة من اليوم الأول.",
    },
    onboardingSection: {
      headline: "مهيأ لفريقك، لا مجرد مفعّل",
      subheadline: "نتولى التجهيز والتهيئة والتدريب والدعم الإداري المستمر.",
    },
    pricingSection: {
      note: "يبدأ Cadence™ للمهام من 500 يورو شهرياً بحسب عدد المستخدمين ومستوى التهيئة.",
      setupNote: "الإعداد مشمول في بعض الباقات أو متاح كرسوم تهيئة ثابتة.",
      ctaLabel: "احجز مكالمة تسعير",
    },
    finalCta: {
      headline: "شغّل العمل داخل نظام واحد.",
      description: "سنراجع تدفق المهام ونوصي بالإعداد المناسب ونوضح سعر البداية.",
      primaryLabel: "احجز مكالمة",
      secondaryLabel: "عرض الأسعار",
    },
  },
};

import { softwarePageContentDe } from "./softwarePageContentDe";
import { softwarePageContentFr } from "./softwarePageContentFr";
import { softwarePageContentBg } from "./softwarePageContentBg";

const softwarePageContentByLocale: Record<
  Locale,
  Record<SoftwareDetailId, SoftwareDetailContent>
> = {
  en: softwarePageContentEn,
  ar: softwarePageContentAr,
  de: softwarePageContentDe,
  fr: softwarePageContentFr,
  bg: softwarePageContentBg,
};

export const getSoftwarePageContent = (locale: Locale) =>
  softwarePageContentByLocale[locale];
