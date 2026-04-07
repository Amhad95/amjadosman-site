import type { Locale } from "@/lib/locale";

export interface FallbackArticle {
  id: string;
  title: string;
  title_ar?: string | null;
  slug: string;
  excerpt: string;
  excerpt_ar?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  created_at: string;
  body: string;
  body_ar?: string | null;
}

export interface FallbackWorkCase {
  id: string;
  slug: string;
  title: string;
  title_ar?: string | null;
  description: string;
  description_ar?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  href: string;
  cta_label: string;
  cta_label_ar?: string | null;
  clientProfile: string;
  clientProfile_ar?: string | null;
  challenge: string;
  challenge_ar?: string | null;
  approach: string[];
  approach_ar?: string[] | null;
  deliverables: string[];
  deliverables_ar?: string[] | null;
  outcomes: string[];
  outcomes_ar?: string[] | null;
}

export interface ResolvedArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail_url: string | null;
  category: string | null;
  created_at: string;
  body: string | null;
}

export interface ResolvedWorkCase {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail_url: string | null;
  category: string | null;
  href: string;
  cta_label: string;
  clientProfile: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
}

interface LocalizedArticleSource {
  id: string;
  title: string;
  title_ar?: string | null;
  slug: string;
  excerpt: string;
  excerpt_ar?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  created_at: string;
  body?: string | null;
  body_ar?: string | null;
}

interface LocalizedWorkCaseSource {
  id: string;
  slug: string;
  title: string;
  title_ar?: string | null;
  description: string;
  description_ar?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  href: string;
  cta_label: string;
  cta_label_ar?: string | null;
  clientProfile: string;
  clientProfile_ar?: string | null;
  challenge: string;
  challenge_ar?: string | null;
  approach: string[];
  approach_ar?: string[] | null;
  deliverables: string[];
  deliverables_ar?: string[] | null;
  outcomes: string[];
  outcomes_ar?: string[] | null;
}

const localizedValue = <T>(locale: Locale, englishValue: T, arabicValue?: T | null) =>
  locale === "ar" ? arabicValue ?? englishValue : englishValue;

export const resolveLocalizedArticle = (
  article: LocalizedArticleSource,
  locale: Locale
): ResolvedArticle => ({
  id: article.id,
  title: localizedValue(locale, article.title, article.title_ar),
  slug: article.slug,
  excerpt: localizedValue(locale, article.excerpt, article.excerpt_ar),
  thumbnail_url: article.thumbnail_url,
  category: localizedValue(locale, article.category, article.category_ar),
  created_at: article.created_at,
  body: localizedValue(locale, article.body ?? null, article.body_ar),
});

export const resolveLocalizedWorkCase = (
  item: LocalizedWorkCaseSource,
  locale: Locale
): ResolvedWorkCase => ({
  id: item.id,
  slug: item.slug,
  title: localizedValue(locale, item.title, item.title_ar),
  description: localizedValue(locale, item.description, item.description_ar),
  thumbnail_url: item.thumbnail_url,
  category: localizedValue(locale, item.category, item.category_ar),
  href: item.href,
  cta_label: localizedValue(locale, item.cta_label, item.cta_label_ar),
  clientProfile: localizedValue(locale, item.clientProfile, item.clientProfile_ar),
  challenge: localizedValue(locale, item.challenge, item.challenge_ar),
  approach: localizedValue(locale, item.approach, item.approach_ar),
  deliverables: localizedValue(locale, item.deliverables, item.deliverables_ar),
  outcomes: localizedValue(locale, item.outcomes, item.outcomes_ar),
});

export const fallbackArticles: FallbackArticle[] = [
  {
    id: "resource-website-brief",
    title: "How service firms build a website brief that actually gets approved",
    title_ar: "كيف تبني شركات الخدمات موجز موقع يتم اعتماده فعلاً",
    slug: "website-brief-for-service-firms",
    excerpt:
      "A practical structure for turning scattered stakeholder opinions into a website brief with clear priorities, pages, and conversion goals.",
    excerpt_ar:
      "هيكل عملي يحول آراء أصحاب المصلحة المتفرقة إلى موجز موقع واضح الأولويات والصفحات وأهداف التحويل.",
    thumbnail_url: null,
    category: "Website Strategy",
    category_ar: "استراتيجية المواقع",
    created_at: "2026-03-25T09:00:00.000Z",
    body: `## Why most briefs stall

Most service firms do not struggle because they lack ideas. They struggle because every stakeholder is describing a different website.

One person wants a premium brand statement. Another wants lead generation. Another wants to explain every service in detail. The result is usually a vague brief, slow approvals, and a site that tries to do everything.

## What a useful brief includes

### 1. One business outcome

Choose the primary job of the site:

- Generate qualified calls
- Support outbound sales
- Make the business feel established
- Clarify complex services

You can support more than one outcome, but the team needs one clear priority.

### 2. One audience per page

List the audiences you actually want to move:

- Buyers ready to compare providers
- Referral partners checking credibility
- Investors or board members reviewing maturity
- Candidates assessing the company

If a page serves everyone, it usually serves no one well.

### 3. A page-by-page decision

For each planned page, define:

- Who it is for
- What question it answers
- What action it should create

That removes a large amount of opinion-led copy churn.

### 4. Proof requirements

Decide early what proof the site needs:

- Case studies
- Metrics
- Screenshots
- Client quotes
- Process snapshots

Teams often leave proof to the end and then wonder why the site feels generic.

## The handoff checklist

Before design starts, the brief should confirm:

- Sitemap
- Page goals
- Brand direction
- CTA hierarchy
- Proof inventory
- Who signs off on copy

When those six items are clear, production speeds up and approval rounds become much shorter.

## Where ADSI usually helps

We are usually brought in when the company already knows it needs a better site but the internal alignment is missing. In that situation, the best first step is not visual design. It is a working brief that creates fast decisions.`,
    body_ar: `## لماذا تتعطل معظم الموجزات

معظم شركات الخدمات لا تعاني لأنها تفتقر إلى الأفكار. المشكلة أن كل صاحب مصلحة يتخيل موقعاً مختلفاً.

شخص يريد خطاباً يرفع قيمة العلامة. وآخر يريد توليد عملاء محتملين. وثالث يريد شرح كل خدمة بالتفصيل. والنتيجة غالباً موجز ضبابي، واعتمادات بطيئة، وموقع يحاول أن يفعل كل شيء.

## ماذا يتضمن الموجز المفيد

### 1. نتيجة عمل واحدة

اختر المهمة الأساسية للموقع:

- توليد مكالمات مؤهلة
- دعم المبيعات الخارجة
- جعل الشركة تبدو أكثر رسوخاً
- توضيح الخدمات المعقدة

يمكن للموقع أن يدعم أكثر من نتيجة، لكن الفريق يحتاج إلى أولوية واحدة واضحة.

### 2. جمهور واحد لكل صفحة

حدد الجماهير التي تريد فعلاً تحريكها:

- المشترون الجاهزون للمقارنة بين المزودين
- شركاء الإحالة الذين يراجعون المصداقية
- المستثمرون أو أعضاء المجلس الذين يقيمون النضج
- المرشحون الذين يقيّمون الشركة

إذا كانت الصفحة تخاطب الجميع، فهي غالباً لا تخدم أحداً جيداً.

### 3. قرار لكل صفحة

لكل صفحة مخطط لها، حدّد:

- لمن هذه الصفحة
- ما السؤال الذي تجيب عنه
- ما الإجراء الذي يفترض أن تدفع إليه

هذا يزيل قدراً كبيراً من الجدل القائم على الآراء أثناء كتابة المحتوى.

### 4. متطلبات الإثبات

احسم مبكراً نوع الإثبات الذي يحتاجه الموقع:

- دراسات حالة
- أرقام ونتائج
- لقطات شاشة
- اقتباسات العملاء
- لمحات من العمليات

الفرق غالباً تؤجل الإثبات إلى النهاية ثم تتساءل لماذا يبدو الموقع عاماً ومتشابهاً.

## قائمة التسليم قبل البدء

قبل بدء التصميم، يجب أن يؤكد الموجز:

- خريطة الموقع
- أهداف الصفحات
- اتجاه العلامة
- هرمية الدعوات إلى الإجراء
- جرد مواد الإثبات
- من يعتمد المحتوى

عندما تكون هذه العناصر الستة واضحة، تصبح وتيرة التنفيذ أسرع وجولات الاعتماد أقصر بكثير.

## أين تساعد ADSI عادة

عادةً نُستدعى عندما تعرف الشركة أنها تحتاج إلى موقع أفضل، لكن الاصطفاف الداخلي ما زال غائباً. في هذه الحالة، أفضل خطوة أولى ليست التصميم البصري، بل موجز عملي يصنع قرارات سريعة.`,
  },
  {
    id: "resource-sop-rollout",
    title: "How to launch SOPs without creating another document graveyard",
    title_ar: "كيف تطلق أدلة الإجراءات دون إنشاء مقبرة جديدة للمستندات",
    slug: "launch-sops-that-get-used",
    excerpt:
      "A rollout pattern for SOP libraries that improves adoption, ownership, and updates instead of producing a folder full of ignored PDFs.",
    excerpt_ar:
      "نمط إطلاق لمكتبات الإجراءات يرفع التبني والملكية والتحديث بدلاً من إنتاج مجلد مليء بملفات PDF المتروكة.",
    thumbnail_url: null,
    category: "Operations",
    category_ar: "العمليات",
    created_at: "2026-03-18T09:00:00.000Z",
    body: `## The real reason SOP libraries fail

Most SOP projects fail after delivery, not during creation.

The documentation may be correct, but the rollout is weak. Teams get a folder, a handover call, and a message that the system is now complete. A month later, no one knows which version is current.

## What adoption needs

### Assign clear owners

Every SOP should have:

- an operational owner
- an approver
- a review rhythm

If ownership is shared by everyone, it is owned by no one.

### Build around live workflows

Document the processes people actually perform every week:

- onboarding
- approvals
- reporting
- client delivery
- recurring admin work

High-frequency workflows create the strongest adoption because people feel the value immediately.

### Keep the format scannable

Most teams do not need long manuals. They need documents that answer:

- what triggers this task
- who owns it
- what steps happen in order
- what good output looks like
- what to do when something goes wrong

### Put SOPs where work already happens

If the team works in SharePoint, the SOPs should live there. If managers review requests in a certain workspace, the SOP should be one click away from that workspace.

Documentation that lives outside the workflow is harder to adopt.

## A rollout pattern that works

1. Start with the ten highest-friction workflows.
2. Publish them in a shared structure with clear naming.
3. Train team leads first, not everyone at once.
4. Run a two-week usage check.
5. Fix unclear steps immediately.
6. Set a review cadence.

## The outcome to aim for

The goal is not to say "we have SOPs."

The goal is for managers to stop repeating instructions, for new hires to ramp faster, and for recurring work to become easier to hand off.`,
    body_ar: `## السبب الحقيقي لفشل مكتبات الإجراءات

معظم مشاريع أدلة الإجراءات لا تفشل أثناء الكتابة، بل بعد التسليم.

قد يكون التوثيق صحيحاً، لكن الإطلاق ضعيف. يحصل الفريق على مجلد ومكالمة تسليم ورسالة تقول إن النظام اكتمل. وبعد شهر لا يعرف أحد أي نسخة هي المعتمدة.

## ما الذي يحتاجه التبني

### عيّن مالكين واضحين

يجب أن يكون لكل إجراء:

- مالك تشغيلي
- جهة اعتماد
- إيقاع مراجعة

إذا كانت الملكية مشتركة بين الجميع فهي عملياً ليست ملكاً لأحد.

### ابنِ حول سير العمل الحي

وثّق العمليات التي ينفذها الناس فعلاً كل أسبوع:

- الانضمام الجديد
- الاعتمادات
- التقارير
- تسليم العملاء
- الأعمال الإدارية المتكررة

سير العمل المتكرر جداً يخلق أقوى تبنٍ لأن الناس يشعرون بالقيمة فوراً.

### اجعل الصيغة سهلة المسح

معظم الفرق لا تحتاج إلى كتيبات طويلة. هي تحتاج إلى مستندات تجيب عن:

- ما الذي يطلق هذه المهمة
- من يملكها
- ما الخطوات وبأي ترتيب
- كيف يبدو الناتج الجيد
- ماذا نفعل عندما يحدث خلل

### ضع الإجراءات حيث يحدث العمل

إذا كان الفريق يعمل داخل SharePoint فيجب أن تعيش الإجراءات هناك. وإذا كان المديرون يراجعون الطلبات داخل مساحة معينة، فيجب أن يكون الإجراء على بعد نقرة واحدة من تلك المساحة.

التوثيق الذي يعيش خارج سير العمل أصعب في التبني.

## نمط إطلاق ينجح

1. ابدأ بعشرة تدفقات هي الأعلى احتكاكاً.
2. انشرها داخل هيكل مشترك مع أسماء واضحة.
3. درّب قادة الفرق أولاً، وليس الجميع دفعة واحدة.
4. شغّل مراجعة استخدام لمدة أسبوعين.
5. أصلح الخطوات غير الواضحة فوراً.
6. حدّد إيقاعاً ثابتاً للمراجعة.

## النتيجة التي يجب استهدافها

الهدف ليس أن تقول: "لدينا أدلة إجراءات."

الهدف هو أن يتوقف المديرون عن تكرار التعليمات، وأن يندمج الموظفون الجدد أسرع، وأن يصبح تسليم الأعمال المتكررة أسهل.`,
  },
  {
    id: "resource-ai-automation",
    title: "Where AI agents save time first in service businesses",
    title_ar: "أين يوفّر وكلاء الذكاء الاصطناعي الوقت أولاً في شركات الخدمات",
    slug: "where-ai-agents-save-time-first",
    excerpt:
      "A simple way to find high-value automation opportunities without handing sensitive judgment calls to an unproven workflow.",
    excerpt_ar:
      "طريقة بسيطة لاكتشاف فرص أتمتة عالية القيمة دون تسليم القرارات الحساسة إلى سير عمل غير مُثبت.",
    thumbnail_url: null,
    category: "AI Automation",
    category_ar: "أتمتة الذكاء الاصطناعي",
    created_at: "2026-03-10T09:00:00.000Z",
    body: `## Start with repetitive decisions, not big promises

The fastest automation wins usually come from work that is repetitive, rules-based, and slow to route.

That includes:

- intake sorting
- knowledge retrieval
- draft generation
- meeting preparation
- recurring summaries

It usually does **not** start with fully autonomous decision-making.

## A quick test for good agent candidates

Ask four questions:

1. Does this happen often?
2. Is the input pattern recognizable?
3. Can a human approve the result quickly?
4. Can we measure whether it helped?

If the answer is yes to all four, it is a strong candidate for a first pilot.

## Good first use cases

### Support and requests

- classify new requests
- route by urgency or topic
- draft first responses

### Sales operations

- enrich inbound leads
- prepare discovery briefs
- summarize call notes

### Internal knowledge

- answer process questions from approved sources
- surface the right SOP
- return citations with every answer

## What to avoid first

Avoid pilots where:

- the system can take external action with no approval
- there is no clear source of truth
- success depends on hidden tribal knowledge
- the workflow is politically sensitive

## The best first outcome

The best first automation does not replace a department. It removes one frustrating class of repetitive work and proves the team can trust the operating model around it.

That is why strong AI delivery is usually as much about approvals, logging, and exception handling as it is about the model itself.`,
    body_ar: `## ابدأ بالقرارات المتكررة لا بالوعود الكبيرة

أسرع مكاسب الأتمتة تأتي عادة من الأعمال المتكررة، القائمة على قواعد، والبطيئة في التوجيه.

ويشمل ذلك:

- فرز الطلبات الواردة
- استرجاع المعرفة
- توليد المسودات
- التحضير للاجتماعات
- الملخصات المتكررة

وغالباً لا يبدأ الأمر بقرارات مستقلة بالكامل.

## اختبار سريع لاختيار المرشحين الجيدين للوكلاء

اسأل أربعة أسئلة:

1. هل يحدث هذا كثيراً؟
2. هل نمط الإدخال قابل للتعرّف؟
3. هل يمكن لإنسان اعتماد النتيجة بسرعة؟
4. هل نستطيع قياس ما إذا كان قد ساعد؟

إذا كانت الإجابة نعم على الأربعة، فهذا مرشح قوي لتجربة أولى.

## أمثلة جيدة للبداية

### الدعم والطلبات

- تصنيف الطلبات الجديدة
- توجيهها حسب الاستعجال أو الموضوع
- صياغة الردود الأولى

### عمليات المبيعات

- إثراء العملاء الواردين
- إعداد موجزات الاكتشاف
- تلخيص ملاحظات المكالمات

### المعرفة الداخلية

- الإجابة عن أسئلة العمليات من مصادر معتمدة
- إظهار الإجراء الصحيح
- إرجاع المراجع مع كل إجابة

## ما الذي يجب تجنبه أولاً

تجنب التجارب التي:

- تسمح للنظام باتخاذ إجراء خارجي دون اعتماد
- لا يوجد فيها مصدر حقيقة واضح
- يعتمد نجاحها على معرفة ضمنية مخفية
- يكون سير العمل فيها حساساً سياسياً داخل المؤسسة

## أفضل نتيجة أولى

أفضل أتمتة أولى لا تستبدل قسماً كاملاً. هي تزيل فئة واحدة مزعجة من العمل المتكرر وتثبت أن الفريق يستطيع الوثوق بالنموذج التشغيلي المحيط بها.

ولهذا فإن تسليم الذكاء الاصطناعي الجيد يتعلق بالموافقات والسجلات ومعالجة الاستثناءات بقدر ما يتعلق بالنموذج نفسه.`,
  },
];

export const fallbackWorkCases: FallbackWorkCase[] = [
  {
    id: "work-brand-platform",
    slug: "brand-platform-rollout",
    title: "Brand platform rollout for a growing advisory firm",
    title_ar: "إطلاق منصة هوية لشركة استشارية في طور النمو",
    description:
      "Rebuilt the company narrative, identity system, and sales materials so the firm could look as established as the quality of its client work.",
    description_ar:
      "أعدنا بناء سرد الشركة ونظام الهوية ومواد المبيعات حتى تبدو الشركة بنفس رسوخ جودة عملها مع العملاء.",
    thumbnail_url: null,
    category: "Brand and Growth",
    category_ar: "الهوية والنمو",
    href: "/work/brand-platform-rollout",
    cta_label: "View case study",
    cta_label_ar: "عرض دراسة الحالة",
    clientProfile:
      "Regional advisory firm expanding into larger accounts and referral channels.",
    clientProfile_ar:
      "شركة استشارية إقليمية تتوسع نحو حسابات أكبر وقنوات إحالة أوسع.",
    challenge:
      "The firm had strong client outcomes but looked fragmented across its website, pitch materials, and documents. Prospects were seeing different versions of the company depending on where they landed.",
    challenge_ar:
      "كانت نتائج العملاء قوية، لكن صورة الشركة بدت مجزأة عبر الموقع ومواد العروض والمستندات. وكان العملاء المحتملون يرون نسخاً مختلفة من الشركة بحسب نقطة الدخول.",
    approach: [
      "Clarified the positioning and messaging hierarchy used across the site and sales materials.",
      "Built a lean brand system with typography, color, templates, and usage rules.",
      "Reworked proposal and deck templates so the team could create new materials without drifting off-brand.",
    ],
    approach_ar: [
      "وضحنا التموضع وتسلسل الرسائل المستخدم عبر الموقع ومواد المبيعات.",
      "بنينا نظام هوية خفيفاً يضم الطباعة والألوان والقوالب وقواعد الاستخدام.",
      "أعدنا صياغة قوالب العروض والملفات حتى يتمكن الفريق من إنشاء مواد جديدة دون الانحراف عن الهوية.",
    ],
    deliverables: [
      "Identity system and brand guide",
      "Core website messaging framework",
      "Proposal and pitch deck templates",
      "Asset library for ongoing use",
    ],
    deliverables_ar: [
      "نظام هوية ودليل علامة",
      "إطار رسائل أساسي للموقع",
      "قوالب للعروض التقديمية والعروض التجارية",
      "مكتبة أصول للاستخدام المستمر",
    ],
    outcomes: [
      "Stronger first impression in new business conversations",
      "Faster proposal turnaround with less ad hoc design work",
      "Consistent brand presentation across every client-facing touchpoint",
    ],
    outcomes_ar: [
      "انطباع أول أقوى في محادثات الأعمال الجديدة",
      "سرعة أكبر في إعداد العروض مع عمل تصميم ارتجالي أقل",
      "عرض متسق للعلامة عبر كل نقاط التماس مع العميل",
    ],
  },
  {
    id: "work-sharepoint",
    slug: "sharepoint-operations-reset",
    title: "SharePoint and SOP reset for a busy operations team",
    title_ar: "إعادة ضبط SharePoint وأدلة الإجراءات لفريق عمليات مزدحم",
    description:
      "Reorganized the company knowledge base, permissions, and recurring procedures so staff could find the right information without asking around.",
    description_ar:
      "أعدنا تنظيم قاعدة المعرفة والصلاحيات والإجراءات المتكررة حتى يتمكن الموظفون من العثور على المعلومة الصحيحة دون البحث الشفهي المستمر.",
    thumbnail_url: null,
    category: "Operations",
    category_ar: "العمليات",
    href: "/work/sharepoint-operations-reset",
    cta_label: "View case study",
    cta_label_ar: "عرض دراسة الحالة",
    clientProfile:
      "Multi-team services business with fast hiring and heavy document traffic.",
    clientProfile_ar:
      "شركة خدمات متعددة الفرق مع توظيف سريع وحركة مستندات كثيفة.",
    challenge:
      "Files were spread across personal folders, inconsistent libraries, and undocumented processes. New staff relied on shadowing and managers kept repeating the same instructions.",
    challenge_ar:
      "كانت الملفات موزعة بين مجلدات شخصية ومكتبات غير متسقة وعمليات غير موثقة. وكان الموظفون الجدد يعتمدون على التتبع المباشر، فيما يكرر المديرون التعليمات نفسها باستمرار.",
    approach: [
      "Mapped the live workflow and the most-used document types before redesigning the structure.",
      "Created a clearer SharePoint architecture with role-based access and cleaner naming.",
      "Built a starter SOP library for repeatable tasks, approvals, and onboarding.",
    ],
    approach_ar: [
      "رسمنا سير العمل الفعلي وأنواع المستندات الأكثر استخداماً قبل إعادة تصميم الهيكل.",
      "أنشأنا بنية أوضح لـ SharePoint مع وصول مبني على الأدوار وتسميات أنظف.",
      "بنينا مكتبة إجراءات أولية للمهام المتكررة والاعتمادات والانضمام الجديد.",
    ],
    deliverables: [
      "SharePoint information architecture",
      "Permissions model and governance rules",
      "SOP library for high-frequency tasks",
      "Onboarding and handover materials",
    ],
    deliverables_ar: [
      "بنية معلومات لـ SharePoint",
      "نموذج صلاحيات وقواعد حوكمة",
      "مكتبة إجراءات للمهام عالية التكرار",
      "مواد الانضمام والتسليم",
    ],
    outcomes: [
      "Faster file retrieval and fewer access questions",
      "Less manager dependency for common procedures",
      "Cleaner onboarding path for new team members",
    ],
    outcomes_ar: [
      "استرجاع أسرع للملفات وأسئلة وصول أقل",
      "اعتماد أقل على المديرين في الإجراءات الشائعة",
      "مسار انضمام أوضح لأعضاء الفريق الجدد",
    ],
  },
  {
    id: "work-automation",
    slug: "agent-pilot-for-client-intake",
    title: "AI agent pilot for intake, routing, and meeting prep",
    title_ar: "تجربة وكيل ذكاء اصطناعي للاستقبال والتوجيه والتحضير للاجتماعات",
    description:
      "Designed a controlled automation pilot that reduced repetitive triage while keeping human approvals where judgment still mattered.",
    description_ar:
      "صممنا تجربة أتمتة مضبوطة خففت أعمال الفرز المتكرر مع إبقاء الاعتمادات البشرية في الأماكن التي لا يزال فيها الحكم ضرورياً.",
    thumbnail_url: null,
    category: "AI Automation",
    category_ar: "أتمتة الذكاء الاصطناعي",
    href: "/work/agent-pilot-for-client-intake",
    cta_label: "View case study",
    cta_label_ar: "عرض دراسة الحالة",
    clientProfile:
      "Service company handling a growing volume of inbound requests and qualification work.",
    clientProfile_ar:
      "شركة خدمات تتعامل مع حجم متزايد من الطلبات الواردة وأعمال التأهيل.",
    challenge:
      "The team was spending too much time categorizing requests, collecting missing details, and preparing people for calls. Nothing was complex on its own, but the volume was creating drag.",
    challenge_ar:
      "كان الفريق يقضي وقتاً كبيراً في تصنيف الطلبات وجمع التفاصيل الناقصة وتجهيز الأشخاص للمكالمات. لم يكن أي جزء معقداً بمفرده، لكن الحجم كان يخلق بطئاً واضحاً.",
    approach: [
      "Scoped one workflow end to end instead of trying to automate every function at once.",
      "Added approval steps for outbound communication and clear escalation rules for edge cases.",
      "Created logging and review checkpoints so the team could see what the pilot was doing.",
    ],
    approach_ar: [
      "حددنا سير عمل واحداً من البداية إلى النهاية بدلاً من محاولة أتمتة كل وظيفة دفعة واحدة.",
      "أضفنا خطوات اعتماد للتواصل الخارجي وقواعد تصعيد واضحة للحالات الطرفية.",
      "أنشأنا نقاط تسجيل ومراجعة حتى يتمكن الفريق من رؤية ما الذي تفعله التجربة فعلاً.",
    ],
    deliverables: [
      "Intake and triage workflow",
      "Meeting-prep summaries with source context",
      "Approval gates and escalation logic",
      "Monitoring and review checklist",
    ],
    deliverables_ar: [
      "سير عمل للاستقبال والفرز",
      "ملخصات تحضير للاجتماعات مع سياق المصدر",
      "بوابات اعتماد ومنطق تصعيد",
      "قائمة مراقبة ومراجعة",
    ],
    outcomes: [
      "Less manual triage in the first response window",
      "Better consistency in call preparation",
      "A safer path to future automation because the operating model was already in place",
    ],
    outcomes_ar: [
      "عمل يدوي أقل في نافذة الرد الأولى",
      "اتساق أفضل في التحضير للمكالمات",
      "مسار أكثر أماناً للأتمتة المستقبلية لأن النموذج التشغيلي كان موجوداً مسبقاً",
    ],
  },
  {
    id: "work-website-refresh",
    slug: "conversion-led-website-refresh",
    title: "Conversion-led website refresh for a specialist consultancy",
    title_ar: "تحديث موقع موجّه للتحويل لشركة استشارية متخصصة",
    description:
      "Turned a generic brochure site into a clearer, more persuasive experience that matched the company's actual expertise and offer structure.",
    description_ar:
      "حوّلنا موقعاً تعريفياً عاماً إلى تجربة أوضح وأكثر إقناعاً تعكس خبرة الشركة الفعلية وهيكل عروضها.",
    thumbnail_url: null,
    category: "Website",
    category_ar: "الموقع",
    href: "/work/conversion-led-website-refresh",
    cta_label: "View case study",
    cta_label_ar: "عرض دراسة الحالة",
    clientProfile:
      "Specialist consultancy selling complex work with a long trust-building cycle.",
    clientProfile_ar:
      "شركة استشارية متخصصة تبيع عملاً معقداً ضمن دورة ثقة طويلة.",
    challenge:
      "The old site explained what the company did, but not why buyers should trust it or what to do next. The result was weak inquiry quality and slow internal content updates.",
    challenge_ar:
      "كان الموقع القديم يشرح ما الذي تفعله الشركة، لكنه لا يوضح لماذا يجب على المشتري أن يثق بها أو ما الخطوة التالية. وكانت النتيجة استفسارات أضعف وتحديثات محتوى داخلية بطيئة.",
    approach: [
      "Reworked the information hierarchy around buyer questions and service decisions.",
      "Introduced stronger proof placement, CTA sequencing, and service-page structure.",
      "Set up a content model the internal team could update without constant design help.",
    ],
    approach_ar: [
      "أعدنا بناء هرمية المعلومات حول أسئلة المشترين وقرارات الخدمة.",
      "أدخلنا تموضعاً أقوى للإثبات وتسلسلاً أفضل للدعوات إلى الإجراء وهيكل صفحات الخدمة.",
      "أنشأنا نموذج محتوى يستطيع الفريق الداخلي تحديثه دون حاجة دائمة إلى دعم تصميم.",
    ],
    deliverables: [
      "Rewritten page structure and messaging",
      "New page templates for services and proof",
      "CMS content model and publishing guidance",
      "Conversion-focused CTA system",
    ],
    deliverables_ar: [
      "هيكل صفحات ورسائل معاد صياغتها",
      "قوالب صفحات جديدة للخدمات والإثبات",
      "نموذج محتوى CMS وإرشادات نشر",
      "نظام دعوات إلى الإجراء موجّه للتحويل",
    ],
    outcomes: [
      "Clearer path from first impression to inquiry",
      "Stronger proof placement across key pages",
      "A site structure that could keep improving instead of freezing after launch",
    ],
    outcomes_ar: [
      "مسار أوضح من الانطباع الأول إلى الاستفسار",
      "تموضع أقوى للإثبات عبر الصفحات الأساسية",
      "هيكل موقع يستطيع التحسن باستمرار بدلاً من التجمّد بعد الإطلاق",
    ],
  },
];
