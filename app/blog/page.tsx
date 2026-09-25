import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactCta } from "@/components/shared/contact-cta";
import { FadeIn, SectionHeading } from "@/components/shared/section-heading";
import { BlogIndex } from "@/components/blog/blog-index";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllPosts, getCategories } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "SEO, AI search (GEO/AEO), technical SEO, and content strategy insights from the rankedbyapril team.",
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getCategories()]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
        ])}
      />
      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-16 pt-10 md:pb-20 md:pt-14">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <FadeIn>
            <SectionHeading
              eyebrow="Blog"
              title="Insights on SEO, AI search, and growth systems"
              description="Practical playbooks — not recycled buzzwords."
            />
          </FadeIn>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page">
          <BlogIndex posts={posts} categories={categories} />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
