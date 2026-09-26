"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  localeHtmlLang,
  locales,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/config";
import { en, type Dictionary } from "@/lib/i18n/dictionaries/en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

const dictionaryLoaders: Record<
  Exclude<Locale, "en">,
  () => Promise<Dictionary>
> = {
  ceb: () => import("@/lib/i18n/dictionaries/ceb").then((m) => m.ceb),
  tl: () => import("@/lib/i18n/dictionaries/tl").then((m) => m.tl),
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [dict, setDict] = useState<Dictionary>(en);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isLocale(stored)) setLocaleState(stored);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = localeHtmlLang[locale];
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }

    let cancelled = false;
    if (locale === "en") {
      setDict(en);
      return;
    }
    dictionaryLoaders[locale]().then((next) => {
      if (!cancelled) setDict(next);
    });
    return () => {
      cancelled = true;
    };
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dict,
    }),
    [locale, setLocale, dict]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
