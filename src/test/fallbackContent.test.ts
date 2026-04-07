import { describe, expect, it } from "vitest";
import {
  fallbackArticles,
  fallbackWorkCases,
  resolveLocalizedArticle,
  resolveLocalizedWorkCase,
} from "@/lib/fallbackContent";

describe("localized fallback resolvers", () => {
  it("uses Arabic fields when available for articles", () => {
    const article = resolveLocalizedArticle(fallbackArticles[0], "ar");

    expect(article.title).toBe(fallbackArticles[0].title_ar);
    expect(article.excerpt).toBe(fallbackArticles[0].excerpt_ar);
    expect(article.category).toBe(fallbackArticles[0].category_ar);
    expect(article.body).toBe(fallbackArticles[0].body_ar);
  });

  it("falls back to English when Arabic fields are missing", () => {
    const article = resolveLocalizedArticle(
      {
        ...fallbackArticles[0],
        title_ar: null,
        excerpt_ar: null,
        category_ar: null,
        body_ar: null,
      },
      "ar"
    );

    expect(article.title).toBe(fallbackArticles[0].title);
    expect(article.excerpt).toBe(fallbackArticles[0].excerpt);
    expect(article.category).toBe(fallbackArticles[0].category);
    expect(article.body).toBe(fallbackArticles[0].body);
  });

  it("uses Arabic fields when available for work cases", () => {
    const workCase = resolveLocalizedWorkCase(fallbackWorkCases[0], "ar");

    expect(workCase.title).toBe(fallbackWorkCases[0].title_ar);
    expect(workCase.description).toBe(fallbackWorkCases[0].description_ar);
    expect(workCase.cta_label).toBe(fallbackWorkCases[0].cta_label_ar);
    expect(workCase.clientProfile).toBe(fallbackWorkCases[0].clientProfile_ar);
    expect(workCase.challenge).toBe(fallbackWorkCases[0].challenge_ar);
    expect(workCase.approach).toEqual(fallbackWorkCases[0].approach_ar);
    expect(workCase.deliverables).toEqual(fallbackWorkCases[0].deliverables_ar);
    expect(workCase.outcomes).toEqual(fallbackWorkCases[0].outcomes_ar);
  });
});
