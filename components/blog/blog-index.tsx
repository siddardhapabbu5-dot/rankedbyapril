"use client";

import Link from "next/link";
import type { BlogPost } from "@/types";
import { ArrowUpRight } from "lucide-react";

function formatMonthYear(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex h-full flex-col rounded-2xl border border-brand-ink/10 bg-white p-6 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-brand-surface md:p-7"
          >
            <div className="flex flex-wrap gap-2">
              {[post.category, ...post.tags]
                .filter(Boolean)
                .filter((tag, i, arr) => arr.indexOf(tag) === i)
                .slice(0, 2)
                .map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F05A78]/12 px-2.5 py-1 text-[11px] font-semibold text-[#C43D5C]"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <h2 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-brand-ink dark:text-white">
              <Link href={`/blog/${post.slug}`} className="hover:text-brand-accent">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-muted transition-colors hover:text-brand-accent"
            >
              <time dateTime={post.date}>{formatMonthYear(post.date)}</time>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-12 text-center text-brand-muted">No posts yet.</p>
      )}
    </div>
  );
}
