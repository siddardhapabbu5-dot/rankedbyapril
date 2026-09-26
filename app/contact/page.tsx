import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn, SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { getContact } from "@/lib/cms/store";
import { resolveSiteConfig } from "@/lib/cms/public";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact rankedbyapril — book a Calendly strategy call, send a project brief, or message us on WhatsApp.",
  path: "/contact",
});

export default async function ContactPage() {
  const [copy, site] = await Promise.all([getContact(), resolveSiteConfig()]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Contact", url: absoluteUrl("/contact") },
          ]),
          localBusinessSchema(),
        ]}
      />
      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-12 pt-10 md:pb-14 md:pt-12">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <FadeIn>
            <SectionHeading
              as="h1"
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
              {copy.formTitle}
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-brand-ink/10 bg-white p-6 dark:border-white/10 dark:bg-brand-surface">
              <h3 className="font-display text-lg font-bold text-brand-ink dark:text-white">
                {copy.bookTitle}
              </h3>
              <p className="mt-2 text-sm text-brand-muted">{copy.bookDescription}</p>
              <Button asChild className="mt-5 w-full">
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="calendly_click"
                >
                  <Calendar className="h-4 w-4" />
                  {copy.bookButton}
                </a>
              </Button>
              <div className="mt-5 overflow-hidden rounded-xl border border-brand-ink/10 dark:border-white/10">
                <iframe
                  title="Schedule a strategy call"
                  src={`${site.calendly}?hide_gdpr_banner=1`}
                  className="h-[420px] w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-brand-ink/10 bg-white p-6 dark:border-white/10 dark:bg-brand-surface">
              <h3 className="font-display text-lg font-bold text-brand-ink dark:text-white">
                Business information
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-brand-muted">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-brand-accent" />
                  <a href={`mailto:${site.email}`} className="hover:text-brand-accent">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-brand-accent" />
                  <a href={`tel:${site.phone}`} className="hover:text-brand-accent">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-brand-accent" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state}
                    <br />
                    {site.address.country}
                  </span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on WhatsApp
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
            Find us
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-ink/10 dark:border-white/10">
            <iframe
              title="rankedbyapril office location"
              src="https://www.google.com/maps?q=P2+Poblacion,+Guipos,+Zamboanga+del+Sur,+Philippines&z=14&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
