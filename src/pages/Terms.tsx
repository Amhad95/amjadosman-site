import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { useSiteContent } from '@/lib/content';
import { LegalDocument } from '@/components/sections/LegalDocument';
import { legalPageCopy, pickLocaleCopy } from '@/lib/pageCopy';
import { useLocale } from '@/lib/locale';

const Terms = () => {
  const { terms, common } = useSiteContent();
  const { locale } = useLocale();
  const legalCopy = pickLocaleCopy(legalPageCopy, locale);
  return (
    <Layout motionLevel="none">
      <Hero
        eyebrow={terms.eyebrow}
        headline={terms.title}
        subheadline={terms.subheadline}
        credibilityStrip={terms.credibilityStrip}
        plate="burgundy"
        size="compact"
      />
      <LegalDocument
        lastUpdatedLabel={common.lastUpdatedLabel}
        lastUpdated={terms.lastUpdated}
        sections={terms.sections}
        scopeText={legalCopy.termsScope}
        tone="terms"
      />
    </Layout>
  );
};
export default Terms;
