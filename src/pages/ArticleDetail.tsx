import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTABand } from '@/components/sections/CTABand';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { fallbackArticles, resolveLocalizedArticle } from '@/lib/fallbackContent';
import { useLocale } from '@/lib/locale';
import { useSiteContent } from '@/lib/content';
import { usePageMeta } from '@/hooks/use-page-meta';
import { cn } from '@/lib/utils';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, isRTL } = useLocale();
  const { common } = useSiteContent();
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

  usePageMeta({
    title: resolvedArticle ? `${resolvedArticle.title} | Amjad Osman Resources` : locale === 'ar' ? 'المقال | أمجد عثمان' : 'Article | Amjad Osman',
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

  const label = {
    glance: locale === 'ar' ? 'لمحة عن المقال' : locale === 'de' ? 'Zum Artikel' : locale === 'fr' ? "À propos de l'article" : locale === 'bg' ? 'За статията' : 'Article at a glance',
    category: locale === 'ar' ? 'التصنيف' : locale === 'de' ? 'Kategorie' : locale === 'fr' ? 'Catégorie' : locale === 'bg' ? 'Категория' : 'Category',
    published: locale === 'ar' ? 'نُشر' : locale === 'de' ? 'Veröffentlicht' : locale === 'fr' ? 'Publié' : locale === 'bg' ? 'Публикувано' : 'Published',
    reading: locale === 'ar' ? 'القراءة' : locale === 'de' ? 'Lesezeit' : locale === 'fr' ? 'Lecture' : locale === 'bg' ? 'Четене' : 'Reading time',
    relatedTools: locale === 'ar' ? 'أدوات مرتبطة' : locale === 'de' ? 'Verwandte Tools' : locale === 'fr' ? 'Outils associés' : locale === 'bg' ? 'Свързани инструменти' : 'Related tools',
    readNext: locale === 'ar' ? 'اقرأ أيضاً' : locale === 'de' ? 'Weiterlesen' : locale === 'fr' ? 'À lire aussi' : locale === 'bg' ? 'Още' : 'Read next',
  };

  return (
    <Layout>
      <section className="bg-background pb-12 pt-16 md:pt-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Link to="/resources" className={cn('mb-10 inline-flex items-center gap-2 rounded-lg border border-plate-violet bg-plate-violet px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-plate-violet/90', isRTL && 'flex-row-reverse')}>
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

      <section className="bg-background pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_280px] xl:gap-20">
          {resolvedArticle.body ? (
            <div className={cn('prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-plate-violet prose-strong:text-foreground prose-li:leading-relaxed prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-pre:border prose-pre:border-border prose-pre:bg-muted prose-blockquote:border-l-4 prose-blockquote:border-border prose-blockquote:text-muted-foreground', isRTL && 'text-right')}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{resolvedArticle.body}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-muted-foreground">{locale === 'ar' ? 'هذا الملخص متاح حالياً. تواصل معنا إذا كنت تريد ملاحظات التنفيذ الكاملة.' : 'This article summary is available now. Reach out if you want the full implementation notes.'}</p>
          )}

          <aside className="h-fit rounded-[26px] border border-ink/10 bg-muted/40 p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="mb-6 font-serif text-heading-sm text-foreground">{label.glance}</h2>
            <dl className="space-y-5">
              <div><dt className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label.category}</dt><dd className="text-sm font-medium text-foreground">{resolvedArticle.category}</dd></div>
              <div><dt className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label.published}</dt><dd className="text-sm font-medium text-foreground">{publishedDate}</dd></div>
              <div><dt className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label.reading}</dt><dd className="text-sm font-medium text-foreground">{readingMinutes} {locale === 'ar' ? 'دقائق' : locale === 'de' ? 'Minuten' : locale === 'fr' ? 'min' : locale === 'bg' ? 'мин' : 'min'}</dd></div>
            </dl>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label.relatedTools}</h3>
              <div className="mt-3 space-y-2">
                <Link to="/tools/dashboard-builder" className="block rounded-lg border border-plate-violet/20 bg-background px-3 py-2 text-sm font-medium text-foreground hover:border-plate-violet/50">Dashboard Builder</Link>
                <Link to="/tools/process-mapper" className="block rounded-lg border border-plate-violet/20 bg-background px-3 py-2 text-sm font-medium text-foreground hover:border-plate-violet/50">Process Mapper</Link>
              </div>
            </div>
            {relatedArticles.length > 0 && <div className="mt-8 border-t border-border pt-6"><h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label.readNext}</h3><div className="mt-3 space-y-3">{relatedArticles.map((item) => <Link key={item.id} to={`/resources/${item.slug}`} className="block text-sm font-medium leading-relaxed text-foreground hover:text-plate-violet">{item.title}</Link>)}</div></div>}
          </aside>
        </div>
      </section>

      <CTABand headline={common.resourceCtaHeadline} description={common.resourceCtaDescription} primaryCta={{ label: locale === 'ar' ? 'احجز مكالمة' : 'Book a Call', href: '/book' }} secondaryCta={{ label: locale === 'ar' ? 'عرض الأسعار' : 'View pricing', href: '/pricing' }} visualKey="insight-lens" variant="dark" />
    </Layout>
  );
};

export default ArticleDetail;
