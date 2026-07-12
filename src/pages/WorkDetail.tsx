import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Layout } from "@/components/layout/Layout";
import { CTABand } from "@/components/sections/CTABand";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { resolveLocalizedWorkCase } from "@/lib/fallbackContent";
import { getPublishedWorkCases, getWorkCaseBySlug } from "@/data/workCasesDatabase";
import { useLocale } from "@/lib/locale";
import { useSiteContent } from "@/lib/content";
import { usePageMeta } from "@/hooks/use-page-meta";
import { cn } from "@/lib/utils";
import { ArrowLeft, ImageIcon, X } from "lucide-react";
import { workDetailCopy } from "@/lib/detailPageCopy";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, isRTL } = useLocale();
  const { common } = useSiteContent();
  const copy = workDetailCopy[locale];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const workCaseSources = getPublishedWorkCases();
  const fallbackCaseStudy = getWorkCaseBySlug(slug);
  const caseStudy = fallbackCaseStudy
    ? resolveLocalizedWorkCase(fallbackCaseStudy, locale)
    : null;
  const relatedCases = caseStudy
    ? workCaseSources
        .filter((item) => item.slug !== caseStudy.slug && item.client_group === caseStudy.client_group)
        .sort((a, b) => (a.case_series_order ?? 999) - (b.case_series_order ?? 999))
        .map((item) => resolveLocalizedWorkCase(item, locale))
    : [];

  usePageMeta({
    title: caseStudy
      ? `${caseStudy.title} | Amjad Osman`
      : copy.metaFallback,
    description: caseStudy?.description,
  });

  if (!caseStudy) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-24 max-w-3xl text-center">
          <h1 className="font-serif text-heading-lg mb-4">{common.caseStudyNotFound}</h1>
          <p className="text-muted-foreground mb-8">{common.caseStudyUnavailable}</p>
          <SecondaryButton href="/work">{common.backToWork}</SecondaryButton>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        
        {/* Top Header & Metadata */}
        <section className="bg-background pt-24 md:pt-28 pb-12">
          <div className="container mx-auto px-6 md:px-6">
            <Link
              to="/work"
              className={cn(
                "mb-10 inline-flex items-center gap-2 rounded-lg border border-plate-emerald/60 bg-plate-emerald/10 px-3 py-2 text-sm font-semibold text-plate-emerald transition-colors hover:border-plate-emerald hover:bg-plate-emerald/15",
                isRTL && "flex-row-reverse"
              )}
            >
              <ArrowLeft className={cn("h-4 w-4", isRTL && "rotate-180")} />
              {common.backToWork}
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              {caseStudy.category && (
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-plate-violet bg-plate-violet/10 border border-plate-violet/20 px-4 py-1.5 rounded-full mb-6">
                  {caseStudy.category}
                </span>
              )}
              <h1 className="font-serif text-poster-lg md:text-[5rem] text-foreground mb-6 leading-[1.05]">
                {caseStudy.title}
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {caseStudy.description}
              </p>
            </div>
          </div>
        </section>

        {/* Cinematic Hero Image */}
        <section className="bg-muted pb-12 pt-8 md:pb-20 md:pt-10">
          <div className="container mx-auto px-6 md:px-6">
            {caseStudy.thumbnail_url ? (
              <div 
                className="w-full h-[50vh] md:h-[75vh] rounded-[38px] overflow-hidden bg-muted relative shadow-[0_24px_64px_-46px_rgba(8,15,32,0.24)] cursor-zoom-in group"
                onClick={() => setLightboxImage(caseStudy.thumbnail_url!)}
              >
                <img
                  src={caseStudy.thumbnail_url}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            ) : (
              <div className="w-full h-[50vh] rounded-[38px] bg-muted flex items-center justify-center text-muted-foreground border border-ink/10">
                <ImageIcon className="h-12 w-12 opacity-50" />
              </div>
            )}
          </div>
        </section>

        {/* Markdown Content Area + Sidebar */}
        <section className="detail-reading-section bg-background pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:px-6 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,48rem)_minmax(0,1fr)] xl:gap-20">
          <div 
            className={cn(
              "prose prose-lg w-full max-w-[48rem] dark:prose-invert",
              "prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground",
              "prose-p:text-muted-foreground prose-p:leading-relaxed",
              "prose-a:text-mint hover:prose-a:text-mint/80",
              "prose-img:rounded-[28px] prose-img:shadow-xl",
              isRTL && "me-auto text-right"
            )}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    className="cursor-zoom-in hover:opacity-95 transition-opacity"
                    onClick={() => setLightboxImage(props.src || null)}
                    alt={props.alt || "Case study graphic"}
                  />
                ),
              }}
            >
              {caseStudy.content || ''}
            </ReactMarkdown>
          </div>

          <aside className="h-fit rounded-[26px] border border-ink/10 bg-muted/40 p-6 shadow-sm lg:sticky lg:top-24 xl:w-full xl:justify-self-end">
            <h2 className="mb-6 font-serif text-heading-md text-foreground">
              {copy.glance}
            </h2>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {[
                { label: copy.partner, value: caseStudy.partner },
                { label: copy.year, value: caseStudy.year },
                { label: copy.sector, value: caseStudy.sector },
                { label: copy.role, value: caseStudy.role },
                { label: copy.outcome, value: caseStudy.outcome },
              ]
                .filter((item) => item.value)
                .map((item) => (
                  <div key={item.label} className="py-5">
                    <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground leading-relaxed">{item.value}</dd>
                  </div>
                ))}
            </dl>
          </aside>
        </div>
        </section>
      </>

      {/* Expandable Image Gallery */}
      {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
        <section className="bg-muted py-16 md:py-24 border-t border-ink/5">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="font-serif text-heading-lg text-foreground mb-10 text-center">
              {copy.gallery}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {caseStudy.gallery_images.map((image, index) => (
                <div 
                  key={image} 
                  className="aspect-[4/3] overflow-hidden rounded-[30px] bg-card border border-ink/10 shadow-sm cursor-zoom-in group"
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image}
                    alt={`${caseStudy.title} ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedCases.length > 0 && (
        <section className="bg-background py-16 md:py-24 border-t border-ink/5">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="font-serif text-heading-lg text-foreground mb-8 text-center">
              {copy.related}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedCases.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="group rounded-[24px] border border-ink/10 bg-card p-5 shadow-sm transition-colors hover:border-plate-violet/30"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-plate-violet">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-serif text-heading-sm text-foreground group-hover:text-lavender">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABand
        headline={copy.ctaHeadline}
        description={copy.ctaDescription}
        primaryCta={{ label: copy.bookCall, href: "/book" }}
        secondaryCta={{ label: copy.viewPricing, href: "/pricing" }}
        visualKey="case-prism"
        variant="dark"
      />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={lightboxImage} 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300" 
            alt="Fullscreen preview" 
          />
        </div>
      )}
    </Layout>
  );
};

export default WorkDetail;
