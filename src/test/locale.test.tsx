import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LocaleProvider, LOCALE_STORAGE_KEY } from "@/lib/locale";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

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
});
