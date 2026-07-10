import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLocale, Locale, SUPPORTED_LOCALES } from "@/lib/locale";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageDropdownProps {
  className?: string;
  isScrolled?: boolean;
  triggerStyle?: React.CSSProperties;
}

const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  fr: "Français",
  bg: "Български",
};

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  className,
  isScrolled = false,
  triggerStyle,
}) => {
  const { locale, setLocale, isRTL } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-all",
          isScrolled
            ? "border-white/15 bg-black/10 text-offwhite/90 hover:bg-white/5 hover:text-offwhite"
            : "border-current bg-transparent opacity-70 hover:opacity-100"
        )}
        style={!isScrolled ? triggerStyle : undefined}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Globe size={14} className="opacity-70" />
        <span className="hidden sm:inline-block">{LOCALE_LABELS[locale]}</span>
        <span className="sm:hidden uppercase">{locale}</span>
        <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full mt-2 w-32 rounded-xl border border-white/10 bg-ink/95 py-1.5 shadow-lg backdrop-blur-xl z-50 animate-fade-in",
            isRTL ? "left-0" : "right-0 lg:left-auto lg:right-0" // Always drop to the inside of the viewport roughly
          )}
        >
          {SUPPORTED_LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setIsOpen(false);
              }}
              className={cn(
                "block w-full px-4 py-2 text-sm transition-colors",
                isRTL ? "text-right" : "text-left",
                locale === l
                  ? "bg-white/10 font-bold text-mint"
                  : "font-medium text-offwhite/70 hover:bg-white/5 hover:text-offwhite"
              )}
            >
              {LOCALE_LABELS[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
