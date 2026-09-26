export const locales = ["en", "ceb", "tl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ceb: "Visayan",
  tl: "Tagalog",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  ceb: "ceb",
  tl: "tl",
};

export const LOCALE_STORAGE_KEY = "rankedbyapril-locale";
