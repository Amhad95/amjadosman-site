import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ProofTiles } from '@/components/sections/ProofTiles';
import { CTABand } from '@/components/sections/CTABand';
import { siteContent } from '@/lib/content';
import { CyberPyramid } from '@/components/ui/cyber-pyramid';

const Work = () => {
  const { work } = siteContent;
  return (
    <Layout>
      <Hero headline={work.hero.headline} subheadline={work.hero.subheadline} plate="blue" rightElement={<CyberPyramid speed={0.8} />} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ProofTiles tiles={work.tiles} />
        </div>
      </section>
      <CTABand headline={work.requestCta.headline} description={work.requestCta.description} primaryCta={work.requestCta.cta} variant="dark" />
    </Layout>
  );
};
export default Work;
