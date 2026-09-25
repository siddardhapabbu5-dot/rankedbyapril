import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactCta } from "@/components/shared/contact-cta";
import { SectionHeading, FadeIn, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { processSteps, team, values } from "@/lib/data/content";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import {
  Layers,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about rankedbyapril — our mission, team, process, and values behind premium SEO, AI growth, and website systems.",
  path: "/about",
});

const valueIcons = { TrendingUp, Shield, Layers, Sparkles };

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "About", url: absoluteUrl("/about") },
        ])}
      />
      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-16 pt-10 md:pb-20 md:pt-14">
          <Breadcrumbs items={[{ label: "About" }]} />
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              About rankedbyapril
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-brand-ink text-balance md:text-5xl dark:text-white">
              Organic growth operators for brands that refuse to rent every click.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">
              We started rankedbyapril to close the gap between SEO reports and business outcomes —
              combining classic search, AI visibility, and conversion-ready websites in one system.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our story"
            title="Built for the SERP that actually exists now"
            description="Blue links still matter. So do AI Overviews and generative answers. We built an agency that treats all three as one visibility problem — with delivery standards enterprise teams trust."
          />
          <FadeIn delay={0.1} className="space-y-4 text-brand-muted leading-relaxed">
            <p>
              Too many SEO engagements optimize for vanity metrics. Too many website projects ignore
              search until after launch. Too many &ldquo;AI SEO&rdquo; pitches overpromise citations.
            </p>
            <p>
              rankedbyapril exists for teams who want honest strategy, sharp execution, and systems
              that keep compounding — audits, content, technical work, GEO, and builds that marketing
              can actually run.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-brand-surface dark:bg-brand-surface/50">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <FadeIn className="rounded-2xl border border-brand-ink/8 bg-white p-8 dark:border-white/10 dark:bg-background">
            <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">Mission</h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Help ambitious brands earn durable demand through search and AI discovery — measured
              in pipeline and revenue, not screenshots alone.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-2xl border border-brand-ink/8 bg-white p-8 dark:border-white/10 dark:bg-background">
            <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">Vision</h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              A world where organic growth is treated as a product: designed, instrumented, and
              improved continuously across classic and generative search.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading eyebrow="Core values" title="How we show up in the work" />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons] || Sparkles;
              return (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-2xl border border-brand-ink/10 p-6 dark:border-white/10">
                    <Icon className="h-5 w-5 text-brand-accent" />
                    <h3 className="mt-4 font-display text-lg font-bold text-brand-ink dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-brand-surface dark:bg-brand-surface/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Process"
            title="How we work"
            description="Every engagement is different, but this is the operating rhythm we return to."
          />
          <Stagger className="mt-12 space-y-0">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="grid gap-4 border-t border-brand-ink/10 py-8 md:grid-cols-12 dark:border-white/10">
                  <div className="md:col-span-2">
                    <span className="font-display text-3xl font-bold text-brand-accent">
                      {step.number}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-display text-xl font-bold text-brand-ink dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="md:col-span-7 text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                  {i === processSteps.length - 1 ? null : null}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading eyebrow="Team" title="Operators behind the rankings" />
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <article className="overflow-hidden rounded-2xl border border-brand-ink/10 dark:border-white/10">
                  <div className="aspect-[4/5] bg-gradient-to-br from-brand-navy to-brand-accent/70" />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-brand-ink dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-brand-accent">{member.role}</p>
                    <p className="mt-3 text-sm text-brand-muted leading-relaxed">{member.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-sm text-brand-muted">
            Want to work with us?{" "}
            <Link href="/contact" className="font-semibold text-brand-accent hover:underline">
              Start a conversation
            </Link>
            .
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
