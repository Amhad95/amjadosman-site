import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ToolList } from '@/components/sections/ToolList';
import { EmailCapture } from '@/components/sections/EmailCapture';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { KnotAnimation } from '@/components/ui/knot-animation';
import { siteContent } from '@/lib/content';

const Tools = () => {
  const { tools } = siteContent;

  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline={tools.hero.headline}
        subheadline={tools.hero.subheadline}
        primaryCta={tools.hero.primaryCta}
        secondaryCta={tools.hero.secondaryCta}
        plate="emerald"
        rightElement={<KnotAnimation speedA={0.03} speedB={0.015} />}
      />

      {/* Tool Listing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Available tools" />
          <ToolList
            tools={tools.list.map((tool) => ({
              title: tool.title,
              outputs: tool.outputs,
              whoFor: tool.whoFor,
              implementLink: tool.implementLink,
            }))}
            variant="full"
            plateColor="emerald"
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
        headline="Want implementation help?"
        primaryCta={{ label: "Book a Call", href: "/book" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        variant="dark"
      />
    </Layout>
  );
};

export default Tools;
