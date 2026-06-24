import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { CTABand } from '@/components/sections/CTABand';
import { useSiteContent } from '@/lib/content';
import { Link } from 'react-router-dom';
import { fallbackArticles, resolveLocalizedArticle, type ResolvedArticle } from '@/lib/fallbackContent';
import { RevealGroup } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';
import { usePageMeta } from '@/hooks/use-page-meta';
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';
import { pickLocaleCopy, simplePageCopy } from '@/lib/pageCopy';

const ArticleCard: React.FC<{ article: ResolvedArticle }> = ({ article }) => {
  const { locale, isRTL } = useLocale();
  const copy = pickLocaleCopy(simplePageCopy, locale);

  return (
  <Link
    to={`/resources/${article.slug}`}
    className={cn(
      "group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200",
      isRTL && "text-right"
    )}
    dir={isRTL ? "rtl" : "ltr"}
  >
    <div className="aspect-video bg-muted overflow-hidden">
      {article.thumbnail_url ? (
        <img src={article.thumbnail_url} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/40 flex items-center justify-center">
          {article.category && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              {article.category}
            </span>
          )}
        </div>
      )}
    </div>
    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <div className="min-h-[28px] mb-2 flex items-start">
        {article.category && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded w-fit truncate max-w-full">
            {article.category}
          </span>
        )}
      </div>
      <h3 className="font-serif text-heading-sm text-foreground mb-3 group-hover:text-lavender transition-colors leading-snug line-clamp-3 min-h-[5.25rem]">
        {article.title}
      </h3>
      <p className="text-body-sm text-muted-foreground flex-1 line-clamp-3">{article.excerpt}</p>
      <span className="mt-4 text-sm font-semibold text-foreground group-hover:text-lavender transition-colors">
        {copy.readArticle}
      </span>
    </div>
  </Link>
  );
};

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
                <ArticleCard key={article.id} article={article} />
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
