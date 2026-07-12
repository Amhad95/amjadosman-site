import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Steps } from '@/components/sections/Steps';
import { CTABand } from '@/components/sections/CTABand';
import { useSiteContent } from '@/lib/content';
import { CyberHeart } from '@/components/ui/cyber-heart';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useLocale } from '@/lib/locale';

const About = () => {
  const { about } = useSiteContent();
  const { locale } = useLocale();
  usePageMeta({ title: `${about.hero.headline} | Amjad Osman`, description: about.hero.subheadline });

  return (
    <Layout>
      <Hero
        eyebrow={about.hero.eyebrow}
        headline={about.hero.headline}
        subheadline={about.hero.subheadline}
        credibilityStrip={about.hero.credibilityStrip}
        primaryCta={about.hero.primaryCta}
        secondaryCta={about.hero.secondaryCta}
        plate="burgundy"
        rightElement={<CyberHeart speed={0.8} />}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeader
                eyebrow={about.story.eyebrow}
                headline={about.story.headline}
                subheadline={about.story.subheadline}
                variant="poster"
              />
            </div>

            <div>
              <div className="space-y-5 max-w-2xl">
                {about.story.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body-lg text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="colored-surface-shadow rounded-[34px] bg-plate-burgundy px-6 py-10 md:px-10 md:py-12 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-start">
            <div className="section-intro-copy">
              <p className="text-xs uppercase tracking-[0.22em] text-offwhite/55 font-semibold mb-4">
                {about.drivers.eyebrow}
              </p>
              <h2 className="font-serif text-poster-lg text-mint mb-5">
                {about.drivers.headline}
              </h2>
              <p className="text-subheadline text-mint/80">
                {about.drivers.subheadline}
              </p>
            </div>

            <div className="border-y border-white/10">
              {about.drivers.items.map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/10 py-5 last:border-b-0"
                >
                  <span className="font-mono text-sm text-offwhite/40 mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-heading-md text-mint mb-2">{item.title}</h3>
                    <p className="text-body-md text-offwhite/80">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeader
                eyebrow={about.fit.eyebrow}
                headline={about.fit.headline}
                subheadline={about.fit.subheadline}
                variant="poster"
              />
            </div>

            <div className="border-t border-ink/10">
              {about.fit.items.map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-ink/10 py-5 last:border-b-0"
                >
                  <span className="font-mono text-sm text-foreground/35 mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-heading-md text-foreground mb-2">{item.title}</h3>
                    <p className="text-body-md text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeader
                eyebrow={about.workingWithUs.eyebrow}
                headline={about.workingWithUs.headline}
                subheadline={about.workingWithUs.subheadline}
                variant="poster"
              />
              <Steps steps={about.workingWithUs.steps} />
            </div>

            <div className="rounded-[30px] border border-ink/10 bg-card p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-4">
                {about.workingWithUs.expectationsTitle}
              </p>
              <div className="border-t border-ink/10">
                {about.workingWithUs.expectations.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-4 border-b border-ink/10 py-4 last:border-b-0"
                  >
                    <span className="font-mono text-sm text-foreground/40 mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-body-md text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline={about.cta.headline}
        description={about.cta.description}
        primaryCta={about.cta.primaryCta}
        secondaryCta={about.cta.secondaryCta}
        visualKey="north-star"
        variant="dark"
      />
    </Layout>
  );
};

export default About;
