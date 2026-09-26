import { en } from "@/lib/i18n/dictionaries/en";

/**
 * Pure server-rendered hero for fast LCP (no client hydration on the LCP path).
 */
export function Hero() {
  const t = en.hero;
  const stats = [
    { value: "5+", label: t.stats.years },
    { value: "30+", label: t.stats.brands },
    { value: "250M+", label: t.stats.views },
    { value: "AI Overviews", label: t.stats.aiLabel, accent: true },
  ];
  const alt = `${t.roleLabel} — ${t.roleTitle}`;

  return (
    <section className="relative overflow-hidden bg-background dark:bg-background">
      <link
        rel="preload"
        as="image"
        href="/images/april-lcp.webp"
        type="image/webp"
        fetchPriority="high"
      />

      <div className="container-page relative grid items-start gap-8 pb-10 pt-8 md:gap-12 md:pb-16 md:pt-12 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-7 lg:pt-2">
          <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            {t.titleBefore}{" "}
            <span className="italic text-brand-accent-dark dark:text-brand-accent">
              {t.visibility}
            </span>
            {t.titleMiddle}{" "}
            <span className="italic text-brand-accent-dark dark:text-brand-accent">
              {t.revenue}
            </span>
            {t.titleAfter}
          </h1>

          <p className="mt-5 max-w-xl text-lg font-normal leading-[1.6] text-brand-body md:text-xl dark:text-brand-muted">
            {t.bodyBefore}{" "}
            <strong className="font-semibold text-brand-ink dark:text-white">
              {t.bodyStrong1}
            </strong>
            {t.bodyMid}{" "}
            <strong className="font-semibold text-brand-ink dark:text-white">
              {t.bodyStrong2}
            </strong>
            {t.bodyAfter}
          </p>

          <dl className="mt-8 hidden grid-cols-2 gap-x-6 gap-y-6 sm:grid sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt
                  className={
                    stat.accent
                      ? "font-display text-lg font-bold leading-tight text-brand-accent-dark md:text-xl dark:text-brand-accent"
                      : "font-display text-2xl font-bold text-brand-ink md:text-[1.75rem] dark:text-white"
                  }
                >
                  {stat.value}
                </dt>
                <dd className="mt-1.5 max-w-[11rem] text-[12px] leading-snug text-brand-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="relative overflow-hidden rounded-[1.75rem] border-[5px] border-white bg-white shadow-[0_25px_60px_-25px_rgba(24,35,58,0.4)] dark:border-white/10">
              <picture>
                <source srcSet="/images/april-lcp.webp" type="image/webp" />
                {/* eslint-disable-next-line @next/next/no-img-element -- static LCP asset */}
                <img
                  src="/images/april-lcp.jpg"
                  alt={alt}
                  width={720}
                  height={900}
                  decoding="sync"
                  fetchPriority="high"
                  className="aspect-[4/5] h-auto w-full object-cover object-top"
                />
              </picture>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-accent-dark dark:text-brand-accent">
              {t.roleLabel}
            </p>
            <p className="mx-auto mt-1.5 max-w-xs text-sm font-semibold text-brand-ink dark:text-white">
              {t.roleTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
