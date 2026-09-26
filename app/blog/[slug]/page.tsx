import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CmsContactCta } from "@/components/shared/cms-contact-cta";
import { Mdx } from "@/components/blog/mdx-content";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import {
  authors,
  getAllPosts,
  getAuthor,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta } = await getPostBySlug(slug);
    return buildMetadata({
      title: meta.title,
      description: meta.description,
      path: `/blog/${meta.slug}`,
      image: meta.image,
      type: "article",
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;
  const author = getAuthor(meta.author) || authors.april;
  const related = await getRelatedPosts(slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Blog", url: absoluteUrl("/blog") },
            { name: meta.title, url: absoluteUrl(`/blog/${meta.slug}`) },
          ]),
          articleSchema({
            title: meta.title,
            description: meta.description,
            url: absoluteUrl(`/blog/${meta.slug}`),
            image: absoluteUrl(meta.image),
            datePublished: meta.date,
            dateModified: meta.updated,
            authorName: author.name,
          }),
        ]}
      />

      <article>
        <header className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
          <div className="container-page pb-12 pt-10 md:pb-14 md:pt-12">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: meta.title },
              ]}
            />
            <Badge variant="accent">{meta.category}</Badge>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl dark:text-white">
              {meta.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-brand-muted">{meta.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-brand-muted">
              <Link
                href={`/blog/author/${author.slug}`}
                className="font-semibold text-brand-ink hover:text-brand-accent dark:text-white"
              >
                {author.name}
              </Link>
              <span aria-hidden>·</span>
              <time dateTime={meta.date}>{formatDate(meta.date)}</time>
              <span aria-hidden>·</span>
              <span>{meta.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="container-page section-pad">
          <div className="mx-auto max-w-3xl">
            <Mdx source={content} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad border-t border-brand-ink/8 bg-brand-surface dark:border-white/10 dark:bg-brand-surface/50">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
              Related posts
            </h2>
            <div className="section-gap grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="rounded-2xl border border-brand-ink/10 bg-white p-5 transition-colors hover:border-brand-accent/40 dark:border-white/10 dark:bg-background"
                >
                  <Badge variant="outline">{r.category}</Badge>
                  <p className="mt-3 font-display font-bold text-brand-ink dark:text-white">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CmsContactCta />
    </>
  );
}
