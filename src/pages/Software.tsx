import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { PremiumSuiteGrid } from '@/components/sections/PremiumSuiteGrid';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { SetupTimeline } from '@/components/sections/SetupTimeline';
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';
import { Settings, FileCheck, Users, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';
import { pickLocaleCopy, softwareOverviewCopy } from '@/lib/pageCopy';

const Software = () => {
  const { locale, isRTL } = useLocale();
  const copy = pickLocaleCopy(softwareOverviewCopy, locale);

  usePageMeta({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

  const foundationIcons = [Users, Settings, FileCheck, Headphones];

  return (
    <Layout motionLevel="subtle">
      <Hero
        eyebrow={copy.heroEyebrow}
        headline={copy.heroHeadline}
        subheadline={copy.heroSubheadline}
        primaryCta={{ label: copy.bookDemo, href: "/book?intent=suite" }}
        secondaryCta={{ label: copy.bookCall, href: "/book" }}
        credibilityStrip={copy.credibility}
        plate="astral"
        rightElement={<CyberGlobeHeader color="mint" speed={0.8} />}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            eyebrow={copy.productsEyebrow}
            headline={copy.productsHeadline}
            subheadline={copy.productsSubheadline}
          />
          <PremiumSuiteGrid products={copy.products} exploreLabel={copy.explorePrefix} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            eyebrow={copy.fitEyebrow}
            headline={copy.fitHeadline}
            subheadline={copy.fitSubheadline}
          />
          <ComparisonTable className="mt-8" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-heading-lg text-foreground mb-4">
                {copy.adoptionHeadline}
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
                {copy.adoptionBody}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {copy.foundation.map((feature, index) => {
                  const Icon = foundationIcons[index] ?? Settings;
                  return (
                    <div
                      key={feature.title}
                      className={cn(
                        'group p-5 rounded-xl',
                        'bg-card border border-ink/10',
                        'hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5',
                        'transition-all duration-300'
                      )}
                    >
                      <div className={cn(
                        'w-10 h-10 rounded-lg mb-3',
                        'bg-plate-astral text-mint',
                        'flex items-center justify-center',
                        'group-hover:scale-110 transition-transform duration-300'
                      )}>
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">
                {copy.timelineTitle}
              </h3>
              <SetupTimeline />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            {copy.expansionNote}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-[34px] bg-plate-astral px-6 py-10 md:px-10 md:py-12 lg:px-12 shadow-[0_22px_56px_-44px_rgba(8,15,32,0.24)]">
          <div className="max-w-xl">
            <p className="text-lg text-mint mb-2">
              {copy.pricingNote}
            </p>
            <p className="text-offwhite/70 mb-6">
              {copy.setupNote}
            </p>
            <PrimaryButton href="/book?intent=suite-pricing" textColor="astral">
              {copy.pricingCall}
            </PrimaryButton>
          </div>
          </div>
        </div>
      </section>

      <CTABand
        headline={copy.finalHeadline}
        description={copy.finalDescription}
        primaryCta={{ label: copy.bookCall, href: "/book" }}
        secondaryCta={{ label: copy.viewPricing, href: "/pricing" }}
        visualKey="suite-core"
        variant="dark"
      />
    </Layout>
  );
};

export default Software;
