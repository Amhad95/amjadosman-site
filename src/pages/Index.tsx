import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ServiceCardGrid } from '@/components/sections/ServiceCardGrid';
import { ToolList } from '@/components/sections/ToolList';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { NeuralLattice } from '@/components/shared/NeuralLattice';
import { MatrixCodeBackground } from '@/components/shared/MatrixCodeBackground';
import { useSiteContent } from '@/lib/content';
import { OutcomesImpactSection } from '@/components/sections/OutcomesImpactSection';
import { DeliveryProcessInteractive } from '@/components/sections/DeliveryProcessInteractive';
import { WorkCaseCard } from '@/components/sections/WorkCaseCard';
import { InsightCard } from '@/components/sections/InsightCard';
import { fallbackArticles, resolveLocalizedArticle, resolveLocalizedWorkCase } from '@/lib/fallbackContent';
import { getFeaturedWorkCases } from '@/data/workCasesDatabase';
import { RevealGroup } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';
import { pickLocaleCopy, simplePageCopy } from '@/lib/pageCopy';
import { usePageMeta } from '@/hooks/use-page-meta';


const Index = () => {
  const { home, resources, tools } = useSiteContent();
  const { locale } = useLocale();
  const copy = pickLocaleCopy(simplePageCopy, locale);
  usePageMeta({ title: copy.homeTitle, description: home.hero.subheadline });
  const featuredCases = getFeaturedWorkCases()
    .slice(0, 6)
    .map((item) => resolveLocalizedWorkCase(item, locale));
  const featuredArticles = fallbackArticles
    .slice(0, 3)
    .map((item) => resolveLocalizedArticle(item, locale));

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

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={home.proofTiles.eyebrow}
            headline={home.proofTiles.headline}
            subheadline={home.proofTiles.subheadline}
            variant="poster"
          />
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10" stagger={78}>
            {featuredCases.map((item) => (
              <WorkCaseCard key={item.id} item={item} />
            ))}
          </RevealGroup>
          <div className="mt-8 text-center">
            <SecondaryButton href={home.proofTiles.cta.href}>
              {home.proofTiles.cta.label}
            </SecondaryButton>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={copy.insightsEyebrow}
            headline={copy.insightsHeadline}
            subheadline={resources.hero.subheadline}
            variant="poster"
          />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={78}>
            {featuredArticles.map((article) => (
              <InsightCard key={article.id} article={article} />
            ))}
          </RevealGroup>
          <div className="mt-8 text-center">
            <SecondaryButton href="/resources">{copy.viewInsights}</SecondaryButton>
          </div>
        </div>
      </section>

      {/* AI Tools Preview */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-background">
        <MatrixCodeBackground fontSize={19} color="hsla(275, 100%, 50%, 0.16)" speed={0.55} />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={home.aiTools.eyebrow}
            headline={home.aiTools.headline}
            subheadline={home.aiTools.subheadline}
            variant="poster"
          />
          <ToolList tools={tools.list} variant="preview" />
          <div className="mt-8 text-center">
            <PrimaryButton href={home.aiTools.cta.href}>
              {home.aiTools.cta.label}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="colored-surface-shadow rounded-[34px] bg-plate-navy px-6 py-10 md:px-10 md:py-12 lg:px-12">
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
