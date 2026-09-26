"use client";

import type { ReactNode } from "react";
import { Search } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const seenIn = [
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Gemini", color: "#8E75B2" },
  { name: "Perplexity", color: "#22B8CF" },
  { name: "Google AI Overviews", color: "multi" },
];

type Part = { text: string; highlight?: boolean; blur?: boolean };

type AiCard = {
  engine: string;
  dot: string;
  query: string;
  parts: Part[];
  sourceLabel: string;
  footer: ReactNode;
  border: string;
};

const cards: AiCard[] = [
  {
    engine: "ChatGPT",
    dot: "#10A37F",
    query: "what's the best caregiving app",
    parts: [
      { text: "For overall family care coordination, " },
      { text: "BrandName", blur: true },
      { text: " is a " },
      { text: "top pick", highlight: true },
      {
        text: ": a shared calendar, medication tracking, document storage, and family communication in one place, frequently recommended for families coordinating care…",
      },
    ],
    sourceLabel: "saasclient.com",
    footer: (
      <>
        SaaS · caregiving platform · named the{" "}
        <strong className="font-semibold">top pick</strong> for family care coordination
      </>
    ),
    border: "border-t-[#5B8DEF]",
  },
  {
    engine: "Gemini",
    dot: "#8E75B2",
    query: "what's the best caregiving app",
    parts: [
      { text: "For all-in-one family coordination, " },
      { text: "BrandName", blur: true },
      { text: " acts as a " },
      { text: "centralized command center", highlight: true },
      {
        text: ": shared calendars, task assignments, secure document storage, and in-app messaging, plus AI guidance to help you navigate next steps…",
      },
    ],
    sourceLabel: "saasclient.com",
    footer: (
      <>
        SaaS · caregiving platform · named <strong className="font-semibold">#1</strong> for
        all-in-one family coordination
      </>
    ),
    border: "border-t-[#C4A882]",
  },
  {
    engine: "Perplexity",
    dot: "#22B8CF",
    query: "what's the best caregiving app",
    parts: [
      { text: "For care coordination and family sharing, " },
      { text: "BrandName", blur: true },
      { text: " is a " },
      { text: "top option", highlight: true },
      {
        text: ": easy to share updates, calendars, medications, and documents with multiple caregivers, and good for family communication and planning…",
      },
    ],
    sourceLabel: "saasclient.com",
    footer: (
      <>
        SaaS · caregiving platform · named a{" "}
        <strong className="font-semibold">top pick</strong>, cited across sources
      </>
    ),
    border: "border-t-[#3D6B5E]",
  },
  {
    engine: "Google AI Overviews",
    dot: "multi",
    query: "where to buy a mini cow tshirt in the usa",
    parts: [
      { text: "You can buy one from creator merch like " },
      { text: "BrandName", blur: true },
      {
        text: "'s mini cow collection if you want an official design. Tees start around ",
      },
      { text: "$29.95", highlight: true },
      { text: "…" },
    ],
    sourceLabel: "clientstore.com",
    footer: (
      <>
        Creator-led lifestyle ecommerce · named in the written answer + ChatGPT shopping results
      </>
    ),
    border: "border-t-[#C45C8A]",
  },
];

function EngineDot({ color }: { color: string }) {
  if (color === "multi") {
    return (
      <span
        className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
        style={{
          background:
            "conic-gradient(#EA4335 0 25%, #FBBC05 25% 50%, #34A853 50% 75%, #4285F4 75% 100%)",
        }}
        aria-hidden
      />
    );
  }
  return (
    <span
      className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
      style={{ backgroundColor: color }}
      aria-hidden
    />
  );
}

function NamedCard({ card }: { card: AiCard }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 border-t-[3px] bg-white",
        card.border
      )}
    >
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center gap-2 text-sm text-brand-muted">
          <EngineDot color={card.dot} />
          <span className="font-medium">{card.engine}</span>
        </div>

        <p className="mt-3 flex items-start gap-2 text-sm text-[#18233A]">
          <Search className="mt-0.5 h-4 w-4 shrink-0 text-[#1A73E8]" />
          <span className="font-medium">&ldquo;{card.query}&rdquo;</span>
        </p>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#3C4043]">
          {card.parts.map((part, i) => {
            if (part.blur) {
              return (
                <span
                  key={i}
                  className="mx-0.5 inline-block rounded bg-[#DADCE0] px-1.5 text-transparent select-none"
                  style={{ filter: "blur(4px)" }}
                >
                  {part.text}
                </span>
              );
            }
            if (part.highlight) {
              return (
                <mark key={i} className="rounded-sm bg-[#FDEBD0] px-0.5 text-[#18233A]">
                  {part.text}
                </mark>
              );
            }
            return <span key={i}>{part.text}</span>;
          })}
        </p>

        <div className="mt-5 rounded-xl bg-[#F1F3F4] px-3.5 py-3">
          <p className="text-sm font-semibold text-[#18233A]">
            <span
              className="inline-block rounded bg-[#DADCE0] px-1.5 py-0.5 text-transparent select-none"
              style={{ filter: "blur(4px)" }}
            >
              {card.sourceLabel}
            </span>
            <span className="ml-2 text-xs font-normal text-brand-muted">
              client domain hidden
            </span>
          </p>
          <p className="mt-1.5 text-xs leading-snug text-[#137333]">{card.footer}</p>
        </div>
      </div>
    </article>
  );
}

export function NamedInAiSection() {
  return (
    <section className="section-pad bg-[#1A2228] text-white">
      <div className="container-page">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Named in AI answers,{" "}
            <span className="italic text-[#D5C8D8]">not just</span> Google.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70 md:text-lg">
            Ask the major AI tools a question like &ldquo;what&apos;s the best caregiving
            app,&rdquo; and one of my clients was named in the answer across ChatGPT, Gemini,
            Perplexity, and Google. Same content, different engines.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
              Seen in:
            </span>
            {seenIn.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/85"
              >
                <EngineDot color={item.color} />
                {item.name}
              </span>
            ))}
          </div>
        </FadeIn>

        <Stagger className="section-gap grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <StaggerItem key={`${card.engine}-${card.query}`}>
              <NamedCard card={card} />
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-6 max-w-3xl text-xs italic leading-relaxed text-white/45">
          Recreations of live AI answers from Google AI Overviews, ChatGPT, Perplexity, and
          Gemini. Client names and domains are blurred for confidentiality. Happy to show the
          originals on a call.
        </p>
      </div>
    </section>
  );
}
