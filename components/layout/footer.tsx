import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { footerNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "Twitter / X", href: siteConfig.social.twitter },
    { label: "Instagram", href: siteConfig.social.instagram },
  ];

  return (
    <footer className="border-t border-brand-ink/10 bg-brand-surface pb-20 dark:border-white/10 dark:bg-brand-surface sm:pb-0">
      <div className="container-page section-pad !pb-10 !pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-muted">
              SEO. Websites. AI Growth.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-muted">
              Premium SEO, AI search optimization, and websites that turn visibility into
              pipeline. Built for brands that want organic growth that compounds.
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
                Newsletter
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-brand-ink dark:text-white">Services</h3>
              <ul className="mt-4 space-y-2.5">
                {footerNav.services.map((item) => (
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
              <h3 className="text-sm font-semibold text-brand-ink dark:text-white">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {footerNav.company.map((item) => (
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
              <h3 className="text-sm font-semibold text-brand-ink dark:text-white">Contact</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-muted">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-accent">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-accent">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brand-ink/10 pt-6 text-sm text-brand-muted dark:border-white/10 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
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
