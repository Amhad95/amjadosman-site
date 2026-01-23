import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CardGrid } from '@/components/sections/CardGrid';
import { Steps } from '@/components/sections/Steps';
import { ProofTiles } from '@/components/sections/ProofTiles';
import { ToolList } from '@/components/sections/ToolList';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { NeuralLattice } from '@/components/shared/NeuralLattice';
import { siteContent } from '@/lib/content';

const Index = () => {
  const { home } = siteContent;

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        headline={home.hero.headline}
        subheadline={home.hero.subheadline}
        credibilityStrip={home.hero.credibilityStrip}
        primaryCta={home.hero.primaryCta}
        secondaryCta={home.hero.secondaryCta}
        plate="violet"
        rightElement={<NeuralLattice color="mint" speed={0.8} />}
      />

      {/* What We Deliver */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline={home.whatWeDeliver.headline} />
          <CardGrid items={home.whatWeDeliver.cards} columns={3} />
          <div className="mt-8 text-center">
            <SecondaryButton href={home.whatWeDeliver.cta.href}>
              {home.whatWeDeliver.cta.label}
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline={home.outcomes.headline} />
          <ul className="space-y-4 max-w-2xl">
            {home.outcomes.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-mint flex-shrink-0 mt-2" />
                <span className="text-body-lg text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline={home.howWeWork.headline} />
          <Steps steps={home.howWeWork.steps} />
          <div className="mt-12 text-center">
            <SecondaryButton href={home.howWeWork.cta.href}>
              {home.howWeWork.cta.label}
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Proof Tiles */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline={home.proofTiles.headline} />
          <ProofTiles
            tiles={home.proofTiles.tiles.map((tile) => ({
              ...tile,
              cta: 'View sample',
              href: '/work',
            }))}
          />
          <div className="mt-8 text-center">
            <SecondaryButton href={home.proofTiles.cta.href}>
              {home.proofTiles.cta.label}
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* AI Tools Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline={home.aiTools.headline}
            subheadline={home.aiTools.subheadline}
          />
          <ToolList tools={home.aiTools.tools} variant="preview" />
          <div className="mt-8 text-center">
            <PrimaryButton href={home.aiTools.cta.href}>
              {home.aiTools.cta.label}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-16 md:py-24 bg-plate-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-poster-lg text-mint mb-4">
              {home.pricingTeaser.headline}
            </h2>
            <p className="text-body-lg text-offwhite/80 mb-8">
              {home.pricingTeaser.description}
            </p>
            <PrimaryButton href={home.pricingTeaser.cta.href} textColor="navy">
              {home.pricingTeaser.cta.label}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline={home.finalCta.headline}
        primaryCta={home.finalCta.cta}
        variant="dark"
      />
    </Layout>
  );
};

export default Index;
