import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Use h1 for page heroes; h2 (default) for in-page sections */
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;
  return (
    <div
      className={cn(
        "max-w-2xl animate-fade-up",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-accent-dark dark:text-brand-accent">
          {eyebrow}
        </p>
      )}
      <HeadingTag
        className={cn(
          "font-display tracking-tight text-brand-ink text-balance dark:text-white",
          as === "h1"
            ? "text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl"
            : "mt-0 text-3xl font-bold leading-[1.15] md:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-3 text-base font-normal leading-relaxed text-brand-body md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("animate-fade-up", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("animate-fade-up", className)}>{children}</div>;
}
