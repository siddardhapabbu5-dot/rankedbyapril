import { Search, Sparkles, Bot } from "lucide-react";
import { SectionHeading, Stagger, StaggerItem } from "@/components/shared/section-heading";

const pillars = [
  {
    number: "01",
    title: "SEO",
    description:
      "Search Engine Optimization helps your pages rank in traditional search and capture existing demand.",
    icon: Search,
  },
  {
    number: "02",
    title: "AEO",
    description:
      "AI Overview Optimization structures direct, verifiable answers for Google's AI-generated results.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "GEO",
    description:
      "Generative Engine Optimization helps your brand become a credible source AI platforms can cite.",
    icon: Bot,
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-brand-surface dark:bg-brand-surface/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="The new SERP"
          title="You've heard of SEO. Discovery changed."
          description="Customers find brands through classic results, Google AI answers, and tools like ChatGPT and Perplexity. A complete visibility strategy accounts for all three."
        />
        <Stagger className="section-gap grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.number}>
              <div className="h-full rounded-2xl border border-brand-ink/8 bg-white p-7 dark:border-white/10 dark:bg-background">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-brand-accent">
                    {pillar.number}
                  </span>
                  <pillar.icon className="h-5 w-5 text-brand-navy dark:text-brand-accent" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-brand-ink dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
