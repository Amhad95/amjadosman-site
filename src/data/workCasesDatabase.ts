import {
  fallbackWorkCases,
  type FallbackWorkCase,
} from "@/lib/fallbackContent";

export const workCasesDatabase: FallbackWorkCase[] = fallbackWorkCases;

const legacyWorkSlugRedirects: Record<string, string> = {
  "asd-solutions-building-a-credible-fintech-group-brand-before-market-entry":
    "sudanese-fintech-company-building-a-credible-group-brand-before-market-entry",
  "asd-solutions-a-website-and-cms-structure-for-institutional-buyers":
    "sudanese-fintech-company-a-website-and-cms-structure-for-institutional-buyers",
  "asd-solutions-turning-a-new-digital-company-into-an-operating-system":
    "sudanese-fintech-company-turning-a-new-digital-company-into-an-operating-system",
};

export const getPublishedWorkCases = () => workCasesDatabase;

export const getFeaturedWorkCases = () =>
  workCasesDatabase.filter((item) => item.featured);

export const getWorkCaseBySlug = (slug: string | undefined) =>
  workCasesDatabase.find((item) => item.slug === (slug ? legacyWorkSlugRedirects[slug] ?? slug : slug));

export const getCanonicalWorkSlug = (slug: string | undefined) =>
  slug ? legacyWorkSlugRedirects[slug] ?? slug : slug;
