import { FadeIn } from "@/components/shared/section-heading";

type Brand = { name: string; color: string; mark: string };

const ecommerce: Brand[] = [
  { name: "Momcozy", color: "#E85A7A", mark: "M" },
  { name: "Keychron", color: "#1A1A1A", mark: "K" },
  { name: "ArcCaptain", color: "#E85A2A", mark: "A" },
  { name: "MOFT", color: "#111111", mark: "M" },
  { name: "BTArtbox Nails", color: "#C45C8A", mark: "B" },
  { name: "iSinwheel", color: "#2B6CB0", mark: "i" },
  { name: "AlppiBaby", color: "#5B8DEF", mark: "A" },
  { name: "BetterPatio", color: "#2F6B4F", mark: "B" },
];

const saas: Brand[] = [
  { name: "Caring Village", color: "#4A7C59", mark: "C" },
  { name: "Kendo AI", color: "#FF5C35", mark: "K" },
  { name: "Textedly", color: "#2D6CDF", mark: "T" },
  { name: "Textline", color: "#1B9E6E", mark: "T" },
  { name: "TxtCart", color: "#6C5CE7", mark: "T" },
  { name: "Alia", color: "#F05A78", mark: "A" },
];

function BrandPill({ brand }: { brand: Brand }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white px-3.5 py-2 shadow-[0_1px_2px_rgba(24,35,58,0.04)] dark:border-white/10 dark:bg-brand-surface">
      <span
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ backgroundColor: brand.color }}
        aria-hidden
      >
        {brand.mark}
      </span>
      <span className="text-sm font-medium text-brand-ink dark:text-white">{brand.name}</span>
    </li>
  );
}

export function ClientLogos() {
  return (
    <section className="border-y border-brand-ink/8 bg-[#FAF8F5] section-pad dark:border-white/10 dark:bg-brand-surface/40">
      <div className="container-page">
        <FadeIn>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
            Some of the brands I&apos;ve ranked &amp; written for
          </p>

          <div className="section-gap grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink dark:text-white">
                Ecommerce Â· SEO &amp; content
              </p>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {ecommerce.map((brand) => (
                  <BrandPill key={brand.name} brand={brand} />
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink dark:text-white">
                SaaS Â· long-form SEO content
              </p>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {saas.map((brand) => (
                  <BrandPill key={brand.name} brand={brand} />
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-sm italic leading-relaxed text-brand-muted">
            A sample, not the full list. I&apos;ve worked with 20+ more brands across ecommerce,
            health, legal, and lifestyle. The numbers below tell that story.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
