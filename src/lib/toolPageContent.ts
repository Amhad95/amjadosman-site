import type { Locale } from "@/lib/locale";

export type ToolPageKey =
  | "sop-builder"
  | "brand-audit"
  | "page-critique"
  | "process-mapper"
  | "dashboard-builder"
  | "kpi-audit";

interface ToolPageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
  errorTitle: string;
  buildCtaHeadline: string;
  buildCtaDescription: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  fields: Record<string, string>;
}

const toolPageContentEn: Record<ToolPageKey, ToolPageContent> = {
  "sop-builder": {
    metaTitle: "SOP Draft Builder — Free SOP Generator | ADSI",
    metaDescription:
      "Generate a complete, structured Standard Operating Procedure from a messy process description. Free AI tool from ADSI.",
    eyebrow: "AI tool",
    title: "SOP Draft Builder",
    description:
      "Describe any process in plain English. Get a complete, structured SOP document in seconds.",
    submitLabel: "Build SOP",
    errorTitle: "Error",
    buildCtaHeadline: "Want us to build it?",
    buildCtaDescription:
      "We can turn this tool output into a scoped delivery with pricing.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "View pricing",
    fields: {
      processLabel: "Describe the process",
      processHelp:
        "Write as much or as little as you know. Include who does what, what tools are involved, and what the output should be.",
      processPlaceholder:
        "e.g. When a new client signs up, our sales team sends them a welcome email, then a member of the ops team schedules an onboarding call, then we create their workspace and send login details...",
    },
  },
  "brand-audit": {
    metaTitle: "Brand Consistency Audit — Free Brand Audit Tool | ADSI",
    metaDescription:
      "Get a free AI-powered brand consistency audit. Identify visual inconsistencies, tone issues, and priority fixes for your brand. Free tool from ADSI.",
    eyebrow: "AI tool",
    title: "Brand Consistency Audit",
    description:
      "Describe your brand and your assets. Get a consistency report with visual, tone, and priority fixes.",
    submitLabel: "Audit Brand",
    errorTitle: "Error",
    buildCtaHeadline: "Want us to build it?",
    buildCtaDescription:
      "We can turn this tool output into a scoped delivery with pricing.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "View pricing",
    fields: {
      brandLabel: "Describe your brand",
      brandHelp:
        "Include your industry, target audience, brand values, colours, fonts, and any brand guidelines you have.",
      brandPlaceholder:
        "e.g. We're a B2B SaaS company targeting HR managers. Our brand colours are navy and gold. We have a logo but no formal guidelines. We use Helvetica in some places and Arial in others...",
      assetsLabel: "Describe your current assets and channels",
      optional: "(optional)",
      assetsHelp:
        "List your website, social media, email templates, pitch decks, and any other branded materials.",
      assetsPlaceholder:
        "e.g. Website (built in Webflow, uses our brand colours but inconsistent fonts), LinkedIn page (uses different logo version), email templates (plain text, no branding), pitch deck (uses old logo)...",
    },
  },
  "page-critique": {
    metaTitle: "Landing Page Critique — Free Conversion Audit | ADSI",
    metaDescription:
      "Get a free AI-powered conversion audit of your landing page. Hierarchy analysis, CTA review, friction points, and priority fixes. Free tool from ADSI.",
    eyebrow: "AI tool",
    title: "Landing Page Critique",
    description:
      "Paste your page URL or copy. Get a conversion audit with hierarchy notes, CTA fixes, and ranked priority actions.",
    submitLabel: "Critique Page",
    errorTitle: "Error",
    buildCtaHeadline: "Want us to build it?",
    buildCtaDescription:
      "We can turn this tool output into a scoped delivery with pricing.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "View pricing",
    fields: {
      urlLabel: "Page URL",
      copyLabel: "Paste your page copy",
      optional: "(optional)",
      urlPlaceholder: "https://yoursite.com/landing-page",
      copyHelp:
        "Paste the headline, subheadline, body copy, and CTA text from your page.",
      copyPlaceholder:
        "Paste your landing page copy here — headline, subheadline, benefits, social proof, CTA...",
      note: "Provide a URL, pasted copy, or both.",
    },
  },
  "process-mapper": {
    metaTitle: "Process Flow Mapper — Free Workflow Analysis Tool | ADSI",
    metaDescription:
      "Turn a workflow description into a structured process map with steps, decision points, and improvement opportunities. Free AI tool from ADSI.",
    eyebrow: "AI tool",
    title: "Process Flow Mapper",
    description:
      "Describe how a workflow actually runs. Get a structured map with steps, decision points, and bottleneck analysis.",
    submitLabel: "Map Process",
    errorTitle: "Error",
    buildCtaHeadline: "Want us to build it?",
    buildCtaDescription:
      "We can turn this tool output into a scoped delivery with pricing.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "View pricing",
    fields: {
      workflowLabel: "Describe your workflow",
      workflowHelp:
        "Describe how the process actually works — who does what, in what order, what decisions get made, what tools are used. Be as specific as possible.",
      workflowPlaceholder:
        "e.g. A client submits a support request via email. Our support team reads it and either handles it directly or escalates to the technical team. If escalated, the technical team investigates and sends a response within 24 hours. If the client isn't satisfied, the case goes to a senior...",
    },
  },
  "dashboard-builder": {
    metaTitle: "Dashboard Requirements Builder — Free Dashboard Spec Tool | ADSI",
    metaDescription:
      "Generate a complete dashboard specification from your reporting needs. KPIs, data sources, layout recommendations. Free AI tool from ADSI.",
    eyebrow: "AI tool",
    title: "Dashboard Requirements Builder",
    description:
      "Describe what you need to see and why. Get a complete dashboard specification with KPIs, data sources, and layout recommendations.",
    submitLabel: "Build Spec",
    errorTitle: "Error",
    buildCtaHeadline: "Want us to build it?",
    buildCtaDescription:
      "We can turn this tool output into a scoped delivery with pricing.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "View pricing",
    fields: {
      audienceLabel: "Who is the dashboard for?",
      optional: "(optional)",
      audiencePlaceholder: "e.g. CEO and senior leadership team, weekly review",
      needsLabel: "What do you need to track and why?",
      needsHelp:
        "Describe the questions you need the dashboard to answer. What decisions will it support?",
      needsPlaceholder:
        "e.g. We need to track sales pipeline health, MRR growth, customer churn, and support ticket volume. Currently we pull this manually from three different spreadsheets each Monday...",
      sourcesLabel: "Current data sources",
      sourcesPlaceholder:
        "e.g. HubSpot CRM, QuickBooks, Zendesk, plus manual spreadsheets in Google Sheets...",
    },
  },
  "kpi-audit": {
    metaTitle: "KPI Audit — Free Metrics Review Tool | ADSI",
    metaDescription:
      "Get a free AI-powered KPI audit. Identify vanity metrics, missing indicators, and build a healthier measurement framework. Free tool from ADSI.",
    eyebrow: "AI tool",
    title: "KPI Audit",
    description:
      "List the metrics you currently track. Get a brutally honest audit — what's vanity, what's missing, and what to actually measure.",
    submitLabel: "Audit KPIs",
    errorTitle: "Error",
    buildCtaHeadline: "Want us to build it?",
    buildCtaDescription:
      "We can turn this tool output into a scoped delivery with pricing.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "View pricing",
    fields: {
      metricsLabel: "List your current metrics",
      metricsHelp:
        "List every metric your team tracks — in meetings, dashboards, or reports. One per line is easiest.",
      metricsPlaceholder:
        "e.g.\nWebsite visitors (monthly)\nLinkedIn followers\nRevenue (monthly)\nNumber of proposals sent\nEmail open rate\nCustomer satisfaction score\nNew leads from ads",
      contextLabel: "Business context",
      optional: "(optional)",
      contextPlaceholder:
        "e.g. B2B services company, 12 staff, EUR 2M revenue, growth stage. Main goal is increasing qualified pipeline from inbound...",
    },
  },
};

const toolPageContentAr: Record<ToolPageKey, ToolPageContent> = {
  "sop-builder": {
    metaTitle: "منشئ مسودة SOP | أداة مجانية من ADSI",
    metaDescription:
      "أنشئ إجراء تشغيلياً معيارياً كاملاً ومنظماً انطلاقاً من وصف غير مرتب للعملية. أداة ذكاء اصطناعي مجانية من ADSI.",
    eyebrow: "أداة ذكاء اصطناعي",
    title: "منشئ مسودة SOP",
    description:
      "صف أي عملية باللغة الطبيعية. واحصل خلال ثوانٍ على مستند SOP كامل ومنظم.",
    submitLabel: "إنشاء SOP",
    errorTitle: "خطأ",
    buildCtaHeadline: "هل تريدنا أن ننفذه؟",
    buildCtaDescription:
      "يمكننا تحويل مخرجات هذه الأداة إلى تنفيذ محدد النطاق مع تسعير واضح.",
    primaryCtaLabel: "احجز مكالمة",
    secondaryCtaLabel: "عرض الأسعار",
    fields: {
      processLabel: "صف العملية",
      processHelp:
        "اكتب بقدر ما تعرف. اذكر من يفعل ماذا، وما الأدوات المستخدمة، وما الناتج المطلوب.",
      processPlaceholder:
        "مثال: عندما يوقّع عميل جديد، يرسل فريق المبيعات رسالة ترحيب، ثم يحدد أحد أعضاء العمليات مكالمة onboarding، ثم ننشئ مساحة العمل ونرسل بيانات الدخول...",
    },
  },
  "brand-audit": {
    metaTitle: "تدقيق اتساق الهوية | أداة مجانية من ADSI",
    metaDescription:
      "احصل على تدقيق مجاني مدعوم بالذكاء الاصطناعي لاتساق الهوية. حدّد التباينات البصرية ومشكلات النبرة وأولويات الإصلاح.",
    eyebrow: "أداة ذكاء اصطناعي",
    title: "تدقيق اتساق الهوية",
    description:
      "صف هويتك وموادك الحالية. واحصل على تقرير اتساق يتضمن المظهر والنبرة وأولويات الإصلاح.",
    submitLabel: "تدقيق الهوية",
    errorTitle: "خطأ",
    buildCtaHeadline: "هل تريدنا أن ننفذه؟",
    buildCtaDescription:
      "يمكننا تحويل مخرجات هذه الأداة إلى تنفيذ محدد النطاق مع تسعير واضح.",
    primaryCtaLabel: "احجز مكالمة",
    secondaryCtaLabel: "عرض الأسعار",
    fields: {
      brandLabel: "صف هويتك",
      brandHelp:
        "اذكر المجال والجمهور المستهدف وقيم العلامة والألوان والخطوط وأي إرشادات متوفرة لديك.",
      brandPlaceholder:
        "مثال: نحن شركة SaaS تخدم فرق الموارد البشرية. ألواننا الأساسية الكحلي والذهبي. لدينا شعار لكن لا توجد إرشادات رسمية. نستخدم Helvetica أحياناً وArial في أماكن أخرى...",
      assetsLabel: "صف المواد والقنوات الحالية",
      optional: "(اختياري)",
      assetsHelp:
        "اذكر الموقع، ووسائل التواصل، وقوالب البريد، والعروض التقديمية، وأي مواد تحمل العلامة.",
      assetsPlaceholder:
        "مثال: الموقع مبني على Webflow ويستخدم ألوان العلامة لكن الخطوط غير متسقة، صفحة LinkedIn تستخدم نسخة مختلفة من الشعار، وقوالب البريد بلا هوية واضحة...",
    },
  },
  "page-critique": {
    metaTitle: "مراجعة صفحة الهبوط | تدقيق تحويل مجاني من ADSI",
    metaDescription:
      "احصل على تدقيق مجاني مدعوم بالذكاء الاصطناعي لصفحة الهبوط: تحليل الهرمية، ومراجعة الدعوات إلى الإجراء، ونقاط الاحتكاك، وأولويات الإصلاح.",
    eyebrow: "أداة ذكاء اصطناعي",
    title: "مراجعة صفحة الهبوط",
    description:
      "ألصق رابط الصفحة أو النص. واحصل على تدقيق تحويل يتضمن ملاحظات الهرمية وإصلاحات CTA وأولويات التنفيذ.",
    submitLabel: "مراجعة الصفحة",
    errorTitle: "خطأ",
    buildCtaHeadline: "هل تريدنا أن ننفذه؟",
    buildCtaDescription:
      "يمكننا تحويل مخرجات هذه الأداة إلى تنفيذ محدد النطاق مع تسعير واضح.",
    primaryCtaLabel: "احجز مكالمة",
    secondaryCtaLabel: "عرض الأسعار",
    fields: {
      urlLabel: "رابط الصفحة",
      copyLabel: "ألصق نص الصفحة",
      optional: "(اختياري)",
      urlPlaceholder: "https://yoursite.com/landing-page",
      copyHelp:
        "ألصق العنوان الرئيسي والعنوان الفرعي والنص الأساسي ونص الدعوات إلى الإجراء.",
      copyPlaceholder:
        "ألصق نص صفحة الهبوط هنا: العنوان، العنوان الفرعي، الفوائد، الإثبات الاجتماعي، والدعوة إلى الإجراء...",
      note: "قدّم رابطاً أو نصاً منسوخاً أو الاثنين معاً.",
    },
  },
  "process-mapper": {
    metaTitle: "مخطط سير العملية | أداة مجانية من ADSI",
    metaDescription:
      "حوّل وصف سير العمل إلى خريطة عملية منظمة تتضمن الخطوات ونقاط القرار وفرص التحسين. أداة ذكاء اصطناعي مجانية من ADSI.",
    eyebrow: "أداة ذكاء اصطناعي",
    title: "مخطط سير العملية",
    description:
      "صف كيف تسير العملية فعلاً. واحصل على خريطة منظمة تتضمن الخطوات ونقاط القرار وتحليل الاختناقات.",
    submitLabel: "رسم العملية",
    errorTitle: "خطأ",
    buildCtaHeadline: "هل تريدنا أن ننفذه؟",
    buildCtaDescription:
      "يمكننا تحويل مخرجات هذه الأداة إلى تنفيذ محدد النطاق مع تسعير واضح.",
    primaryCtaLabel: "احجز مكالمة",
    secondaryCtaLabel: "عرض الأسعار",
    fields: {
      workflowLabel: "صف سير العمل",
      workflowHelp:
        "اشرح كيف تعمل العملية فعلاً: من يفعل ماذا، وبأي ترتيب، وما القرارات المتخذة، وما الأدوات المستخدمة. كن محدداً قدر الإمكان.",
      workflowPlaceholder:
        "مثال: يرسل العميل طلب دعم عبر البريد. يقرأه فريق الدعم ثم يعالجه مباشرة أو يصعده إلى الفريق التقني. إذا صُعّد، يحقق الفريق التقني ويرد خلال 24 ساعة...",
    },
  },
  "dashboard-builder": {
    metaTitle: "منشئ متطلبات لوحة التحكم | أداة مجانية من ADSI",
    metaDescription:
      "أنشئ مواصفة كاملة للوحة التحكم انطلاقاً من احتياجاتك في التقارير، بما يشمل مؤشرات الأداء ومصادر البيانات وتوصيات التخطيط.",
    eyebrow: "أداة ذكاء اصطناعي",
    title: "منشئ متطلبات لوحة التحكم",
    description:
      "اشرح ما الذي تحتاج إلى رؤيته ولماذا. واحصل على مواصفة كاملة للوحة التحكم تتضمن KPIs ومصادر البيانات وتوصيات التخطيط.",
    submitLabel: "إنشاء المواصفة",
    errorTitle: "خطأ",
    buildCtaHeadline: "هل تريدنا أن ننفذه؟",
    buildCtaDescription:
      "يمكننا تحويل مخرجات هذه الأداة إلى تنفيذ محدد النطاق مع تسعير واضح.",
    primaryCtaLabel: "احجز مكالمة",
    secondaryCtaLabel: "عرض الأسعار",
    fields: {
      audienceLabel: "لمن هذه اللوحة؟",
      optional: "(اختياري)",
      audiencePlaceholder: "مثال: المدير التنفيذي وفريق القيادة العليا، مراجعة أسبوعية",
      needsLabel: "ما الذي تريد تتبعه ولماذا؟",
      needsHelp:
        "اشرح الأسئلة التي يجب على لوحة التحكم أن تجيب عنها. وما القرارات التي ستدعمها؟",
      needsPlaceholder:
        "مثال: نحتاج إلى تتبع صحة مسار المبيعات ونمو الإيراد المتكرر والتسرب وحجم تذاكر الدعم. حالياً نجمع ذلك يدوياً من ثلاث جداول كل يوم اثنين...",
      sourcesLabel: "مصادر البيانات الحالية",
      sourcesPlaceholder:
        "مثال: HubSpot CRM وQuickBooks وZendesk بالإضافة إلى جداول يدوية في Google Sheets...",
    },
  },
  "kpi-audit": {
    metaTitle: "تدقيق مؤشرات الأداء | أداة مجانية من ADSI",
    metaDescription:
      "احصل على تدقيق مجاني لمؤشرات الأداء لتحديد مؤشرات الزينة والثغرات وبناء إطار قياس أكثر صحة.",
    eyebrow: "أداة ذكاء اصطناعي",
    title: "تدقيق مؤشرات الأداء",
    description:
      "اكتب المؤشرات التي تتابعونها حالياً. واحصل على مراجعة صريحة لما هو سطحي وما هو ناقص وما الذي يجب قياسه فعلاً.",
    submitLabel: "تدقيق المؤشرات",
    errorTitle: "خطأ",
    buildCtaHeadline: "هل تريدنا أن ننفذه؟",
    buildCtaDescription:
      "يمكننا تحويل مخرجات هذه الأداة إلى تنفيذ محدد النطاق مع تسعير واضح.",
    primaryCtaLabel: "احجز مكالمة",
    secondaryCtaLabel: "عرض الأسعار",
    fields: {
      metricsLabel: "اكتب مؤشراتك الحالية",
      metricsHelp:
        "اذكر كل مؤشر يتابعه فريقك في الاجتماعات أو اللوحات أو التقارير. من الأسهل وضع مؤشر واحد في كل سطر.",
      metricsPlaceholder:
        "مثال:\nزيارات الموقع شهرياً\nمتابعو LinkedIn\nالإيراد الشهري\nعدد العروض المرسلة\nمعدل فتح البريد\nدرجة رضا العملاء\nعملاء جدد من الإعلانات",
      contextLabel: "سياق العمل",
      optional: "(اختياري)",
      contextPlaceholder:
        "مثال: شركة خدمات B2B، 12 موظفاً، إيرادات 2 مليون يورو، في مرحلة نمو. الهدف الأساسي هو زيادة المسار المؤهل من القنوات الواردة...",
    },
  },
};

export const getToolPageContent = (locale: Locale, tool: ToolPageKey) =>
  locale === "ar" ? toolPageContentAr[tool] : toolPageContentEn[tool];
