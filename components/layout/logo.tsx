import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  /** sm = header, md = footer */
  size?: "sm" | "md";
};

export function Logo({ className, href = "/", size = "sm" }: LogoProps) {
  const isFooter = size === "md";

  const content = (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-brand-ink/5 dark:ring-white/10",
        isFooter ? "p-2.5" : "p-1.5",
        className
      )}
    >
      <Image
        src="/brand-logo.png"
        alt="rankedbyapril — SEO. Websites. AI Growth."
        width={isFooter ? 220 : 168}
        height={isFooter ? 220 : 168}
        priority={!isFooter}
        className={cn(
          "w-auto object-contain",
          isFooter ? "h-[7.5rem] sm:h-[8.5rem]" : "h-[3.75rem] sm:h-[4.25rem]"
        )}
      />
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="focus-ring inline-flex shrink-0 items-center rounded-xl"
      aria-label="rankedbyapril home"
    >
      {content}
    </Link>
  );
}
