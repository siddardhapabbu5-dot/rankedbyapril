import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.legalName}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <div className="container-page prose prose-neutral max-w-3xl dark:prose-invert">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1>Privacy Policy</h1>
        <p>Last updated: March 25, 2026</p>
        <p>
          {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This
          policy explains what information we collect through {siteConfig.url} and how we use it.
        </p>
        <h2>Information we collect</h2>
        <p>
          Contact forms, newsletter subscriptions, and booking tools may collect your name, email,
          company, phone number, and message content. Analytics tools may collect usage data such as
          pages viewed and approximate location.
        </p>
        <h2>How we use information</h2>
        <p>
          We use submitted information to respond to inquiries, deliver services, improve the
          website, and — with consent — send newsletters. We do not sell personal information.
        </p>
        <h2>Contact</h2>
        <p>
          Questions:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </div>
    </section>
  );
}
