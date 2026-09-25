import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/types";
import { authors, getAuthor } from "@/lib/authors";

export { authors, getAuthor };

const contentDir = path.join(process.cwd(), "content/blog");

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(contentDir);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".mdx"))
        .map(async (filename) => {
          const slug = filename.replace(/\.mdx$/, "");
          const raw = await fs.readFile(path.join(contentDir, filename), "utf8");
          const { data, content } = matter(raw);
          const stats = readingTime(content);
          return {
            slug,
            title: data.title as string,
            description: data.description as string,
            date: data.date as string,
            updated: data.updated as string | undefined,
            author: data.author as string,
            category: data.category as string,
            tags: (data.tags as string[]) || [],
            image: (data.image as string) || "/images/blog-default.jpg",
            readingTime: stats.text,
            featured: Boolean(data.featured),
          } satisfies BlogPost;
        })
    );
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  const raw = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    meta: {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      updated: data.updated as string | undefined,
      author: data.author as string,
      category: data.category as string,
      tags: (data.tags as string[]) || [],
      image: (data.image as string) || "/images/blog-default.jpg",
      readingTime: stats.text,
      featured: Boolean(data.featured),
    } satisfies BlogPost,
    content,
  };
}

export async function getPostsByCategory(category: string) {
  const posts = await getAllPosts();
  return posts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getPostsByAuthor(authorSlug: string) {
  const posts = await getAllPosts();
  return posts.filter((p) => p.author === authorSlug);
}

export async function getRelatedPosts(slug: string, limit = 3) {
  const posts = await getAllPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return posts.slice(0, limit);
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aScore =
        (a.category === current.category ? 2 : 0) +
        a.tags.filter((t) => current.tags.includes(t)).length;
      const bScore =
        (b.category === current.category ? 2 : 0) +
        b.tags.filter((t) => current.tags.includes(t)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export async function getCategories() {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((p) => p.category))).sort();
}
