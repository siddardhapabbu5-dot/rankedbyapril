"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";
import { authors } from "@/lib/authors";

export function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        category === "all" || post.category.toLowerCase() === category.toLowerCase();
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Input
          type="search"
          placeholder="Search articles…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="md:max-w-sm"
          aria-label="Search blog posts"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
              category === "all"
                ? "bg-brand-accent text-white"
                : "bg-brand-surface text-brand-muted dark:bg-white/5"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
                category === cat
                  ? "bg-brand-accent text-white"
                  : "bg-brand-surface text-brand-muted dark:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((post) => {
          const author = authors[post.author];
          return (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-ink/10 bg-white dark:border-white/10 dark:bg-brand-surface"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-brand-navy to-brand-accent/70" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <Badge variant="accent">{post.category}</Badge>
                  <span className="text-xs text-brand-muted">{post.readingTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-brand-ink dark:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-accent">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-brand-muted leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-brand-muted">
                  <Link
                    href={`/blog/author/${post.author}`}
                    className="hover:text-brand-accent"
                  >
                    {author?.name || post.author}
                  </Link>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-brand-muted">No posts match your search.</p>
      )}
    </div>
  );
}
