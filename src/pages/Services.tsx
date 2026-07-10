import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Steps } from '@/components/sections/Steps';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTABand } from '@/components/sections/CTABand';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { MatrixCodeBackground } from '@/components/shared/MatrixCodeBackground';
import { ArrowRight, Bot, BrainCircuit, Briefcase, CheckCircle2, ClipboardCheck, LayoutPanelTop, LifeBuoy, LucideIcon, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';
import { getServicesOverviewCopy, servicePreviewTranslations } from '@/lib/servicesOverviewContent';

interface PreviewFeature {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface ServicePreview {
  id: string;
  name: string;
  headline: string;
  summary: string;
  signal: string;
  accentText: string;
  accentBorder: string;
  accentSurface: string;
  features: PreviewFeature[];
  includes: string[];
  href: string;
  pricingHref: string;
}

const Services = () => {
  const { locale, isRTL } = useLocale();
  const ui = getServicesOverviewCopy(locale);

  usePageMeta({
    title: `${ui.eyebrow} | Amjad Osman`,
    description: ui.heroSubheadline,
  });

  const servicePreviewsBase: ServicePreview[] = locale === 'ar'
    ? [
        {
          id: 'brand-growth',
          name: 'أنظمة الهوية والنمو',
          headline: 'اجعل صورة الشركة قوية بقدر قوة العمل الذي تقدمه.',
          summary:
            'نحسن الطريقة التي يلتقي بها المشتري بالشركة أول مرة من خلال أنظمة الهوية وهيكل الموقع ومواد المبيعات التي يسهل الوثوق بها واستخدامها.',
          signal: 'الأفضل عندما تحتاج المصداقية أو التموضع أو وضوح التحويل إلى تحسين.',
          accentText: 'text-mint',
          accentBorder: 'border-mint/25',
          accentSurface: 'bg-plate-navy',
          features: [
            {
              icon: Sparkles,
              title: 'وضوح الهوية',
              body: 'هوية ورسائل وقوالب تمنع الشركة من الظهور بصورة متفككة.',
            },
            {
              icon: LayoutPanelTop,
              title: 'هيكل الموقع',
              body: 'صفحات مبنية حول ما يحتاجه المشتري ليفهم ويثق ويتخذ الخطوة التالية.',
            },
            {
              icon: Briefcase,
              title: 'مواد المبيعات',
              body: 'عروض وملفات ومخططات حالة تبدو متسقة وقابلة لإعادة الاستخدام.',
            },
          ],
          includes: ['نظام هوية', 'الموقع وCMS', 'مواد المبيعات'],
          href: '/services/brand',
          pricingHref: '/services/brand#pricing',
        },
        {
          id: 'internal-operations',
          name: 'أنظمة العمليات الداخلية',
          headline: 'استبدل الملفات المبعثرة والمعرفة الضمنية بطبقة تشغيل أنظف.',
          summary:
            'ننظم الأنظمة خلف العمل بحيث يصبح العثور على المعلومات أسهل، وتتبع العمل المتكرر أوضح، والانضمام الجديد أقل اعتماداً على المديرين.',
          signal: 'الأفضل عندما يكون نمو الشركة أسرع من بنيتها الداخلية.',
          accentText: 'text-lavender',
          accentBorder: 'border-lavender/25',
          accentSurface: 'bg-plate-astral',
          features: [
            {
              icon: Workflow,
              title: 'تدفق المعلومات',
              body: 'SharePoint والمجلدات والصلاحيات ومسارات الطلبات تصبح أوضح في الاستخدام.',
            },
            {
              icon: ClipboardCheck,
              title: 'الإجراءات والقوالب',
              body: 'العمل المتكرر يُوثّق بشكل يصمد أمام النمو وتغير الموظفين.',
            },
            {
              icon: ShieldCheck,
              title: 'الحوكمة والانضمام',
              body: 'يحصل المديرون على خط أساس أنظف للملكية والاعتمادات والتدريب.',
            },
          ],
          includes: ['بنية SharePoint', 'مكتبة SOP', 'الانضمام والحوكمة'],
          href: '/services/ops',
          pricingHref: '/services/ops#pricing',
        },
        {
          id: 'automation',
          name: 'الوكلاء والأتمتة',
          headline: 'أتمت العمل المتكرر دون أن تفقد الرؤية أو التحكم.',
          summary:
            'نصمم تدفقات عملية للوكلاء في التوجيه والصياغة والتقارير ودعم المعرفة، مع اعتمادات وحدود ومعالجة فشل أكثر أماناً من البداية.',
          signal: 'الأفضل عندما يستهلك العمل المتكرر الوقت عبر الدعم أو العمليات أو التقارير.',
          accentText: 'text-mint',
          accentBorder: 'border-mint/25',
          accentSurface: 'bg-plate-emerald',
          features: [
            {
              icon: Bot,
              title: 'أتمتة سير العمل',
              body: 'أتمتة الاستقبال والتوجيه والملخصات وأعمال التحضير المتكررة حيث توفّر الوقت فعلاً.',
            },
            {
              icon: BrainCircuit,
              title: 'دعم المعرفة',
              body: 'إرجاع إجابات موثقة من مصادر معتمدة بدلاً من الاعتماد على ذاكرة مشتتة.',
            },
            {
              icon: ShieldCheck,
              title: 'الضوابط والاعتمادات',
              body: 'إبقاء نقاط التحقق البشرية والسجلات ومسارات التصعيد في أماكنها الصحيحة.',
            },
          ],
          includes: ['تجارب الوكلاء', 'تدفقات المعرفة', 'المراقبة والتحسين المُداران'],
          href: '/services/agents',
          pricingHref: '/services/agents#pricing',
        },
      ]
    : [
        {
          id: 'brand-growth',
          name: 'Brand and Growth Systems',
          headline: 'Make the business feel as strong as the work behind it.',
          summary:
            'We sharpen how buyers first encounter the company through brand systems, website structure, and sales materials that are easier to trust and easier to use.',
          signal: 'Best when credibility, positioning, or conversion clarity needs work.',
          accentText: 'text-mint',
          accentBorder: 'border-mint/25',
          accentSurface: 'bg-plate-navy',
          features: [
            {
              icon: Sparkles,
              title: 'Brand clarity',
              body: 'Identity, messaging, and templates that stop the business from looking fragmented.',
            },
            {
              icon: LayoutPanelTop,
              title: 'Website structure',
              body: 'Pages shaped around what buyers need to understand, trust, and do next.',
            },
            {
              icon: Briefcase,
              title: 'Sales materials',
              body: 'Decks, proposals, and case-study formats that feel aligned and reusable.',
            },
          ],
          includes: ['Brand system', 'Website and CMS', 'Sales materials'],
          href: '/services/brand',
          pricingHref: '/services/brand#pricing',
        },
        {
          id: 'internal-operations',
          name: 'Internal Operations Systems',
          headline: 'Replace scattered files and tribal knowledge with a cleaner operating layer.',
          summary:
            'I structure the systems behind the business so information is easier to find, recurring work is easier to follow, and onboarding creates less manager dependency.',
          signal: 'Best when the business has grown faster than its internal structure.',
          accentText: 'text-lavender',
          accentBorder: 'border-lavender/25',
          accentSurface: 'bg-plate-astral',
          features: [
            {
              icon: Workflow,
              title: 'Information flow',
              body: 'SharePoint, folders, permissions, and request paths that are easier to navigate.',
            },
            {
              icon: ClipboardCheck,
              title: 'SOPs and templates',
              body: 'Recurring work documented clearly enough to survive growth and staff changes.',
            },
            {
              icon: ShieldCheck,
              title: 'Governance and onboarding',
              body: 'Managers get a cleaner baseline for ownership, approvals, and training.',
            },
          ],
          includes: ['SharePoint architecture', 'SOP library', 'Onboarding and governance'],
          href: '/services/ops',
          pricingHref: '/services/ops#pricing',
        },
        {
          id: 'automation',
          name: 'AI Agents and Automation',
          headline: 'Automate repeat work without giving up visibility or control.',
          summary:
            'I design practical agent workflows for routing, drafting, reporting, and knowledge support, with approvals, boundaries, and safer failure handling built in from the start.',
          signal: 'Best when the same repetitive work is eating time across support, operations, or reporting.',
          accentText: 'text-mint',
          accentBorder: 'border-mint/25',
          accentSurface: 'bg-plate-emerald',
          features: [
            {
              icon: Bot,
              title: 'Workflow automation',
              body: 'Automate intake, routing, summaries, and repetitive prep work where it actually saves time.',
            },
            {
              icon: BrainCircuit,
              title: 'Knowledge support',
              body: 'Return grounded answers from approved sources instead of relying on scattered memory.',
            },
            {
              icon: ShieldCheck,
              title: 'Controls and approvals',
              body: 'Keep human checkpoints, logging, and escalation paths where they need to be.',
            },
          ],
          includes: ['Agent pilots', 'Knowledge workflows', 'Managed monitoring and tuning'],
          href: '/services/agents',
          pricingHref: '/services/agents#pricing',
        },
      ];

  const engagementBasicsBase = locale === 'ar'
    ? [
        {
          icon: ClipboardCheck,
          title: 'نطاق واضح قبل التنفيذ',
          description: 'كل ارتباط يبدأ بموجز يحدد ما الذي سيتم تسليمه وكيف سيُقاس النجاح.',
        },
        {
          icon: CheckCircle2,
          title: 'مراحل تقلل إعادة العمل',
          description: 'تحدث القرارات في الوقت المناسب بدلاً من تأجيلها إلى نهاية المشروع.',
        },
        {
          icon: ShieldCheck,
          title: 'تسليم نظيف',
          description: 'نسلم الملفات والمنطق والتدريب والإرشادات التالية بحيث يبقى العمل قابلاً للاستخدام بعد الإطلاق.',
        },
        {
          icon: LifeBuoy,
          title: 'دعم إذا كان مفيداً',
          description: 'يمكنك التوقف عند التسليم أو الاستمرار بدعم شهري عندما تكون الأسس جاهزة.',
        },
      ]
    : [
        {
          icon: ClipboardCheck,
          title: 'Clear scope before build',
          description: 'Every engagement starts with a brief that defines what is being delivered and how success will be judged.',
        },
        {
          icon: CheckCircle2,
          title: 'Milestones that reduce rework',
          description: 'Decisions happen at the right points instead of getting pushed to the end of the project.',
        },
        {
          icon: ShieldCheck,
          title: 'Clean handover',
          description: 'Files, logic, training, and next-step guidance are delivered so the work stays usable after launch.',
        },
        {
          icon: LifeBuoy,
          title: 'Support if it is useful',
          description: 'You can stop at delivery or continue with monthly support once the foundations are in place.',
        },
      ];

  const translations = servicePreviewTranslations[locale];
  const servicePreviews = servicePreviewsBase.map((service, index) => {
    const translation = translations?.[index];
    return translation
      ? { ...service, ...translation, features: service.features.map((feature, featureIndex) => ({ ...feature, ...translation.features[featureIndex] })) }
      : service;
  });
  const engagementBasics = engagementBasicsBase.map((item, index) => ({ ...item, ...(ui.engagement[index] ?? {}) }));
  const overviewCards = ui.overviewCards;

  return (
    <Layout>
      <Hero
        eyebrow={ui.eyebrow}
        headline={ui.heroHeadline}
        subheadline={ui.heroSubheadline}
        primaryCta={{ label: ui.exploreServices, href: '#service-brand-growth' }}
        secondaryCta={{ label: ui.bookCall, href: '/book' }}
        plate="navy"
        rightElement={
          <div className="w-full max-w-xl">
            <div className="rounded-[30px] border border-white/12 bg-white/5 backdrop-blur-xl p-5 shadow-2xl shadow-black/20">
              <div className="grid grid-cols-1 gap-3">
                {overviewCards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-black/10 p-4 md:p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-offwhite/60 font-semibold mb-2">
                      {card.eyebrow}
                    </p>
                    <h3 className="font-serif text-xl text-offwhite mb-2">{card.title}</h3>
                    <p className="text-sm text-offwhite/70 leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />

      <section className="py-8 md:py-10 bg-background border-b border-ink/8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {servicePreviews.map((service) => (
              <a
                key={service.id}
                href={`#service-${service.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all duration-200 hover:border-ink/20 hover:-translate-y-0.5"
              >
                {service.name}
                <ArrowRight size={14} className={isRTL ? 'rotate-180' : undefined} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {servicePreviews.map((service, index) => (
        <section
          key={service.id}
          id={`service-${service.id}`}
          className={index % 2 === 0 ? 'relative overflow-hidden py-16 md:py-24 bg-background scroll-mt-24' : 'relative overflow-hidden py-16 md:py-24 bg-muted scroll-mt-24'}
        >
          {service.id === 'automation' && (
            <MatrixCodeBackground fontSize={18} color="hsla(275, 100%, 50%, 0.13)" speed={0.5} />
          )}
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
              <div>
                <p className={`text-xs uppercase tracking-[0.22em] font-semibold mb-4 ${service.accentText}`}>
                  {service.name}
                </p>
                <h2 className="font-serif text-poster-lg text-foreground mb-5">
                  {service.headline}
                </h2>
                <p className="text-subheadline text-muted-foreground max-w-2xl mb-5">
                  {service.summary}
                </p>
                <p className="text-sm font-semibold text-foreground/70 mb-8">
                  {service.signal}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="rounded-2xl border border-ink/10 bg-card p-5 transition-all duration-200 hover:border-ink/20 hover:shadow-lg">
                        <div className={`w-11 h-11 rounded-xl ${service.accentSurface} ${service.accentText} flex items-center justify-center mb-4`}>
                          <Icon size={20} />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`${service.accentSurface} rounded-[30px] p-6 md:p-8 text-offwhite border ${service.accentBorder} shadow-xl`}>
                <p className="text-xs uppercase tracking-[0.22em] text-offwhite/55 font-semibold mb-4">
                  {ui.included}
                </p>
                <div className="space-y-4 mb-8">
                  {service.includes.map((item, itemIndex) => (
                    <div key={item} className={isRTL ? 'flex flex-row-reverse items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 text-right' : 'flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0'}>
                      <span className="text-sm text-offwhite/45 font-mono mt-0.5">
                        {String(itemIndex + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="font-serif text-2xl text-mint leading-none mb-1">{item}</p>
                        <p className="text-sm text-offwhite/70">
                          {ui.includedDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <PrimaryButton href={service.href} textColor="ink">
                    {ui.viewService}
                  </PrimaryButton>
                  <SecondaryButton href={service.pricingHref} variant="dark">
                    {ui.seePricing}
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={ui.workingEyebrow}
            headline={ui.workingHeadline}
            subheadline={ui.workingSubheadline}
            variant="poster"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementBasics.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-ink/10 bg-card p-8">
                  <div className="w-11 h-11 rounded-xl bg-plate-astral text-mint flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-heading-md text-foreground mb-3">{item.title}</h3>
                  <p className="text-body-md text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={ui.deliveryEyebrow}
            headline={ui.deliveryHeadline}
            subheadline={ui.deliverySubheadline}
            variant="poster"
          />
          <Steps
            steps={ui.steps}
          />
        </div>
      </section>

      <CTABand
        headline={ui.ctaHeadline}
        description={ui.ctaDescription}
        primaryCta={{ label: ui.ctaBook, href: '/book' }}
        secondaryCta={{ label: ui.ctaPricing, href: '/pricing' }}
        visualKey="tri-axis-hub"
        variant="dark"
      />
    </Layout>
  );
};

export default Services;
