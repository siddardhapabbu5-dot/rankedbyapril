"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";

const links = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "OnlineJobs.ph", href: "https://www.onlinejobs.ph" },
  { label: "JobStreet", href: "https://www.jobstreet.com" },
];

export function AboutMeSection() {
  return (
    <section id="about-me" className="scroll-mt-24 bg-white py-16 md:py-20 dark:bg-background">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-muted">
              About me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl dark:text-white">
              Hi, I&apos;m April 👋
            </h2>
            <p className="mt-2 text-sm text-brand-muted">
              {siteConfig.address.city}, {siteConfig.address.state}
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-brand-muted md:text-base">
              <p>
                I&apos;m an{" "}
                <strong className="font-semibold text-brand-ink dark:text-white">
                  SEO specialist and organic growth expert
                </strong>
                . For the past 5+ years I&apos;ve helped ecommerce, SaaS, health, and lifestyle
                brands grow their visibility on Google, most recently owning search end to end as
                an SEO lead / Head of Content.
              </p>
              <p>
                My work runs the full stack of SEO: audits, technical fixes, keyword research, site
                structure and internal linking, on-page optimization, Shopify pages, metadata,
                content strategy, and refreshes. Yes, I also write, and AI-assisted drafts get a
                real editor&apos;s eye before anything ships.
              </p>
              <p>
                I also bring deep YMYL care to health, wellness, and beauty content — accuracy and
                E-E-A-T signals aren&apos;t optional when people use search to make real decisions.
              </p>
              <p>
                When I&apos;m not working, I&apos;m probably designing, reading, or spending time
                with family.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Continuing SEO education
              </p>
              <p className="text-sm font-medium text-brand-ink dark:text-white">
                Ahrefs · Brian Dean (Backlinko)
              </p>
            </div>

            <div className="mt-8 border-t border-brand-ink/10 pt-8 dark:border-white/10">
              <p className="text-[15px] leading-relaxed text-brand-muted">
                Prefer a quick start? Email me your website + target keyword. I&apos;ll reply with
                first thoughts and a{" "}
                <strong className="font-semibold text-brand-ink dark:text-white">
                  free mini audit
                </strong>
                .
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border-b border-brand-ink/25 pb-0.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-accent hover:text-brand-accent dark:border-white/30 dark:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>

              <p className="mt-4 text-sm text-brand-muted">
                Or write directly:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-brand-accent hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-5" delay={0.08}>
            <div className="mx-auto max-w-md lg:ml-auto lg:mr-0">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-ink/8 bg-brand-surface shadow-[0_20px_50px_-24px_rgba(24,35,58,0.35)] dark:border-white/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/april-portrait.jpg"
                    alt="April Reyes — SEO specialist and organic growth expert"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
