import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Steps } from '@/components/sections/Steps';
import { CTABand } from '@/components/sections/CTABand';
import { useSiteContent } from '@/lib/content';
import { KnotAnimation } from '@/components/ui/knot-animation';

const Process = () => {
  const { process } = useSiteContent();
  return (
    <Layout>
      <Hero
        eyebrow={process.hero.eyebrow}
        headline={process.hero.headline}
        subheadline={process.hero.subheadline}
        credibilityStrip={process.hero.credibilityStrip}
        plate="emerald"
        rightElement={<KnotAnimation speedA={0.025} speedB={0.012} />}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8 max-w-3xl">
            {process.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-mint text-foreground flex items-center justify-center font-semibold flex-shrink-0">{step.number}</div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <p className="text-sm text-mint font-medium">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand
        headline={process.cta.headline}
        description={process.cta.description}
        primaryCta={process.cta.primaryCta}
        secondaryCta={process.cta.secondaryCta}
        visualKey="flow-gyre"
        variant="dark"
      />
    </Layout>
  );
};
export default Process;
