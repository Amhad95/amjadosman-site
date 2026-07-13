import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Layout } from "@/components/layout/Layout";
import { CTABand } from "@/components/sections/CTABand";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { getCanonicalWorkSlug, getPublishedWorkCases, getWorkCaseBySlug } from "@/data/workCasesDatabase";
import { useLocale } from "@/lib/locale";
import { useSiteContent } from "@/lib/content";
import { usePageMeta } from "@/hooks/use-page-meta";
import { cn } from "@/lib/utils";
import { ArrowLeft, ImageIcon, Maximize2 } from "lucide-react";
import { workDetailCopy } from "@/lib/detailPageCopy";
import {
  CaseStudyContentBlock,
  CaseStudyMedia,
  resolveLocalizedWorkCase,
} from "@/lib/fallbackContent";
import { InlineMedia, MediaAsset, MediaLightbox } from "@/components/shared/MediaLightbox";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const canonicalSlug = getCanonicalWorkSlug(slug);
  const { locale, isRTL } = useLocale();
  const { common } = useSiteContent();
  const copy = workDetailCopy[locale];
  const [lightboxMedia, setLightboxMedia] = useState<MediaAsset | null>(null);
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

  const toMediaAsset = (media: CaseStudyMedia): MediaAsset => ({
    type: media.type,
    src: media.src,
    alt: media.alt || caseStudy?.title || "Case study media",
    poster: media.poster,
    caption: media.caption,
  });

  const renderMarkdown = (content: string) => (
    <ReactMarkdown
      components={{
        img: ({ node, ...props }) => {
          const media = {
            type: "image" as const,
            src: props.src || "",
            alt: props.alt || caseStudy.title,
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
      {content}
    </ReactMarkdown>
  );

  const renderContentBlock = (block: CaseStudyContentBlock, index: number) => {
    if (block.type === "text") {
      return <React.Fragment key={`text-${index}`}>{renderMarkdown(block.content)}</React.Fragment>;
    }

    if (block.type === "media-row") {
      return (
        <div key={`row-${index}`} className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {block.items.map((media, mediaIndex) => (
            <InlineMedia
              key={`${media.src}-${mediaIndex}`}
              media={toMediaAsset(media)}
              onOpen={setLightboxMedia}
              className="my-0"
            />
          ))}
        </div>
      );
    }

    return (
      <InlineMedia
        key={`${block.type}-${block.src}-${index}`}
        media={toMediaAsset(block)}
        onOpen={setLightboxMedia}
      />
    );
  };

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

  if (canonicalSlug && canonicalSlug !== slug) {
    return <Navigate to={`/work/${canonicalSlug}`} replace />;
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
        <section className="bg-muted">
          <div className="relative min-h-[50vh] overflow-hidden md:min-h-[75vh]">
            {caseStudy.thumbnail_url ? (
              <button
                type="button"
                className="group relative block h-[50vh] w-full cursor-zoom-in overflow-hidden md:h-[75vh]"
                onClick={() => setLightboxMedia({ type: "image", src: caseStudy.thumbnail_url!, alt: caseStudy.title })}
                aria-label={`Open ${caseStudy.title} cover image`}
              >
                <img
                  src={caseStudy.thumbnail_url}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />
                <span className="absolute bottom-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-ink/55 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
            ) : (
              <div className="flex min-h-[50vh] items-center justify-center bg-muted text-muted-foreground md:min-h-[75vh]">
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
            {caseStudy.content_blocks.length > 0
              ? caseStudy.content_blocks.map(renderContentBlock)
              : renderMarkdown(caseStudy.content || "")}
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
                  onClick={() => setLightboxMedia({ type: "image", src: image, alt: `${caseStudy.title} ${index + 1}` })}
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
      <MediaLightbox media={lightboxMedia} onOpenChange={setLightboxMedia} />
    </Layout>
  );
};

export default WorkDetail;
