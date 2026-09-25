export default function Loading() {
  return (
    <div className="container-page py-20" aria-busy="true" aria-label="Loading">
      <div className="h-8 w-48 animate-pulse rounded bg-brand-ink/10 dark:bg-white/10" />
      <div className="mt-6 h-12 w-full max-w-xl animate-pulse rounded bg-brand-ink/10 dark:bg-white/10" />
      <div className="mt-4 h-24 w-full max-w-2xl animate-pulse rounded bg-brand-ink/5 dark:bg-white/5" />
    </div>
  );
}
