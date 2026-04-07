import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTABand } from "@/components/sections/CTABand";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { fallbackWorkCases, resolveLocalizedWorkCase } from "@/lib/fallbackContent";
import { useLocale } from "@/lib/locale";
import { useSiteContent } from "@/lib/content";
import { usePageMeta } from "@/hooks/use-page-meta";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, isRTL } = useLocale();
  const { common } = useSiteContent();
  const fallbackCaseStudy = fallbackWorkCases.find((item) => item.slug === slug);
  const caseStudy = fallbackCaseStudy
    ? resolveLocalizedWorkCase(fallbackCaseStudy, locale)
    : null;

  usePageMeta({
    title: caseStudy
      ? `${caseStudy.title} | ADSI`
      : locale === "ar"
        ? "دراسة الحالة | ADSI"
        : "Case Study | ADSI",
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
      <section className="bg-background pt-16 md:pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link
            to="/work"
            className={cn(
              "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors",
              isRTL && "flex-row-reverse"
            )}
          >
            <ArrowLeft className={cn("h-4 w-4", isRTL && "rotate-180")} />
            {common.backToWork}
          </Link>
          {caseStudy.category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded mb-4">
              {caseStudy.category}
            </span>
          )}
          <h1 className="font-serif text-poster-lg text-foreground mb-4 leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed max-w-3xl">
            {caseStudy.description}
          </p>
        </div>
      </section>

      <section className="bg-background py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
              {common.clientProfileLabel}
            </p>
            <p className="text-body-md text-muted-foreground leading-relaxed">
              {caseStudy.clientProfile}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
              {common.challengeLabel}
            </p>
            <p className="text-body-md text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-heading-lg text-foreground mb-8">{common.workSectionHeadline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-ink/10 rounded-2xl p-8">
              <h3 className="font-serif text-lg text-foreground mb-4">{common.workApproachLabel}</h3>
              <ul className="space-y-3">
                {caseStudy.approach.map((item) => (
                  <li key={item} className="text-body-md text-muted-foreground flex items-start gap-2">
                    <span className="text-mint mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-ink/10 rounded-2xl p-8">
              <h3 className="font-serif text-lg text-foreground mb-4">{common.workDeliverablesLabel}</h3>
              <ul className="space-y-3">
                {caseStudy.deliverables.map((item) => (
                  <li key={item} className="text-body-md text-muted-foreground flex items-start gap-2">
                    <span className="text-mint mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-heading-lg text-foreground mb-8">{common.workChangesLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.outcomes.map((item) => (
              <div key={item} className="bg-card border border-ink/10 rounded-2xl p-6">
                <p className="text-body-md text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline={locale === "ar" ? "حدد عملاً مشابهاً." : "Scope similar work."}
        description={locale === "ar"
          ? "سنصمم أول مرحلة حول اختناقك الحالي والجدول الزمني والسعر."
          : "We'll shape the first engagement around your bottleneck, timeline, and price."}
        primaryCta={{ label: locale === "ar" ? "احجز مكالمة" : "Book a Call", href: "/book" }}
        secondaryCta={{ label: locale === "ar" ? "عرض الأسعار" : "View pricing", href: "/pricing" }}
        visualKey="case-prism"
        variant="dark"
      />
    </Layout>
  );
};

export default WorkDetail;
