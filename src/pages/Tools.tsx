import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ToolList } from '@/components/sections/ToolList';
import { EmailCapture } from '@/components/sections/EmailCapture';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { MatrixCodeBackground } from '@/components/shared/MatrixCodeBackground';
import { KnotAnimation } from '@/components/ui/knot-animation';
import { useSiteContent } from '@/lib/content';
import { useLocale } from '@/lib/locale';
import { pickLocaleCopy, simplePageCopy } from '@/lib/pageCopy';

const Tools = () => {
  const { tools } = useSiteContent();
  const { locale } = useLocale();
  const copy = pickLocaleCopy(simplePageCopy, locale);

  return (
    <Layout motionLevel="subtle">
      {/* Hero */}
      <Hero
        eyebrow={copy.toolsEyebrow}
        headline={tools.hero.headline}
        subheadline={tools.hero.subheadline}
        credibilityStrip={copy.toolsStrip}
        primaryCta={tools.hero.primaryCta}
        secondaryCta={tools.hero.secondaryCta}
        plate="emerald"
        rightElement={<KnotAnimation speedA={0.03} speedB={0.015} />}
      />

      {/* Tool Listing */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-background">
        <MatrixCodeBackground fontSize={18} color="hsla(275, 100%, 50%, 0.15)" speed={0.55} />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={copy.toolsStart}
            headline={copy.toolsAvailable}
            subheadline={copy.toolsSubheadline}
          />
          <ToolList
            tools={tools.list.map((tool) => ({
              title: tool.title,
              description: tool.description,
              illustration: tool.illustration,
              href: tool.href,
            }))}
            variant="full"
          />
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <EmailCapture
            headline={tools.emailCapture.headline}
            description={tools.emailCapture.description}
            buttonLabel={tools.emailCapture.buttonLabel}
            successMessage={tools.emailCapture.successMessage}
            downloadLabel={tools.emailCapture.downloadLabel}
            followUpCta={tools.emailCapture.followUpCta}
          />
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline={copy.toolsCtaHeadline}
        description={copy.toolsCtaDescription}
        primaryCta={{ label: copy.bookCall, href: "/book" }}
        secondaryCta={{ label: copy.viewPricing, href: "/pricing" }}
        visualKey="logic-knot"
        variant="dark"
      />
    </Layout>
  );
};

export default Tools;
