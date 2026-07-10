import React from "react";
import { cn } from "@/lib/utils";
import { Locale, SUPPORTED_LOCALES, useLocale } from "@/lib/locale";
import { useSiteContent } from "@/lib/content";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { locale, setLocale } = useLocale();
  const { navigation } = useSiteContent();

  const labels: Record<Locale, string> = {
    en: navigation.languageToggle.english,
    ar: navigation.languageToggle.arabic,
    de: "DE",
    fr: "FR",
    bg: "BG",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/10 p-1 backdrop-blur-md",
        className
      )}
      role="group"
      aria-label={navigation.languageToggle.label}
    >
      {SUPPORTED_LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            locale === option
              ? "bg-mint text-foreground"
              : "text-offwhite/72 hover:text-offwhite"
          )}
          aria-pressed={locale === option}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
