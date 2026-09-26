"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { InstallAppButton } from "@/components/shared/install-app-button";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  const serviceChildren = [
    { title: t.nav.shopifySeo, href: "/services/seo" },
    { title: t.nav.aeoGeo, href: "/services/ai-seo" },
    { title: t.nav.contentWriting, href: "/services/content-marketing" },
    { title: t.nav.allServices, href: "/#services" },
  ];

  const navItems: {
    title: string;
    href: string;
    children?: { title: string; href: string }[];
  }[] = [
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

  function onNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (!href.includes("#")) return;

    const [path, hash] = href.split("#");
    const targetPath = path || "/";
    const onTargetPage =
      pathname === targetPath || (targetPath === "/" && pathname === "/");

    if (onTargetPage && hash) {
      event.preventDefault();
      scrollToHash(hash);
      setOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md dark:bg-background/90">
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
                <div
                  key={item.href}
                  className="relative shrink-0"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    onClick={(event) => onNavClick(event, item.href)}
                    className={cn(
                      "inline-flex items-center gap-0.5 rounded-full px-2 py-2 text-[13px] font-medium transition-colors hover:text-brand-accent xl:gap-1 xl:px-3 xl:text-[15px]",
                      pathname.startsWith("/services")
                        ? "text-brand-accent"
                        : "text-brand-ink/75 dark:text-white/75"
                    )}
                    aria-expanded={desktopServicesOpen}
                    aria-haspopup="true"
                    onFocus={() => setDesktopServicesOpen(true)}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 opacity-50 transition-transform",
                        desktopServicesOpen && "rotate-180"
                      )}
                    />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 min-w-[15.5rem] pt-2 transition-all",
                      desktopServicesOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0 pointer-events-none"
                    )}
                  >
                    <div className="rounded-2xl border border-brand-ink/8 bg-white py-2 shadow-[0_12px_40px_-12px_rgba(24,35,58,0.35)] dark:border-white/10 dark:bg-brand-surface">
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.title}
                          href={child.href}
                          className="block px-5 py-2.5 text-[15px] font-medium text-brand-ink/85 transition-colors hover:bg-brand-surface hover:text-brand-ink dark:text-white/85 dark:hover:bg-white/5 dark:hover:text-white"
                          onClick={(event) => {
                            onNavClick(event, child.href);
                            setDesktopServicesOpen(false);
                          }}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const active =
              item.href.startsWith("/#")
                ? false
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => onNavClick(event, item.href)}
                className={cn(
                  "shrink-0 rounded-full px-2 py-2 text-[13px] font-medium transition-colors hover:text-brand-accent xl:px-3 xl:text-[15px]",
                  active ? "text-brand-accent" : "text-brand-ink/75 dark:text-white/75"
                )}
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
          <InstallAppButton variant="header" />
          <LanguageSwitcher />
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] xl:inline-flex"
          >
            {t.nav.hireMe}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-ink lg:hidden dark:text-white"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="overflow-hidden border-t border-brand-ink/8 lg:hidden dark:border-white/10">
            <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.href}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className="flex-1 rounded-md px-3 py-2.5 text-left text-sm font-semibold"
                          onClick={(event) => {
                            onNavClick(event, item.href);
                            if (!item.href.includes("#")) setOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          className="rounded-md px-3 py-2.5"
                          aria-label={`${item.title} submenu`}
                          onClick={() => setServicesOpen((v) => !v)}
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                      </div>
                      {servicesOpen && (
                        <div className="mb-2 ml-2 space-y-1 border-l border-brand-ink/10 pl-3 dark:border-white/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.href + child.title}
                              href={child.href}
                              className="block rounded-md px-2 py-2 text-sm text-brand-ink/80 dark:text-white/80"
                              onClick={(event) => {
                                onNavClick(event, child.href);
                                if (!child.href.includes("#")) setOpen(false);
                              }}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2.5 text-sm font-semibold"
                    onClick={(event) => {
                      onNavClick(event, item.href);
                      if (!item.href.includes("#")) setOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <div className="mt-2 flex items-center gap-2 px-3 sm:hidden">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <div className="border-t border-brand-ink/8 pt-1 dark:border-white/10">
                <InstallAppButton variant="menu" onInstalled={() => setOpen(false)} />
              </div>
              <Link
                href="/brochure"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-brand-ink/15 px-5 py-3 text-sm font-semibold text-brand-ink dark:border-white/20 dark:text-white"
              >
                {t.nav.brochure} — Download PDF
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-5 py-3 text-sm font-semibold text-white"
              >
                {t.nav.hireMe}
              </Link>
            </nav>
          </div>
      ) : null}
    </header>
  );
}
