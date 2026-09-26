"use client";

import { Star } from "lucide-react";
import { SectionHeading, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/data/content";

export function Testimonials() {
  return (
    <section className="section-pad bg-brand-surface dark:bg-brand-surface/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say after the rankings settle"
          align="center"
          className="mb-8"
        />
        <Stagger className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-brand-ink/8 bg-white p-7 dark:border-white/10 dark:bg-background">
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-accent text-brand-accent"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-brand-ink dark:text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-brand-ink/8 pt-5 dark:border-white/10">
                  <cite className="not-italic">
                    <span className="block font-semibold text-brand-ink dark:text-white">
                      {t.author}
                    </span>
                    <span className="text-sm text-brand-muted">
                      {t.role}, {t.company}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
