import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ToolList } from '@/components/sections/ToolList';
import { EmailCapture } from '@/components/sections/EmailCapture';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { KnotAnimation } from '@/components/ui/knot-animation';
import { useSiteContent } from '@/lib/content';
import { useLocale } from '@/lib/locale';

const Tools = () => {
  const { tools } = useSiteContent();
  const { locale } = useLocale();

  return (
    <Layout motionLevel="subtle">
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
          <SectionHeader
            headline={locale === 'ar' ? 'الأدوات المتاحة' : 'Available tools'}
            subheadline={locale === 'ar' ? 'اختر أداة للبدء' : 'Select a tool to get started'}
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
        headline={locale === 'ar' ? 'انتقل من التدقيق إلى التنفيذ.' : 'Move from audit to build.'}
        description={
          locale === 'ar'
            ? 'استخدم الأداة الآن، ثم احجز مكالمة إذا أردت أن ننفذها لك.'
            : 'Use the tool now, then book a call if you want us to implement it.'
        }
        primaryCta={{ label: locale === 'ar' ? 'احجز مكالمة' : 'Book a Call', href: "/book" }}
        secondaryCta={{ label: locale === 'ar' ? 'عرض الأسعار' : 'View pricing', href: "/pricing" }}
        visualKey="logic-knot"
        variant="dark"
      />
    </Layout>
  );
};

export default Tools;
