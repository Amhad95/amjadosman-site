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
    const localizedSource = {
      ...fallbackWorkCases[0],
      title_ar: "عنوان عربي",
      description_ar: "وصف عربي",
      cta_label_ar: "دعوة عربية",
      clientProfile_ar: "ملف عربي",
      challenge_ar: "تحد عربي",
      approach_ar: ["نهج عربي"],
      deliverables_ar: ["تسليم عربي"],
      outcomes_ar: ["نتيجة عربية"],
    };
    const workCase = resolveLocalizedWorkCase(localizedSource, "ar");

    expect(workCase.title).toBe(localizedSource.title_ar);
    expect(workCase.description).toBe(localizedSource.description_ar);
    expect(workCase.cta_label).toBe(localizedSource.cta_label_ar);
    expect(workCase.clientProfile).toBe(localizedSource.clientProfile_ar);
    expect(workCase.challenge).toBe(localizedSource.challenge_ar);
    expect(workCase.approach).toEqual(localizedSource.approach_ar);
    expect(workCase.deliverables).toEqual(localizedSource.deliverables_ar);
    expect(workCase.outcomes).toEqual(localizedSource.outcomes_ar);
  });
});
