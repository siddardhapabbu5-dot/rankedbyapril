"use client";

import { FadeIn } from "@/components/shared/section-heading";

export function OrganicGrowthSection() {
  return (
    <section className="bg-white py-16 md:py-20 dark:bg-background">
      <div className="container-page">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Be findable when it matters
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-ink text-balance md:text-4xl dark:text-white">
            Want organic growth without paying for every click?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
            Paid ads disappear when the budget stops. Strong organic visibility keeps working:
            bringing qualified people to your products, services, and expertise while they are
            actively looking for an answer.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
