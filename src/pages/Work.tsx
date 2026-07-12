import React, { useMemo, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { useSiteContent } from '@/lib/content';
import { CyberPyramid } from '@/components/ui/cyber-pyramid';
import { resolveLocalizedWorkCase } from '@/lib/fallbackContent';
import { getPublishedWorkCases } from '@/data/workCasesDatabase';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';
import { WorkCaseCard } from '@/components/sections/WorkCaseCard';
import { cn } from '@/lib/utils';
import { pickLocaleCopy, simplePageCopy } from '@/lib/pageCopy';
import { RevealGroup } from '@/components/motion/Reveal';

const workFilters = [
  { id: 'all', label: 'All', serviceIds: [] },
  { id: 'brand', label: 'Brand & Growth', serviceIds: ['brand'] },
  { id: 'ops', label: 'Internal Operations', serviceIds: ['ops'] },
  {
    id: 'software',
    label: 'Software/Product',
    serviceIds: ['software-crm', 'software-accounting', 'software-inventory', 'software-tasks', 'agents'],
  },
  { id: 'strategy', label: 'Strategy & Finance', categories: ['Strategy & Financial Model'] },
] as const;

const workFilterLabels = {
  en: {
    all: 'All',
    brand: 'Brand & Growth',
    ops: 'Internal Operations',
    software: 'Software/Product',
    strategy: 'Strategy & Finance',
  },
  ar: {
    all: 'الكل',
    brand: 'الهوية والنمو',
    ops: 'العمليات الداخلية',
    software: 'البرمجيات/المنتج',
    strategy: 'الاستراتيجية والمالية',
  },
  de: {
    all: 'Alle',
    brand: 'Marke & Wachstum',
    ops: 'Interne Abläufe',
    software: 'Software/Produkt',
    strategy: 'Strategie & Finanzen',
  },
  fr: {
    all: 'Tous',
    brand: 'Marque & croissance',
    ops: 'Opérations internes',
    software: 'Logiciel/produit',
    strategy: 'Stratégie & finance',
  },
  bg: {
    all: 'Всички',
    brand: 'Бранд и растеж',
    ops: 'Вътрешни операции',
    software: 'Софтуер/продукт',
    strategy: 'Стратегия и финанси',
  },
} as const;

const Work = () => {
  const { work, common } = useSiteContent();
  const { locale } = useLocale();
  const copy = pickLocaleCopy(simplePageCopy, locale);
  const filterLabels = workFilterLabels[locale] ?? workFilterLabels.en;
  const filterAria = { en: 'Filter case studies', ar: 'تصفية دراسات الحالة', de: 'Fallstudien filtern', fr: 'Filtrer les études de cas', bg: 'Филтриране на казусите' }[locale];
  const [activeFilter, setActiveFilter] = useState<(typeof workFilters)[number]['id']>('all');

  usePageMeta({
    title: copy.workTitle,
    description: work.hero.subheadline,
  });

  const workCaseSources = getPublishedWorkCases();
  const cases = workCaseSources.map((item) =>
    resolveLocalizedWorkCase(item, locale)
  );
  const filteredCases = useMemo(() => {
    const filter = workFilters.find((item) => item.id === activeFilter) ?? workFilters[0];

    if (filter.id === 'all') return cases;

    return cases.filter((item) => {
      const serviceIds = item.service_line_ids ?? [];
      const matchesService = 'serviceIds' in filter && filter.serviceIds.some((id) => serviceIds.includes(id));
      const matchesCategory = 'categories' in filter && filter.categories.includes(item.category ?? '');

      return matchesService || matchesCategory;
    });
  }, [activeFilter, cases]);

  return (
    <Layout>
      <Hero
        eyebrow={copy.workEyebrow}
        headline={work.hero.headline}
        subheadline={work.hero.subheadline}
        credibilityStrip={copy.workStrip}
        plate="blue"
        rightElement={<CyberPyramid speed={0.8} />}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={copy.selectedWork}
            headline={common.caseStudies}
            subheadline={common.caseStudiesSubheadline}
            align="center"
          />
          {copy.workTranslationNotice && (
            <div className="mt-6 rounded-2xl border border-ink/10 bg-muted px-5 py-4 text-sm text-muted-foreground">
              {copy.workTranslationNotice}
            </div>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label={filterAria}>
            {workFilters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                    isActive
                      ? 'border-plate-violet bg-plate-violet text-white'
                      : 'border-ink/10 bg-card text-muted-foreground hover:border-plate-violet/40 hover:text-foreground'
                  )}
                >
                  {filterLabels[filter.id]}
                </button>
              );
            })}
          </div>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10" stagger={78}>
            {filteredCases.map((item) => (
              <WorkCaseCard key={item.id} item={item} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand
        headline={work.requestCta.headline}
        description={work.requestCta.description}
        primaryCta={work.requestCta.primaryCta}
        secondaryCta={work.requestCta.secondaryCta}
        visualKey="proof-monolith"
        variant="dark"
      />
    </Layout>
  );
};

export default Work;
