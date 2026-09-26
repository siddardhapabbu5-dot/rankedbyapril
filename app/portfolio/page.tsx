import Link from "next/link";
import { Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FadeIn } from "@/components/shared/section-heading";
import { CaseStudiesGrid } from "@/components/portfolio/case-studies-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { resolveCaseStudies, resolveSiteConfig } from "@/lib/cms/public";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "SEO and content case studies with keyword and traffic results — challenge, approach, and outcome from rankedbyapril.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const [studies, site] = await Promise.all([resolveCaseStudies(), resolveSiteConfig()]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Case Studies", url: absoluteUrl("/portfolio") },
        ])}
      />

      <section className="bg-[#FAF8F5] dark:bg-background">
        <div className="container-page pb-10 pt-10 md:pb-12 md:pt-12">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />
          <FadeIn className="mt-2 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5E2A5E] dark:text-brand-accent">
              Case Studies
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-ink text-balance md:text-5xl dark:text-white">
              Challenge, approach,{" "}
              <span className="italic text-[#5E2A5E] dark:text-[#D5C8D8]">result.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
              Real SEO and content work with measurable outcomes — keyword growth, organic
              traffic, and AI visibility wins you can inspect.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FAF8F5] pb-10 dark:bg-background">
        <div className="container-page">
          <CaseStudiesGrid studies={studies} />

          <p className="mt-8 max-w-3xl text-xs italic leading-relaxed text-brand-muted">
            * Keyword and traffic figures are snapshots from third-party SEO tools (e.g. Semrush),
            taken from the brands&apos; live dashboards. SEO is a team sport: these numbers reflect
            combined efforts across content, technical SEO, brand authority, and broader marketing.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#FAF8F5] dark:bg-background">
        <div className="container-page">
          <div className="rounded-[1.5rem] bg-[#18233A] px-6 py-10 text-center text-white md:px-10 md:py-12">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Want your own before-and-after? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Share your site and a target keyword — I&apos;ll reply with first thoughts and a free
              mini audit.
            </p>
            <Link
              href={`mailto:${site.email}?subject=Free%20mini%20audit`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5E2A5E] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Get my free mini audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
