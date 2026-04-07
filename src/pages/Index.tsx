import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ServiceCardGrid } from '@/components/sections/ServiceCardGrid';
import { ProofTiles } from '@/components/sections/ProofTiles';
import { ToolList } from '@/components/sections/ToolList';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { NeuralLattice } from '@/components/shared/NeuralLattice';
import { useSiteContent } from '@/lib/content';
import { OutcomesImpactSection } from '@/components/sections/OutcomesImpactSection';
import { DeliveryProcessInteractive } from '@/components/sections/DeliveryProcessInteractive';


const Index = () => {
  const { home } = useSiteContent();

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
          <SectionHeader
            eyebrow={home.whatWeDeliver.eyebrow}
            headline={home.whatWeDeliver.headline}
            subheadline={home.whatWeDeliver.subheadline}
            variant="poster"
          />
          <ServiceCardGrid items={home.whatWeDeliver.cards} />
          <div className="mt-8 text-center">
            <SecondaryButton href={home.whatWeDeliver.cta.href}>
              {home.whatWeDeliver.cta.label}
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <OutcomesImpactSection />

      {/* How We Work */}
      <DeliveryProcessInteractive />

      {/* Proof Tiles */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={home.proofTiles.eyebrow}
            headline={home.proofTiles.headline}
            subheadline={home.proofTiles.subheadline}
            variant="poster"
          />
          <ProofTiles
            tiles={home.proofTiles.tiles.map((tile) => ({
              ...tile,
              cta: home.proofTiles.tileCta,
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
            eyebrow={home.aiTools.eyebrow}
            headline={home.aiTools.headline}
            subheadline={home.aiTools.subheadline}
            variant="poster"
          />
          <ToolList tools={home.aiTools.tools.map(t => ({ title: t.title, description: t.description }))} variant="preview" />
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
        description={home.finalCta.description}
        primaryCta={home.finalCta.primaryCta}
        secondaryCta={home.finalCta.secondaryCta}
        visualKey="signal-core"
        variant="dark"
      />
    </Layout>
  );
};

export default Index;
