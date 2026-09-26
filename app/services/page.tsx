import Link from "next/link";
import {
  Code2,
  FileText,
  Layers,
  MapPin,
  Search,
  Settings2,
  Sparkles,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactCta } from "@/components/shared/contact-cta";
import { FadeIn, SectionHeading, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/lib/data/services";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore rankedbyapril services: SEO, AI SEO / GEO, web development, local SEO, technical SEO, content marketing, lead generation, and white-label SEO.",
  path: "/services",
});

const icons = {
  Search,
  Sparkles,
  Code2,
  MapPin,
  Settings2,
  FileText,
  Target,
  Layers,
} as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services") },
        ])}
      />
      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-12 pt-10 md:pb-14 md:pt-12">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <FadeIn>
            <SectionHeading
              as="h1"
              eyebrow="Services"
              title="Full-stack organic growth — not disconnected deliverables"
              description="Strategy, technical depth, content, AI visibility, and websites under one operating system."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Stagger className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = icons[service.icon as keyof typeof icons] || Search;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full gap-5 rounded-2xl border border-brand-ink/10 bg-white p-7 transition-all hover:border-brand-accent/40 hover:shadow-lg dark:border-white/10 dark:bg-brand-surface"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-brand-ink group-hover:text-brand-accent dark:text-white">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
                        View service
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <ContactCta title="Not sure which service fits?" description="Tell us your goals — we'll recommend the leanest path to impact." />
    </>
  );
}
