import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { en } from "@/lib/i18n/dictionaries/en";
import { resolveHomeContent, resolveSiteConfig } from "@/lib/cms/public";

/** Server-rendered footer. Newsletter is the only client island. */
export async function Footer() {
  const t = en;
  const [home, site] = await Promise.all([resolveHomeContent(), resolveSiteConfig()]);
  const year = new Date().getFullYear();
  const socialLinks = [
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "Twitter / X", href: site.social.twitter },
    { label: "Instagram", href: site.social.instagram },
  ];

  const serviceLinks = [
    { title: t.services.seo.title, href: "/services/seo" },
    { title: t.services.aiSeo.title, href: "/services/ai-seo" },
    { title: t.services.webDev.title, href: "/services/web-development" },
    { title: t.services.localSeo.title, href: "/services/local-seo" },
    { title: t.services.content.title, href: "/services/content-marketing" },
    { title: t.services.whiteLabel.title, href: "/services/white-label-seo" },
  ];

  const companyLinks = [
    { title: t.nav.services, href: "/services" },
    { title: t.nav.caseStudies, href: "/portfolio" },
    { title: t.nav.blog, href: "/blog" },
    { title: t.nav.about, href: "/about" },
    { title: t.nav.brochure, href: "/brochure" },
    { title: t.footer.contact, href: "/contact" },
  ];

  const legalLinks = [
    { title: t.footer.privacy, href: "/privacy" },
    { title: t.footer.terms, href: "/terms" },
  ];

  return (
    <footer
      className="border-t border-brand-ink/10 bg-brand-surface pb-20 dark:border-white/10 dark:bg-brand-surface sm:pb-0"
      style={{ contentVisibility: "auto", containIntrinsicSize: "480px" }}
    >
      <div className="container-page section-pad !pb-8 !pt-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="md" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-muted">
              {home.footerBlurb}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-brand-ink dark:text-white">
                {t.footer.newsletter}
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-brand-ink dark:text-white">
                {t.footer.services}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-accent"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-brand-ink dark:text-white">
                {t.footer.company}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-accent"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-brand-ink dark:text-white">
                {t.footer.contact}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-muted">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-brand-accent">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phone}`} className="hover:text-brand-accent">
                    {site.phone}
                  </a>
                </li>
                <li>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state}
                  <br />
                  {site.address.country}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-brand-ink/10 pt-6 text-sm text-brand-muted dark:border-white/10 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-accent">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
