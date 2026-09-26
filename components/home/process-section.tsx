import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/section-heading";

const steps = [
  {
    number: "01",
    title: "Start with the Goal",
    description:
      "First, I get a good understanding of the business. I review the website, analytics, search performance, competitors, audience, and current priorities. This helps me see what is already working, where the gaps are, and which opportunities are worth pursuing.",
    accent: "#3D6B5E",
    image: "/images/process/01-goal.jpg",
  },
  {
    number: "02",
    title: "Fix the Foundation",
    description:
      "Before creating more content or pushing for more traffic, I make sure the site has a strong base. That can include technical SEO fixes, page updates, internal linking, site structure improvements, and on-page optimization. The goal is to remove anything that could limit growth.",
    accent: "#4A7AB5",
    image: "/images/process/02-foundation.jpg",
  },
  {
    number: "03",
    title: "Build the Strategy",
    description:
      "From there, I map out the priorities based on the strongest opportunities. I look at keywords, search intent, competition, business value, and revenue potential. Then I decide which pages need work, which topics are worth creating, and where the site can gain the most traction. Getting more traffic matters, but bringing in the right people matters more.",
    accent: "#C4A882",
    image: "/images/process/03-strategy.jpg",
  },
  {
    number: "04",
    title: "Create and Optimize",
    description:
      "I write and improve content that is useful, easy to read, and built around what people are actually searching for. Each page should answer the right questions, support the customer journey, and help move the reader toward the next step without sounding forced or overly promotional.",
    accent: "#8B6B8E",
    image: "/images/process/04-create.jpg",
  },
  {
    number: "05",
    title: "Review and Quality Check",
    description:
      "Before anything goes live, I review the details. I check the structure, headings, metadata, internal links, keyword use, search intent, readability, accuracy, and conversion opportunities.",
    accent: "#5B8DEF",
    image: "/images/process/05-review.jpg",
  },
  {
    number: "06",
    title: "Measure and Improve",
    description:
      "Once the work is live, I look at how it performs. I track rankings, traffic, engagement, conversions, and overall progress. Then I use that data to decide what should be updated, expanded, tested, or prioritized next.",
    accent: "#3D6B5E",
    image: "/images/process/06-measure.jpg",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-pad scroll-mt-24 bg-[#FAF8F5] dark:bg-background">
      <div className="container-page">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
            Process
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl dark:text-white">
            How I work.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-muted md:text-lg">
            Every project is a little different, but this is generally how I approach the work. I
            start by understanding the business, identify what is getting in the way, and build
            from there based on what the site and the data actually need.
          </p>
        </FadeIn>

        <Stagger className="section-gap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <article
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-ink/8 bg-white shadow-[0_8px_30px_-14px_rgba(24,35,58,0.12)] dark:border-white/10 dark:bg-brand-surface"
                style={{ borderLeftWidth: 3, borderLeftColor: step.accent }}
              >
                <div className="relative">
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-surface">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <span
                    className="absolute -bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white shadow-md"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-7">
                  <h3 className="font-display text-lg font-bold text-brand-ink dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
