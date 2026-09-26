import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactCta } from "@/components/shared/contact-cta";
import { FadeIn } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { authors, getAuthor, getPostsByAuthor } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return buildMetadata({
    title: `${author.name} — Author`,
    description: author.bio,
    path: `/blog/author/${author.slug}`,
  });
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const posts = await getPostsByAuthor(slug);

  return (
    <>
      <section className="gradient-mesh border-b border-brand-ink/8 dark:border-white/10">
        <div className="container-page pb-12 pt-10 md:pb-14 md:pt-12">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: author.name },
            ]}
          />
          <FadeIn>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-brand-navy to-brand-accent" />
              <div>
                <h1 className="font-display text-4xl font-bold text-brand-ink dark:text-white">
                  {author.name}
                </h1>
                <p className="mt-1 text-brand-accent">{author.role}</p>
                <p className="mt-3 max-w-xl text-brand-muted leading-relaxed">{author.bio}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-brand-ink dark:text-white">
            Articles by {author.name.split(" ")[0]}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-brand-ink/10 bg-white p-6 hover:border-brand-accent/40 dark:border-white/10 dark:bg-brand-surface"
              >
                <Badge variant="accent">{post.category}</Badge>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted">{post.description}</p>
                <p className="mt-4 text-xs text-brand-muted">{formatDate(post.date)}</p>
              </Link>
            ))}
          </div>
          {posts.length === 0 && (
            <p className="mt-6 text-brand-muted">No posts yet.</p>
          )}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
