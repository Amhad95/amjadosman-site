import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/layout/Layout';
import { CTABand } from '@/components/sections/CTABand';
import { Skeleton } from '@/components/ui/skeleton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import ReactMarkdown from 'react-markdown';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: article, isLoading, isError } = useQuery({
    queryKey: ['article', slug],
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

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | ADSI Resources`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', article.excerpt);
    }
  }, [article]);

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

  if (isError || !article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-24 max-w-3xl text-center">
          <h1 className="font-serif text-heading-lg mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">This article doesn't exist or has been removed.</p>
          <SecondaryButton href="/resources">Back to Resources</SecondaryButton>
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
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            ← Back to Resources
          </Link>
          {article.category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded mb-4">
              {article.category}
            </span>
          )}
          <h1 className="font-serif text-poster-lg text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
        </div>
      </section>

      {/* Thumbnail */}
      {article.thumbnail_url && (
        <div className="container mx-auto px-4 md:px-6 max-w-3xl mb-8">
          <img
            src={article.thumbnail_url}
            alt={article.title}
            className="w-full rounded-2xl object-cover aspect-video"
          />
        </div>
      )}

      {/* Article body */}
      <section className="bg-background py-8 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {article.body ? (
            <div className="prose prose-base max-w-none
              prose-headings:font-serif prose-headings:text-foreground
              prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-h3:mt-8
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:leading-relaxed prose-li:text-base
              prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-muted prose-pre:border prose-pre:border-border
              prose-blockquote:border-l-4 prose-blockquote:border-border prose-blockquote:text-muted-foreground
              prose-hr:border-border">
              <ReactMarkdown>{article.body}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-muted-foreground">Full content coming soon.</p>
          )}
        </div>
      </section>

      <CTABand
        headline="Need help implementing this?"
        description="We build the systems and infrastructure described in this guide. Fixed scope, clean handover."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default ArticleDetail;
