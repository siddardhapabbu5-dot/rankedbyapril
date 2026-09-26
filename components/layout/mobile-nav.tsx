"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const LanguageSwitcher = dynamic(
  () =>
    import("@/components/layout/language-switcher").then((m) => m.LanguageSwitcher),
  { ssr: false }
);
const ThemeToggle = dynamic(
  () => import("@/components/layout/theme-toggle").then((m) => m.ThemeToggle),
  { ssr: false }
);
const InstallAppButton = dynamic(
  () =>
    import("@/components/shared/install-app-button").then((m) => m.InstallAppButton),
  { ssr: false }
);

type NavItem = {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function MobileNav({
  navItems,
  labels,
}: {
  navItems: NavItem[];
  labels: {
    openMenu: string;
    closeMenu: string;
    brochure: string;
    hireMe: string;
  };
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  function onNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
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
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-ink lg:hidden dark:text-white"
        aria-label={open ? labels.closeMenu : labels.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full overflow-hidden border-t border-brand-ink/8 bg-background lg:hidden dark:border-white/10">
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
              {labels.brochure} — Download PDF
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-5 py-3 text-sm font-semibold text-white"
            >
              {labels.hireMe}
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
