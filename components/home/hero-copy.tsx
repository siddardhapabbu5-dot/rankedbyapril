"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { defaultLocale } from "@/lib/i18n/config";

/**
 * Hydrates hero copy only when the locale differs from the SSR default (English).
 * Keeps the LCP text in static HTML for the common case.
 */
export function HeroCopy({ fallback }: { fallback: ReactNode }) {
  const { locale, t } = useLanguage();

  if (locale === defaultLocale) return <>{fallback}</>;

  const h = t.hero;
  const stats = [
    { value: "5+", label: h.stats.years },
    { value: "30+", label: h.stats.brands },
    { value: "250M+", label: h.stats.views },
    { value: "AI Overviews", label: h.stats.aiLabel, accent: true },
  ];

  return (
    <>
      <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
        {h.titleBefore}{" "}
        <span className="italic text-brand-accent-dark dark:text-brand-accent">{h.visibility}</span>
        {h.titleMiddle}{" "}
        <span className="italic text-brand-accent-dark dark:text-brand-accent">{h.revenue}</span>
        {h.titleAfter}
      </h1>

      <p className="mt-5 max-w-xl text-lg font-normal leading-[1.6] text-brand-body md:text-xl dark:text-brand-muted">
        {h.bodyBefore}{" "}
        <strong className="font-semibold text-brand-ink dark:text-white">{h.bodyStrong1}</strong>
        {h.bodyMid}{" "}
        <strong className="font-semibold text-brand-ink dark:text-white">{h.bodyStrong2}</strong>
        {h.bodyAfter}
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.value}>
            <dt
              className={
                stat.accent
                  ? "font-display text-lg font-bold leading-tight text-brand-accent-dark md:text-xl dark:text-brand-accent"
                  : "font-display text-2xl font-bold text-brand-ink md:text-[1.75rem] dark:text-white"
              }
            >
              {stat.value}
            </dt>
            <dd className="mt-1.5 max-w-[11rem] text-[12px] leading-snug text-brand-muted">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
