import type { Locale } from "@/lib/locale";
import projectCasesData from "@/data/projects.json";
import { additionalProjectCases } from "@/data/additionalProjectCases";
import projectInsurance from "@/assets/project-insurance.jpg";
import projectSolar from "@/assets/project-solar.jpg";
import projectStrategy from "@/assets/project-strategy.jpg";

export interface FallbackArticle {
  id: string;
  title: string;
  title_ar?: string | null;
  title_de?: string | null;
  title_fr?: string | null;
  title_bg?: string | null;
  slug: string;
  excerpt: string;
  excerpt_ar?: string | null;
  excerpt_de?: string | null;
  excerpt_fr?: string | null;
  excerpt_bg?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  category_de?: string | null;
  category_fr?: string | null;
  category_bg?: string | null;
  created_at: string;
  body: string;
  body_ar?: string | null;
  body_de?: string | null;
  body_fr?: string | null;
  body_bg?: string | null;
}

export interface FallbackWorkCase {
  id: string;
  source_id?: string | null;
  slug: string;
  title: string;
  title_ar?: string | null;
  title_de?: string | null;
  title_fr?: string | null;
  title_bg?: string | null;
  description: string;
  description_ar?: string | null;
  description_de?: string | null;
  description_fr?: string | null;
  description_bg?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  category_de?: string | null;
  category_fr?: string | null;
  category_bg?: string | null;
  href: string;
  cta_label: string;
  cta_label_ar?: string | null;
  cta_label_de?: string | null;
  cta_label_fr?: string | null;
  cta_label_bg?: string | null;
  partner?: string | null;
  year?: string | null;
  sector?: string | null;
  sector_ar?: string | null;
  sector_de?: string | null;
  sector_fr?: string | null;
  sector_bg?: string | null;
  role?: string | null;
  role_ar?: string | null;
  role_de?: string | null;
  role_fr?: string | null;
  role_bg?: string | null;
  outcome?: string | null;
  outcome_ar?: string | null;
  outcome_de?: string | null;
  outcome_fr?: string | null;
  outcome_bg?: string | null;
  content?: string | null;
  content_ar?: string | null;
  content_de?: string | null;
  content_fr?: string | null;
  content_bg?: string | null;
  gallery_images?: string[];
  featured?: boolean;
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
  client_group?: string | null;
  service_line_ids?: string[];
  case_series_order?: number | null;
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
  source_id?: string | null;
  slug: string;
  title: string;
  description: string;
  thumbnail_url: string | null;
  category: string | null;
  href: string;
  cta_label: string;
  partner?: string | null;
  year?: string | null;
  sector?: string | null;
  role?: string | null;
  outcome?: string | null;
  content?: string | null;
  gallery_images?: string[];
  featured?: boolean;
  clientProfile: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
  client_group?: string | null;
  service_line_ids?: string[];
  case_series_order?: number | null;
}

interface LocalizedArticleSource {
  id: string;
  title: string;
  title_ar?: string | null;
  title_de?: string | null;
  title_fr?: string | null;
  title_bg?: string | null;
  slug: string;
  excerpt: string;
  excerpt_ar?: string | null;
  excerpt_de?: string | null;
  excerpt_fr?: string | null;
  excerpt_bg?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  category_de?: string | null;
  category_fr?: string | null;
  category_bg?: string | null;
  created_at: string;
  body?: string | null;
  body_ar?: string | null;
  body_de?: string | null;
  body_fr?: string | null;
  body_bg?: string | null;
}

interface LocalizedWorkCaseSource {
  id: string;
  source_id?: string | null;
  slug: string;
  title: string;
  title_ar?: string | null;
  title_de?: string | null;
  title_fr?: string | null;
  title_bg?: string | null;
  description: string;
  description_ar?: string | null;
  description_de?: string | null;
  description_fr?: string | null;
  description_bg?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  category_de?: string | null;
  category_fr?: string | null;
  category_bg?: string | null;
  href: string;
  cta_label: string;
  cta_label_ar?: string | null;
  cta_label_de?: string | null;
  cta_label_fr?: string | null;
  cta_label_bg?: string | null;
  partner?: string | null;
  year?: string | null;
  sector?: string | null;
  sector_ar?: string | null;
  sector_de?: string | null;
  sector_fr?: string | null;
  sector_bg?: string | null;
  role?: string | null;
  role_ar?: string | null;
  role_de?: string | null;
  role_fr?: string | null;
  role_bg?: string | null;
  outcome?: string | null;
  outcome_ar?: string | null;
  outcome_de?: string | null;
  outcome_fr?: string | null;
  outcome_bg?: string | null;
  content?: string | null;
  content_ar?: string | null;
  content_de?: string | null;
  content_fr?: string | null;
  content_bg?: string | null;
  gallery_images?: string[];
  featured?: boolean;
  clientProfile: string;
  clientProfile_ar?: string | null;
  clientProfile_de?: string | null;
  clientProfile_fr?: string | null;
  clientProfile_bg?: string | null;
  challenge: string;
  challenge_ar?: string | null;
  challenge_de?: string | null;
  challenge_fr?: string | null;
  challenge_bg?: string | null;
  approach: string[];
  approach_ar?: string[] | null;
  approach_de?: string[] | null;
  approach_fr?: string[] | null;
  approach_bg?: string[] | null;
  deliverables: string[];
  deliverables_ar?: string[] | null;
  deliverables_de?: string[] | null;
  deliverables_fr?: string[] | null;
  deliverables_bg?: string[] | null;
  outcomes: string[];
  outcomes_ar?: string[] | null;
  outcomes_de?: string[] | null;
  outcomes_fr?: string[] | null;
  outcomes_bg?: string[] | null;
  client_group?: string | null;
  service_line_ids?: string[];
  case_series_order?: number | null;
}

const localizedValue = <T>(
  locale: Locale,
  enValue: T,
  arValue?: T | null,
  deValue?: T | null,
  frValue?: T | null,
  bgValue?: T | null
) => {
  if (locale === "ar" && arValue) return arValue;
  if (locale === "de" && deValue) return deValue;
  if (locale === "fr" && frValue) return frValue;
  if (locale === "bg" && bgValue) return bgValue;
  return enValue;
};

export const resolveLocalizedArticle = (
  article: LocalizedArticleSource,
  locale: Locale
): ResolvedArticle => ({
  id: article.id,
  title: localizedValue(locale, article.title, article.title_ar, article.title_de, article.title_fr, article.title_bg),
  slug: article.slug,
  excerpt: localizedValue(locale, article.excerpt, article.excerpt_ar, article.excerpt_de, article.excerpt_fr, article.excerpt_bg),
  thumbnail_url: article.thumbnail_url,
  category: localizedValue(locale, article.category, article.category_ar, article.category_de, article.category_fr, article.category_bg),
  created_at: article.created_at,
  body: localizedValue(locale, article.body ?? null, article.body_ar, article.body_de, article.body_fr, article.body_bg),
});

export const resolveLocalizedWorkCase = (
  item: LocalizedWorkCaseSource,
  locale: Locale
): ResolvedWorkCase => ({
  id: item.id,
  source_id: item.source_id,
  slug: item.slug,
  title: localizedValue(locale, item.title, item.title_ar, item.title_de, item.title_fr, item.title_bg),
  description: localizedValue(locale, item.description, item.description_ar, item.description_de, item.description_fr, item.description_bg),
  thumbnail_url: item.thumbnail_url,
  category: localizedValue(locale, item.category, item.category_ar, item.category_de, item.category_fr, item.category_bg),
  href: item.href,
  cta_label: localizedValue(locale, item.cta_label, item.cta_label_ar, item.cta_label_de, item.cta_label_fr, item.cta_label_bg),
  partner: item.partner,
  year: item.year,
  sector: localizedValue(locale, item.sector, item.sector_ar, item.sector_de, item.sector_fr, item.sector_bg),
  role: localizedValue(locale, item.role, item.role_ar, item.role_de, item.role_fr, item.role_bg),
  outcome: localizedValue(locale, item.outcome, item.outcome_ar, item.outcome_de, item.outcome_fr, item.outcome_bg),
  content: localizedValue(locale, item.content, item.content_ar, item.content_de, item.content_fr, item.content_bg),
  gallery_images: item.gallery_images ?? [],
  featured: item.featured ?? false,
  clientProfile: localizedValue(locale, item.clientProfile, item.clientProfile_ar, item.clientProfile_de, item.clientProfile_fr, item.clientProfile_bg),
  challenge: localizedValue(locale, item.challenge, item.challenge_ar, item.challenge_de, item.challenge_fr, item.challenge_bg),
  approach: localizedValue(locale, item.approach, item.approach_ar, item.approach_de, item.approach_fr, item.approach_bg),
  deliverables: localizedValue(locale, item.deliverables, item.deliverables_ar, item.deliverables_de, item.deliverables_fr, item.deliverables_bg),
  outcomes: localizedValue(locale, item.outcomes, item.outcomes_ar, item.outcomes_de, item.outcomes_fr, item.outcomes_bg),
  client_group: item.client_group,
  service_line_ids: item.service_line_ids ?? [],
  case_series_order: item.case_series_order ?? null,
});

export const fallbackArticles: FallbackArticle[] = [
  {
    id: "resource-website-brief",
    title: "How service firms build a website brief that actually gets approved",
    title_ar: "كيف تبني شركات الخدمات موجز موقع يتم اعتماده فعلاً",
    title_de: "Wie Dienstleistungsunternehmen ein Website-Briefing erstellen, das tatsächlich genehmigt wird",
    title_fr: "Comment les sociétés de services rédigent un brief de site web qui est réellement approuvé",
    title_bg: "Как компаниите за услуги създават задание за уебсайт, което реално се одобрява",
    slug: "website-brief-for-service-firms",
    excerpt:
      "A practical structure for turning scattered stakeholder opinions into a website brief with clear priorities, pages, and conversion goals.",
    excerpt_ar:
      "هيكل عملي يحول آراء أصحاب المصلحة المتفرقة إلى موجز موقع واضح الأولويات والصفحات وأهداف التحويل.",
    excerpt_de: "Eine praktische Struktur, um verstreute Meinungen von Stakeholdern in ein Website-Briefing mit klaren Prioritäten, Seiten und Konversionszielen zu verwandeln.",
    excerpt_fr: "Une structure pratique pour transformer les opinions dispersées des parties prenantes en un brief de site web avec des priorités, des pages et des objectifs de conversion clairs.",
    excerpt_bg: "Практична структура за превръщане на разпръснатите мнения на заинтересованите страни в задание за уебсайт с ясни приоритети, страници и цели за реализация.",
    thumbnail_url: null,
    category: "Website Strategy",
    category_ar: "استراتيجية المواقع",
    category_de: "Website-Strategie",
    category_fr: "Stratégie de site web",
    category_bg: "Уебсайт стратегия",
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

## Where I usually help

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

## أين أساعد عادة

عادةً نُستدعى عندما تعرف الشركة أنها تحتاج إلى موقع أفضل، لكن الاصطفاف الداخلي ما زال غائباً. في هذه الحالة، أفضل خطوة أولى ليست التصميم البصري، بل موجز عملي يصنع قرارات سريعة.`,
    body_de: `## Warum die meisten Briefings ins Stocken geraten

Die meisten Dienstleistungsunternehmen haben nicht deshalb Schwierigkeiten, weil es ihnen an Ideen mangelt. Sie haben Schwierigkeiten, weil jeder Stakeholder eine andere Website beschreibt.

Eine Person möchte eine erstklassige Markenaussage. Ein anderer möchte Lead-Generierung. Ein weiterer möchte jeden Service im Detail erklären. Das Ergebnis ist normalerweise ein vages Briefing, langsame Genehmigungen und eine Website, die versucht, alles zu tun.

## Was ein nützliches Briefing beinhaltet

### 1. Ein Geschäftsergebnis

Wählen Sie die Hauptaufgabe der Website:

- Qualifizierte Anrufe generieren
- Outbound-Verkäufe unterstützen
- Dem Unternehmen ein etabliertes Gefühl geben
- Komplexe Dienstleistungen klären

Sie können mehr als ein Ergebnis unterstützen, aber das Team benötigt eine klare Priorität.

### 2. Ein Publikum pro Seite

Listen Sie die Zielgruppen auf, die Sie tatsächlich bewegen möchten:

- Käufer, die bereit sind, Anbieter zu vergleichen
- Empfehlungspartner, die die Glaubwürdigkeit prüfen
- Investoren oder Vorstandsmitglieder, die den Reifegrad bewerten
- Kandidaten, die das Unternehmen beurteilen

Wenn eine Seite allen dient, dient sie normalerweise niemandem gut.

### 3. Eine Entscheidung Seite für Seite

Definieren Sie für jede geplante Seite:

- Für wen sie ist
- Welche Frage sie beantwortet
- Welche Aktion sie auslösen soll

Das beseitigt einen Großteil der meinungsgeleiteten Textänderungen.

### 4. Anforderungen an den Nachweis

Entscheiden Sie frühzeitig, welche Nachweise die Website benötigt:

- Fallstudien
- Metriken
- Screenshots
- Kundenzitate
- Prozess-Snapshots

Teams lassen Nachweise oft bis zum Ende liegen und wundern sich dann, warum die Website generisch wirkt.

## Die Übergabe-Checkliste

Bevor das Design beginnt, sollte das Briefing bestätigen:

- Sitemap
- Seitenziele
- Markenrichtung
- CTA-Hierarchie
- Nachweis-Inventar
- Wer den Text freigibt

Wenn diese sechs Punkte klar sind, beschleunigt sich die Produktion und die Genehmigungsrunden werden viel kürzer.

## Wo ich normalerweise helfe

Wir werden normalerweise hinzugezogen, wenn das Unternehmen bereits weiß, dass es eine bessere Website benötigt, aber die interne Abstimmung fehlt. In dieser Situation ist der beste erste Schritt nicht das visuelle Design. Es ist ein Arbeitsbriefing, das schnelle Entscheidungen ermöglicht.`,
    body_fr: `## Pourquoi la plupart des briefs stagnent

La plupart des sociétés de services ne rencontrent pas de difficultés par manque d'idées. Elles rencontrent des difficultés parce que chaque partie prenante décrit un site web différent.

Une personne veut une déclaration de marque premium. Une autre veut générer des prospects. Une autre veut expliquer chaque service en détail. Le résultat est généralement un brief vague, des approbations lentes et un site qui essaie de tout faire.

## Ce qu'un brief utile comprend

### 1. Un résultat commercial

Choisissez le travail principal du site :

- Générer des appels qualifiés
- Soutenir les ventes sortantes
- Donner l'impression que l'entreprise est bien établie
- Clarifier des services complexes

Vous pouvez soutenir plus d'un résultat, mais l'équipe a besoin d'une priorité claire.

### 2. Une audience par page

Faites la liste des audiences que vous voulez réellement toucher :

- Les acheteurs prêts à comparer les fournisseurs
- Les partenaires de référence vérifiant la crédibilité
- Les investisseurs ou les membres du conseil évaluant la maturité
- Les candidats évaluant l'entreprise

Si une page s'adresse à tout le monde, elle ne s'adresse généralement à personne de manière efficace.

### 3. Une décision page par page

Pour chaque page prévue, définissez :

- À qui elle s'adresse
- À quelle question elle répond
- Quelle action elle doit générer

Cela élimine une grande partie des révisions de texte basées sur des opinions.

### 4. Exigences en matière de preuves

Décidez tôt des preuves dont le site a besoin :

- Études de cas
- Métriques
- Captures d'écran
- Citations de clients
- Aperçus de processus

Les équipes laissent souvent les preuves pour la fin, puis se demandent pourquoi le site semble générique.

## La liste de contrôle du transfert

Avant le début de la conception, le brief doit confirmer :

- Plan du site
- Objectifs de la page
- Direction de la marque
- Hiérarchie des CTA
- Inventaire des preuves
- Qui valide le texte

Lorsque ces six éléments sont clairs, la production s'accélère et les cycles d'approbation deviennent beaucoup plus courts.

## Là où j'aide généralement

Nous sommes généralement appelés lorsque l'entreprise sait déjà qu'elle a besoin d'un meilleur site, mais que l'alignement interne fait défaut. Dans cette situation, la meilleure première étape n'est pas la conception visuelle. C'est un brief de travail qui permet des décisions rapides.`,
    body_bg: `## Защо повечето задания застояват

Повечето компании за услуги не изпитват трудности, защото им липсват идеи. Те изпитват трудности, защото всяка заинтересована страна описва различен уебсайт.

Един човек иска изявление за първокласен бранд. Друг иска генериране на потенциални клиенти. Трети иска да обясни всяка услуга в детайли. Резултатът обикновено е неясно задание, бавни одобрения и сайт, който се опитва да прави всичко.

## Какво включва полезното задание

### 1. Един бизнес резултат

Изберете основната задача на сайта:

- Генериране на квалифицирани обаждания
- Подпомагане на изходящите продажби
- Създаване на усещане, че бизнесът е утвърден
- Изясняване на сложни услуги

Можете да подкрепите повече от един резултат, но екипът се нуждае от един ясен приоритет.

### 2. Една аудитория на страница

Избройте аудиториите, които действително искате да мотивирате:

- Купувачи, готови да сравняват доставчици
- Партньори за препоръки, проверяващи надеждността
- Инвеститори или членове на борда, оценяващи зрелостта
- Кандидати, оценяващи компанията

Ако дадена страница обслужва всички, тя обикновено не обслужва никого добре.

### 3. Решение страница по страница

За всяка планирана страница определете:

- За кого е предназначена
- На какъв въпрос отговаря
- Какво действие трябва да създаде

Това премахва голяма част от промените в текстовете, базирани на мнения.

### 4. Изисквания за доказателства

Решете рано какви доказателства са необходими на сайта:

- Казуси от практиката
- Метрики
- Скрийншоти
- Цитати от клиенти
- Снимки на процеси

Екипите често оставят доказателствата за накрая и после се чудят защо сайтът изглежда общ.

## Контролен списък за предаване

Преди да започне дизайнът, заданието трябва да потвърди:

- Карта на сайта
- Цели на страниците
- Посока на бранда
- Йерархия на призивите към действие
- Инвентаризация на доказателствата
- Кой одобрява текстовете

Когато тези шест елемента са ясни, производството се ускорява и кръговете за одобрение стават много по-кратки.

## Къде обикновено помагам

Обикновено сме привлечени, когато компанията вече знае, че се нуждае от по-добър сайт, но липсва вътрешно съгласуване. В тази ситуация най-добрата първа стъпка не е визуалният дизайн. Това е работно задание, което създава бързи решения.`,
  },
  {
    id: "resource-sop-rollout",
    title: "How to launch SOPs without creating another document graveyard",
    title_ar: "كيف تطلق أدلة الإجراءات دون إنشاء مقبرة جديدة للمستندات",
    title_de: "Wie man SOPs einführt, ohne einen weiteren Dokumentenfriedhof zu schaffen",
    title_fr: "Comment lancer des procédures opérationnelles standard sans créer un autre cimetière de documents",
    title_bg: "Как да стартирате СОП без да създавате поредното гробище за документи",
    slug: "launch-sops-that-get-used",
    excerpt:
      "A rollout pattern for SOP libraries that improves adoption, ownership, and updates instead of producing a folder full of ignored PDFs.",
    excerpt_ar:
      "نمط إطلاق لمكتبات الإجراءات يرفع التبني والملكية والتحديث بدلاً من إنتاج مجلد مليء بملفات PDF المتروكة.",
    excerpt_de: "Ein Einführungsmodell für SOP-Bibliotheken, das die Akzeptanz, Verantwortlichkeit und Aktualisierungen verbessert, anstatt einen Ordner voller ignorierter PDFs zu produzieren.",
    excerpt_fr: "Un modèle de déploiement pour les bibliothèques de procédures opérationnelles standard qui améliore l'adoption, l'appropriation et les mises à jour au lieu de produire un dossier rempli de PDF ignorés.",
    excerpt_bg: "Модел за внедряване на библиотеки със СОП, който подобрява приемането, собствеността и актуализациите, вместо да произвежда папка, пълна с игнорирани PDF файлове.",
    thumbnail_url: null,
    category: "Operations",
    category_ar: "العمليات",
    category_de: "Betrieb",
    category_fr: "Opérations",
    category_bg: "Операции",
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
  {
    id: "resource-crm-data-model",
    title: "The small CRM data model that keeps a service pipeline usable",
    title_ar: "نموذج CRM الصغير الذي يبقي مسار شركات الخدمات قابلاً للاستخدام",
    title_de: "Das kleine CRM-Datenmodell für eine nutzbare Service-Pipeline",
    title_fr: "Le petit modèle CRM qui garde un pipeline de services exploitable",
    title_bg: "Малкият CRM модел, който запазва работещия pipeline",
    slug: "crm-data-model-for-service-firms",
    excerpt: "A practical CRM structure for service firms that need clear ownership, reliable follow-up, and reporting people can trust.",
    excerpt_ar: "هيكل CRM عملي لشركات الخدمات التي تحتاج إلى ملكية واضحة ومتابعة موثوقة وتقارير يمكن الوثوق بها.",
    excerpt_de: "Eine praktische CRM-Struktur für klare Verantwortlichkeiten, verlässliches Follow-up und belastbares Reporting.",
    excerpt_fr: "Une structure CRM pratique pour clarifier les responsables, le suivi et le reporting.",
    excerpt_bg: "Практична CRM структура за ясна отговорност, надежден follow-up и отчетност.",
    thumbnail_url: null,
    category: "Operations Systems",
    category_ar: "أنظمة العمليات",
    category_de: "Operations-Systeme",
    category_fr: "Systèmes opérationnels",
    category_bg: "Операционни системи",
    created_at: "2026-04-02T09:00:00.000Z",
    body: `## Start with the records people already manage

Most service firms need four core records: companies, contacts, opportunities, and activities. Add projects when a signed deal needs a separate delivery workflow.

| Record | Purpose | Minimum fields |
| --- | --- | --- |
| Company | Commercial account | Name, sector, country, owner |
| Contact | Person involved | Name, role, email, buying influence |
| Opportunity | Potential work | Service line, value, stage, next step, close date |
| Activity | Evidence of movement | Type, date, owner, outcome, linked record |

The model stays useful when each field answers a reporting or handoff question. A field that never changes a decision belongs in notes or a reference record.

## Make ownership visible

Every opportunity needs one owner and one next step. “Follow up” is not a next step. Write the event: “Send revised scope after finance confirms the budget on Thursday.” A manager should be able to open the pipeline and find the next action without asking the account owner.

Use stages that describe buyer commitment: New enquiry, Qualified, Discovery complete, Scope sent, Decision pending, Won or lost. Each stage needs an exit rule. An opportunity reaches “Scope sent” only when the recipient, value, scope version, and review date are recorded.

## Reporting rules worth configuring

- Weighted pipeline uses stage probability after qualification.
- Stale opportunities are flagged when the next-step date passes.
- Win rate uses qualified opportunities, not every enquiry.
- Lost reasons use a controlled list plus a short explanation.
- Activities count only when they record an outcome.

## Implementation checklist

- Audit the last 30 opportunities before creating fields.
- Remove fields with no owner or reporting use.
- Define one stage owner and exit rule per stage.
- Create a weekly view for overdue next steps.
- Review the model after two real pipeline meetings.

A small model with disciplined usage will outperform a large CRM full of fields nobody maintains.`,
  },
  {
    id: "resource-sop-rollout-plan",
    title: "How to roll out an SOP without creating a document graveyard",
    title_ar: "كيف تطلق SOP دون إنشاء مقبرة مستندات",
    title_de: "So führen Sie eine SOP ein, ohne einen Dokumentenfriedhof zu bauen",
    title_fr: "Déployer une SOP sans créer un cimetière de documents",
    title_bg: "Как да въведете SOP без гробище от документи",
    slug: "sop-rollout-plan-that-gets-used",
    excerpt: "A rollout pattern that connects an SOP to a real owner, a real task, a quality check, and a review date.",
    excerpt_ar: "نمط إطلاق يربط SOP بمالك ومهمة وفحص جودة وتاريخ مراجعة.",
    excerpt_de: "Ein Einführungsmodell, das eine SOP mit Verantwortlichen, Aufgaben, Qualitätsprüfung und Review-Termin verbindet.",
    excerpt_fr: "Une méthode qui relie la SOP à un responsable, une tâche, un contrôle et une date de revue.",
    excerpt_bg: "Модел за внедряване, който свързва SOP със собственик, задача, проверка и дата за преглед.",
    thumbnail_url: null,
    category: "Operations Systems",
    category_ar: "أنظمة العمليات",
    category_de: "Operations-Systeme",
    category_fr: "Systèmes opérationnels",
    category_bg: "Операционни системи",
    created_at: "2026-04-08T09:00:00.000Z",
    body: `## The document is the smallest part of the rollout

An SOP becomes operational when a person uses it during real work, records an output, and knows what to do when the standard path breaks. Writing the document first is useful. Stopping there is where adoption fails.

## Build the control sheet first

Record the process name, owner, backup, trigger, required inputs, definition of done, escalation condition, and review date. The control sheet gives managers a quick way to decide whether the SOP still belongs to the current workflow.

## Use a two-cycle pilot

During cycle one, the owner follows the draft and marks every unclear step. Capture questions in a change log and finish the cycle. During cycle two, a second person runs the same process with the draft and change log. This tests whether the SOP transfers knowledge beyond the original expert.

| Review point | Evidence | Decision |
| --- | --- | --- |
| Trigger | Work starts from a recognisable event | Keep or clarify trigger |
| Inputs | Required files or fields are present | Add owner or validation |
| Steps | Another person can complete the work | Rewrite ambiguity |
| Quality check | Output has an acceptance rule | Add sample or checklist |
| Exception | Failure has an escalation route | Name decision owner |

Link the SOP from the task template, request form, CRM record, or workspace used for the process. A document that requires a separate search will lose against memory and habit.

Review after the first five uses, then monthly until the process stabilises. After that, review quarterly or after a system, role, policy, or customer change. Ask where people deviated, which step created waiting, and which instruction is now false.

An SOP earns its place through observed use. The rollout should produce evidence of that use, not a folder full of polished files.`,
  },
  {
    id: "resource-dashboard-requirements",
    title: "Dashboard requirements that prevent expensive reporting rework",
    title_ar: "متطلبات لوحة البيانات التي تمنع إعادة بناء التقارير بتكلفة عالية",
    title_de: "Dashboard-Anforderungen, die teure Reporting-Nacharbeit verhindern",
    title_fr: "Des exigences de dashboard qui évitent la reprise coûteuse du reporting",
    title_bg: "Изисквания за табло, които предотвратяват скъпата преработка",
    slug: "dashboard-requirements-before-design",
    excerpt: "The questions to answer before choosing charts, so a dashboard supports decisions instead of becoming a decorative report.",
    excerpt_ar: "الأسئلة التي يجب الإجابة عنها قبل اختيار الرسوم حتى تدعم اللوحة القرارات.",
    excerpt_de: "Die Fragen vor der Chart-Auswahl, damit ein Dashboard Entscheidungen unterstützt.",
    excerpt_fr: "Les questions à traiter avant les graphiques pour faire du dashboard un outil de décision.",
    excerpt_bg: "Въпросите преди избора на графики, за да подпомага таблото решения.",
    thumbnail_url: null,
    category: "Data and Reporting",
    category_ar: "البيانات والتقارير",
    category_de: "Daten und Reporting",
    category_fr: "Données et reporting",
    category_bg: "Данни и отчетност",
    created_at: "2026-04-15T09:00:00.000Z",
    body: `## Define the decisions before the visuals

Start with three statements: the audience is, they review this dashboard, and they need to decide. When the team cannot name a decision, the metric probably belongs in an exploratory report rather than an operating dashboard.

## Specify the grain

Every metric needs a grain: daily orders, monthly revenue, account-level pipeline, or ticket-level response time. Mixing grains in one visual can make a trend look precise while hiding the population.

Write the KPI dictionary before the layout:

| Metric | Definition | Formula | Grain | Source | Owner |
| --- | --- | --- | --- | --- | --- |
| Qualified pipeline | Open opportunities meeting rules | Sum of open qualified value | Opportunity | CRM | Sales lead |
| Proposal win rate | Won divided by decided proposals | Won / won + lost | Monthly cohort | CRM | Commercial lead |
| First response time | Receipt to first human response | Median elapsed time | Ticket | Support system | Support lead |

The owner resolves definition disputes. The source owner resolves access and data-quality issues.

## Separate monitoring from diagnosis

The first screen should answer whether attention is required. A second layer can explain why. A leader may need a pipeline coverage card and a drilldown by stage, owner, segment, and age. Putting every dimension on the opening screen creates visual competition.

For each metric, record threshold, reviewer, action, and evidence. Example: “If coverage falls below 3x target for two weekly reviews, the commercial lead reviews stage aging and next-step completeness.”

## Acceptance tests

- Every KPI has a formula and date range.
- Users can identify the data freshness timestamp.
- Filters do not change the denominator silently.
- The metric matches its source report within a documented tolerance.
- Every alert points to an owner and action.

Design comes after these decisions. A clean chart cannot repair an undefined metric.`,
  },
  {
    id: "resource-ai-automation-readiness",
    title: "An AI automation readiness check for operations teams",
    title_ar: "فحص جاهزية أتمتة الذكاء الاصطناعي لفرق العمليات",
    title_de: "Ein Readiness-Check für KI-Automatisierung in Operations-Teams",
    title_fr: "Un test de préparation à l'automatisation IA pour les équipes opérationnelles",
    title_bg: "Проверка на готовността за AI автоматизация на операционни екипи",
    slug: "ai-automation-readiness-check",
    excerpt: "A grounded way to decide whether a repetitive workflow is ready for an AI step, a rules engine, or better documentation first.",
    excerpt_ar: "طريقة عملية لتحديد ما إذا كان سير العمل جاهزاً لخطوة ذكاء اصطناعي أو يحتاج أولاً إلى قواعد وتوثيق أفضل.",
    excerpt_de: "Ein belastbarer Weg, um zwischen KI-Schritt, Regelwerk und besserer Dokumentation zu entscheiden.",
    excerpt_fr: "Une méthode concrète pour choisir entre une étape IA, des règles ou une meilleure documentation.",
    excerpt_bg: "Практичен начин да решите между AI стъпка, правила или по-добра документация.",
    thumbnail_url: null,
    category: "Automation",
    category_ar: "الأتمتة",
    category_de: "Automatisierung",
    category_fr: "Automatisation",
    category_bg: "Автоматизация",
    created_at: "2026-04-22T09:00:00.000Z",
    body: `## Score the workflow before choosing a model

An AI step belongs in a workflow when the input is available, the acceptable output can be described, a person can review uncertainty, and failure has a controlled consequence.

Score each dimension from 0 to 2:

| Dimension | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Input quality | Missing or contradictory | Usable with cleanup | Structured and current |
| Output definition | Subjective | Examples exist | Acceptance rules exist |
| Volume | Rare | Repeated weekly | Repeated daily |
| Review path | No owner | Informal review | Named reviewer and escalation |
| Risk | High consequence | Moderate consequence | Reversible and bounded |

A total below 5 calls for process cleanup. A score from 5 to 7 supports a small pilot. A total of 8 or more supports deeper automation design when the highest-risk failure still has a human checkpoint.

Use documentation when the problem is inconsistent knowledge, deterministic rules when decisions are stable, retrieval when staff need approved-source answers, and generation for drafting, summarising, classifying, or proposing options.

Define a baseline before launch: handling time, rework rate, escalation rate, or response quality. Run the pilot on a fixed sample. Record accepted, edited, rejected, and failed outputs. End with a decision to retire, keep as assisted work, or expand with stronger controls.

Document allowed sources, sensitive-data exclusions, model and prompt version, reviewer, retry limit, logging, retention, and user disclosure.

    Readiness is an operating condition. A capable model cannot compensate for missing ownership, unclear acceptance rules, or unreliable source data.`,
  },
  {
    id: "resource-software-selection-workflow",
    title: "How to choose operational software without buying another silo",
    title_ar: "كيف تختار البرمجيات التشغيلية دون شراء جزيرة جديدة",
    title_de: "Operative Software auswählen, ohne ein weiteres Datensilo zu kaufen",
    title_fr: "Choisir un logiciel opérationnel sans acheter un silo de plus",
    title_bg: "Как да изберете оперативен софтуер без още едно информационно силозче",
    slug: "operational-software-selection-workflow",
    excerpt: "A selection framework for CRM, accounting, inventory, and task software that starts with the operating workflow rather than feature lists.",
    excerpt_ar: "إطار لاختيار CRM والمحاسبة والمخزون وإدارة المهام يبدأ بسير العمل التشغيلي بدلاً من قوائم الميزات.",
    excerpt_de: "Ein Auswahlrahmen für CRM, Buchhaltung, Inventar und Aufgabenmanagement, der beim Arbeitsablauf beginnt.",
    excerpt_fr: "Une méthode de choix pour CRM, comptabilité, stock et tâches qui part du workflow réel.",
    excerpt_bg: "Метод за избор на CRM, счетоводство, склад и задачи, започващ от реалния процес.",
    thumbnail_url: null,
    category: "Managed Software",
    category_ar: "البرمجيات المُدارة",
    category_de: "Managed Software",
    category_fr: "Logiciels managés",
    category_bg: "Управляван софтуер",
    created_at: "2026-04-29T09:00:00.000Z",
    body: `## Map the handoffs before comparing products

List the workflow from request to outcome. For each step, record the person, system, data created, and decision required. The software choice should reduce a handoff or make its evidence clearer.

## Use five evaluation lenses

1. **Workflow fit:** Can the team complete normal work without workarounds?
2. **Data model:** Do records, relationships, statuses, and history match the business?
3. **Governance:** Can roles, approvals, audit history, and exports be controlled?
4. **Adoption effort:** Can people learn the daily path in a short working session?
5. **Operating support:** Who configures changes, fixes data, and reviews usage?

Score each lens from 1 to 5, then weight them by the cost of failure. A low subscription price is irrelevant when every month requires manual reconciliation.

Choose one team, one workflow, and one reporting rhythm for the pilot. Define a clean starting dataset and rules for duplicates, missing owners, and stale statuses. Ask vendors what happens when a record is duplicated, an approval is rejected, an integration fails, or an export needs correction.

Choose the option that makes the intended workflow easier to repeat, inspect, and improve. Configuration, ownership, permissions, data hygiene, and review habits decide whether the product becomes useful.`,
  },
  {
    id: "resource-proposal-approval-system",
    title: "A proposal approval system for teams that keep rewriting the same offer",
    title_ar: "نظام اعتماد للعروض للفرق التي تعيد كتابة العرض نفسه باستمرار",
    title_de: "Ein Freigabesystem für Angebote, die Teams ständig neu schreiben",
    title_fr: "Un système de validation des propositions que les équipes réécrivent sans cesse",
    title_bg: "Система за одобрение на предложения за екипи, които постоянно ги пренаписват",
    slug: "proposal-approval-system-for-service-teams",
    excerpt: "A lightweight proposal workflow with source-of-truth rules, review gates, and reusable evidence blocks.",
    excerpt_ar: "سير عمل خفيف للعروض مع قواعد مصدر الحقيقة ونقاط مراجعة وكتل أدلة قابلة لإعادة الاستخدام.",
    excerpt_de: "Ein schlanker Angebotsprozess mit verbindlicher Quelle, Review-Gates und wiederverwendbaren Belegen.",
    excerpt_fr: "Un workflow léger avec source de référence, validations et blocs de preuve réutilisables.",
    excerpt_bg: "Лек процес за предложения с единен източник, контролни точки и повторно използваеми доказателства.",
    thumbnail_url: null,
    category: "Commercial Systems",
    category_ar: "الأنظمة التجارية",
    category_de: "Vertriebssysteme",
    category_fr: "Systèmes commerciaux",
    category_bg: "Търговски системи",
    created_at: "2026-05-06T09:00:00.000Z",
    body: `## Separate reusable proof from deal-specific scope

The proposal library should contain approved evidence blocks: capabilities, process explanations, case-study facts, delivery assumptions, and standard commercial terms. The deal record should contain audience, problem, scope, price, timeline, and risks for that buyer.

Add review gates with different jobs:

| Gate | Reviewer | Question |
| --- | --- | --- |
| Qualification | Commercial owner | Is there a real problem, budget path, and decision process? |
| Scope | Delivery owner | Can the team deliver the promised work? |
| Commercial | Finance or director | Do price, margin, payment terms, and risk fit? |
| Final | Account owner | Is the version clear and ready to send? |

Store the source brief, audience, version, owner, reviewers, decision date, and sent file. Use statuses such as Draft, Internal review, Revision required, Approved to send, Sent, Won, and Lost.

Track the reason for each revision: unclear scope, missing proof, pricing change, delivery risk, legal wording, or buyer request. Repeated scope edits belong in the service definition. Repeated proof requests belong in the case-study library.

Before sending, verify that the outcome is specific, deliverables have boundaries, assumptions are visible, price matches the approved source, and the next action is obvious. The system should make a good proposal easier to assemble and a risky proposal harder to send.`,
  },
  {
    id: "resource-operational-handover",
    title: "The handover checklist that keeps a new system alive after launch",
    title_ar: "قائمة التسليم التي تبقي النظام الجديد حياً بعد الإطلاق",
    title_de: "Die Übergabe-Checkliste, die ein neues System nach dem Launch nutzbar hält",
    title_fr: "La checklist de passation qui maintient un nouveau système après le lancement",
    title_bg: "Чеклистът за предаване, който поддържа новата система след старта",
    slug: "operational-system-handover-checklist",
    excerpt: "What a clean handover needs beyond credentials: ownership, change rules, data checks, training evidence, and the first review rhythm.",
    excerpt_ar: "ما يحتاجه التسليم الجيد إلى جانب بيانات الدخول: الملكية وقواعد التغيير وفحوص البيانات وإثبات التدريب وإيقاع المراجعة.",
    excerpt_de: "Was eine gute Übergabe neben Zugangsdaten braucht: Verantwortung, Änderungsregeln, Datenchecks und Review-Rhythmus.",
    excerpt_fr: "Ce qu'une bonne passation exige au-delà des accès : responsables, règles, contrôles et rythme de revue.",
    excerpt_bg: "Какво включва доброто предаване освен достъпи: собственост, промени, проверки, обучение и ритъм.",
    thumbnail_url: null,
    category: "Delivery Systems",
    category_ar: "أنظمة التسليم",
    category_de: "Übergabesysteme",
    category_fr: "Systèmes de livraison",
    category_bg: "Системи за предаване",
    created_at: "2026-05-13T09:00:00.000Z",
    body: `## A handover transfers operating responsibility

The recipient should know what the system does, who owns each part, how to request a change, and how to recognise a failure. Credentials are one item in that package.

The five layers are purpose, structure, routine, change, and recovery. Leave the workflow purpose, records, statuses, permissions, templates, integrations, daily tasks, change route, backup, rollback, escalation, and support contact.

Run a recipient-led walkthrough with three real scenarios: a normal request from start to finish, an exception that needs a decision, and a correction after a mistake. Record every question. A missing field may reveal a training issue, permission issue, or design issue.

Leave behind configuration exports, approved templates, data-cleanup notes, a permission matrix, open issues, known limits, a change-request route, and the first review date. Schedule reviews after week one, week two, and day thirty. Check completion, exceptions, duplicates, unused fields, and requests arriving outside the intended workflow.

The system is ready for handover when the recipient can operate it without live rescue. The work is complete when the organisation can keep making sensible changes after the original build ends.`,
  },
];

interface LegacyProjectCase {
  id: string;
  source_id?: string | null;
  title: string;
  title_ar?: string | null;
  title_de?: string | null;
  title_fr?: string | null;
  title_bg?: string | null;
  partner: string;
  year: string;
  sector: string;
  sector_ar?: string | null;
  sector_de?: string | null;
  sector_fr?: string | null;
  sector_bg?: string | null;
  summary: string;
  summary_ar?: string | null;
  summary_de?: string | null;
  summary_fr?: string | null;
  summary_bg?: string | null;
  outcome: string;
  outcome_ar?: string | null;
  outcome_de?: string | null;
  outcome_fr?: string | null;
  outcome_bg?: string | null;
  role: string;
  role_ar?: string | null;
  role_de?: string | null;
  role_fr?: string | null;
  role_bg?: string | null;
  slug: string;
  cover_image_url: string | null;
  featured: boolean;
  content: string;
  content_ar?: string | null;
  content_de?: string | null;
  content_fr?: string | null;
  content_bg?: string | null;
  gallery_images: string[];
  category: string | null;
  category_ar?: string | null;
  category_de?: string | null;
  category_fr?: string | null;
  category_bg?: string | null;
  cta_label?: string | null;
  cta_label_ar?: string | null;
  cta_label_de?: string | null;
  cta_label_fr?: string | null;
  cta_label_bg?: string | null;
  thumbnail_url?: string | null;
  href?: string | null;
  client_group?: string | null;
  service_line_ids?: string[];
  case_series_order?: number | null;
}

const localProjectImages: Record<string, string> = {
  "radiance-co-ltd-solar-power-for-health-facilities-in-red-sea-and-kassala": projectSolar,
  "tadmeenpro-an-operations-core-for-insurers-that-is-ready-for-ai": projectInsurance,
  "t2meen-a-central-issuance-system-for-third-party-motor-insurance-in-sudan": projectInsurance,
  "talya-properties-steering-a-real-estate-business-through-a-cooling-market": projectStrategy,
  "orooma-building-sudans-first-digital-recruitment-platform-in-a-low-trust-market": projectStrategy,
  "elsafwa-group-volkswagen-sudan-from-a-weak-presence-to-a-credible-brand-system": projectStrategy,
  "asset-and-fleet-management-platform-with-a4-group-for-a-confidential-government-client": projectInsurance,
  "national-trade-facilitation-platform-with-a4-group-for-a-confidential-authority": projectSolar,
};

const firstParagraph = (content: string) =>
  content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .find(Boolean) ?? "";

const isLocalAssetUrl = (url: string) =>
  url.startsWith("/") || url.startsWith("data:") || url.startsWith("blob:");

const excerptFromProject = (project: LegacyProjectCase) => {
  const source = project.summary?.trim() || firstParagraph(project.content);
  return source.length > 260 ? `${source.slice(0, 257).trim()}...` : source;
};

export const fallbackWorkCases: FallbackWorkCase[] = ([
  ...additionalProjectCases,
  ...(projectCasesData as LegacyProjectCase[]),
] as LegacyProjectCase[]).map(
  (project) => ({
    id: project.source_id ?? project.id,
    source_id: project.source_id ?? project.id,
    slug: project.slug,
    title: project.title,
    title_ar: project.title_ar,
    title_de: project.title_de,
    title_fr: project.title_fr,
    title_bg: project.title_bg,
    description: excerptFromProject(project),
    description_ar: project.summary_ar,
    description_de: project.summary_de,
    description_fr: project.summary_fr,
    description_bg: project.summary_bg,
    thumbnail_url: localProjectImages[project.slug] ?? project.thumbnail_url ?? null,
    category: project.category,
    category_ar: project.category_ar,
    category_de: project.category_de,
    category_fr: project.category_fr,
    category_bg: project.category_bg,
    href: project.href ?? `/work/${project.slug}`,
    cta_label: project.cta_label ?? "View case study",
    cta_label_ar: project.cta_label_ar,
    cta_label_de: project.cta_label_de,
    cta_label_fr: project.cta_label_fr,
    cta_label_bg: project.cta_label_bg,
    partner: project.partner,
    year: project.year,
    sector: project.sector,
    sector_ar: project.sector_ar,
    sector_de: project.sector_de,
    sector_fr: project.sector_fr,
    sector_bg: project.sector_bg,
    role: project.role,
    role_ar: project.role_ar,
    role_de: project.role_de,
    role_fr: project.role_fr,
    role_bg: project.role_bg,
    outcome: project.outcome,
    outcome_ar: project.outcome_ar,
    outcome_de: project.outcome_de,
    outcome_fr: project.outcome_fr,
    outcome_bg: project.outcome_bg,
    content: project.content,
    content_ar: project.content_ar,
    content_de: project.content_de,
    content_fr: project.content_fr,
    content_bg: project.content_bg,
    gallery_images: (project.gallery_images ?? []).filter(isLocalAssetUrl),
    featured: project.featured,
    clientProfile: [project.partner, project.sector, project.year].filter(Boolean).join(" • "),
    challenge: firstParagraph(project.content),
    approach: [
      "Mapped the operating context and constraints before shaping the delivery path.",
      "Designed the workflow, governance, and implementation approach around real users and local operating conditions.",
      "Built practical handover, training, and measurement loops so the work could keep improving after launch.",
    ],
    approach_ar: [
      "رسم سياق التشغيل والقيود قبل تشكيل مسار التسليم.",
      "تصميم سير العمل، والحوكمة، ونهج التنفيذ حول المستخدمين الحقيقيين وظروف التشغيل المحلية.",
      "بناء حلقات تسليم وتدريب وقياس عملية بحيث يمكن أن يستمر العمل في التحسن بعد الإطلاق.",
    ],
    approach_de: [
      "Den operativen Kontext und die Einschränkungen abgebildet, bevor der Lieferpfad gestaltet wurde.",
      "Den Workflow, die Governance und den Implementierungsansatz um reale Benutzer und lokale Betriebsbedingungen herum gestaltet.",
      "Praktische Übergabe-, Schulungs- und Messschleifen aufgebaut, damit sich die Arbeit nach dem Start weiter verbessern kann.",
    ],
    approach_fr: [
      "Cartographie du contexte opérationnel et des contraintes avant de définir le parcours de livraison.",
      "Conception du flux de travail, de la gouvernance et de l'approche de mise en œuvre autour des utilisateurs réels et des conditions d'exploitation locales.",
      "Création de boucles de transfert, de formation et de mesure pratiques afin que le travail puisse continuer à s'améliorer après le lancement.",
    ],
    approach_bg: [
      "Картографиране на оперативния контекст и ограниченията преди оформянето на пътя за доставка.",
      "Проектиране на работния процес, управлението и подхода за внедряване около реални потребители и местни условия на работа.",
      "Изграждане на практични цикли за предаване, обучение и измерване, така че работата да може да продължи да се подобрява след стартирането.",
    ],
    deliverables: [
      project.role ? `Role: ${project.role}` : "Project strategy and delivery support",
      project.outcome ? `Outcome: ${project.outcome}` : "Implementation roadmap and operating model",
      "Case-study narrative, delivery rationale, and lessons learned",
    ],
    deliverables_ar: [
      project.role ? `الدور: ${project.role}` : "استراتيجية المشروع ودعم التسليم",
      project.outcome ? `النتيجة: ${project.outcome}` : "خريطة طريق التنفيذ ونموذج التشغيل",
      "سرد دراسة الحالة، مبررات التسليم، والدروس المستفادة",
    ],
    deliverables_de: [
      project.role ? `Rolle: ${project.role}` : "Projektstrategie und Lieferunterstützung",
      project.outcome ? `Ergebnis: ${project.outcome}` : "Implementierungs-Roadmap und Betriebsmodell",
      "Fallstudien-Erzählung, Lieferbegründung und gewonnene Erkenntnisse",
    ],
    deliverables_fr: [
      project.role ? `Rôle : ${project.role}` : "Stratégie de projet et soutien à la livraison",
      project.outcome ? `Résultat : ${project.outcome}` : "Feuille de route de mise en œuvre et modèle opérationnel",
      "Récit de l'étude de cas, justification de la livraison et leçons apprises",
    ],
    deliverables_bg: [
      project.role ? `Роля: ${project.role}` : "Стратегия на проекта и подкрепа за доставка",
      project.outcome ? `Резултат: ${project.outcome}` : "Пътна карта за внедряване и оперативен модел",
      "Разказ за казуса, обосновка на доставката и научени уроци",
    ],
    outcomes: [
      project.outcome || "A clearer operating model and delivery path",
      "Stronger visibility into decisions, ownership, and next steps",
      "Reusable lessons for future strategy, systems, and implementation work",
    ],
    outcomes_ar: [
      project.outcome || "نموذج تشغيل ومسار تسليم أكثر وضوحاً",
      "رؤية أقوى للقرارات، والملكية، والخطوات التالية",
      "دروس قابلة لإعادة الاستخدام لاستراتيجية وأنظمة وأعمال تنفيذ مستقبلية",
    ],
    outcomes_de: [
      project.outcome || "Ein klareres Betriebsmodell und ein klarerer Lieferpfad",
      "Stärkere Sichtbarkeit von Entscheidungen, Verantwortlichkeiten und nächsten Schritten",
      "Wiederverwendbare Lektionen für zukünftige Strategie-, System- und Implementierungsarbeiten",
    ],
    outcomes_fr: [
      project.outcome || "Un modèle opérationnel et un parcours de livraison plus clairs",
      "Une meilleure visibilité sur les décisions, la propriété et les prochaines étapes",
      "Des leçons réutilisables pour les futurs travaux de stratégie, de systèmes et de mise en œuvre",
    ],
    outcomes_bg: [
      project.outcome || "По-ясен оперативен модел и път за доставка",
      "По-силна видимост в решенията, собствеността и следващите стъпки",
      "Уроци за многократна употреба за бъдеща стратегия, системи и работа по внедряване",
    ],
    client_group: project.client_group ?? project.partner,
    service_line_ids: project.service_line_ids ?? [],
    case_series_order: project.case_series_order ?? 999,
  })
);

const slugFromRemote = (item: Record<string, unknown>) => {
  if (typeof item.slug === "string" && item.slug) return item.slug;
  if (typeof item.href === "string" && item.href.startsWith("/work/")) {
    return item.href.slice("/work/".length);
  }
  return "";
};

const stringOrFallback = (value: unknown, fallback: string | null | undefined) =>
  typeof value === "string" && value.length > 0 ? value : fallback ?? null;

const stringArrayOrFallback = (value: unknown, fallback: string[] | undefined) =>
  Array.isArray(value) && value.every((item) => typeof item === "string") ? value : fallback ?? [];

export const mergeRemoteWorkCases = (
  remoteCases: Array<Record<string, unknown>> | null | undefined
): FallbackWorkCase[] => {
  if (!remoteCases || remoteCases.length === 0) return fallbackWorkCases;

  const fallbackBySlug = new Map(fallbackWorkCases.map((item) => [item.slug, item]));
  const usedSlugs = new Set<string>();

  const mergedCases = remoteCases
    .map((remote) => {
      const slug = slugFromRemote(remote);
      if (!slug) return null;

      const fallback = fallbackBySlug.get(slug);
      usedSlugs.add(slug);

      return {
        ...(fallback ?? {}),
        id: stringOrFallback(remote.source_id, fallback?.id) ?? stringOrFallback(remote.id, fallback?.id) ?? slug,
        source_id: stringOrFallback(remote.source_id, fallback?.source_id ?? fallback?.id),
        slug,
        title: stringOrFallback(remote.title, fallback?.title) ?? slug,
        title_ar: stringOrFallback(remote.title_ar, fallback?.title_ar),
        title_de: stringOrFallback(remote.title_de, fallback?.title_de),
        title_fr: stringOrFallback(remote.title_fr, fallback?.title_fr),
        title_bg: stringOrFallback(remote.title_bg, fallback?.title_bg),
        description: stringOrFallback(remote.description, fallback?.description) ?? "",
        description_ar: stringOrFallback(remote.description_ar, fallback?.description_ar),
        description_de: stringOrFallback(remote.description_de, fallback?.description_de),
        description_fr: stringOrFallback(remote.description_fr, fallback?.description_fr),
        description_bg: stringOrFallback(remote.description_bg, fallback?.description_bg),
        thumbnail_url: stringOrFallback(remote.thumbnail_url, fallback?.thumbnail_url),
        category: stringOrFallback(remote.category, fallback?.category),
        category_ar: stringOrFallback(remote.category_ar, fallback?.category_ar),
        category_de: stringOrFallback(remote.category_de, fallback?.category_de),
        category_fr: stringOrFallback(remote.category_fr, fallback?.category_fr),
        category_bg: stringOrFallback(remote.category_bg, fallback?.category_bg),
        href: stringOrFallback(remote.href, fallback?.href) ?? `/work/${slug}`,
        cta_label: stringOrFallback(remote.cta_label, fallback?.cta_label) ?? "View case study",
        cta_label_ar: stringOrFallback(remote.cta_label_ar, fallback?.cta_label_ar),
        cta_label_de: stringOrFallback(remote.cta_label_de, fallback?.cta_label_de),
        cta_label_fr: stringOrFallback(remote.cta_label_fr, fallback?.cta_label_fr),
        cta_label_bg: stringOrFallback(remote.cta_label_bg, fallback?.cta_label_bg),
        partner: stringOrFallback(remote.partner, fallback?.partner),
        year: stringOrFallback(remote.year, fallback?.year),
        sector: stringOrFallback(remote.sector, fallback?.sector),
        sector_ar: stringOrFallback(remote.sector_ar, fallback?.sector_ar),
        sector_de: stringOrFallback(remote.sector_de, fallback?.sector_de),
        sector_fr: stringOrFallback(remote.sector_fr, fallback?.sector_fr),
        sector_bg: stringOrFallback(remote.sector_bg, fallback?.sector_bg),
        role: stringOrFallback(remote.role, fallback?.role),
        role_ar: stringOrFallback(remote.role_ar, fallback?.role_ar),
        role_de: stringOrFallback(remote.role_de, fallback?.role_de),
        role_fr: stringOrFallback(remote.role_fr, fallback?.role_fr),
        role_bg: stringOrFallback(remote.role_bg, fallback?.role_bg),
        outcome: stringOrFallback(remote.outcome, fallback?.outcome),
        outcome_ar: stringOrFallback(remote.outcome_ar, fallback?.outcome_ar),
        outcome_de: stringOrFallback(remote.outcome_de, fallback?.outcome_de),
        outcome_fr: stringOrFallback(remote.outcome_fr, fallback?.outcome_fr),
        outcome_bg: stringOrFallback(remote.outcome_bg, fallback?.outcome_bg),
        content: stringOrFallback(remote.content, fallback?.content),
        content_ar: stringOrFallback(remote.content_ar, fallback?.content_ar),
        content_de: stringOrFallback(remote.content_de, fallback?.content_de),
        content_fr: stringOrFallback(remote.content_fr, fallback?.content_fr),
        content_bg: stringOrFallback(remote.content_bg, fallback?.content_bg),
        gallery_images: Array.isArray(remote.gallery_images) ? (remote.gallery_images as string[]) : fallback?.gallery_images ?? [],
        featured: typeof remote.featured === "boolean" ? remote.featured : fallback?.featured ?? false,
        clientProfile: fallback?.clientProfile ?? [remote.partner, remote.sector, remote.year].filter(Boolean).join(" • "),
        challenge: fallback?.challenge ?? firstParagraph(String(remote.content ?? "")),
        approach: fallback?.approach ?? [],
        deliverables: fallback?.deliverables ?? [],
        outcomes: fallback?.outcomes ?? [],
        client_group: stringOrFallback(remote.client_group, fallback?.client_group),
        service_line_ids: stringArrayOrFallback(remote.service_line_ids, fallback?.service_line_ids),
        case_series_order: typeof remote.case_series_order === "number" ? remote.case_series_order : fallback?.case_series_order ?? 999,
      } satisfies FallbackWorkCase;
    })
    .filter((item): item is FallbackWorkCase => item !== null);

  return [
    ...mergedCases,
    ...fallbackWorkCases.filter((item) => !usedSlugs.has(item.slug)),
  ];
};
