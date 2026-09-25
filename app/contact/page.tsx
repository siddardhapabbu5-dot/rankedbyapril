import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactCta } from "@/components/shared/contact-cta";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn, SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
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

export default function ContactPage() {
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
        <div className="container-page pb-16 pt-10 md:pb-20 md:pt-14">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <FadeIn>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you're trying to grow"
              description="Share your site and goals. We'll reply within one business day — often with a free mini audit."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
              Project inquiry
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-brand-ink/10 bg-white p-6 dark:border-white/10 dark:bg-brand-surface">
              <h3 className="font-display text-lg font-bold text-brand-ink dark:text-white">
                Book a call
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                Prefer calendar booking? Grab a strategy slot on Calendly.
              </p>
              <Button asChild className="mt-5 w-full">
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" />
                  Open Calendly
                </a>
              </Button>
              <div className="mt-5 overflow-hidden rounded-xl border border-brand-ink/10 dark:border-white/10">
                <iframe
                  title="Schedule a strategy call"
                  src={`${siteConfig.calendly}?hide_gdpr_banner=1`}
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
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-accent">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-brand-accent" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-accent">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-brand-accent" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}`}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019742386654!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5b0d0d0d%3A0x0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
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
