import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";

export function ContactCta({
  title = "Want organic growth without renting every click?",
  description = "Tell us your site and goals. We'll reply with clear next steps — and a free mini audit if it's a fit.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-pad">
      <FadeIn>
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-14 text-white md:px-12 md:py-16">
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
                Let&apos;s talk
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact" data-analytics="contact_cta_click">
                    Book a strategy call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:border-brand-accent hover:bg-transparent hover:text-brand-accent"
                >
                  <a href={`mailto:${siteConfig.email}`}>Email {siteConfig.email}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
