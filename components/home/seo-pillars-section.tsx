"use client";

import Link from "next/link";
import { FadeIn } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const pillars = [
  {
    number: "01",
    title: "SEO",
    lead: "Search Engine Optimization",
    rest: " helps your pages rank in traditional search and capture existing demand.",
    border: "border-t-[#3D6B5E]",
  },
  {
    number: "02",
    title: "AIO",
    lead: "AI Overview Optimization",
    rest: " structures direct, verifiable answers for Google's AI-generated search results.",
    border: "border-t-[#C4A882]",
  },
  {
    number: "03",
    title: "GEO",
    lead: "Generative Engine Optimization",
    rest: " helps your brand become a credible source AI platforms can cite.",
    border: "border-t-[#8B6B8E]",
  },
];

export function SeoPillarsSection() {
  return (
    <section className="section-pad bg-[#FAF8F5] dark:bg-background">
      <div className="container-page">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-brand-ink/10 bg-white shadow-[0_4px_24px_-8px_rgba(24,35,58,0.08)] dark:border-white/10 dark:bg-brand-surface">
            <div className="grid md:grid-cols-3">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.number}
                  className={cn(
                    "border-t-[3px] p-7 md:p-8",
                    pillar.border,
                    i < pillars.length - 1 &&
                      "border-b border-brand-ink/10 md:border-b-0 md:border-r dark:border-white/10"
                  )}
                >
                  <p className="text-sm font-medium text-[#B08BB2]">{pillar.number}</p>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-ink dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-[15px]">
                    <strong className="font-semibold text-brand-ink dark:text-white">
                      {pillar.lead}
                    </strong>
                    {pillar.rest}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start justify-between gap-3 border-t border-brand-ink/10 px-7 py-5 sm:flex-row sm:items-center md:px-8 dark:border-white/10">
              <p className="text-sm text-brand-muted">
                So what does that look like in practice?
              </p>
              <Link
                href="/#adapted"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5E2A5E] transition-colors hover:text-brand-accent dark:text-[#D4A8D4]"
              >
                See how I&apos;ve adapted
                <span aria-hidden>↓</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
