import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { useSiteContent } from '@/lib/content';
import { LegalDocument } from '@/components/sections/LegalDocument';
import { legalPageCopy, pickLocaleCopy } from '@/lib/pageCopy';
import { useLocale } from '@/lib/locale';

const Privacy = () => {
  const { privacy, common } = useSiteContent();
  const { locale } = useLocale();
  const legalCopy = pickLocaleCopy(legalPageCopy, locale);
  return (
    <Layout motionLevel="none">
      <Hero
        eyebrow={privacy.eyebrow}
        headline={privacy.title}
        subheadline={privacy.subheadline}
        credibilityStrip={privacy.credibilityStrip}
        plate="navy"
        size="compact"
      />
      <LegalDocument
        lastUpdatedLabel={common.lastUpdatedLabel}
        lastUpdated={privacy.lastUpdated}
        sections={privacy.sections}
        scopeText={legalCopy.privacyScope}
        tone="privacy"
      />
    </Layout>
  );
};
export default Privacy;
