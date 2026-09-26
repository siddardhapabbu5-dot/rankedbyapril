import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CmsContactCta } from "@/components/shared/cms-contact-cta";
import { FadeIn, SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies as baseCases } from "@/lib/data/content";
import { resolveCaseStudies } from "@/lib/cms/public";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return baseCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const studies = await resolveCaseStudies();
  const study = studies.find((c) => c.slug === slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/portfolio/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const studies = await resolveCaseStudies();
  const study = studies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Portfolio", url: absoluteUrl("/portfolio") },
          { name: study.title, url: absoluteUrl(`/portfolio/${study.slug}`) },
        ])}
      />
      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-12 pt-10 md:pb-14 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Portfolio", href: "/portfolio" },
              { label: study.client },
            ]}
          />
          <FadeIn>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl dark:text-white">
              {study.title}
            </h1>
            <p className="mt-4 text-brand-muted">
              {study.client} · {study.industry}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
                Challenge
              </h2>
              <p className="mt-3 text-brand-muted leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
                Solution
              </h2>
              <p className="mt-3 text-brand-muted leading-relaxed">{study.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
                Before / after
              </h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-brand-ink/10 dark:border-white/10">
                <div className="grid grid-cols-3 bg-brand-surface px-4 py-3 text-xs font-semibold uppercase tracking-wide text-brand-muted dark:bg-white/5">
                  <span>Metric</span>
                  <span>Before</span>
                  <span>After</span>
                </div>
                {study.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="grid grid-cols-3 border-t border-brand-ink/8 px-4 py-3 text-sm dark:border-white/10"
                  >
                    <span className="font-medium text-brand-ink dark:text-white">{m.label}</span>
                    <span className="text-brand-muted">{m.before}</span>
                    <span className="font-semibold text-brand-accent">{m.after}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-brand-ink/10 bg-white p-6 dark:border-white/10 dark:bg-brand-surface">
              <h3 className="font-display text-lg font-bold text-brand-ink dark:text-white">
                Results snapshot
              </h3>
              <dl className="mt-6 space-y-4">
                {study.results.map((r) => (
                  <div key={r.label} className="flex items-end justify-between gap-4 border-b border-brand-ink/8 pb-4 dark:border-white/10">
                    <dt className="text-sm text-brand-muted">{r.label}</dt>
                    <dd className="text-right">
                      <span className="block font-display text-xl font-bold text-brand-accent">
                        {r.value}
                      </span>
                      {r.change && (
                        <span className="text-xs text-brand-muted">{r.change}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <Button asChild className="mt-6 w-full">
                <Link href="/contact">Start a similar project</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-page">
          <SectionHeading title="Visual proof" description="Placeholder frames for before/after screenshots in production." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="aspect-video rounded-2xl border border-dashed border-brand-ink/20 bg-brand-surface p-6 dark:border-white/20 dark:bg-brand-surface">
              <p className="text-sm font-semibold text-brand-muted">Before</p>
              <p className="mt-2 text-xs text-brand-muted">Baseline rankings / page experience</p>
            </div>
            <div className="aspect-video rounded-2xl border border-dashed border-brand-accent/40 bg-brand-accent/5 p-6">
              <p className="text-sm font-semibold text-brand-accent">After</p>
              <p className="mt-2 text-xs text-brand-muted">Post-engagement growth snapshot</p>
            </div>
          </div>
        </div>
      </section>

      <CmsContactCta />
    </>
  );
}
