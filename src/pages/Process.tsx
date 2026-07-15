import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { DeliveryProcessDocument } from '@/components/sections/DeliveryProcessDocument';
import { useSiteContent } from '@/lib/content';
import { usePageMeta } from '@/hooks/use-page-meta';

const Process = () => {
  const { process, home } = useSiteContent();
  const deliveryProcess = home.deliveryProcess;
  usePageMeta({ title: `${process.hero.headline} | Amjad Osman`, description: process.hero.subheadline });
  return (
    <Layout>
      <Hero
        eyebrow={deliveryProcess.eyebrow}
        headline={deliveryProcess.headline}
        subheadline={deliveryProcess.subheadline}
        credibilityStrip={process.hero.credibilityStrip}
        plate="emerald"
        size="compact"
      />
      <DeliveryProcessDocument deliveryProcess={deliveryProcess} />
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
