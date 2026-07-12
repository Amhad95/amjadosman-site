import type { Locale } from "@/lib/locale";
import projectCasesData from "@/data/projects.json";
import { additionalProjectCases } from "@/data/additionalProjectCases";
import projectInsurance from "@/assets/project-insurance.jpg";
import projectSolar from "@/assets/project-solar.jpg";
import projectStrategy from "@/assets/project-strategy.jpg";
import insightWebsiteBrief from "@/assets/insights/website-brief.png";
import insightSopRollout from "@/assets/insights/sop-rollout.jpg";
import insightAiAutomationStart from "@/assets/insights/ai-automation-start.jpg";
import insightCrmDataModel from "@/assets/insights/crm-data-model.jpg";
import insightSopRolloutPlan from "@/assets/insights/sop-rollout-plan.jpg";
import insightDashboardRequirements from "@/assets/insights/dashboard-requirements.jpg";
import insightAiReadiness from "@/assets/insights/ai-readiness.jpg";
import insightSoftwareSelection from "@/assets/insights/software-selection.jpg";
import insightProposalApproval from "@/assets/insights/proposal-approval.jpg";
import insightSystemHandover from "@/assets/insights/system-handover.jpg";

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
  body: localizedValue(
    locale,
    editorialBodies[article.slug] ?? article.body ?? null,
    editorialBodiesAr[article.slug] ?? article.body_ar,
    editorialBodiesDe[article.slug] ?? article.body_de,
    editorialBodiesFr[article.slug] ?? article.body_fr,
    editorialBodiesBg[article.slug] ?? article.body_bg
  ),
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

const editorialBodies: Record<string, string> = {
  'website-brief-for-service-firms': `## The approval problem is usually upstream

A website brief is often treated as a document that design needs before it can start. In practice, it is a decision-making device. It has to give a commercial lead, a founder, and the person responsible for delivery a common answer to one question: what must this site make easier for the business?

That question matters because most approval rounds are not really about copy or colour. They are arguments between different jobs the site might do. A founder wants the business to feel established. Sales wants better conversations. Delivery wants fewer unsuitable enquiries. All are reasonable goals, but a page cannot lead with all of them equally.

## Start with the commercial moment

Before discussing a sitemap, define the moment that should change after a visitor lands. It might be a qualified consultation request, a prospect arriving at a sales call with the right context, or a referral partner deciding the business is credible enough to introduce. This gives every later decision a test. If a page, proof point, or interaction does not support that moment, it is supporting something secondary.

The same discipline applies to audiences. Service firms commonly need to speak to buyers, referral sources, candidates, and existing clients. Those groups do not need one blended message. They need their own route through the site, with a clear question answered before they are asked to act.

## Turn opinions into decisions

A good brief records the reason each page exists, the claim it needs to make, and the evidence required to support that claim. It also names the person who can approve each decision. That is what prevents a late-stage request to add another service page, another audience, or another vague promise.

The strongest briefs are not long. They make the difficult choices visible early enough to resolve them while the cost of changing direction is still low.`,

  'sop-rollout-that-gets-used': `## A procedure is not an operating system

Teams often ask for SOPs when they are feeling the cost of inconsistency. A task takes too long when a particular person is away, a client receives a different answer depending on who responds, or a new hire has to reconstruct the process by watching someone work. The understandable reaction is to write everything down.

Writing is useful, but the document alone does not change the work. The process changes when the SOP appears at the moment a task begins, when a person can tell whether the output is acceptable, and when exceptions have somewhere to go. Without those conditions, the document becomes a tidy description of work people still perform from memory.

## Design for the first real use

Start with one live task, not a library. Ask the person who owns it to use the draft while completing the work, with permission to mark every point where they hesitate. That hesitation is the raw material of a useful procedure. It shows where the trigger is vague, where an input is missing, or where an experienced operator is relying on judgement the document has not captured.

Then ask a second person to run the same task. This is the decisive test. If the second person cannot complete it without asking the author what a phrase means, the SOP is not yet transferring knowledge.

## Give the process a home and an owner

An SOP should be linked from the request form, task template, CRM stage, or workspace where the work actually happens. It should also have a named owner, a review date, and a route for proposed changes. Those small controls turn a document into a maintained part of the system.

The goal is not to eliminate judgement. It is to make routine work dependable and make the moments that need judgement obvious.`,

  'ai-automation-where-to-start': `## Start where the cost of being wrong is contained

The most useful first automation is rarely the flashiest one. It is usually a repeated decision that already has a recognisable input, an acceptable output, and a human who can review the edge cases. Think of sorting inbound requests, drafting a first response from approved material, or preparing a handover summary from a known set of records.

These workflows are good candidates because the team can describe what “good enough” looks like. The system does not need to be trusted blindly; it needs to reduce the amount of routine effort required before a person makes the final call.

## Look for friction before technology

Map the work as it happens today. Where does someone copy information between systems? Where does a request wait because a person has to decide who should see it? Where do colleagues repeatedly ask the same question because the approved answer is difficult to find? These points of friction reveal whether the right intervention is an AI step, a deterministic rule, a better form, or clearer documentation.

An AI model is helpful when language or judgement is involved and the output can be checked. It is not a substitute for an absent process. If the source material is contradictory, ownership is unclear, or no one can describe a safe outcome, automation will amplify the uncertainty.

## Treat the first release as assisted work

Run the first version on a narrow sample. Record what was accepted, edited, rejected, and escalated. That record tells you whether the workflow is becoming more reliable, not merely more impressive in a demonstration.

Good automation begins by making a bounded part of the operation easier to run. Expansion comes after the team can explain the controls, not before.`,

  'crm-data-model-for-service-firms': `## A CRM earns its complexity one decision at a time

Service firms do not need a large data model to run a useful pipeline. They need a small number of records that make ownership, progress, and next actions visible. When those fundamentals are missing, more fields only make the system harder to maintain.

Start with the relationships people already recognise: companies, contacts, opportunities, and activities. A company is the commercial account. A contact is a person with a role in the decision. An opportunity represents a possible engagement. An activity is evidence that something happened and what it changed. Projects belong beside the pipeline only when a signed engagement needs its own delivery workflow.

## Make the next action unambiguous

Every opportunity should answer two questions at a glance: who owns it, and what happens next? “Follow up” is not enough. A useful next step names the event, the expected result, and the date. For example, “Send the revised scope after finance confirms the budget on Thursday” gives a manager something they can inspect without reconstructing the conversation.

Stages should describe buyer commitment rather than internal optimism. A stage such as “scope sent” needs an exit rule: recipient, version, value, and review date are recorded. This turns stage reporting from an opinion poll into an operational view.

## Protect the model from decorative fields

A field should either change a decision, support a handoff, or explain a report. If it does none of those things, it belongs in a note or should not exist. Review the last thirty opportunities before introducing new structure. The real pipeline will show what people actually need to know.`,

  'sop-rollout-plan-that-gets-used': `## The rollout starts after the document is written

An SOP can be perfectly clear on paper and still fail in the first week. The usual reason is that the organisation has not changed the environment around the process. The right person has not been named, the task has not been linked to the SOP, and nobody has decided how to handle the exceptions that are inevitable in live work.

Treat the document as a draft of the operating agreement. The rollout is the work of proving that agreement under normal conditions.

## Pilot the routine, then the exception

Ask the process owner to complete the task using the draft on a live case. Capture the places where they leave the documented path. Then ask a second person to run the same routine with the amended version. The first cycle exposes missing context; the second exposes hidden expertise.

The next test should be an exception, not another normal case. What happens when a required input is absent, an approval is delayed, or the output fails a quality check? A useful SOP does not pretend these events will not occur. It names the decision owner and the escalation route so the team does not invent a new process under pressure.

## Make review part of ownership

Link the SOP to the task template or workspace where the work begins. Give it a review date, a change log, and a short control sheet describing the trigger, owner, inputs, definition of done, and known exceptions. Review after the first five uses, then on a predictable rhythm.

That is how a procedure remains useful: it is treated as a living part of delivery, not a completed piece of documentation.`,

  'dashboard-requirements-before-design': `## A dashboard is a decision environment

Teams often begin a dashboard project by collecting charts. That feels productive because charts are visible, but it avoids the question that determines whether the dashboard will be used: what decision should become easier when someone opens it?

Name the audience, the review rhythm, and the decision before choosing a visual. A weekly commercial meeting may need to see whether pipeline coverage is becoming risky. A delivery lead may need to see whether work is accumulating at a particular handoff. Those are different environments, with different measures and different actions.

## Define each number before arranging it

A metric needs a definition, a source, an owner, and a grain. “Pipeline” can mean all open opportunities, only qualified opportunities, or a weighted forecast. “Response time” can mean the average, the median, or the time until a human reply. Without an agreed definition, a clean interface simply makes an unresolved argument easier to look at.

The first screen should reveal whether attention is required. The next layer can help someone diagnose why. Combining every segment, filter, and historical comparison into the opening view makes the urgent signal harder to find.

## Build acceptance into the brief

Before design begins, agree how the dashboard will be checked. The owner should be able to compare a KPI against its source, see when the data was refreshed, understand the date range, and know who acts when a threshold is crossed.

Good reporting does not eliminate conversation. It makes the conversation about what to do next rather than what the numbers mean.`,

  'ai-automation-readiness-check': `## Readiness is a property of the workflow

Whether an operations team is ready for AI automation has less to do with how capable a model appears and more to do with the condition of the work around it. A workflow is ready when its inputs are available, the acceptable result can be described, uncertainty has a reviewer, and a failure can be contained.

This is why the same tool can work well in one team and create confusion in another. One team has current source material, a clear owner, and a defined escalation path. The other has fragmented knowledge and no agreed answer to the question the model is being asked to resolve.

## Check the operating conditions

Look at the input first. Is it structured enough to be interpreted consistently, or does each request require someone to reconstruct missing context? Then look at the output. Can a reviewer explain what makes it acceptable, or is quality purely a matter of personal taste? Finally, look at the consequence of error. A draft that is reviewed before sending is very different from a decision that changes a customer record without a checkpoint.

When those conditions are weak, the right first move may be a better form, a controlled source library, or a clearer SOP. That is not a failure of automation. It is the work that makes automation safe later.

## Pilot with evidence

Use a fixed sample and record accepted, edited, rejected, and escalated results. Measure the handling time and rework against the previous process. The decision after the pilot should be explicit: stop, keep as assisted work, or expand with stronger controls.

AI becomes operational when the team can explain its boundaries as clearly as its benefits.`,

  'operational-software-selection-workflow': `## Software should remove a handoff, not create a new one

Feature comparisons are tempting because they look objective. They are also a poor place to begin. A long list of capabilities tells you very little about whether a team will complete its ordinary work with fewer gaps, fewer duplicate records, and less effort.

Start by tracing one workflow from request to outcome. Record who receives the work, what information they need, which system they use, what decision they make, and what evidence should remain after the step is complete. The weak handoffs become visible quickly: a spreadsheet that must be reconciled, a status nobody owns, or a request that disappears into an inbox.

## Evaluate fit in the context of use

The practical questions are less glamorous than product demos. Can the team complete normal work without inventing a workaround? Does the data model match the business relationships that matter? Can permissions, approvals, and exports be governed? Who will make changes when the workflow evolves? How much training does the daily path require?

Run a pilot around one team, one workflow, and one reporting rhythm. Use a clean starting dataset and decide how duplicates, missing owners, and stale statuses will be handled. Ask what happens when an integration fails or an approval is rejected, not only how the happy path looks.

The right choice is the product that makes the intended work easier to repeat, inspect, and improve. Subscription price is only one part of that operating cost.`,

  'proposal-approval-system-for-service-teams': `## Rewriting is often a system problem

When a service team keeps rewriting the same proposal, the issue is rarely a lack of writing ability. Usually the organisation has not separated reusable proof from deal-specific decisions. Every new opportunity becomes a request to rediscover the company story, rebuild the service scope, and renegotiate the commercial guardrails at the same time.

That makes approval slow because reviewers are not looking at the same kind of decision. Delivery is assessing feasibility while a commercial lead is checking price and a founder is correcting a capability claim.

## Give each review a job

Create a small approved library of evidence: case-study facts, capability descriptions, delivery assumptions, and standard terms. Then keep the individual proposal focused on the buyer’s problem, the intended outcome, scope boundaries, price, timing, and risks.

The review path should reflect that separation. Qualification asks whether there is a real opportunity. Delivery checks whether the work can be performed as described. Commercial review checks price, margin, payment terms, and exposure. The final review checks clarity and readiness to send. Each gate needs an owner, a visible status, and a record of the decision.

## Learn from the revisions

Track why a proposal changed. If a scope question appears repeatedly, the service definition is incomplete. If proof is repeatedly requested, the case-study library is thin. If payment terms keep becoming an exception, the commercial policy is unclear.

The purpose is not to make proposals rigid. It is to make routine quality easier and genuine exceptions visible early.`,

  'operational-system-handover-checklist': `## A handover is the beginning of independent operation

Credentials, links, and a final meeting are not a handover. They are access. A real handover gives the recipient enough understanding to operate the system, recognise when something is wrong, request a sensible change, and recover without waiting for the original builder to return.

That requires more than a walkthrough of the interface. The recipient needs the purpose of the workflow, the records and permissions that support it, the routine that keeps it current, and the boundaries of what the system can safely do.

## Test ownership with real scenarios

The best handover test is recipient-led. Ask the new owner to complete a normal request from start to finish, handle an exception, and correct a deliberate mistake. Their questions reveal whether the gap is training, permission, data quality, or design. Each is a different problem and should be resolved differently.

Leave behind the operating material that makes future changes safe: configuration exports, approved templates, a permission matrix, data-cleanup notes, known limits, an issue list, and a route for change requests. Most importantly, name the person who owns each decision after launch.

## Schedule the first review before leaving

The first week, second week, and first month are where small weaknesses become habits. Review completion, exceptions, duplicate records, unused fields, and work that is still arriving outside the intended route.

A system is handed over when the recipient can run it without live rescue. It is truly complete when the organisation can improve it without the original team.`,
};

const editorialBodiesAr: Record<string, string> = {
  'website-brief-for-service-firms': `## مشكلة الاعتماد تبدأ قبل التصميم

لا ينبغي التعامل مع موجز الموقع كوثيقة يحتاجها المصمم فقط، بل كأداة لاتخاذ القرار. عليه أن يمنح المسؤول التجاري والمؤسس ومسؤول التسليم إجابة مشتركة: ما الذي يجب أن يجعل هذا الموقع العمل أسهل؟ كثير من جولات الاعتماد ليست نقاشاً حول النسخ أو الألوان، بل خلافاً بين وظائف مختلفة يريدها كل طرف للموقع.

## ابدأ باللحظة التجارية

حدد قبل خريطة الموقع اللحظة التي يجب أن تتغير بعد الزيارة: طلب استشارة مؤهل، أو عميل يصل إلى مكالمة البيع بسياق صحيح، أو شريك إحالة يقتنع بمصداقية الشركة. ثم اختبر كل صفحة ودليل وتفاعل بهذا الهدف. لكل جمهور مسار واضح وسؤال مجاب عنه قبل أن تطلب منه أي إجراء.

## حوّل الآراء إلى قرارات

يسجل الموجز الجيد سبب وجود كل صفحة، والادعاء الذي يجب أن تثبته، والدليل المطلوب، وصاحب الاعتماد. لا يلزم أن يكون طويلاً؛ قيمته في إظهار الخيارات الصعبة مبكراً، حين يكون تغيير المسار ما زال سهلاً.`,
  'sop-rollout-that-gets-used': `## الإجراء ليس نظام تشغيل

تطلب الفرق إجراءات تشغيل معيارية حين تصبح كلفة عدم الاتساق واضحة: مهمة تتعطل بغياب شخص، أو عميل يتلقى جواباً مختلفاً، أو موظف جديد يعيد اكتشاف الطريقة. الكتابة مفيدة، لكن الوثيقة وحدها لا تغيّر العمل. يتغير العمل عندما يظهر الإجراء عند بدء المهمة، ويعرف الشخص ما إذا كان الناتج مقبولاً، وتوجد طريقة للتعامل مع الاستثناءات.

## صمّم للاستخدام الحقيقي الأول

ابدأ بمهمة حية واحدة لا بمكتبة. اطلب من مالكها استخدام المسودة أثناء التنفيذ وتسجيل مواضع التردد. ثم دع شخصاً آخر ينفذ المهمة. إذا اضطر إلى سؤال الكاتب عن معنى خطوة ما، فالمعرفة لم تنتقل بعد.

## امنح العملية مكاناً ومالكاً

اربط الإجراء بالنموذج أو المهمة أو مرحلة CRM التي يبدأ فيها العمل. سمِّ مالكاً وتاريخ مراجعة وطريقاً للتغييرات. الهدف ليس إلغاء الحكم المهني، بل جعل الروتين موثوقاً وإظهار اللحظات التي تحتاج حكماً.`,
  'ai-automation-where-to-start': `## ابدأ حيث تكون كلفة الخطأ محدودة

أفضل أتمتة أولى نادراً ما تكون الأكثر استعراضاً. غالباً هي قرار متكرر له مدخل معروف ومخرج مقبول وشخص يراجع الحالات الطرفية، مثل فرز الطلبات أو إعداد مسودة رد من مواد معتمدة أو تلخيص تسليم من سجلات معروفة. لا يلزم الوثوق بالنظام بلا رقابة؛ المطلوب تقليل الجهد الروتيني قبل القرار النهائي.

## ابحث عن الاحتكاك قبل التقنية

ارسم سير العمل كما يحدث الآن: أين تُنسخ المعلومات؟ أين ينتظر الطلب قراراً؟ وأين يصعب العثور على الجواب المعتمد؟ قد تكشف هذه النقاط أن الحل قاعدة واضحة أو نموذج أفضل أو توثيق، لا نموذج ذكاء اصطناعي. إذا كانت المصادر متناقضة والملكية غامضة، فالأتمتة تضخم الغموض.

## اعتبر الإصدار الأول عملاً مساعداً

جرّب عينة محدودة وسجل ما قُبل وعُدل ورُفض وصُعّد. وسّع النطاق فقط عندما يستطيع الفريق شرح الضوابط بوضوح.`,
  'crm-data-model-for-service-firms': `## يكتسب CRM تعقيده قراراً بعد قرار

لا تحتاج شركات الخدمات إلى نموذج بيانات ضخم كي تدير مسار مبيعات مفيداً. تحتاج إلى عدد محدود من السجلات يجعل الملكية والتقدم والخطوة التالية مرئية. ابدأ بالعلاقات التي يعرفها الناس: الشركات وجهات الاتصال والفرص والأنشطة. لا تضف المشاريع إلى المسار إلا عندما يتطلب العقد الموقّع سير تسليم مستقلاً.

## اجعل الخطوة التالية واضحة

يجب أن تجيب كل فرصة عن سؤالين: من يملكها، وماذا سيحدث تالياً؟ «متابعة» ليست كافية. الخطوة الجيدة تحدد الحدث والنتيجة والتاريخ. وينبغي أن تصف المراحل التزام المشتري لا تفاؤل الفريق، مع قاعدة خروج قابلة للفحص لكل مرحلة.

## احمِ النموذج من الحقول الزخرفية

الحقل يستحق وجوده إذا غيّر قراراً أو دعم تسليماً أو فسّر تقريراً. راجع آخر ثلاثين فرصة قبل إضافة أي بنية جديدة؛ المسار الحقيقي يبيّن ما يحتاجه الناس فعلاً.`,
  'sop-rollout-plan-that-gets-used': `## يبدأ الإطلاق بعد كتابة الوثيقة

قد يكون الإجراء واضحاً على الورق ويفشل في أسبوعه الأول لأن البيئة المحيطة به لم تتغير: لا مالك واضح، ولا رابط من المهمة إلى الإجراء، ولا قرار بشأن الاستثناءات. اعتبر الوثيقة مسودة لاتفاق تشغيل؛ الإطلاق هو اختبار الاتفاق في ظروف العمل العادية.

## اختبر الروتين ثم الاستثناء

دع مالك العملية ينفذ حالة حية باستخدام المسودة وسجل أين يخرج عن المسار. ثم دع شخصاً آخر يجرب النسخة المعدلة. بعدها اختبر حالة ناقصة المدخلات أو متأخرة الاعتماد أو فاشلة الجودة. الإجراء المفيد يسمي صاحب القرار ومسار التصعيد بدلاً من افتراض أن الاستثناء لن يحدث.

## اجعل المراجعة جزءاً من الملكية

اربط الإجراء بقالب المهمة، وأضف تاريخ مراجعة وسجل تغيير وورقة تحكم قصيرة. راجعه بعد أول خمس مرات استخدام ثم بإيقاع ثابت.`,
  'dashboard-requirements-before-design': `## لوحة المعلومات بيئة قرار

تبدأ الفرق غالباً بجمع الرسوم البيانية لأنها مرئية، لكنها تتجاوز السؤال الأهم: أي قرار يجب أن يصبح أسهل عند فتح اللوحة؟ سمِّ الجمهور وإيقاع المراجعة والقرار قبل اختيار الشكل. الاجتماع التجاري الأسبوعي يحتاج شيئاً مختلفاً عن قائد تسليم يراقب تراكم العمل.

## عرّف الرقم قبل ترتيبه

لكل مؤشر تعريف ومصدر ومالك ومستوى تفصيل. «المسار» و«زمن الاستجابة» قد يعنيان أشياء مختلفة تماماً. من دون اتفاق، تجعل الواجهة النظيفة الخلاف غير المحسوم أجمل فقط. يجب أن تكشف الشاشة الأولى ما إذا كان الانتباه مطلوباً، ثم تساعد الطبقات التالية على تفسير السبب.

## ابنِ القبول في الموجز

اتفق مسبقاً على طريقة التحقق: مقارنة KPI بالمصدر، ومعرفة وقت التحديث ونطاق التاريخ ومن يتصرف عند تجاوز عتبة.`,
  'ai-automation-readiness-check': `## الجاهزية خاصية في سير العمل

جاهزية فريق العمليات لأتمتة الذكاء الاصطناعي لا تتحدد بقدرة النموذج، بل بحالة العمل حوله. يكون المسار جاهزاً حين تتوفر المدخلات، ويمكن وصف النتيجة المقبولة، ويوجد مراجع للغموض، ويمكن احتواء الخطأ. لذلك قد تنجح الأداة نفسها في فريق وتربك آخر.

## افحص شروط التشغيل

هل المدخل منظم بما يكفي؟ هل يستطيع المراجع شرح ما يجعل المخرج مقبولاً؟ وما عاقبة الخطأ؟ مسودة تُراجع قبل الإرسال ليست كقرار يغير سجل عميل بلا نقطة تحقق. حين تضعف هذه الشروط، قد يكون النموذج الأفضل أو مكتبة مصدر مضبوطة أو إجراء أوضح هو الخطوة الأولى الصحيحة.

## جرّب بأدلة

استخدم عينة ثابتة وسجل المقبول والمعدل والمرفوض والمصعّد، وقارن الوقت وإعادة العمل بالعملية السابقة. بعدها قرر بوضوح: أوقف، أبقه عملاً مساعداً، أو وسّعه بضوابط أقوى.`,
  'operational-software-selection-workflow': `## يجب أن يزيل البرنامج تسليماً لا أن يخلق واحداً

تبدو مقارنة الميزات موضوعية، لكنها بداية ضعيفة. القائمة لا تخبرك إن كان الفريق سينجز عمله المعتاد بفجوات أقل وسجلات مكررة أقل. ابدأ بتتبع سير واحد من الطلب إلى النتيجة: من يستلم العمل، وما المعلومات اللازمة، وأي نظام يستخدم، وأي قرار يتخذ، وما الدليل الذي يجب أن يبقى.

## قيّم الملاءمة في سياق الاستخدام

هل يستطيع الفريق إنجاز العمل الطبيعي بلا حلول ملتوية؟ هل نموذج البيانات يطابق علاقات العمل؟ هل يمكن ضبط الصلاحيات والاعتمادات والتصدير؟ ومن سيغير النظام لاحقاً؟ جرّب فريقاً واحداً ومساراً واحداً وإيقاع تقارير واحداً، وفكّر في فشل التكاملات ورفض الاعتمادات لا في المسار المثالي فقط.

الاختيار الصحيح هو المنتج الذي يجعل العمل المقصود أسهل في التكرار والفحص والتحسين.`,
  'proposal-approval-system-for-service-teams': `## إعادة الكتابة غالباً مشكلة نظام

عندما يعيد فريق خدمات كتابة العرض نفسه، فالمشكلة نادراً هي مهارة الكتابة. غالباً لم تفصل المنظمة بين الدليل القابل لإعادة الاستخدام والقرارات الخاصة بالصفقة. كل فرصة تصبح محاولة لاكتشاف قصة الشركة والنطاق والضوابط التجارية من جديد، فتتباطأ الاعتمادات لأن المراجعين لا ينظرون إلى القرار نفسه.

## أعطِ كل مراجعة وظيفة

أنشئ مكتبة معتمدة صغيرة للحقائق ودراسات الحالة وافتراضات التسليم والشروط. واجعل العرض يركز على مشكلة المشتري والنتيجة والنطاق والسعر والتوقيت والمخاطر. تؤكد المراجعة التأهيل ثم قابلية التسليم ثم السعر والمخاطر ثم الوضوح. لكل بوابة مالك وحالة وسجل قرار.

## تعلّم من التعديلات

إذا تكرر سؤال نطاق فتعريف الخدمة ناقص، وإذا تكرر طلب دليل فمكتبة الحالات ضعيفة. الهدف هو جعل الجودة الروتينية سهلة والاستثناءات الحقيقية ظاهرة مبكراً.`,
  'operational-system-handover-checklist': `## التسليم بداية التشغيل المستقل

بيانات الدخول والروابط والاجتماع الأخير ليست تسليماً، بل وصولاً. التسليم الحقيقي يمنح المستلم فهماً لتشغيل النظام واكتشاف الخطأ وطلب تغيير معقول والتعافي من دون انتظار المنشئ. يحتاج إلى غرض سير العمل وسجلاته وصلاحياته وروتين تحديثه وحدوده الآمنة.

## اختبر الملكية بسيناريوهات حقيقية

دع المالك الجديد ينفذ طلباً عادياً من البداية إلى النهاية، ويتعامل مع استثناء، ويصحح خطأ مقصوداً. تكشف أسئلته إن كانت الفجوة تدريباً أو صلاحية أو جودة بيانات أو تصميماً. اترك معه صادرات الإعداد والقوالب المعتمدة ومصفوفة الصلاحيات وملاحظات التنظيف والحدود وطريق طلب التغيير.

## حدّد المراجعة الأولى قبل المغادرة

راجع في الأسبوع الأول والثاني والشهر الأول الإكمال والاستثناءات والتكرارات والحقول غير المستخدمة والعمل الذي يصل خارج المسار. يكتمل التسليم حين يستطيع المستلم تشغيل النظام، ويكتمل العمل حين تستطيع المنظمة تحسينه باستقلال.`,
};

const editorialBodiesDe: Record<string, string> = {
  'website-brief-for-service-firms': `## Das Freigabeproblem entsteht meist vorher

Ein Website-Briefing ist nicht nur eine Unterlage fuer das Design, sondern ein Entscheidungsinstrument. Es muss Vertrieb, Gruendung und Delivery auf eine Frage ausrichten: Was soll diese Website dem Unternehmen erleichtern? Viele Freigabeschleifen drehen sich nicht um Text oder Farbe, sondern um unterschiedliche Erwartungen an die Aufgabe der Website.

## Mit dem geschäftlichen Moment beginnen

Definieren Sie vor der Sitemap, was sich nach dem Besuch veraendern soll: eine qualifizierte Anfrage, ein besser vorbereiteter Verkaufstermin oder ein Partner, der das Unternehmen glaubwuerdig genug fuer eine Empfehlung haelt. Jede Seite, jeder Beleg und jede Interaktion wird daran gemessen. Jede Zielgruppe braucht einen eigenen Weg und eine beantwortete Frage, bevor sie handeln soll.

## Meinungen in Entscheidungen verwandeln

Ein gutes Briefing hält fest, warum eine Seite existiert, welche Behauptung sie stuetzen muss, welcher Beleg fehlt und wer entscheidet. Es muss nicht lang sein. Sein Wert liegt darin, schwierige Entscheidungen frueh sichtbar zu machen.`,
  'sop-rollout-that-gets-used': `## Eine Arbeitsanweisung ist kein Betriebssystem

Teams fragen nach SOPs, wenn die Kosten von Uneinheitlichkeit spuerbar werden: Eine Aufgabe stockt ohne eine bestimmte Person, Kunden erhalten unterschiedliche Antworten oder neue Mitarbeitende muessen Arbeit durch Zuschauen rekonstruieren. Schreiben hilft, doch das Dokument allein veraendert die Arbeit nicht. Sie veraendert sich, wenn die SOP beim Beginn der Aufgabe erscheint, die Qualitaet erkennbar ist und Ausnahmen einen Weg haben.

## Fuer die erste echte Nutzung entwerfen

Beginnen Sie mit einer echten Aufgabe, nicht mit einer Bibliothek. Der Verantwortliche soll den Entwurf bei der Arbeit nutzen und jedes Zoegern markieren. Danach fuehrt eine zweite Person dieselbe Aufgabe aus. Muss sie den Autor nach einer Formulierung fragen, wurde Wissen noch nicht uebertragen.

## Prozess mit Ort und Eigentuemerschaft versehen

Verlinken Sie die SOP aus Formular, Aufgabenvorlage, CRM-Phase oder Workspace. Benennen Sie einen Owner, ein Pruefdatum und einen Aenderungsweg. Das Ziel ist nicht, Urteilskraft zu streichen, sondern Routine verlaesslich und notwendige Entscheidungen sichtbar zu machen.`,
  'ai-automation-where-to-start': `## Dort beginnen, wo Fehler begrenzt bleiben

Die beste erste Automatisierung ist selten die spektakulaerste. Meist ist es eine wiederkehrende Entscheidung mit erkennbarem Input, akzeptablem Output und einer Person fuer Grenzfaelle: Anfragen sortieren, eine erste Antwort aus freigegebenem Material entwerfen oder eine Uebergabe aus bekannten Datensaetzen zusammenfassen. Das System muss nicht blind vertraut werden; es soll Routinearbeit vor der finalen Entscheidung verringern.

## Reibung vor Technologie suchen

Zeichnen Sie den aktuellen Ablauf nach. Wo werden Informationen kopiert, Anfragen warten gelassen oder freigegebene Antworten gesucht? Das zeigt, ob KI, eine Regel, ein besseres Formular oder klare Dokumentation passt. Widerspruechliche Quellen und unklare Verantwortung werden durch Automatisierung nur verstaerkt.

## Den ersten Release als assistierte Arbeit behandeln

Testen Sie einen begrenzten Ausschnitt und dokumentieren Sie akzeptierte, bearbeitete, abgelehnte und eskalierte Ergebnisse. Erst erweitern, wenn das Team die Kontrollen erklaeren kann.`,
  'crm-data-model-for-service-firms': `## Ein CRM verdient seine Komplexitaet Entscheidung fuer Entscheidung

Dienstleistungsunternehmen brauchen kein grosses Datenmodell, sondern wenige Datensaetze, die Verantwortung, Fortschritt und naechste Schritte sichtbar machen. Beginnen Sie mit Unternehmen, Kontakten, Chancen und Aktivitaeten. Projekte gehoeren erst dann daneben, wenn ein unterschriebener Auftrag einen eigenen Lieferablauf braucht.

## Den naechsten Schritt eindeutig machen

Jede Chance sollte sofort beantworten: Wer ist verantwortlich, und was passiert als Naechstes? „Nachfassen“ reicht nicht. Ein brauchbarer Schritt benennt Ereignis, erwartetes Ergebnis und Datum. Stufen sollten das Engagement des Kaeufers beschreiben, nicht den Optimismus des Teams, mit einer pruefbaren Austrittsregel.

## Das Modell vor Schmuckfeldern schuetzen

Ein Feld gehoert hinein, wenn es eine Entscheidung veraendert, eine Uebergabe stuetzt oder einen Bericht erklaert. Pruefen Sie die letzten dreissig Chancen, bevor neue Struktur entsteht.`,
  'sop-rollout-plan-that-gets-used': `## Der Rollout beginnt nach dem Schreiben

Eine SOP kann auf Papier klar sein und dennoch in der ersten Woche scheitern, weil sich das Umfeld nicht veraendert hat: kein Owner, keine Verknuepfung zur Aufgabe und kein Umgang mit Ausnahmen. Das Dokument ist ein Entwurf der Betriebsvereinbarung; der Rollout beweist sie im normalen Betrieb.

## Erst Routine, dann Ausnahme testen

Der Prozessowner soll einen echten Fall mit dem Entwurf ausfuehren und Abweichungen markieren. Dann testet eine zweite Person die ueberarbeitete Version. Danach folgt ein fehlender Input, eine verspaetete Freigabe oder ein Qualitaetsfehler. Eine brauchbare SOP benennt Entscheider und Eskalationsweg statt Ausnahmen zu ignorieren.

## Review zur Ownership machen

Verlinken Sie die SOP in der Aufgabenvorlage und geben Sie ihr Pruefdatum, Change-Log und ein kurzes Kontrollblatt. Nach den ersten fuenf Nutzungen und danach regelmaessig pruefen.`,
  'dashboard-requirements-before-design': `## Ein Dashboard ist eine Entscheidungsumgebung

Teams sammeln oft zuerst Charts, weil sie sichtbar sind. Die entscheidende Frage bleibt: Welche Entscheidung soll beim Oeffnen leichter werden? Benennen Sie Publikum, Review-Rhythmus und Entscheidung vor dem Visual. Ein woechentliches Vertriebsmeeting braucht etwas anderes als eine Delivery-Leitung mit wartenden Uebergaben.

## Jede Zahl vor dem Layout definieren

Jede Kennzahl braucht Definition, Quelle, Owner und Granularitaet. „Pipeline“ und „Reaktionszeit“ koennen Verschiedenes bedeuten. Ohne Einigung macht eine saubere Oberflaeche einen offenen Streit nur besser sichtbar. Die erste Ansicht soll zeigen, ob Aufmerksamkeit noetig ist; danach folgt die Diagnose.

## Abnahme ins Briefing aufnehmen

Vor dem Design festlegen, wie KPIs mit ihrer Quelle, Aktualisierung, Zeitraum und einer Schwelle mit klarem Owner geprueft werden.`,
  'ai-automation-readiness-check': `## Reife ist eine Eigenschaft des Workflows

Ob ein Operations-Team fuer KI bereit ist, haengt weniger von der Modellfaehigkeit als vom Zustand der Arbeit ab. Ein Workflow ist bereit, wenn Inputs verfuegbar sind, ein akzeptables Ergebnis beschreibbar ist, Unsicherheit einen Reviewer hat und Fehler begrenzt werden koennen.

## Betriebsbedingungen pruefen

Sind die Inputs konsistent genug? Kann ein Reviewer erklaeren, was akzeptabel ist? Und welche Folge hat ein Fehler? Ein Entwurf mit Freigabe ist etwas anderes als eine ungepruefte Aenderung am Kundendatensatz. Bei schwachen Bedingungen sind ein besseres Formular, eine kontrollierte Quelle oder eine klarere SOP oft der richtige erste Schritt.

## Mit Belegen pilotieren

Nutzen Sie eine feste Stichprobe und erfassen Sie akzeptierte, bearbeitete, abgelehnte und eskalierte Ergebnisse. Vergleichen Sie Zeit und Nacharbeit mit dem bisherigen Ablauf. Dann klar entscheiden: stoppen, assistiert weiterfuehren oder mit staerkeren Kontrollen erweitern.`,
  'operational-software-selection-workflow': `## Software soll eine Uebergabe entfernen, nicht erzeugen

Feature-Vergleiche wirken objektiv, sind aber ein schlechter Anfang. Sie sagen wenig darueber, ob gewoehnliche Arbeit mit weniger Luecken, Duplikaten und Aufwand gelingt. Verfolgen Sie einen Ablauf von der Anfrage bis zum Ergebnis: Empfaenger, benoetigte Information, System, Entscheidung und verbleibender Nachweis.

## Passung im Nutzungskontext bewerten

Kann das Team normale Arbeit ohne Workaround erledigen? Passt das Datenmodell zu relevanten Beziehungen? Lassen sich Rechte, Freigaben und Exporte steuern? Wer aendert das System spaeter? Pilotieren Sie ein Team, einen Ablauf und einen Reporting-Rhythmus. Fragen Sie auch nach Integrationsfehlern und abgelehnten Freigaben.

Die richtige Wahl erleichtert das Wiederholen, Pruefen und Verbessern der beabsichtigten Arbeit.`,
  'proposal-approval-system-for-service-teams': `## Wiederholtes Umschreiben ist oft ein Systemproblem

Wenn ein Team denselben Vorschlag immer wieder schreibt, fehlt selten Schreibfaehigkeit. Meist sind wiederverwendbare Belege und fallspezifische Entscheidungen nicht getrennt. Jede Chance wird zur erneuten Suche nach Unternehmensgeschichte, Scope und kommerziellen Leitplanken. Freigaben werden langsam, weil jeder Reviewer etwas anderes prueft.

## Jeder Pruefung eine Aufgabe geben

Bauen Sie eine kleine freigegebene Bibliothek mit Fallfakten, Faehigkeiten, Delivery-Annahmen und Standardbedingungen. Der konkrete Vorschlag bleibt bei Problem, Ergebnis, Grenzen, Preis, Zeit und Risiko. Qualifikation, Delivery, Commercial und finaler Versand brauchen jeweils Owner, Status und Entscheidung.

## Aus Revisionen lernen

Wiederkehrende Scope-Fragen zeigen eine unklare Leistung. Wiederkehrende Beleganfragen zeigen eine duenne Case-Library. Ziel sind einfache Routinequalitaet und frueh sichtbare Ausnahmen.`,
  'operational-system-handover-checklist': `## Eine Uebergabe ist der Beginn selbststaendigen Betriebs

Zugaenge, Links und ein Abschlusstermin sind keine Uebergabe, sondern Zugriff. Eine echte Uebergabe befaehigt Empfaenger, das System zu betreiben, Fehler zu erkennen, sinnvolle Aenderungen anzufordern und ohne den Erbauer zu reagieren. Sie umfasst Zweck, Datensaetze, Rechte, Pflegeroutine und sichere Grenzen.

## Ownership mit realen Szenarien testen

Der neue Owner soll einen normalen Fall durchfuehren, eine Ausnahme bearbeiten und einen absichtlichen Fehler korrigieren. Seine Fragen zeigen, ob Training, Berechtigung, Datenqualitaet oder Design fehlt. Hinterlassen Sie Konfigurationsexporte, Vorlagen, Rechte-Matrix, Bereinigungsnotizen, bekannte Grenzen und einen Change-Weg.

## Erste Review vor dem Verlassen planen

Pruefen Sie nach einer, zwei und vier Wochen Abschluesse, Ausnahmen, Duplikate, ungenutzte Felder und Arbeit ausserhalb des vorgesehenen Wegs. Vollstaendig ist die Arbeit, wenn die Organisation selbst verbessern kann.`,
};

const editorialBodiesFr: Record<string, string> = {
  'website-brief-for-service-firms': `## Le probleme d'approbation commence souvent en amont

Un brief de site n'est pas seulement un document pour le design : c'est un outil de decision. Il doit donner au commercial, au fondateur et au responsable de delivery une reponse commune : que doit rendre ce site plus facile pour l'entreprise ? La plupart des tours d'approbation ne portent pas vraiment sur le texte ou la couleur, mais sur des attentes differentes quant au role du site.

## Commencer par le moment commercial

Avant le plan du site, definissez ce qui doit changer apres une visite : une demande qualifiee, un prospect mieux prepare a l'appel commercial, ou un partenaire qui juge l'entreprise suffisamment credible pour la recommander. Testez chaque page, preuve et interaction contre cet objectif. Chaque public a besoin de son propre parcours et d'une question resolue avant d'agir.

## Transformer les avis en decisions

Un bon brief indique la raison d'etre de chaque page, l'affirmation qu'elle doit soutenir, les preuves necessaires et la personne qui approuve. Il n'a pas besoin d'etre long. Sa valeur est de rendre les choix difficiles visibles assez tot.`,
  'sop-rollout-that-gets-used': `## Une procedure n'est pas un systeme d'exploitation

Les equipes demandent des SOP lorsque le cout de l'incoherence devient evident : une tache ralentit sans une personne precise, un client recoit des reponses differentes, ou une nouvelle recrue doit reconstituer le travail en regardant les autres. Ecrire aide, mais le document seul ne change pas le travail. Il change lorsque la SOP apparait au debut de la tache, que le resultat acceptable est visible et que les exceptions ont un chemin.

## Concevoir pour le premier usage reel

Commencez par une tache active, pas par une bibliotheque. Le responsable doit utiliser le brouillon pendant l'execution et noter chaque hesitation. Puis une seconde personne realise la meme tache. Si elle doit demander a l'auteur le sens d'une phrase, la connaissance n'a pas encore ete transmise.

## Donner un lieu et un proprietaire au processus

Liez la SOP au formulaire, au modele de tache, a l'etape CRM ou a l'espace de travail ou le travail commence. Nommez un responsable, une date de revue et une voie de changement.`,
  'ai-automation-where-to-start': `## Commencer la ou le cout de l'erreur est limite

La premiere automatisation utile est rarement la plus spectaculaire. C'est souvent une decision repetee avec une entree reconnaissable, une sortie acceptable et une personne capable de revoir les cas limites : trier des demandes, preparer une premiere reponse a partir de contenu approuve ou resumer une passation depuis des enregistrements connus. Le systeme ne doit pas etre cru aveuglement ; il doit reduire l'effort avant la decision finale.

## Chercher la friction avant la technologie

Cartographiez le travail actuel. Ou copie-t-on l'information ? Ou une demande attend-elle une decision ? Ou une reponse approuvee est-elle difficile a trouver ? Ces frictions indiquent si la bonne reponse est l'IA, une regle, un meilleur formulaire ou une documentation claire. Des sources contradictoires et une responsabilite floue seront amplifiees par l'automatisation.

## Traiter la premiere version comme un travail assiste

Testez un echantillon limite et consignez les resultats acceptes, modifies, rejetes et escalades. Elargissez seulement quand l'equipe peut expliquer les controles.`,
  'crm-data-model-for-service-firms': `## Un CRM gagne sa complexite decision apres decision

Les entreprises de services n'ont pas besoin d'un grand modele de donnees pour gerer un pipeline utile. Elles ont besoin de quelques enregistrements qui rendent visibles le responsable, l'avancement et la prochaine action : entreprises, contacts, opportunites et activites. Les projets n'arrivent a cote du pipeline que lorsqu'un engagement signe exige son propre flux de delivery.

## Rendre la prochaine action sans ambiguite

Chaque opportunite doit repondre immediatement a deux questions : qui la possede et que se passe-t-il ensuite ? « Relancer » ne suffit pas. Une action utile nomme l'evenement, le resultat attendu et la date. Les etapes doivent decrire l'engagement de l'acheteur, non l'optimisme interne, avec une regle de sortie verificable.

## Proteger le modele des champs decoratifs

Un champ doit changer une decision, soutenir une passation ou expliquer un rapport. Examinez les trente dernieres opportunites avant d'ajouter de la structure.`,
  'sop-rollout-plan-that-gets-used': `## Le deploiement commence apres la redaction

Une SOP peut etre parfaite sur le papier et echouer la premiere semaine parce que son environnement n'a pas change : aucun responsable nomme, aucun lien depuis la tache, aucune decision sur les exceptions. Le document est le brouillon de l'accord operationnel ; le deploiement le prouve en conditions normales.

## Tester la routine puis l'exception

Demandez au responsable d'executer un cas reel avec le brouillon et de noter les sorties du parcours. Une seconde personne teste ensuite la version amendee. Puis testez une entree manquante, une approbation tardive ou un echec de qualite. Une SOP utile nomme le decideur et la voie d'escalade au lieu de faire semblant que l'exception n'existera pas.

## Faire de la revue une partie de la responsabilite

Liez la SOP au modele de tache et ajoutez une date de revue, un journal de changements et une fiche de controle courte. Revoyez-la apres les cinq premiers usages, puis a un rythme prevu.`,
  'dashboard-requirements-before-design': `## Un tableau de bord est un environnement de decision

Les equipes commencent souvent par reunir des graphiques parce qu'ils sont visibles. Elles evitent alors la question essentielle : quelle decision doit devenir plus simple quand quelqu'un ouvre le tableau ? Nommez le public, le rythme de revue et la decision avant de choisir le visuel. Une reunion commerciale hebdomadaire et un responsable de delivery ne vivent pas dans le meme environnement.

## Definir chaque chiffre avant de le placer

Chaque indicateur a besoin d'une definition, d'une source, d'un responsable et d'un niveau de detail. « Pipeline » et « temps de reponse » peuvent vouloir dire des choses tres differentes. Sans accord, une interface propre rend seulement un desaccord plus agreable a regarder. Le premier ecran doit signaler si une attention est requise ; la suite aide a comprendre pourquoi.

## Integrer l'acceptation au brief

Avant le design, convenez de la verification : comparaison du KPI a sa source, date de mise a jour, plage de dates et personne qui agit lorsqu'un seuil est franchi.`,
  'ai-automation-readiness-check': `## La preparation est une propriete du workflow

La preparation d'une equipe operations a l'automatisation IA depend moins des capacites du modele que de l'etat du travail autour de lui. Un workflow est pret lorsque les entrees sont disponibles, que le resultat acceptable peut etre decrit, qu'un relecteur traite l'incertitude et qu'une erreur peut etre contenue.

## Verifier les conditions d'exploitation

Les entrees sont-elles assez coherentes ? Un relecteur peut-il expliquer ce qui rend une sortie acceptable ? Quelle est la consequence d'une erreur ? Un brouillon revu avant envoi est different d'une modification de fiche client sans controle. Si ces conditions sont faibles, un meilleur formulaire, une bibliotheque de sources controlee ou une SOP plus claire est souvent le meilleur premier pas.

## Piloter avec des preuves

Utilisez un echantillon fixe et consignez les resultats acceptes, modifies, rejetes et escalades. Comparez le temps et la reprise avec le processus precedent, puis decidez clairement : arreter, garder le travail assiste ou etendre avec plus de controles.`,
  'operational-software-selection-workflow': `## Un logiciel doit supprimer une passation, pas en creer une autre

Les comparaisons de fonctionnalites semblent objectives mais constituent un mauvais point de depart. Elles disent peu sur la capacite d'une equipe a faire son travail ordinaire avec moins de lacunes, de doublons et d'effort. Suivez plutot un workflow de la demande au resultat : qui recoit le travail, quelle information est necessaire, quel systeme est utilise, quelle decision est prise et quelle preuve reste.

## Evaluer l'adequation dans le contexte d'usage

L'equipe peut-elle accomplir le travail normal sans contournement ? Le modele de donnees correspond-il aux relations importantes ? Les permissions, approbations et exports sont-ils gouvernables ? Qui fera evoluer le systeme ? Pilotez une equipe, un workflow et un rythme de reporting, en examinant aussi les integrations en echec et les validations refusees.

Le bon choix facilite la repetition, l'inspection et l'amelioration du travail vise.`,
  'proposal-approval-system-for-service-teams': `## La reecriture est souvent un probleme de systeme

Lorsqu'une equipe reecrit sans cesse la meme proposition, le probleme est rarement la capacite d'ecriture. L'organisation n'a pas separe les preuves reutilisables des decisions propres a l'affaire. Chaque opportunite oblige a redécouvrir l'histoire de l'entreprise, le perimetre et les garde-fous commerciaux. Les validations ralentissent car les relecteurs n'examinent pas le meme type de decision.

## Donner un role a chaque revue

Constituez une petite bibliotheque approuvee de faits, capacites, hypotheses de delivery et conditions standard. La proposition reste concentree sur le probleme acheteur, le resultat, les limites, le prix, le calendrier et les risques. Qualification, delivery, commercial et envoi final ont chacun un responsable, un statut et une trace de decision.

## Apprendre des revisions

Une question de perimetre recurrente revele une offre incomplete. Une demande de preuve recurrente revele une bibliotheque de cas trop mince. L'objectif est une qualite de routine simple et des exceptions reelles visibles tot.`,
  'operational-system-handover-checklist': `## Une passation est le debut d'une exploitation autonome

Des identifiants, des liens et une derniere reunion ne sont pas une passation : ce sont des acces. Une vraie passation permet au destinataire d'exploiter le systeme, de reconnaitre un probleme, de demander un changement raisonnable et de se remettre sans attendre le constructeur. Elle couvre le but du workflow, les enregistrements, les permissions, la routine d'entretien et les limites sures.

## Tester la responsabilite avec des scenarios reels

Demandez au nouveau responsable de traiter une demande normale, une exception et une erreur volontaire. Ses questions indiquent si le manque est la formation, l'autorisation, la qualite des donnees ou le design. Laissez exports de configuration, modeles approuves, matrice de permissions, notes de nettoyage, limites connues et voie de changement.

## Planifier la premiere revue avant de partir

Apres une semaine, deux semaines et un mois, examinez les completions, exceptions, doublons, champs inutilises et travail arrivant hors du parcours. Le travail est vraiment termine lorsque l'organisation peut l'ameliorer seule.`,
};

const editorialBodiesBg: Record<string, string> = {
  'website-brief-for-service-firms': `## Проблемът с одобрението обикновено започва по-рано

Заданието за уебсайт не е само документ за дизайна, а инструмент за вземане на решения. То трябва да даде на търговския ръководител, основателя и отговорния за изпълнението общ отговор: какво трябва да направи сайтът по-лесно за бизнеса? Повечето кръгове по одобрение не са спор за текст или цвят, а за различни роли, които сайтът трябва да изпълнява.

## Започнете с търговския момент

Преди картата на сайта определете какво трябва да се промени след посещението: квалифицирана заявка, по-добре подготвен клиент за разговор или партньор, който намира бизнеса за достатъчно надежден. Проверявайте всяка страница, доказателство и взаимодействие спрямо тази цел. Всяка аудитория има нужда от собствен път и ясен отговор преди призив за действие.

## Превърнете мненията в решения

Доброто задание записва защо съществува всяка страница, какво твърдение подкрепя, какво доказателство е нужно и кой одобрява. Не е нужно да е дълго; важно е трудните избори да станат видими рано.`,
  'sop-rollout-that-gets-used': `## Процедурата не е операционна система

Екипите търсят SOP, когато цената на непоследователността стане осезаема: задача се забавя без конкретен човек, клиент получава различен отговор или нов служител възстановява процеса, наблюдавайки другите. Писането помага, но самият документ не променя работата. Тя се променя, когато SOP се появява при започване на задачата, приемливият резултат е ясен и изключенията имат път.

## Проектирайте за първата реална употреба

Започнете с една жива задача, не с библиотека. Нека собственикът използва черновата при работа и отбележи всяко колебание. После втори човек изпълнява същата задача. Ако трябва да пита автора какво означава стъпка, знанието още не е предадено.

## Дайте място и собственик на процеса

Свържете SOP с формуляра, шаблона на задачата, CRM етапа или работното пространство. Посочете собственик, дата за преглед и път за промени.`,
  'ai-automation-where-to-start': `## Започнете там, където цената на грешката е ограничена

Най-полезната първа автоматизация рядко е най-ефектната. Обикновено това е повтарящо се решение с разпознаваем вход, приемлив изход и човек за граничните случаи: сортиране на заявки, първи отговор от одобрени материали или обобщение при предаване от известни записи. Не е нужно системата да бъде приемана безусловно; тя трябва да намали рутинния труд преди крайното решение.

## Търсете триенето преди технологията

Картографирайте работата както се случва днес. Къде се копира информация, къде чака заявка и къде трудно се намира одобрен отговор? Това показва дали е нужна AI стъпка, правило, по-добър формуляр или ясна документация. Противоречиви източници и неясна отговорност се усилват от автоматизацията.

## Приемете първата версия като подпомогната работа

Тествайте ограничена извадка и записвайте приети, редактирани, отхвърлени и ескалирани резултати. Разширявайте едва когато екипът може да обясни контролите.`,
  'crm-data-model-for-service-firms': `## CRM заслужава своята сложност решение по решение

На фирмите за услуги не им трябва голям модел на данни, а малко записи, които правят видими собствеността, напредъка и следващите действия. Започнете с компании, контакти, възможности и дейности. Проекти добавяйте до pipeline-а само когато подписаният ангажимент има собствен поток за изпълнение.

## Направете следващата стъпка еднозначна

Всяка възможност трябва да отговаря веднага: кой я притежава и какво следва? „Проследи“ не е достатъчно. Полезната стъпка назовава събитието, очаквания резултат и дата. Етапите трябва да описват ангажимента на купувача, а не оптимизма на екипа, с проверимо правило за изход.

## Пазете модела от декоративни полета

Поле трябва да променя решение, да подкрепя предаване или да обяснява отчет. Прегледайте последните тридесет възможности преди да добавяте структура.`,
  'sop-rollout-plan-that-gets-used': `## Внедряването започва след написването

SOP може да е напълно ясна на хартия и пак да се провали през първата седмица, защото средата около процеса не се е променила: няма посочен собственик, няма връзка от задачата към процедурата и няма решение за изключенията. Документът е чернова на оперативното споразумение; внедряването го доказва в нормални условия.

## Тествайте рутината, после изключението

Нека собственикът изпълни реален случай с черновата и отбележи отклоненията. Втори човек тества поправената версия. После проверете липсващ вход, забавено одобрение или провал в качеството. Полезната SOP назовава вземащия решение и пътя за ескалация.

## Направете прегледа част от собствеността

Свържете SOP с шаблона на задачата и добавете дата за преглед, дневник на промените и кратък контролен лист. Преглеждайте след първите пет употреби и след това регулярно.`,
  'dashboard-requirements-before-design': `## Таблото е среда за решения

Екипите често започват, като събират графики, защото са видими. Така се избягва основният въпрос: кое решение трябва да стане по-лесно, когато някой отвори таблото? Назовете аудиторията, ритъма на прегледа и решението преди визуализацията. Седмична търговска среща има различни нужди от ръководител на изпълнението.

## Определете всяко число преди подреждането

Всеки показател се нуждае от дефиниция, източник, собственик и ниво на детайл. „Pipeline“ и „време за отговор“ могат да означават различни неща. Без съгласие чистият интерфейс само прави нерешения спор по-приятен за гледане. Първият екран трябва да покаже дали е нужно внимание, а следващият да обясни защо.

## Включете приемането в заданието

Преди дизайна договорете как KPI се сравнява с източника си, кога е обновен, какъв е периодът и кой действа при преминаване на праг.`,
  'ai-automation-readiness-check': `## Готовността е свойство на работния поток

Готовността на оперативен екип за AI автоматизация зависи по-малко от способностите на модела и повече от състоянието на работата около него. Потокът е готов, когато входовете са налични, приемливият резултат може да се опише, несигурността има проверяващ и грешката може да бъде ограничена.

## Проверете условията за работа

Достатъчно последователни ли са входовете? Може ли проверяващ да обясни какво е приемливо? Каква е последицата от грешка? Чернова, проверена преди изпращане, е различна от промяна в клиентски запис без контролна точка. При слаби условия по-добър формуляр, контролирана библиотека от източници или по-ясна SOP често са правилната първа стъпка.

## Пилотирайте с доказателства

Използвайте фиксирана извадка и записвайте приети, редактирани, отхвърлени и ескалирани резултати. Сравнете време и преработка с предишния процес, после решете ясно: спрете, оставете като подпомогната работа или разширете с по-силни контроли.`,
  'operational-software-selection-workflow': `## Софтуерът трябва да премахва предаване, не да създава ново

Сравненията на функции изглеждат обективни, но са слаб старт. Те казват малко за това дали екипът ще изпълнява обичайната работа с по-малко пропуски, дублирания и усилие. Проследете един поток от заявката до резултата: кой получава работата, каква информация е нужна, коя система се използва, какво решение се взема и какво доказателство остава.

## Оценявайте съответствието в контекста на употребата

Може ли екипът да върши нормална работа без заобикаляне? Съвпада ли моделът на данни с важните отношения? Могат ли да се управляват права, одобрения и експорти? Кой ще прави промени? Пилотирайте един екип, един поток и един ритъм за отчети, включително при проблемни интеграции и отхвърлени одобрения.

Правилният избор улеснява повторението, проверката и подобрението на желаната работа.`,
  'proposal-approval-system-for-service-teams': `## Постоянното пренаписване често е системен проблем

Когато екипът за услуги пренаписва едно и също предложение, проблемът рядко е в умението за писане. Обикновено организацията не е отделила повторно използваемите доказателства от решенията по конкретната сделка. Всяка възможност става ново откриване на историята на компанията, обхвата и търговските рамки. Одобренията се забавят, защото проверяващите гледат различни решения.

## Дайте задача на всеки преглед

Създайте малка одобрена библиотека с факти, възможности, допускания за изпълнение и стандартни условия. Конкретното предложение остава фокусирано върху проблема, резултата, границите, цената, времето и риска. Квалификацията, изпълнението, търговският преглед и финалното изпращане имат свой собственик, статус и запис на решение.

## Учете се от редакциите

Повтарящите се въпроси за обхват показват непълна услуга; повтарящите се искания за доказателства показват слаба библиотека от случаи.`,
  'operational-system-handover-checklist': `## Предаването е начало на самостоятелната работа

Достъпите, връзките и последната среща не са предаване, а само достъп. Истинското предаване дава на получателя разбиране да управлява системата, да разпознава проблем, да иска разумна промяна и да се възстановява без да чака първоначалния създател. То включва целта на потока, записите, правата, рутината за поддръжка и безопасните граници.

## Тествайте собствеността с реални сценарии

Нека новият собственик изпълни нормална заявка, обработи изключение и поправи умишлена грешка. Въпросите му показват дали липсват обучение, разрешение, качество на данните или дизайн. Оставете конфигурационни експорти, одобрени шаблони, матрица на правата, бележки за почистване, известни ограничения и път за промяна.

## Планирайте първия преглед преди да си тръгнете

След една седмица, две седмици и месец преглеждайте завършените задачи, изключенията, дублиранията, неизползваните полета и работата извън предвидения поток. Работата е завършена, когато организацията може сама да я подобрява.`,
};

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
    thumbnail_url: insightWebsiteBrief,
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
    slug: "sop-rollout-that-gets-used",
    excerpt:
      "A rollout pattern for SOP libraries that improves adoption, ownership, and updates instead of producing a folder full of ignored PDFs.",
    excerpt_ar:
      "نمط إطلاق لمكتبات الإجراءات يرفع التبني والملكية والتحديث بدلاً من إنتاج مجلد مليء بملفات PDF المتروكة.",
    excerpt_de: "Ein Einführungsmodell für SOP-Bibliotheken, das die Akzeptanz, Verantwortlichkeit und Aktualisierungen verbessert, anstatt einen Ordner voller ignorierter PDFs zu produzieren.",
    excerpt_fr: "Un modèle de déploiement pour les bibliothèques de procédures opérationnelles standard qui améliore l'adoption, l'appropriation et les mises à jour au lieu de produire un dossier rempli de PDF ignorés.",
    excerpt_bg: "Модел за внедряване на библиотеки със СОП, който подобрява приемането, собствеността и актуализациите, вместо да произвежда папка, пълна с игнорирани PDF файлове.",
    thumbnail_url: insightSopRollout,
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
    title_de: "Wo KI-Agenten in Dienstleistungsunternehmen zuerst Zeit sparen",
    title_fr: "Où les agents IA font gagner du temps en premier dans les entreprises de services",
    title_bg: "Къде AI агентите спестяват време първо в компаниите за услуги",
    slug: "ai-automation-where-to-start",
    excerpt:
      "A simple way to find high-value automation opportunities without handing sensitive judgment calls to an unproven workflow.",
    excerpt_ar:
      "طريقة بسيطة لاكتشاف فرص أتمتة عالية القيمة دون تسليم القرارات الحساسة إلى سير عمل غير مُثبت.",
    excerpt_de:
      "Ein einfacher Weg, wertvolle Automatisierungschancen zu finden, ohne sensible Entscheidungen einem unerprobten Workflow zu überlassen.",
    excerpt_fr:
      "Une approche simple pour identifier des automatisations à forte valeur sans confier des décisions sensibles à un workflow non éprouvé.",
    excerpt_bg:
      "Лесен начин да откриете възможности за автоматизация с висока стойност, без да поверявате чувствителни решения на непроверен процес.",
    thumbnail_url: insightAiAutomationStart,
    category: "AI Automation",
    category_ar: "أتمتة الذكاء الاصطناعي",
    category_de: "KI-Automatisierung",
    category_fr: "Automatisation par IA",
    category_bg: "AI автоматизация",
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
    thumbnail_url: insightCrmDataModel,
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
    thumbnail_url: insightSopRolloutPlan,
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
    thumbnail_url: insightDashboardRequirements,
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
    thumbnail_url: insightAiReadiness,
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
    thumbnail_url: insightSoftwareSelection,
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
    thumbnail_url: insightProposalApproval,
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
    thumbnail_url: insightSystemHandover,
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
