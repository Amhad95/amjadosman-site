import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/layout/Layout';
import { CTABand } from '@/components/sections/CTABand';
import { Skeleton } from '@/components/ui/skeleton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import ReactMarkdown from 'react-markdown';
import { fallbackArticles, resolveLocalizedArticle } from '@/lib/fallbackContent';
import { useLocale } from '@/lib/locale';
import { useSiteContent } from '@/lib/content';
import { usePageMeta } from '@/hooks/use-page-meta';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, isRTL } = useLocale();
  const { common } = useSiteContent();
  const fallbackArticle = fallbackArticles.find((item) => item.slug === slug);

  const { data: article, isLoading, isError } = useQuery({
    queryKey: ['article', slug, locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const resolvedArticle = article
    ? resolveLocalizedArticle(article, locale)
    : fallbackArticle
      ? resolveLocalizedArticle(fallbackArticle, locale)
      : null;

  usePageMeta({
    title: resolvedArticle
      ? `${resolvedArticle.title} | ${locale === 'ar' ? 'موارد ADSI' : 'ADSI Resources'}`
      : locale === 'ar'
        ? 'المقال | ADSI'
        : 'Article | ADSI',
    description: resolvedArticle?.excerpt,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
          <Skeleton className="h-8 w-1/3 mb-4" />
          <Skeleton className="h-12 w-full mb-6" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5 mt-2" />
          <div className="mt-12 space-y-4">
            {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-4 w-full" />)}
          </div>
        </div>
      </Layout>
    );
  }

  if ((isError && !fallbackArticle) || (!isLoading && !resolvedArticle)) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-24 max-w-3xl text-center">
          <h1 className="font-serif text-heading-lg mb-4">{common.articleNotFound}</h1>
          <p className="text-muted-foreground mb-8">{common.articleUnavailable}</p>
          <SecondaryButton href="/resources">{common.backToResources}</SecondaryButton>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Article header */}
      <section className="bg-background pt-16 md:pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link
            to="/resources"
            className={cn(
              "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors",
              isRTL && "flex-row-reverse"
            )}
          >
            <ArrowLeft className={cn("h-4 w-4", isRTL && "rotate-180")} />
            {common.backToResources}
          </Link>
          {resolvedArticle.category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded mb-4">
              {resolvedArticle.category}
            </span>
          )}
          <h1 className="font-serif text-poster-lg text-foreground mb-4 leading-tight">
            {resolvedArticle.title}
          </h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed">{resolvedArticle.excerpt}</p>
        </div>
      </section>

      {/* Thumbnail */}
      {resolvedArticle.thumbnail_url && (
        <div className="container mx-auto px-4 md:px-6 max-w-3xl mb-8">
          <img
            src={resolvedArticle.thumbnail_url}
            alt={resolvedArticle.title}
            className="w-full rounded-2xl object-cover aspect-video"
          />
        </div>
      )}

      {/* Article body */}
      <section className="bg-background py-8 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {resolvedArticle.body ? (
            <div className={cn(
              "prose prose-base max-w-none",
              isRTL && "text-right"
            ) + `
              prose-headings:font-serif prose-headings:text-foreground
              prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-h3:mt-8
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:leading-relaxed prose-li:text-base
              prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-muted prose-pre:border prose-pre:border-border
              prose-blockquote:border-l-4 prose-blockquote:border-border prose-blockquote:text-muted-foreground
              prose-hr:border-border`}>
              <ReactMarkdown>{resolvedArticle.body}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-muted-foreground">
              {locale === 'ar'
                ? 'هذا الملخص متاح حالياً. تواصل معنا إذا كنت تريد ملاحظات التنفيذ الكاملة.'
                : 'This article summary is available now. Reach out if you want the full implementation notes.'}
            </p>
          )}
        </div>
      </section>

      <CTABand
        headline={common.resourceCtaHeadline}
        description={common.resourceCtaDescription}
        primaryCta={{ label: locale === 'ar' ? 'احجز مكالمة' : 'Book a Call', href: '/book' }}
        secondaryCta={{ label: locale === 'ar' ? 'عرض الأسعار' : 'View pricing', href: '/pricing' }}
        visualKey="insight-lens"
        variant="dark"
      />
    </Layout>
  );
};

export default ArticleDetail;
