import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { CTABand } from '@/components/sections/CTABand';
import { siteContent } from '@/lib/content';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail_url: string | null;
  category: string | null;
  created_at: string;
}

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <Link
    to={`/resources/${article.slug}`}
    className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
  >
    {/* Thumbnail */}
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
        Read article →
      </span>
    </div>
  </Link>
);

const Resources = () => {
  const { resources } = siteContent;

  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('id, title, slug, excerpt, thumbnail_url, category, created_at')
        .eq('published', true)
        .order('sort_order', { ascending: true });
      if (error) throw error;
      return data as Article[];
    },
  });

  const hasArticles = articles && articles.length > 0;

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
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
        headline="Need help implementing any of this?"
        description="We build the systems, SOPs, and infrastructure described in these guides. Fixed scope, clean handover."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default Resources;
