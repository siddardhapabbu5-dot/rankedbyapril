import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  const content = (
    <span
      className={cn(
        "font-display text-[1.35rem] font-bold tracking-tight text-brand-ink dark:text-white",
        className
      )}
    >
      rankedby<span className="text-brand-accent">april</span>
      <span className="text-brand-ink dark:text-white">.</span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="focus-ring rounded-md" aria-label="rankedbyapril home">
      {content}
    </Link>
  );
}
