import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LocaleProvider, LOCALE_STORAGE_KEY, SUPPORTED_LOCALES } from "@/lib/locale";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { useSiteContent } from "@/lib/content";

const LocaleProbe = () => {
  const content = useSiteContent();
  return <p>{content.navigation.cta.label}</p>;
};

describe("LocaleProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  });

  afterEach(() => {
    cleanup();
  });

  it("defaults to English and updates the document when Arabic is selected", () => {
    render(
      <LocaleProvider>
        <LanguageToggle />
      </LocaleProvider>
    );

    expect(document.documentElement.lang).toBe("en");
    expect(document.documentElement.dir).toBe("ltr");
    expect(window.localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("en");

    fireEvent.click(screen.getByRole("button", { name: "عربي" }));

    expect(document.documentElement.lang).toBe("ar");
    expect(document.documentElement.dir).toBe("rtl");
    expect(window.localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("ar");
  });

  it("offers every supported locale and swaps rendered site copy", () => {
    render(
      <LocaleProvider>
        <LanguageToggle />
        <LocaleProbe />
      </LocaleProvider>
    );

    for (const locale of SUPPORTED_LOCALES) {
      expect(
        screen.getByRole("button", {
          name: locale === "ar" ? "عربي" : locale.toUpperCase(),
        })
      ).toBeInTheDocument();
    }

    fireEvent.click(screen.getByRole("button", { name: "FR" }));
    expect(document.documentElement.lang).toBe("fr");
    expect(window.localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("fr");
    expect(screen.getByText("Réserver un appel")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "DE" }));
    expect(document.documentElement.lang).toBe("de");
    expect(screen.getByText("Gespräch buchen")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "BG" }));
    expect(document.documentElement.lang).toBe("bg");
    expect(screen.getByText("Запазете среща")).toBeInTheDocument();
  });
});
