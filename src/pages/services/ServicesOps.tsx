import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServicePricingStack } from '@/components/sections/ServicePricingStack';
import { ServiceDeliverySection } from '@/components/sections/ServiceDeliverySection';
import { CTABand } from '@/components/sections/CTABand';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { OutcomeMotionCard, OutcomeMotionVariant } from '@/components/services/OutcomeMotionCard';
import { ClipboardCheck, FileText, Folders, SearchCheck, ShieldCheck, Users, Workflow } from 'lucide-react';
import { usePricingContent } from '@/lib/pricingContent';
import { useLocale } from '@/lib/locale';
import { getServicePageContent } from '@/lib/servicePageContent';
import { cn } from '@/lib/utils';
import { usePageMeta } from '@/hooks/use-page-meta';

const outcomeMotions: OutcomeMotionVariant[] = [
  'ops-files',
  'ops-processes',
  'ops-onboarding',
  'ops-handoffs',
];

const deliverableIcons = [Folders, ClipboardCheck, Users];
const proofSignalIcons = [SearchCheck, Workflow, FileText, ShieldCheck];

const ServicesOps = () => {
  const { locale, isRTL } = useLocale();
  const { servicePricingTracks } = usePricingContent();
  const pricingTrack = servicePricingTracks.ops;
  const content = getServicePageContent(locale).ops;
  usePageMeta({ title: `${content.hero.headline} | Amjad Osman`, description: content.hero.subheadline });

  return (
    <Layout>
      <Hero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={{ label: content.hero.primaryCtaLabel, href: '#pricing' }}
        secondaryCta={{ label: content.hero.secondaryCtaLabel, href: '/book' }}
        plate="navy"
        rightElement={
          <div className="w-full max-w-xl">
            <div className={cn('rounded-[30px] border border-white/12 bg-white/5 backdrop-blur-xl p-5 shadow-2xl shadow-black/20', isRTL && 'text-right')}>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-offwhite/55 font-semibold mb-2">{content.summaryPanel.mostRequested.label}</p>
                  <p className="font-serif text-2xl text-mint leading-none mb-2">{content.summaryPanel.mostRequested.title}</p>
                  <p className="text-sm text-offwhite/70">{content.summaryPanel.mostRequested.body}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-offwhite/55 font-semibold mb-2">{content.summaryPanel.typicalStart.label}</p>
                  <p className="font-serif text-2xl text-mint leading-none mb-2">{content.summaryPanel.typicalStart.title}</p>
                  <p className="text-sm text-offwhite/70">{content.summaryPanel.typicalStart.body}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-offwhite/55 font-semibold mb-3">{content.summaryPanel.includedLabel}</p>
                <div className="space-y-3">
                  {content.summaryPanel.includedItems.map((item) => (
                    <div key={item} className={cn('flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0', isRTL && 'flex-row-reverse')}>
                      <p className="text-offwhite font-medium">{item}</p>
                      <span className="text-mint text-sm">{content.summaryPanel.readyToScopeLabel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={content.outcomesSection.eyebrow}
            headline={content.outcomesSection.headline}
            subheadline={content.outcomesSection.subheadline}
            variant="poster"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.outcomesSection.items.map((item, index) => (
              <OutcomeMotionCard
                key={item.title}
                title={item.title}
                body={item.body}
                variant={outcomeMotions[index]}
                tone="ops"
                sequence={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeader
                eyebrow={content.whyHireSection.eyebrow}
                headline={content.whyHireSection.headline}
                subheadline={content.whyHireSection.subheadline}
                variant="poster"
              />
              <ul className="space-y-3">
                {content.whyHireSection.reasons.map((item) => (
                  <li key={item} className={cn('flex items-start gap-3 text-body-md text-muted-foreground', isRTL && 'flex-row-reverse text-right')}>
                    <span className="text-mint mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn('colored-surface-shadow rounded-[30px] border border-lavender/20 bg-plate-astral p-6 text-offwhite md:p-8', isRTL && 'text-right')}>
              <p className="text-xs uppercase tracking-[0.22em] text-offwhite/55 font-semibold mb-4">
                {content.deliverablesSection.title}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {content.deliverablesSection.items.map((item, index) => {
                  const Icon = deliverableIcons[index];
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-black/10 p-5">
                      <div className="w-11 h-11 rounded-xl bg-white/6 text-mint flex items-center justify-center mb-4">
                        {Icon ? <Icon size={20} /> : null}
                      </div>
                      <h3 className="font-serif text-2xl text-mint mb-2">{item.title}</h3>
                      <p className="text-sm text-offwhite/72 leading-relaxed">{item.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={content.signalSection.eyebrow}
            headline={content.signalSection.headline}
            subheadline={content.signalSection.subheadline}
            variant="poster"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.signalSection.items.map((item, index) => {
              const Icon = proofSignalIcons[index];
              return (
                <div key={item.title} className={cn('rounded-2xl border border-ink/10 bg-card p-8 transition-all duration-200 hover:border-ink/20 hover:shadow-lg', isRTL && 'text-right')}>
                  <div className="w-11 h-11 rounded-xl bg-plate-astral text-mint flex items-center justify-center mb-4">
                    {Icon ? <Icon size={20} /> : null}
                  </div>
                  <h3 className="font-serif text-heading-md text-foreground mb-3">{item.title}</h3>
                  <p className="text-body-md text-muted-foreground">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-muted scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={content.pricingSection.eyebrow}
            headline={content.pricingSection.headline}
            subheadline={pricingTrack.pricingIntro}
            variant="poster"
          />
          <ServicePricingStack track={pricingTrack} />
        </div>
      </section>

      <ServiceDeliverySection
        subheadline={content.deliverySection.subheadline}
        steps={content.deliverySection.steps.map((step, index) => ({
          ...step,
          icon: [SearchCheck, Workflow, Folders, Users, ShieldCheck][index],
        }))}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeader
            eyebrow={content.faqSection.eyebrow}
            headline={content.faqSection.headline}
            subheadline={content.faqSection.subheadline}
            variant="poster"
          />
          <Accordion type="single" collapsible>
            {content.faqSection.items.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`}>
                <AccordionTrigger className="font-serif text-lg text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-body-md text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABand
        headline={content.ctaBand.headline}
        description={content.ctaBand.description}
        primaryCta={{ label: content.ctaBand.primaryLabel, href: '/book' }}
        secondaryCta={{ label: content.ctaBand.secondaryLabel, href: '/pricing' }}
        visualKey="stack-cube"
        variant="dark"
      />
    </Layout>
  );
};

export default ServicesOps;
