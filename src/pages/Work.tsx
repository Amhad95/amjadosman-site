import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { siteContent } from '@/lib/content';
import { CyberPyramid } from '@/components/ui/cyber-pyramid';

interface WorkCase {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string | null;
  href: string;
  cta_label: string;
  category: string | null;
}

const WorkCaseCard: React.FC<{ item: WorkCase }> = ({ item }) => (
  <div className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
    {/* Thumbnail */}
    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
      {item.thumbnail_url ? (
        <img src={item.thumbnail_url} alt={item.title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
          {item.category && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              {item.category}
            </span>
          )}
        </div>
      )}
    </div>
    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      {item.category && (
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          {item.category}
        </span>
      )}
      <h3 className="font-serif text-heading-sm text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
        {item.title}
      </h3>
      <p className="text-body-sm text-muted-foreground mb-6 flex-1">{item.description}</p>
      <SecondaryButton href={item.href} variant="light">
        {item.cta_label}
      </SecondaryButton>
    </div>
  </div>
);

const Work = () => {
  const { work } = siteContent;

  const { data: dbCases, isLoading } = useQuery({
    queryKey: ['work_cases'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('work_cases')
        .select('id, title, description, thumbnail_url, href, cta_label, category')
        .eq('published', true)
        .order('sort_order', { ascending: true });
      if (error) throw error;
      return data as WorkCase[];
    },
  });

  // Fallback to static content if DB is empty
  const cases: WorkCase[] = (dbCases && dbCases.length > 0)
    ? dbCases
    : work.tiles.map((t, i) => ({
        id: String(i),
        title: t.title,
        description: t.description,
        thumbnail_url: null,
        href: t.href,
        cta_label: t.cta,
        category: null,
      }));

  return (
    <Layout>
      <Hero
        headline={work.hero.headline}
        subheadline={work.hero.subheadline}
        plate="blue"
        rightElement={<CyberPyramid speed={0.8} />}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Case studies"
            subheadline="Sample deliverables from real projects."
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-muted rounded-2xl animate-pulse aspect-[4/3]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {cases.map((item) => (
                <WorkCaseCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABand
        headline={work.requestCta.headline}
        description={work.requestCta.description}
        primaryCta={work.requestCta.cta}
        variant="dark"
      />
    </Layout>
  );
};

export default Work;
