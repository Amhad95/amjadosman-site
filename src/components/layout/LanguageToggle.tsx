import React from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale";
import { useSiteContent } from "@/lib/content";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { locale, setLocale } = useLocale();
  const { navigation } = useSiteContent();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/10 p-1 backdrop-blur-md",
        className
      )}
      role="group"
      aria-label={navigation.languageToggle.label}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
          locale === "en"
            ? "bg-mint text-foreground"
            : "text-offwhite/72 hover:text-offwhite"
        )}
        aria-pressed={locale === "en"}
      >
        {navigation.languageToggle.english}
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
          locale === "ar"
            ? "bg-mint text-foreground"
            : "text-offwhite/72 hover:text-offwhite"
        )}
        aria-pressed={locale === "ar"}
      >
        {navigation.languageToggle.arabic}
      </button>
    </div>
  );
};

export default LanguageToggle;
