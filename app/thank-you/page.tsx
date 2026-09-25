import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Thank you",
  description: "Thanks for contacting rankedbyapril — we'll reply within one business day.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Thank you", url: absoluteUrl("/thank-you") },
        ])}
      />
      <section className="gradient-mesh">
        <div className="container-page flex min-h-[60vh] flex-col justify-center pb-20 pt-10 md:pt-14">
          <Breadcrumbs items={[{ label: "Thank you" }]} />
          <div className="mx-auto max-w-xl text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-brand-accent" aria-hidden />
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-brand-ink dark:text-white">
              Message received
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
              Thanks for reaching out. We&apos;ll reply within one business day — often with a free
              mini audit and clear next steps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild>
                <Link href="/">Back to home</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
                  Book a strategy call
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-brand-muted">
              Urgent? Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-brand-accent hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or message us on WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
