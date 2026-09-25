import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.legalName}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-pad">
      <div className="container-page prose prose-neutral max-w-3xl dark:prose-invert">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
        <h1>Terms of Service</h1>
        <p>Last updated: March 25, 2026</p>
        <p>
          By using {siteConfig.url}, you agree to these terms. Website content is provided for
          informational purposes. Service engagements are governed by separate statements of work.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Site design, copy, and branding belong to {siteConfig.legalName} unless otherwise noted.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          SEO and digital marketing outcomes depend on many factors outside our control. We do not
          guarantee rankings, traffic, or revenue results.
        </p>
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </div>
    </section>
  );
}
