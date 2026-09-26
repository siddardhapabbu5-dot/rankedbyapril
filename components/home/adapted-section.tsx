import Link from "next/link";
import { ArrowUpRight, Check, Plus, Search } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const checklist = [
  "Answer-first structure AI tools can quote",
  "Entities, schema & metadata done right",
  "Built to be cited in AI answers",
  "Human editing that keeps E-E-A-T signals real",
];

type HighlightPart = { text: string; highlight?: boolean };

type OverviewCard = {
  query: string;
  parts: HighlightPart[];
  source: string;
  sourceNote: string;
  metric: string;
  border: string;
  href?: string;
};

const cards: OverviewCard[] = [
  {
    query: "how fast does a 500W electric bike go",
    parts: [
      { text: "A 500W electric bike can typically reach speeds of " },
      { text: "20â€“25 mph (32â€“40 km/h)", highlight: true },
      {
        text: " on flat terrain. However, the actual speed can vary based on the rider's weight, the bike's design, and the terrainâ€¦",
      },
    ],
    source: "isinwheel.com",
    sourceNote: "Ecommerce blog Â· written by April",
    metric: "AI Overview source",
    border: "border-t-[#5B8DEF]",
    href: "https://isinwheel.com",
  },
  {
    query: "how much do mini cows cost",
    parts: [
      { text: "The upfront cost of a mini cow generally ranges from " },
      { text: "$500 to $12,000+", highlight: true },
      {
        text: ", with most popular pet and milk breeds falling between $1,500 and $10,000â€¦",
      },
    ],
    source: "clientsite.net",
    sourceNote: "Lifestyle & farm ecommerce",
    metric: "all 3 citation slots",
    border: "border-t-[#C4A882]",
  },
  {
    query: "best caregiver apps",
    parts: [
      { text: "The best caregiver apps depend on your specific needs: " },
      { text: "[client]", highlight: true },
      {
        text: " is highly recommended for all-in-one care coordination, with a shared hub for calendars, tasks, and medical documentsâ€¦",
      },
    ],
    source: "saasclient.com",
    sourceNote: "SaaS Â· caregiving platform",
    metric: "recommended #1 in the answer",
    border: "border-t-[#3D6B5E]",
  },
  {
    query: "mini highland cow vs highland cow",
    parts: [
      {
        text: "Mini and regular Highland cows share the same Scottish genetics, shaggy coats, and docile personalities. The primary difference is size: standard Highlands stand ",
      },
      { text: "48â€“54 inches", highlight: true },
      { text: ", while minis stand " },
      { text: "36â€“42 inches", highlight: true },
      { text: "â€¦" },
    ],
    source: "clientsite.net",
    sourceNote: "Lifestyle Â· farm & ranch",
    metric: "cited 6Ã— across one answer",
    border: "border-t-[#8B6B8E]",
  },
];

function AiOverviewCard({ card }: { card: OverviewCard }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 border-t-[3px] bg-white shadow-lg",
        card.border
      )}
    >
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center gap-1.5 text-[#1A73E8]">
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          <span className="text-sm font-semibold">AI Overview</span>
        </div>

        <p className="mt-3 flex items-start gap-2 text-sm text-[#18233A]">
          <Search className="mt-0.5 h-4 w-4 shrink-0 text-brand-muted" />
          <span className="font-medium">&ldquo;{card.query}&rdquo;</span>
        </p>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#3C4043]">
          {card.parts.map((part, i) =>
            part.highlight ? (
              <mark
                key={i}
                className="rounded-sm bg-[#FDEBD0] px-0.5 text-[#18233A]"
              >
                {part.text}
              </mark>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </p>

        <div className="mt-5 rounded-xl bg-[#F1F3F4] px-3.5 py-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              {card.href ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A73E8] hover:underline"
                >
                  {card.source}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <p className="text-sm font-semibold text-[#18233A]">
                  <span className="rounded bg-[#DADCE0] px-1.5 py-0.5 text-[#5F6368] blur-[0.3px]">
                    {card.source}
                  </span>
                  <span className="ml-2 text-xs font-normal text-brand-muted">
                    client domain hidden
                  </span>
                </p>
              )}
              <p className="mt-1 text-xs text-brand-muted">{card.sourceNote}</p>
            </div>
          </div>
          <p className="mt-2 text-xs font-semibold text-[#137333]">
            Â· {card.metric}
          </p>
        </div>
      </div>
    </article>
  );
}

export function AdaptedSection() {
  return (
    <section
      id="adapted"
      className="section-pad scroll-mt-24 bg-[#1A2228] text-white"
    >
      <div className="container-page">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            GEO Â· AI Search
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-[2.75rem]">
            SEO is changing. I&apos;ve already{" "}
            <span className="italic text-[#D5C8D8]">adapted.</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70 md:text-lg">
            Search now often answers before the classic blue links, and the content I write is
            what those answers quote. My clients&apos; pages have held citation slots in
            Google&apos;s AI Overviews and been named in answers from AI tools like ChatGPT,
            Perplexity, and Gemini. Structured, factual, intent-matched writing that both people
            and language models can work with.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#137333]/20 text-[#6FCF97]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/services/ai-seo"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D5C8D8] transition-colors hover:text-white"
          >
            I offer this as a service â€” AEO Â· GEO Â· AI Overview optimization
            <span aria-hidden>â†’</span>
          </Link>
        </FadeIn>

        <Stagger className="section-gap grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <StaggerItem key={card.query}>
              <AiOverviewCard card={card} />
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/45">
          Recreations of live AI answers from Google AI Overviews, ChatGPT, Perplexity, and
          Gemini. Client names and domains are blurred for confidentiality. Happy to show the
          originals on a call.
        </p>
      </div>
    </section>
  );
}
