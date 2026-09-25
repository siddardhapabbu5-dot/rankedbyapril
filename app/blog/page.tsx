import Link from "next/link";
import { FadeIn } from "@/components/shared/section-heading";
import { BlogIndex } from "@/components/blog/blog-index";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "SEO, AI search & Shopify growth — practiced, then written. Notes from rankedbyapril on AEO, GEO, and organic growth.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
        ])}
      />

      <section className="bg-[#FAF8F5] dark:bg-background">
        <div className="container-page pb-10 pt-10 md:pb-12 md:pt-14">
          <p className="mb-6 text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-accent">
              Home
            </Link>
            <span className="mx-1.5 opacity-60">•</span>
            <span className="text-brand-ink dark:text-white">Blog</span>
          </p>
          <FadeIn className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-muted">
              The Ranked Notes
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-ink text-balance md:text-5xl dark:text-white">
              SEO, AI search &amp; Shopify growth —{" "}
              <span className="italic text-[#5E2A5E] dark:text-[#D5C8D8]">practiced</span>, then
              written.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
              No recycled tips. Everything here comes from work I&apos;ve actually shipped —
              including the tactics behind my clients&apos; AI Overview citations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#FAF8F5] pb-8 dark:bg-background">
        <div className="container-page">
          <BlogIndex posts={posts} />
        </div>
      </section>

      <section className="bg-[#FAF8F5] pb-16 pt-6 dark:bg-background">
        <div className="container-page border-t border-brand-ink/10 pt-8 text-center dark:border-white/10">
          <p className="text-sm text-brand-muted">
            New posts roughly twice a month. Want one written for your blog instead?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-ink underline underline-offset-2 hover:text-brand-accent dark:text-white"
            >
              That&apos;s literally my job.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
