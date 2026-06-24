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
