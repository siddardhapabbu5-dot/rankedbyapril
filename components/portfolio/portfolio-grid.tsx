"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All" },
  { id: "seo", label: "SEO" },
  { id: "ai-seo", label: "AI SEO" },
  { id: "website", label: "Websites" },
  { id: "local-seo", label: "Local SEO" },
  { id: "content", label: "Content" },
] as const;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return caseStudies;
    return caseStudies.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
              filter === f.id
                ? "bg-brand-accent text-white"
                : "bg-brand-surface text-brand-ink/70 hover:text-brand-accent dark:bg-white/5 dark:text-white/70"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((study) => (
          <Link
            key={study.slug}
            href={`/portfolio/${study.slug}`}
            className="group overflow-hidden rounded-2xl border border-brand-ink/10 bg-white transition-all hover:border-brand-accent/40 hover:shadow-xl dark:border-white/10 dark:bg-brand-surface"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-brand-navy via-brand-navy/85 to-brand-accent/75 p-6">
              <Badge className="bg-white/15 text-white">{study.industry}</Badge>
              <p className="mt-auto pt-16 font-display text-2xl font-bold text-white">
                {study.client}
              </p>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-brand-ink group-hover:text-brand-accent dark:text-white">
                {study.title}
              </h2>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">{study.summary}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-brand-ink/8 pt-5 dark:border-white/10">
                {study.results.slice(0, 3).map((r) => (
                  <div key={r.label}>
                    <p className="font-display text-base font-bold text-brand-accent">{r.value}</p>
                    <p className="text-[10px] uppercase tracking-wide text-brand-muted">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
