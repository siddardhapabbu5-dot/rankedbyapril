import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-8 scroll-mt-24 font-display text-2xl font-bold text-brand-ink dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-6 scroll-mt-24 font-display text-xl font-bold text-brand-ink dark:text-white"
      {...props}
    />
  ),
  p: (props) => <p className="mt-3 leading-relaxed text-brand-muted" {...props} />,
  ul: (props) => <ul className="mt-3 list-disc space-y-1.5 pl-5 text-brand-muted" {...props} />,
  ol: (props) => <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-brand-muted" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a className="font-medium text-brand-accent underline-offset-2 hover:underline" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-brand-ink dark:text-white" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-5 border-l-2 border-brand-accent pl-4 italic text-brand-muted"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-brand-surface px-1.5 py-0.5 text-sm text-brand-accent dark:bg-white/10"
      {...props}
    />
  ),
};

export function Mdx({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
