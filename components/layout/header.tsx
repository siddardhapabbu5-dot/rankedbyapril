import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { HeaderExtras } from "@/components/layout/header-extras";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageProvider } from "@/components/providers/language-provider";
import { en } from "@/lib/i18n/dictionaries/en";

const t = en;

const serviceChildren = [
  { title: t.nav.shopifySeo, href: "/services/seo" },
  { title: t.nav.aeoGeo, href: "/services/ai-seo" },
  { title: t.nav.contentWriting, href: "/services/content-marketing" },
  { title: t.nav.allServices, href: "/#services" },
];

const navItems = [
  { title: t.nav.results, href: "/#results" },
  {
    title: t.nav.services,
    href: "/#services",
    children: serviceChildren,
  },
  { title: t.nav.caseStudies, href: "/portfolio" },
  { title: t.nav.blog, href: "/blog" },
  { title: t.nav.about, href: "/about" },
];

/** Server-rendered header — mobile menu is the only client island. */
export function Header() {
  return (
      <header className="relative sticky top-0 z-50 bg-background/95 dark:bg-background/95">
      <div className="container-page flex h-[5.5rem] items-center gap-3 sm:h-[6rem] lg:gap-4">
        <div className="shrink-0">
          <Logo />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.href} className="group relative shrink-0">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-0.5 rounded-full px-2 py-2 text-[13px] font-medium text-brand-ink/75 transition-colors hover:text-brand-accent xl:gap-1 xl:px-3 xl:text-[15px] dark:text-white/75"
                  >
                    {item.title}
                    <span className="inline-block h-0 w-0 border-x-[3.5px] border-t-[4px] border-x-transparent border-t-current opacity-50" aria-hidden />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[15.5rem] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-brand-ink/8 bg-white py-2 shadow-[0_12px_40px_-12px_rgba(24,35,58,0.35)] dark:border-white/10 dark:bg-brand-surface">
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.title}
                          href={child.href}
                          className="block px-5 py-2.5 text-[15px] font-medium text-brand-ink/85 transition-colors hover:bg-brand-surface hover:text-brand-ink dark:text-white/85 dark:hover:bg-white/5 dark:hover:text-white"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full px-2 py-2 text-[13px] font-medium text-brand-ink/75 transition-colors hover:text-brand-accent xl:px-3 xl:text-[15px] dark:text-white/75"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-1.5">
          <Link
            href="/brochure"
            className="hidden items-center gap-1.5 rounded-full border border-brand-ink/15 px-3 py-2 text-xs font-semibold text-brand-ink/85 transition-colors hover:border-brand-accent hover:text-brand-accent sm:inline-flex dark:border-white/20 dark:text-white/85"
          >
            {t.nav.brochure}
          </Link>
          <LanguageProvider>
            <HeaderExtras />
          </LanguageProvider>
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] xl:inline-flex"
          >
            {t.nav.hireMe}
          </Link>
          <LanguageProvider>
            <MobileNav
              navItems={navItems}
              labels={{
                openMenu: t.nav.openMenu,
                closeMenu: t.nav.closeMenu,
                brochure: t.nav.brochure,
                hireMe: t.nav.hireMe,
              }}
            />
          </LanguageProvider>
        </div>
      </div>
    </header>
  );
}
