import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CmsContactCta } from "@/components/shared/cms-contact-cta";
import { FaqSection } from "@/components/home/faq-section";
import { FadeIn, SectionHeading, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { services as baseServices } from "@/lib/data/services";
import { resolveServices } from "@/lib/cms/public";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return baseServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const list = await resolveServices();
  const service = list.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const list = await resolveServices();
  const service = list.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Services", url: absoluteUrl("/services") },
            { name: service.title, url: absoluteUrl(`/services/${service.slug}`) },
          ]),
          serviceSchema({
            name: service.title,
            description: service.description,
            url: absoluteUrl(`/services/${service.slug}`),
          }),
          faqSchema(service.faqs),
        ]}
      />

      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-12 pt-10 md:pb-14 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Service
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl dark:text-white">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-muted leading-relaxed">
              {service.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Get a proposal</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">See related work</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="What's included" />
            <ul className="mt-8 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-brand-ink dark:text-white">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Outcomes we aim for" />
            <ul className="mt-8 space-y-3">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-xl border border-brand-ink/10 bg-brand-surface px-4 py-3 text-sm dark:border-white/10 dark:bg-brand-surface"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-surface dark:bg-brand-surface/50">
        <div className="container-page">
          <SectionHeading title="How we deliver" />
          <Stagger className="section-gap grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <StaggerItem key={step.step}>
                <div className="h-full rounded-2xl border border-brand-ink/8 bg-white p-6 dark:border-white/10 dark:bg-background">
                  <span className="font-display text-sm font-bold text-brand-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-brand-ink dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {service.faqs.length > 0 && <FaqSection faqs={service.faqs} title={`${service.shortTitle} FAQ`} />}
      <CmsContactCta />
    </>
  );
}
