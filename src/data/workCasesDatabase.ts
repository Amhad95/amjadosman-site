import {
  fallbackWorkCases,
  type FallbackWorkCase,
} from "@/lib/fallbackContent";

const hiddenWorkSlugs = new Set([
  "sudanese-fintech-company-building-a-credible-group-brand-before-market-entry",
]);

const bottomWorkSlugs = [
  "asset-and-fleet-management-platform-with-a4-group-for-a-confidential-government-client",
  "orooma-building-sudans-first-digital-recruitment-platform-in-a-low-trust-market",
  "talya-properties-steering-a-real-estate-business-through-a-cooling-market",
  "national-trade-facilitation-platform-with-a4-group-for-a-confidential-authority",
];

const bottomWorkSlugSet = new Set(bottomWorkSlugs);

const interleaveByClient = (cases: FallbackWorkCase[]) => {
  const queues = new Map<string, FallbackWorkCase[]>();

  cases.forEach((item) => {
    const key = item.client_group ?? item.partner ?? item.id;
    const queue = queues.get(key) ?? [];
    queue.push(item);
    queues.set(key, queue);
  });

  const ordered: FallbackWorkCase[] = [];
  let hasItems = true;

  while (hasItems) {
    hasItems = false;
    queues.forEach((queue) => {
      const item = queue.shift();
      if (item) {
        ordered.push(item);
        hasItems = true;
      }
    });
  }

  return ordered;
};

const visibleWorkCases = fallbackWorkCases.filter(
  (item) => !hiddenWorkSlugs.has(item.slug)
);

export const workCasesDatabase: FallbackWorkCase[] = [
  ...interleaveByClient(
    visibleWorkCases.filter((item) => !bottomWorkSlugSet.has(item.slug))
  ),
  ...bottomWorkSlugs.flatMap((slug) => {
    const item = visibleWorkCases.find((workCase) => workCase.slug === slug);
    return item ? [item] : [];
  }),
];

const featuredWorkSlugs = [
  "kendah-energy-company-profile-and-tender-system-for-an-energy-business",
  "aljebali-group-internal-regulations-and-field-manuals-for-a-high-risk-operating-environment",
  "jisco-shaping-a-value-stream-management-system-for-gold-processing-operations",
  "kendah-energy-brand-and-stationery-system-for-daily-use",
  "radiance-training-center-designing-a-six-month-livelihoods-training-pilot",
  "sudanese-fintech-company-turning-a-new-digital-company-into-an-operating-system",
];

const legacyWorkSlugRedirects: Record<string, string> = {
  "asd-solutions-building-a-credible-fintech-group-brand-before-market-entry":
    "sudanese-fintech-company-building-a-credible-group-brand-before-market-entry",
  "asd-solutions-a-website-and-cms-structure-for-institutional-buyers":
    "sudanese-fintech-company-a-website-and-cms-structure-for-institutional-buyers",
  "asd-solutions-turning-a-new-digital-company-into-an-operating-system":
    "sudanese-fintech-company-turning-a-new-digital-company-into-an-operating-system",
  "kendah-energy-brand-and-tender-readiness-system-for-an-energy-company":
    "kendah-energy-company-profile-and-tender-system-for-an-energy-business",
};

export const getPublishedWorkCases = () => workCasesDatabase;

export const getFeaturedWorkCases = () =>
  featuredWorkSlugs.flatMap((slug) => {
    const item = workCasesDatabase.find((workCase) => workCase.slug === slug);
    return item ? [item] : [];
  });

export const getWorkCaseBySlug = (slug: string | undefined) =>
  workCasesDatabase.find((item) => item.slug === (slug ? legacyWorkSlugRedirects[slug] ?? slug : slug));

export const getCanonicalWorkSlug = (slug: string | undefined) =>
  slug ? legacyWorkSlugRedirects[slug] ?? slug : slug;
