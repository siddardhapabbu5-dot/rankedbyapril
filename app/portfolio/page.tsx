import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactCta } from "@/components/shared/contact-cta";
import { FadeIn, SectionHeading } from "@/components/shared/section-heading";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "SEO case studies, website projects, and AI visibility wins from rankedbyapril — with performance metrics and before/after results.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Portfolio", url: absoluteUrl("/portfolio") },
        ])}
      />
      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-16 pt-10 md:pb-20 md:pt-14">
          <Breadcrumbs items={[{ label: "Portfolio" }]} />
          <FadeIn>
            <SectionHeading
              eyebrow="Portfolio"
              title="Case studies with receipts"
              description="Filter by SEO, AI search, websites, local, and content. Every project includes metrics you can interrogate."
            />
          </FadeIn>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page">
          <PortfolioGrid />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
