"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { caseStudies } from "@/lib/data/content";

export function CaseStudiesPreview() {
  const featured = caseStudies.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Results"
            title="Numbers before adjectives"
            description="SEO and AI visibility snapshots from brands we've helped grow — traffic, keywords, and citation wins."
          />
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-accent hover:underline"
          >
            View all case studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((study) => (
            <StaggerItem key={study.slug}>
              <Link
                href={`/portfolio/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-ink/10 bg-white transition-all hover:border-brand-accent/40 hover:shadow-xl dark:border-white/10 dark:bg-brand-surface"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-navy via-brand-navy/80 to-brand-accent/80 p-6">
                  <Badge variant="accent" className="bg-white/15 text-white">
                    {study.industry}
                  </Badge>
                  <p className="absolute bottom-6 left-6 right-6 font-display text-xl font-bold text-white text-balance">
                    {study.client}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-brand-ink group-hover:text-brand-accent dark:text-white">
                    {study.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-brand-muted">{study.summary}</p>
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-brand-ink/8 pt-5 dark:border-white/10">
                    {study.results.slice(0, 3).map((r) => (
                      <div key={r.label}>
                        <p className="font-display text-sm font-bold text-brand-accent">
                          {r.value}
                        </p>
                        <p className="text-[10px] uppercase tracking-wide text-brand-muted">
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
