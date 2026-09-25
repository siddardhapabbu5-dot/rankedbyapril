"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = mainNav.find((item) => item.title === "Services");

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/8 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-background/85">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            if (item.children) {
              return (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand-accent",
                      pathname.startsWith("/services")
                        ? "text-brand-accent"
                        : "text-brand-ink/80 dark:text-white/80"
                    )}
                  >
                    {item.title}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-[22rem] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-xl border border-brand-ink/10 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-brand-surface">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-brand-surface dark:hover:bg-white/5"
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

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand-accent",
                  pathname === item.href
                    ? "text-brand-accent"
                    : "text-brand-ink/80 dark:text-white/80"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Book a call</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
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
                          <Link
                            href="/services"
                            className="block rounded-md px-2 py-2 text-sm font-medium text-brand-accent"
                            onClick={() => setOpen(false)}
                          >
                            All services
                          </Link>
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
              <Button asChild className="mt-2">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Book a strategy call
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
