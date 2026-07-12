import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { CTABand } from '@/components/sections/CTABand';
import { useSiteContent } from '@/lib/content';
import { fallbackArticles, resolveLocalizedArticle } from '@/lib/fallbackContent';
import { RevealGroup } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';
import { pickLocaleCopy, simplePageCopy } from '@/lib/pageCopy';
import { InsightCard } from '@/components/sections/InsightCard';

const Resources = () => {
  const { resources, common } = useSiteContent();
  const { locale } = useLocale();
  const copy = pickLocaleCopy(simplePageCopy, locale);

  usePageMeta({
    title: copy.resourcesTitle,
    description: resources.hero.subheadline,
  });

  const resolvedArticles = fallbackArticles.map((article) =>
    resolveLocalizedArticle(article, locale)
  );
  const hasArticles = resolvedArticles.length > 0;

  return (
    <Layout>
      <Hero
        eyebrow={resources.hero.eyebrow}
        headline={resources.hero.headline}
        subheadline={resources.hero.subheadline}
        credibilityStrip={resources.hero.credibilityStrip}
        plate="emerald"
        rightElement={<CyberGlobeHeader />}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={copy.insightsEyebrow}
            headline={copy.insightsHeadline}
            subheadline={resources.hero.subheadline}
            align="center"
            variant="poster"
          />

          {hasArticles && (
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" stagger={72}>
              {resolvedArticles.map((article) => (
                <InsightCard key={article.id} article={article} />
              ))}
            </RevealGroup>
          )}

          {!hasArticles && (
            <div className="bg-muted rounded-2xl p-12 max-w-xl mx-auto text-center mt-12">
              <p className="text-muted-foreground mb-6">{resources.emptyState.message}</p>
              <SecondaryButton href={resources.emptyState.cta.href}>
                {resources.emptyState.cta.label}
              </SecondaryButton>
            </div>
          )}
        </div>
      </section>

      <CTABand
        headline={common.resourceCtaHeadline}
        description={common.resourceCtaDescription}
        primaryCta={{ label: copy.bookCall, href: '/book' }}
        secondaryCta={{ label: copy.viewPricing, href: '/pricing' }}
        visualKey="archive-beacon"
        variant="dark"
      />
    </Layout>
  );
};

export default Resources;
