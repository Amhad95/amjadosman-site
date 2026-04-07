import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/layout/Layout';
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

interface Article {
  id: string;
  title: string;
  title_ar?: string | null;
  slug: string;
  excerpt: string;
  excerpt_ar?: string | null;
  thumbnail_url: string | null;
  category: string | null;
  category_ar?: string | null;
  created_at: string;
}

const ArticleCard: React.FC<{ article: ResolvedArticle }> = ({ article }) => {
  const { locale, isRTL } = useLocale();

  return (
  <Link
    to={`/resources/${article.slug}`}
    className={cn(
      "group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200",
      isRTL && "text-right"
    )}
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
      {article.category && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 bg-muted px-2 py-0.5 rounded w-fit">
          {article.category}
        </span>
      )}
      <h3 className="font-serif text-heading-sm text-foreground mb-3 group-hover:text-foreground/80 transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-body-sm text-muted-foreground flex-1 line-clamp-3">{article.excerpt}</p>
      <span className="mt-4 text-sm font-semibold text-foreground group-hover:underline">
        {locale === 'ar' ? 'اقرأ المقال' : 'Read article'}
      </span>
    </div>
  </Link>
  );
};

const Resources = () => {
  const { resources, common } = useSiteContent();
  const { locale } = useLocale();

  usePageMeta({
    title: locale === 'ar' ? 'الموارد | ADSI' : 'Resources | ADSI',
    description: resources.hero.subheadline,
  });

  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles', locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('id, title, title_ar, slug, excerpt, excerpt_ar, thumbnail_url, category, category_ar, created_at')
        .eq('published', true)
        .order('sort_order', { ascending: true });
      if (error) throw error;
      return data as Article[];
    },
  });

  const resolvedArticles = (articles && articles.length > 0 ? articles : fallbackArticles).map((article) =>
    resolveLocalizedArticle(article, locale)
  );
  const hasArticles = resolvedArticles.length > 0;

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline={resources.hero.headline}
            subheadline={resources.hero.subheadline}
            align="center"
            variant="poster"
          />

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-muted rounded-2xl animate-pulse aspect-[4/3]" />
              ))}
            </div>
          )}

          {!isLoading && hasArticles && (
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" stagger={72}>
              {resolvedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </RevealGroup>
          )}

          {!isLoading && !hasArticles && (
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
        primaryCta={{ label: locale === 'ar' ? 'احجز مكالمة' : 'Book a Call', href: '/book' }}
        secondaryCta={{ label: locale === 'ar' ? 'عرض الأسعار' : 'View pricing', href: '/pricing' }}
        visualKey="archive-beacon"
        variant="dark"
      />
    </Layout>
  );
};

export default Resources;
