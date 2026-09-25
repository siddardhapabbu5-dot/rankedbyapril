"use client";

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
import { SectionHeading, Stagger, StaggerItem } from "@/components/shared/section-heading";
import { services } from "@/lib/data/services";

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

export function ServicesOverview() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="What we take off your plate"
          description="From audits and technical fixes to AI-ready content and conversion-focused sites — strategy through shipping."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons] || Search;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-ink/10 bg-white p-6 transition-all hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/5 dark:border-white/10 dark:bg-brand-surface"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-ink dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
