import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { siteContent } from '@/lib/content';
import { Check } from 'lucide-react';

const Software = () => {
  const { software } = siteContent;

  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline={software.hero.headline}
        subheadline={software.hero.subheadline}
        primaryCta={software.hero.primaryCta}
        secondaryCta={software.hero.secondaryCta}
        plate="astral"
      />

      {/* Core Modules */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline={software.modules.headline} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {software.modules.items.map((module, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 border border-ink/10"
              >
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-mint flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {module.note && (
                  <p className="mt-4 text-sm text-lavender italic">{module.note}</p>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-body-md text-muted-foreground italic">
            {software.modules.keyLine}
          </p>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline={software.differentiator.headline} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {software.differentiator.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={20} className="text-mint flex-shrink-0 mt-0.5" />
                <span className="text-body-md text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 md:py-24 bg-plate-astral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl">
            <p className="text-lg text-mint mb-2">{software.pricing.note}</p>
            <p className="text-offwhite/70 mb-6">{software.pricing.setupNote}</p>
            <PrimaryButton href={software.pricing.cta.href}>
              {software.pricing.cta.label}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline="Ready to get started?"
        primaryCta={{ label: "Book a Call", href: "/book" }}
        variant="dark"
      />
    </Layout>
  );
};

export default Software;
