import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServicePricingStack } from '@/components/sections/ServicePricingStack';
import { CTABand } from '@/components/sections/CTABand';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { usePricingContent } from '@/lib/pricingContent';
import { CyberPercentage } from '@/components/ui/cyber-percentage';
import { useLocale } from '@/lib/locale';
import { useSiteContent } from '@/lib/content';
import { cn } from '@/lib/utils';
import { usePageMeta } from '@/hooks/use-page-meta';
import { pickLocaleCopy, pricingPageCopy } from '@/lib/pageCopy';

const Pricing = () => {
  const { locale, isRTL } = useLocale();
  const { navigation, pricing } = useSiteContent();
  const { orderedServicePricingTracks, softwarePricingSummary } = usePricingContent();
  const copy = pickLocaleCopy(pricingPageCopy, locale);

  usePageMeta({
    title: copy.metaTitle,
    description: pricing.hero.subheadline,
  });

  return (
    <Layout>
      <Hero
        eyebrow={copy.heroEyebrow}
        headline={pricing.hero.headline}
        subheadline={pricing.hero.subheadline}
        plate="navy"
        primaryCta={navigation.cta}
        secondaryCta={{ label: copy.viewServices, href: '/services' }}
        rightElement={<CyberPercentage speed={0.8} />}
      />

      <section className="py-10 md:py-12 bg-background border-b border-ink/8">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={copy.howPricingWorks}
            headline={copy.startWithPackage}
            subheadline={copy.scanTracks}
            variant="poster"
          />

          <div className="flex flex-wrap gap-3">
            {orderedServicePricingTracks.map((track) => (
              <a
                key={track.id}
                href={`#${track.anchor}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all duration-200 hover:border-ink/20 hover:-translate-y-0.5"
              >
                {track.name}
              </a>
            ))}
            <a
              href={`#${softwarePricingSummary.anchor}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all duration-200 hover:border-ink/20 hover:-translate-y-0.5"
            >
              {copy.managedSoftware}
            </a>
          </div>
        </div>
      </section>

      {orderedServicePricingTracks.map((track, index) => (
        <section
          key={track.id}
          id={track.anchor}
          className={index % 2 === 0 ? 'py-16 md:py-24 bg-background scroll-mt-24' : 'py-16 md:py-24 bg-muted scroll-mt-24'}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
              <SectionHeader
                eyebrow={copy.servicePricing}
                headline={track.name}
                subheadline={track.summary}
                variant="poster"
                className="mb-0 min-w-0 flex-1"
              />

              <div className="flex flex-wrap gap-3">
                <SecondaryButton href={track.detailHref}>{copy.fullServicePage}</SecondaryButton>
              </div>
            </div>

            <ServicePricingStack track={track} />
          </div>
        </section>
      ))}

      <section id={softwarePricingSummary.anchor} className="py-16 md:py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <div className="colored-surface-shadow rounded-[34px] border border-white/10 bg-plate-astral p-6 text-offwhite md:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-offwhite/55 font-semibold mb-4">
                {softwarePricingSummary.eyebrow}
              </p>
              <h2 className="font-serif text-poster-lg text-mint mb-4">
                {softwarePricingSummary.headline}
              </h2>
              <p className="text-body-lg text-offwhite/78 mb-6">
                {softwarePricingSummary.description}
              </p>
              <p className="font-serif text-3xl text-mint mb-3">
                {softwarePricingSummary.startingPrice}
              </p>
              <p className="text-sm text-offwhite/70 mb-8">
                {softwarePricingSummary.setupNote}
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton href={softwarePricingSummary.primaryCta.href} textColor="astral">
                  {softwarePricingSummary.primaryCta.label}
                </PrimaryButton>
                <SecondaryButton href={softwarePricingSummary.secondaryCta.href} variant="dark">
                  {softwarePricingSummary.secondaryCta.label}
                </SecondaryButton>
              </div>
            </div>

            <div className="rounded-[34px] border border-ink/10 bg-card overflow-hidden shadow-[0_22px_56px_-48px_rgba(8,15,32,0.16)]">
              <div className="p-6 md:p-8 border-b border-ink/10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-2">
                  {copy.availableProducts}
                </p>
                <p className="text-body-md text-muted-foreground">
                  {copy.availableProductsBody}
                </p>
              </div>

              <div className="divide-y divide-ink/10">
                {softwarePricingSummary.products.map((product, index) => (
                  <div key={product.name} className="grid grid-cols-[auto_1fr] gap-4 px-6 py-5 md:px-8">
                    <span className="font-mono text-sm text-foreground/35 mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-serif text-heading-md text-foreground mb-2">{product.name}</h3>
                      <p className="text-body-md text-muted-foreground">{product.oneLiner}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-8 border-t border-ink/10 bg-muted/45">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-4">
                  {copy.supportIncludes}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {softwarePricingSummary.supportIncludes.map((item) => (
                    <div
                      key={item}
                      className={cn(
                        "flex items-start gap-3 rounded-2xl border border-ink/10 bg-card px-4 py-3 text-sm text-foreground",
                        isRTL && "text-right flex-row-reverse"
                      )}
                    >
                      <span className="text-mint mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline={copy.finalHeadline}
        description={copy.finalDescription}
        primaryCta={navigation.cta}
        secondaryCta={{ label: copy.viewPricing, href: '/pricing' }}
        visualKey="value-axis"
        variant="dark"
        className="bg-[hsl(var(--section-coral))]"
        canvasColor="hsla(359, 78%, 65%, 0.35)"
      />
    </Layout>
  );
};

export default Pricing;
