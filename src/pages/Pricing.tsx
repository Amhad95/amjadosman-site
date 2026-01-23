import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CyberEuro } from '@/components/ui/cyber-euro';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { DecisionHelper } from '@/components/sections/DecisionHelper';
import { IncludedStrip } from '@/components/sections/IncludedStrip';
import { PricingTable } from '@/components/sections/PricingTable';
import { CTABand } from '@/components/sections/CTABand';
import { siteContent } from '@/lib/content';

const Pricing = () => {
  const { pricing } = siteContent;

  const packageGroups = [
    {
      id: pricing.packages.externalCredibility.id,
      title: pricing.packages.externalCredibility.title,
      description: pricing.packages.externalCredibility.description,
      items: pricing.packages.externalCredibility.items,
    },
    {
      id: pricing.packages.internalExecution.id,
      title: pricing.packages.internalExecution.title,
      description: pricing.packages.internalExecution.description,
      items: pricing.packages.internalExecution.items,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline={pricing.hero.headline}
        subheadline={pricing.hero.subheadline}
        plate="navy"
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        rightElement={<CyberEuro speed={0.8} />}
      />

      {/* Decision Helper */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <DecisionHelper
            headline={pricing.decisionHelper.headline}
            options={pricing.decisionHelper.options}
          />
        </div>
      </section>

      {/* Included Strip */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <IncludedStrip
            headline={pricing.includedStrip.headline}
            items={pricing.includedStrip.items}
          />
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <PricingTable
            groups={packageGroups}
            foundation={pricing.packages.foundationBuild}
          />
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline={pricing.finalCta.headline}
        description="Book a short call and we will share a clear scope, timeline, and cost."
        primaryCta={pricing.finalCta.primaryCta}
        secondaryCta={pricing.finalCta.secondaryCta}
        variant="dark"
        size="large"
      />
    </Layout>
  );
};

export default Pricing;
