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

const LOCALE_EVENT = "rankedbyapril-locale-change";

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

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [dict, setDict] = useState<Dictionary>(en);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
    setReady(true);

    function sync() {
      const next = readStoredLocale();
      if (next) setLocaleState(next);
    }

    window.addEventListener(LOCALE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(LOCALE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
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
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dict,
    }),
    [locale, setLocale, dict]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div className="contents">{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      locale: defaultLocale,
      setLocale: () => {},
      t: en,
    };
  }
  return ctx;
}
