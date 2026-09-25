import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "outline" | "accent";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold tracking-wide",
      variant === "default" && "bg-brand-navy/10 text-brand-navy dark:bg-brand-accent/15 dark:text-brand-accent",
      variant === "outline" && "border border-brand-ink/15 text-brand-ink/70 dark:border-white/20 dark:text-white/70",
      variant === "accent" && "bg-brand-accent/10 text-brand-accent",
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
