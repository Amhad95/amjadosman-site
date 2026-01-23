import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Steps } from '@/components/sections/Steps';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { siteContent } from '@/lib/content';

const Process = () => {
  const { process } = siteContent;
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline={process.hero.headline} subheadline={process.hero.subheadline} variant="poster" />
          <div className="space-y-8 max-w-3xl">
            {process.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-mint text-ink flex items-center justify-center font-semibold flex-shrink-0">{step.number}</div>
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
      <CTABand primaryCta={process.cta} variant="dark" />
    </Layout>
  );
};
export default Process;
