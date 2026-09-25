import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  href?: string;
};

export function Logo({ className, showTagline = false, href = "/" }: LogoProps) {
  const content = (
    <span className={cn("inline-flex flex-col items-start gap-1", className)}>
      <span className="inline-flex items-center gap-2.5">
        <svg
          width="36"
          height="32"
          viewBox="0 0 72 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M8 56V12h14.5c8.2 0 13.2 4.6 13.2 11.6 0 4.8-2.4 8.4-6.4 10.2L42 56H30.5L19.8 36.2H18V56H8Zm10-28.6h4.2c3.4 0 5.4-1.7 5.4-4.4s-2-4.3-5.4-4.3H18v8.7Z"
            className="fill-brand-ink dark:fill-white"
          />
          <path
            d="M40 40c6-8 14-14 24-16"
            stroke="url(#accentGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M56 14l10 8-12 2 2-10Z"
            fill="url(#accentGrad)"
          />
          <defs>
            <linearGradient id="accentGrad" x1="40" y1="40" x2="68" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F05A78" />
              <stop offset="1" stopColor="#FF8A9C" />
            </linearGradient>
          </defs>
        </svg>
        <span className="font-display text-lg font-bold tracking-tight md:text-xl">
          <span className="text-brand-ink dark:text-white">rankedby</span>
          <span className="text-brand-accent">april</span>
        </span>
      </span>
      {showTagline && (
        <span className="flex w-full items-center gap-2 pl-[46px] text-[10px] font-medium uppercase tracking-[0.22em] text-brand-muted">
          <span className="h-px flex-1 bg-brand-accent/50" aria-hidden />
          SEO. Websites. AI Growth.
          <span className="h-px flex-1 bg-brand-accent/50" aria-hidden />
        </span>
      )}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="focus-ring rounded-md" aria-label="rankedbyapril home">
      {content}
    </Link>
  );
}
