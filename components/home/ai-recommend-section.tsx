import Link from "next/link";
import { Calendar, MessageSquare, Search, Sparkles } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "AI Visibility Audit",
    icon: Search,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#1A73E8]",
    border: "border-t-[#5B8DEF]",
    items: [
      "Which AI answers mention you (and your competitors) today",
      "AI crawler & llms.txt access check",
      "Quotability review of your money pages",
      "Prioritized fix list, in plain English",
    ],
  },
  {
    title: "AEO â€” Own the Answer",
    icon: MessageSquare,
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#137333]",
    border: "border-t-[#3D6B5E]",
    items: [
      "Answer-first restructuring of key pages",
      "FAQ & schema markup done right",
      "Featured snippet & AI Overview targets",
      "One clear, liftable answer per question",
    ],
    link: { href: "/services/ai-seo", label: "AEO Â· GEO Â· AI search service â†’" },
  },
  {
    title: "GEO â€” Get Named & Cited",
    icon: Sparkles,
    iconBg: "bg-[#F5E6D3]",
    iconColor: "text-[#8B6914]",
    border: "border-t-[#C4A882]",
    items: [
      "Brand entity & description consistency",
      "Third-party corroboration strategy",
      "Content AI models can lift verbatim",
      "Citation tracking you can actually see",
    ],
    link: { href: "/blog/seo-vs-aeo-vs-geo", label: "How ChatGPT picks brands â†’" },
  },
];

export function AiRecommendSection() {
  return (
    <section className="section-pad bg-[#F3EEF2] dark:bg-[#2A2430]">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5E2A5E] dark:text-[#D5C8D8]">
            AEO Â· GEO Â· AI Search
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink text-balance md:text-4xl dark:text-white">
            Want AI to <span className="italic text-[#5E2A5E] dark:text-[#D5C8D8]">recommend</span>{" "}
            your brand?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
            Buyers now ask ChatGPT and Google&apos;s AI answers before they ever open a results
            page. I structure your content so those answers can quote you, cite you, and name you.
            My clients already show up there; the receipts are right above.
          </p>
        </FadeIn>

        <Stagger className="section-gap grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <article
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-2xl border border-brand-ink/8 border-t-[3px] bg-white p-6 shadow-[0_8px_30px_-12px_rgba(24,35,58,0.12)] dark:border-white/10 dark:bg-brand-surface",
                    service.border
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-full",
                      service.iconBg
                    )}
                  >
                    <Icon className={cn("h-5 w-5", service.iconColor)} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-ink dark:text-white">
                    {service.title}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-0">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-brand-ink/8 py-2.5 text-sm leading-relaxed text-brand-muted first:border-t-0 first:pt-0 dark:border-white/10"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link
                      href={service.link.href}
                      className="mt-3 text-sm font-semibold text-brand-ink transition-colors hover:text-brand-accent dark:text-white"
                    >
                      {service.link.label}
                    </Link>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mt-8 flex flex-wrap items-center justify-center gap-3" delay={0.1}>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#5E2A5E] px-7 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" />
            Book a free consultation
          </a>
          <Link
            href="/#adapted"
            className="inline-flex items-center justify-center rounded-full border border-brand-ink/20 bg-white/70 px-7 py-3.5 text-[15px] font-semibold text-brand-ink transition-colors hover:border-brand-ink dark:border-white/25 dark:bg-transparent dark:text-white"
          >
            See how it works
          </Link>
        </FadeIn>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-brand-muted">
          <strong className="font-semibold text-brand-ink/70 dark:text-white/70">
            Honest note:
          </strong>{" "}
          nobody can guarantee an AI citation, and I won&apos;t pretend otherwise. What I deliver
          is content that is eligible, structured, and tracked, so when the engines choose a
          source, they can choose you.
        </p>
      </div>
    </section>
  );
}
