"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { siteConfig } from "@/lib/site-config";

export type ContactCtaCopy = {
  eyebrow?: string;
  title?: string;
  description?: string;
  bookCall?: string;
  emailLabel?: string;
  email?: string;
};

export function ContactCta({
  title,
  description,
  eyebrow,
  bookCall,
  emailLabel,
  email,
}: ContactCtaCopy) {
  const { locale, t } = useLanguage();
  const useDict = locale !== "en";
  const resolvedEyebrow = useDict ? t.contactCta.eyebrow : eyebrow ?? t.contactCta.eyebrow;
  const resolvedTitle = useDict ? t.contactCta.title : title ?? t.contactCta.title;
  const resolvedDescription = useDict
    ? t.contactCta.description
    : description ?? t.contactCta.description;
  const resolvedBook = useDict ? t.contactCta.bookCall : bookCall ?? t.contactCta.bookCall;
  const resolvedEmailLabel = useDict ? t.contactCta.email : emailLabel ?? t.contactCta.email;
  const resolvedEmail = email ?? siteConfig.email;

  return (
    <section className="section-pad">
      <FadeIn>
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-[#111827] px-6 py-10 text-white md:px-12 md:py-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-brand-accent/20 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                {resolvedEyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                {resolvedTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/75 md:text-lg">
                {resolvedDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact" data-analytics="contact_cta_click">
                    {resolvedBook}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/35 bg-transparent text-white hover:border-brand-accent hover:bg-transparent hover:text-brand-accent"
                >
                  <a href={`mailto:${resolvedEmail}`}>
                    {resolvedEmailLabel} {resolvedEmail}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
