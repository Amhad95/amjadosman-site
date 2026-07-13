import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, BarChart3, Bot, ClipboardList, Database, FileCheck2, LayoutTemplate, Maximize2, MonitorCog, Workflow } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTABand } from '@/components/sections/CTABand';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { fallbackArticles, resolveLocalizedArticle } from '@/lib/fallbackContent';
import { useLocale } from '@/lib/locale';
import { useSiteContent } from '@/lib/content';
import { usePageMeta } from '@/hooks/use-page-meta';
import { cn } from '@/lib/utils';
import { articleDetailCopy } from '@/lib/detailPageCopy';
import { MediaAsset, MediaLightbox } from '@/components/shared/MediaLightbox';

const articleLeadIcons = {
  'Website Strategy': LayoutTemplate,
  Operations: ClipboardList,
  'AI Automation': Bot,
  'Operations Systems': Database,
  'Data and Reporting': BarChart3,
  Automation: Workflow,
  'Managed Software': MonitorCog,
  'Commercial Systems': ClipboardList,
  'Delivery Systems': FileCheck2,
};

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, isRTL } = useLocale();
  const { common } = useSiteContent();
  const copy = articleDetailCopy[locale];
  const [lightboxMedia, setLightboxMedia] = useState<MediaAsset | null>(null);
  const fallbackArticle = fallbackArticles.find((item) => item.slug === slug);
  const resolvedArticle = fallbackArticle ? resolveLocalizedArticle(fallbackArticle, locale) : null;
  const relatedArticles = fallbackArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => resolveLocalizedArticle(item, locale));
  const readingMinutes = resolvedArticle ? Math.max(1, Math.round(resolvedArticle.body.length / 1100)) : 1;
  const publishedDate = resolvedArticle
    ? new Date(resolvedArticle.created_at).toLocaleDateString(locale === 'ar' ? 'ar-EG' : locale, { year: 'numeric', month: 'short', day: 'numeric' })
    : '';
  const LeadIcon = articleLeadIcons[resolvedArticle?.category as keyof typeof articleLeadIcons] ?? Workflow;

  usePageMeta({
    title: resolvedArticle ? `${resolvedArticle.title} | Amjad Osman Resources` : copy.metaFallback,
    description: resolvedArticle?.excerpt,
  });

  if (!resolvedArticle) {
    return (
      <Layout>
        <div className="container mx-auto max-w-3xl px-4 py-24 text-center md:px-6">
          <h1 className="mb-4 font-serif text-heading-lg">{common.articleNotFound}</h1>
          <p className="mb-8 text-muted-foreground">{common.articleUnavailable}</p>
          <SecondaryButton href="/resources">{common.backToResources}</SecondaryButton>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-background pb-12 pt-24 md:pt-28">
        <div className="container mx-auto px-6 md:px-6">
          <Link to="/resources" className={cn('mb-10 inline-flex items-center gap-2 rounded-lg border border-plate-emerald/60 bg-plate-emerald/10 px-3 py-2 text-sm font-semibold text-plate-emerald transition-colors hover:border-plate-emerald hover:bg-plate-emerald/15', isRTL && 'flex-row-reverse')}>
            <ArrowLeft className={cn('h-4 w-4', isRTL && 'rotate-180')} />
            {common.backToResources}
          </Link>
          <div className="mx-auto max-w-4xl text-center">
            {resolvedArticle.category && <span className="mb-6 inline-block rounded-full border border-plate-violet/20 bg-plate-violet/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-plate-violet">{resolvedArticle.category}</span>}
            <h1 className="mb-6 font-serif text-poster-lg leading-[1.05] text-foreground md:text-[5rem]">{resolvedArticle.title}</h1>
            <p className="mx-auto max-w-3xl text-body-lg leading-relaxed text-muted-foreground">{resolvedArticle.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="relative min-h-[260px] overflow-hidden md:min-h-[440px]">
          {resolvedArticle.thumbnail_url ? (
            <button
              type="button"
              className="group relative block min-h-[260px] w-full cursor-zoom-in overflow-hidden md:min-h-[440px]"
              onClick={() => setLightboxMedia({ type: 'image', src: resolvedArticle.thumbnail_url!, alt: resolvedArticle.title })}
              aria-label={`Open ${resolvedArticle.title} cover image`}
            >
              <img src={resolvedArticle.thumbnail_url} alt={resolvedArticle.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]" />
              <span className="absolute bottom-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-ink/55 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          ) : (
            <div className="flex min-h-[260px] flex-col items-center justify-center bg-plate-emerald p-8 text-center text-mint md:min-h-[440px] md:p-12">
              <LeadIcon className="mb-6 h-20 w-20 md:h-28 md:w-28" strokeWidth={1.25} />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-mint/75">
                {resolvedArticle.category}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="detail-reading-section bg-background pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:px-6 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,48rem)_minmax(0,1fr)] xl:gap-20">
          {resolvedArticle.body ? (
            <div className={cn('prose prose-lg w-full max-w-[48rem] prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-plate-violet prose-strong:text-foreground prose-li:leading-relaxed prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-pre:border prose-pre:border-border prose-pre:bg-muted prose-blockquote:border-l-4 prose-blockquote:border-border prose-blockquote:text-muted-foreground', isRTL && 'me-auto text-right')}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ node, ...props }) => {
                    const media = {
                      type: 'image' as const,
                      src: props.src || '',
                      alt: props.alt || resolvedArticle.title,
                    };

                    return (
                      <span className="my-8 block">
                        <button
                          type="button"
                          className="block w-full cursor-zoom-in text-left"
                          onClick={() => setLightboxMedia(media)}
                          aria-label={`Open ${media.alt}`}
                        >
                          <img
                            {...props}
                            src={media.src}
                            alt={media.alt}
                            className="block h-auto max-h-[38rem] w-full object-contain transition-transform duration-500 hover:scale-[1.005]"
                          />
                        </button>
                      </span>
                    );
                  },
                }}
              >
                {resolvedArticle.body}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-muted-foreground">{copy.summaryFallback}</p>
          )}

          <aside className="h-fit rounded-[26px] border border-ink/10 bg-muted/40 p-6 shadow-sm lg:sticky lg:top-24 xl:w-full xl:justify-self-end">
            <h2 className="mb-6 font-serif text-heading-md text-foreground">{copy.glance}</h2>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              <div className="py-5"><dt className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.category}</dt><dd className="text-sm font-medium leading-relaxed text-foreground">{resolvedArticle.category}</dd></div>
              <div className="py-5"><dt className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.published}</dt><dd className="text-sm font-medium leading-relaxed text-foreground">{publishedDate}</dd></div>
              <div className="py-5"><dt className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.reading}</dt><dd className="text-sm font-medium leading-relaxed text-foreground">{readingMinutes} {copy.readingUnit}</dd></div>
            </dl>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.relatedTools}</h3>
              <div className="mt-3 space-y-2">
                <Link to="/tools/dashboard-builder" className="block rounded-lg border border-plate-violet/20 bg-background px-3 py-2 text-sm font-medium text-foreground hover:border-plate-violet/50">{copy.toolLabels.dashboard}</Link>
                <Link to="/tools/process-mapper" className="block rounded-lg border border-plate-violet/20 bg-background px-3 py-2 text-sm font-medium text-foreground hover:border-plate-violet/50">{copy.toolLabels.process}</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="border-t border-ink/5 bg-muted py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-6">
            <h2 className="mb-8 text-center font-serif text-heading-lg text-foreground">
              {copy.readNext}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  to={`/resources/${item.slug}`}
                  className="group rounded-[24px] border border-ink/10 bg-card p-5 shadow-sm transition-colors hover:border-plate-violet/30"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-plate-violet">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-serif text-heading-sm text-foreground transition-colors group-hover:text-lavender">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand headline={common.resourceCtaHeadline} description={common.resourceCtaDescription} primaryCta={{ label: copy.bookCall, href: '/book' }} secondaryCta={{ label: copy.viewPricing, href: '/pricing' }} visualKey="insight-lens" variant="dark" />
      <MediaLightbox media={lightboxMedia} onOpenChange={setLightboxMedia} />
    </Layout>
  );
};

export default ArticleDetail;
