import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/section-heading";

const samples = [
  {
    tags: ["AI Overview source", "Ecommerce blog"],
    title: "How Fast Does a 500W Electric Bike Go?",
    description:
      "Product-led ecommerce content that ranks for its money keyword and is the cited source in Google's AI Overview.",
    source: "iSinwheel",
    year: "2024",
    href: "https://isinwheel.com",
  },
  {
    tags: ["YMYL", "Medical", "Comparison"],
    title: "Tretinoin vs. Tazarotene: Which One Is Better for You?",
    description:
      "Skincare comparison written with pharmacist-grade accuracy, published under my byline as a licensed pharmacist.",
    source: "We Heart This",
    year: "2024",
    href: "https://weheartthis.com",
  },
  {
    tags: ["Medical", "Informational"],
    title: "Triamcinolone Acetonide for Acne? Is It Effective?",
    description:
      "Health content that answers the query honestly, cites what matters, and still ranks.",
    source: "We Heart This",
    year: "2023",
    href: "https://weheartthis.com",
  },
  {
    tags: ["Lifestyle", "Beauty", "Listicle"],
    title: "60 Tortoiseshell Nail Designs for a Timeless and Trendy Look!",
    description:
      "High-volume lifestyle listicle built for visual search traffic and long dwell time.",
    source: "We Heart This",
    year: "2023",
    href: "https://weheartthis.com",
  },
  {
    tags: ["Author archive", "Beauty", "Lifestyle"],
    title: "60+ articles under my byline at We Heart This",
    description:
      "Browse the full archive: nails, skincare, and beauty content, several ranking on page one of Google.",
    source: "We Heart This",
    year: "archive",
    href: "https://weheartthis.com",
  },
];

const blogsAuthored = [
  "The NY Melrose Family",
  "Sniper Country",
  "We Heart This",
  "China Legal Experts",
  "Revel Agency",
];

const toolbox = {
  "SEO & research": [
    "Semrush",
    "Ahrefs",
    "SEO Gets",
    "Google Search Console",
    "GA4",
    "Screaming Frog",
    "Surfer",
    "NeuronWriter",
    "Yoast",
    "RankMath",
  ],
  "Platforms & CMS": [
    "Shopify",
    "WordPress",
    "Webflow",
    "Wix",
    "Squarespace",
    "Butter CMS",
  ],
  "Work & AI": [
    "Google Workspace",
    "Notion",
    "Canva",
    "ChatGPT",
    "Claude Code",
  ],
};

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-ink/12 bg-white px-3 py-1.5 text-sm text-brand-ink dark:border-white/15 dark:bg-brand-surface dark:text-white">
      {children}
    </span>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-2.5 py-1 text-[11px] font-semibold text-brand-accent">
      {children}
    </span>
  );
}

export function WritingSamplesSection() {
  return (
    <section
      id="writing-samples"
      className="section-pad scroll-mt-24 bg-white dark:bg-background"
    >
      <div className="container-page">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-muted">
            Writing samples
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl dark:text-white">
            Work you can read right now.
          </h2>
        </FadeIn>

        <Stagger className="section-gap grid gap-5 md:grid-cols-2">
          {samples.map((sample) => (
            <StaggerItem key={sample.title}>
              <a
                href={sample.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-[0_4px_20px_-8px_rgba(24,35,58,0.08)] transition-all hover:border-brand-accent/30 hover:shadow-lg dark:border-white/10 dark:bg-brand-surface"
              >
                <div className="flex flex-wrap gap-2">
                  {sample.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-brand-ink group-hover:text-brand-accent dark:text-white">
                  {sample.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {sample.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-muted">
                  {sample.source} Â· {sample.year}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </p>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 border-t border-brand-ink/10 pt-8 dark:border-white/10">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Blogs I&apos;ve authored for
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {blogsAuthored.map((blog) => (
                <Pill key={blog}>{blog}</Pill>
              ))}
            </div>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              My toolbox
            </p>
            <div className="mt-3 space-y-4">
              {Object.entries(toolbox).map(([group, tools]) => (
                <div key={group}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted/80">
                    {group}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <Pill key={tool}>{tool}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm italic text-brand-muted">
              More samples, like Shopify collection pages, content briefs, SOPs, and metadata
              work, are available on request.
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mt-8" delay={0.08}>
          <div className="flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#EDE4EF] via-[#F3E8EC] to-[#F5EDE4] px-7 py-8 sm:flex-row sm:items-center md:px-10 dark:from-[#3A2F40] dark:via-[#3A3038] dark:to-[#3A3530]">
            <p className="font-display text-xl font-bold text-[#4A2C45] md:text-2xl dark:text-[#F0E4EC]">
              Want content like this for your brand?
            </p>
            <Link
              href="/services/content-marketing"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#5E2A5E] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              See SEO content writing
              <span aria-hidden>â†’</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
