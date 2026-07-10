import {
  fallbackWorkCases,
  type FallbackWorkCase,
} from "@/lib/fallbackContent";

export const workCasesDatabase: FallbackWorkCase[] = fallbackWorkCases;

export const getPublishedWorkCases = () => workCasesDatabase;

export const getFeaturedWorkCases = () =>
  workCasesDatabase.filter((item) => item.featured);

export const getWorkCaseBySlug = (slug: string | undefined) =>
  workCasesDatabase.find((item) => item.slug === slug);

