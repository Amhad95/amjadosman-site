import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { useSiteContent } from '@/lib/content';

const Terms = () => {
  const { terms, common } = useSiteContent();
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-serif text-poster-lg text-foreground mb-4">{terms.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {common.lastUpdatedLabel}: {terms.lastUpdated}
          </p>
          <div className="prose prose-lg">
            <p className="text-muted-foreground">{terms.placeholder}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Terms;
