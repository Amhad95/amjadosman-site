import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { siteContent } from '@/lib/content';

const Resources = () => {
  const { resources } = siteContent;
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeader headline={resources.hero.headline} subheadline={resources.hero.subheadline} align="center" variant="poster" />
          <div className="bg-muted rounded-2xl p-12 max-w-xl mx-auto">
            <p className="text-muted-foreground mb-6">{resources.emptyState.message}</p>
            <SecondaryButton href={resources.emptyState.cta.href}>{resources.emptyState.cta.label}</SecondaryButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Resources;
