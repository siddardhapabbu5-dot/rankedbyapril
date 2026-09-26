"use client";

import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Organic growth",
    question: "Want to grow without spending more on ads?",
    answer:
      "Build pages and content that compound over time instead of renting every visit.",
    icon: ArrowUpRight,
    iconBg: "bg-[#5C4A6E]",
    labelColor: "text-[#8B6B8E]",
    blob: "bg-[#E8D5E8]",
  },
  {
    title: "High-intent search",
    question: "Want to appear when someone searches for what you sell?",
    answer:
      "Match the questions, comparisons, and product searches that signal real buying intent.",
    icon: Search,
    iconBg: "bg-[#D4C4A8]",
    iconColor: "text-[#18233A]",
    labelColor: "text-[#9A8568]",
    blob: "bg-[#EDE4D4]",
  },
  {
    title: "AI discovery",
    question: "Want your brand discovered through AI search?",
    answer:
      "Make your expertise clear, structured, and credible enough for answer engines to reference.",
    icon: Sparkles,
    iconBg: "bg-[#3D6B5E]",
    labelColor: "text-[#5A8A7A]",
    blob: "bg-[#D4E8E0]",
  },
];

export function SearchDoorwaysSection() {
  return (
    <section className="section-pad bg-[#FAF8F5] dark:bg-background">
      <div className="container-page">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-brand-ink/[0.06] bg-white p-7 shadow-[0_8px_30px_-12px_rgba(24,35,58,0.12)] dark:border-white/10 dark:bg-brand-surface"
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full opacity-70 blur-[1px]",
                      pillar.blob
                    )}
                    aria-hidden
                  />
                  <div
                    className={cn(
                      "relative inline-flex h-10 w-10 items-center justify-center rounded-xl",
                      pillar.iconBg
                    )}
                  >
                    <Icon
                      className={cn("h-5 w-5", pillar.iconColor || "text-white")}
                      strokeWidth={2.25}
                    />
                  </div>
                  <p
                    className={cn(
                      "relative mt-5 text-[11px] font-semibold uppercase tracking-[0.16em]",
                      pillar.labelColor
                    )}
                  >
                    {pillar.title}
                  </p>
                  <h3 className="relative mt-3 font-display text-xl font-bold leading-snug tracking-tight text-brand-ink dark:text-white">
                    {pillar.question}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-brand-muted">
                    {pillar.answer}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mt-5" delay={0.12}>
          <article className="relative overflow-hidden rounded-[1.25rem] border border-brand-ink/[0.06] bg-white p-8 shadow-[0_8px_30px_-12px_rgba(24,35,58,0.12)] md:p-10 dark:border-white/10 dark:bg-brand-surface">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#E8D5E8] opacity-80"
              aria-hidden
            />
            <div className="relative max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6B8E]">
                Search has more than one doorway
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl dark:text-white">
                You&apos;ve probably heard of SEO.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-muted md:text-lg">
                It is still the foundation. But customers now discover brands through classic
                search results, Google&apos;s AI answers, and generative tools such as ChatGPT and
                Perplexity. A complete visibility strategy needs to account for all three.
              </p>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
