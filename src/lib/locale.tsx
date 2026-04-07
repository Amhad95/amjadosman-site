import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

export const SUPPORTED_LOCALES = ["en", "ar"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "fheem-language";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const canUseDOM = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

export const isLocale = (value: string | null | undefined): value is Locale =>
  value === "en" || value === "ar";

export const getDirection = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

export const getIntlLocale = (locale: Locale) =>
  locale === "ar" ? "ar-EG" : "en-US";

const getStoredLocale = (): Locale => {
  if (!canUseDOM()) return DEFAULT_LOCALE;

  const storedValue = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(storedValue) ? storedValue : DEFAULT_LOCALE;
};

const syncDocumentLanguage = (locale: Locale) => {
  if (!canUseDOM()) return;

  const direction = getDirection(locale);
  document.documentElement.lang = locale;
  document.documentElement.dir = direction;
  document.documentElement.dataset.locale = locale;
};

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const initialLocale = getStoredLocale();
    syncDocumentLanguage(initialLocale);
    return initialLocale;
  });

  useLayoutEffect(() => {
    syncDocumentLanguage(locale);
    if (canUseDOM()) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      isRTL: locale === "ar",
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
};
