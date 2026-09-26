"use client";

import Link from "next/link";
import type { CaseStudy } from "@/types";

function metricPills(study: CaseStudy) {
  return study.results.slice(0, 2).map((r) => {
    if (r.change && r.change.startsWith("+")) {
      return `▲ ${r.change.replace("+", "")} ${r.label.toLowerCase()}`;
    }
    return `▲ ${r.value} ${r.label.toLowerCase()}`;
  });
}

export function CaseStudiesGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {studies.map((study) => (
        <article
          key={study.slug}
          className="flex h-full flex-col rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-[0_4px_20px_-10px_rgba(24,35,58,0.08)] transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-brand-surface md:p-7"
        >
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-brand-accent/10 px-2.5 py-1 text-[11px] font-semibold text-brand-accent">
              {study.industry.split("·")[0].trim()}
            </span>
            {study.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-ink/5 px-2.5 py-1 text-[11px] font-medium text-brand-muted dark:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-brand-ink md:text-[1.35rem] dark:text-white">
            {study.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">{study.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {metricPills(study).map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
              >
                {pill}
              </span>
            ))}
          </div>

          <Link
            href={`/portfolio/${study.slug}`}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-ink transition-colors hover:text-brand-accent dark:text-white"
          >
            Read the case study
            <span aria-hidden>→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
