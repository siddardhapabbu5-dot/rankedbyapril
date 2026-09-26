"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  moreResultSites,
  resultSites,
  resultsDisclaimer,
  type ResultSite,
} from "@/lib/data/results";
import { cn } from "@/lib/utils";

function GrowthChart({ steep = false }: { steep?: boolean }) {
  const id = useId();
  const d = steep
    ? "M0,78 C40,74 70,70 110,58 C160,42 200,28 260,18 C300,12 340,8 380,4 L380,90 L0,90 Z"
    : "M0,72 C50,70 90,66 130,55 C180,40 220,32 270,22 C310,15 345,10 380,6 L380,90 L0,90 Z";
  const line = steep
    ? "M0,78 C40,74 70,70 110,58 C160,42 200,28 260,18 C300,12 340,8 380,4"
    : "M0,72 C50,70 90,66 130,55 C180,40 220,32 270,22 C310,15 345,10 380,6";

  return (
    <svg viewBox="0 0 380 90" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={d} fill={`url(#${id}-fill)`} />
      <path d={line} fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
      <line
        x1="380"
        y1="4"
        x2="380"
        y2="90"
        stroke="#94A3B8"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.6"
      />
      <circle cx="380" cy="4" r="3.5" fill="#3B82F6" />
    </svg>
  );
}

function GrowthBadge({ value }: { value?: string }) {
  if (!value) return null;
  return (
    <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
      ▲ {value}
    </span>
  );
}

function ResultCard({ site, className }: { site: ResultSite; className?: string }) {
  const isLarge = site.size === "lg";

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-brand-ink/8 bg-white shadow-[0_1px_2px_rgba(24,35,58,0.04)] dark:border-white/10 dark:bg-brand-surface",
        className
      )}
    >
      <div
        className="h-[3px] w-full bg-gradient-to-r from-cyan-400 via-brand-accent to-amber-300"
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-bold tracking-tight text-brand-ink md:text-lg dark:text-white">
            {site.domain}
          </h3>
          <span className="shrink-0 rounded-full bg-brand-accent/10 px-2.5 py-1 text-[11px] font-medium text-brand-accent">
            {site.niche}
          </span>
        </div>

        <div
          className={cn(
            "relative mt-4 overflow-hidden rounded-xl bg-[#EFF6FF]/80 dark:bg-blue-500/10",
            isLarge ? "h-36 md:h-44" : "h-28 md:h-32"
          )}
        >
          <div className="absolute inset-x-3 bottom-0 top-6 md:inset-x-4">
            <GrowthChart steep={Boolean(site.keywordsGrowth)} />
          </div>
          <div className="absolute right-3 top-2 flex flex-col items-end gap-1 text-[10px] font-semibold text-brand-ink/70 dark:text-white/70">
            <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-1.5 py-0.5 dark:bg-brand-ink/40">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {site.keywords}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-1.5 py-0.5 dark:bg-brand-ink/40">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              {site.traffic}
            </span>
          </div>
        </div>

        <dl className="mt-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-sm text-brand-muted">Organic keywords</dt>
            <dd className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-brand-ink dark:text-white">
                {site.keywords}
              </span>
              <GrowthBadge value={site.keywordsGrowth} />
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-sm text-brand-muted">Monthly organic traffic</dt>
            <dd className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-brand-ink dark:text-white">
                {site.traffic}
              </span>
              <GrowthBadge value={site.trafficGrowth} />
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function ResultsSection() {
  const [open, setOpen] = useState(false);
  const [primary, secondary, ...rest] = resultSites;
  const topSecondary = rest.slice(0, 3);
  const bottomRow = rest.slice(3);

  return (
    <section id="results" className="section-pad scroll-mt-24 bg-white dark:bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Proof first
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl dark:text-white">
            Numbers before adjectives.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-muted md:text-lg">
            SEO visibility snapshots from brands I&apos;ve contributed SEO and content work to:
            keyword footprints, organic traffic, and the growth curves behind them.
          </p>
        </div>

        {/* Match rankedbyshai layout: large + medium on top, then 3, then remaining */}
        <div className="section-gap grid gap-4 md:grid-cols-12 md:gap-5">
          <ResultCard site={primary} className="md:col-span-7" />
          <ResultCard site={secondary} className="md:col-span-5" />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5 md:grid-cols-3 md:gap-5">
          {topSecondary.map((site) => (
            <ResultCard key={site.domain} site={site} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5 lg:grid-cols-3 md:gap-5">
          {bottomRow.map((site) => (
            <ResultCard key={site.domain} site={site} />
          ))}
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ink transition-colors hover:text-brand-accent dark:text-white"
            aria-expanded={open}
          >
            More sites I&apos;ve supported +{moreResultSites.length}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
            />
          </button>

          {open && (
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {moreResultSites.map((site) => (
                <li
                  key={site.domain}
                  className="flex items-center justify-between gap-3 rounded-xl border border-brand-ink/8 bg-brand-surface px-4 py-3 text-sm dark:border-white/10 dark:bg-brand-surface"
                >
                  <span className="font-medium text-brand-ink dark:text-white">
                    {site.domain}
                  </span>
                  <span className="text-brand-muted">
                    {site.keywords} kw · {site.traffic}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-brand-muted">
          {resultsDisclaimer}
        </p>
      </div>
    </section>
  );
}
