"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { mainNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const services = mainNav.find((item) => item.title === "Services");

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md dark:bg-background/90">
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
        <Logo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            if (item.children) {
              return (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-brand-accent",
                      pathname.startsWith("/services")
                        ? "text-brand-accent"
                        : "text-brand-ink/75 dark:text-white/75"
                    )}
                  >
                    {item.title}
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-brand-ink/8 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-brand-surface">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-surface dark:hover:bg-white/5"
                        >
                          <span className="block text-sm font-semibold text-brand-ink dark:text-white">
                            {child.title}
                          </span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs leading-snug text-brand-muted">
                              {child.description}
                            </span>
                          )}
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
                className={cn(
                  "rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-brand-accent",
                  active ? "text-brand-accent" : "text-brand-ink/75 dark:text-white/75"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Hire me
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-ink lg:hidden dark:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-brand-ink/8 lg:hidden dark:border-white/10"
          >
            <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
              {mainNav.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.title}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold"
                        onClick={() => setServicesOpen((v) => !v)}
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            servicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="mb-2 ml-2 space-y-1 border-l border-brand-ink/10 pl-3 dark:border-white/10">
                          {services?.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-md px-2 py-2 text-sm text-brand-ink/80 dark:text-white/80"
                              onClick={() => setOpen(false)}
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
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E84A6A] to-[#F05A78] px-5 py-3 text-sm font-semibold text-white"
              >
                Hire me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
