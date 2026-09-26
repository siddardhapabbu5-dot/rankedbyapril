"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function whenIdle(cb: () => void, timeout = 2500) {
  if (typeof window === "undefined") return () => {};
  const ric =
    window.requestIdleCallback?.bind(window) ??
    ((fn: IdleRequestCallback) => window.setTimeout(() => fn({} as IdleDeadline), 1));
  const id = ric(cb, { timeout });
  return () => {
    if (window.cancelIdleCallback) window.cancelIdleCallback(id as number);
    else window.clearTimeout(id as number);
  };
}

/** Mount children only when near the viewport — after load+idle to protect TBT/TTI. */
export function DeferredMount({
  children,
  minHeight = 480,
  rootMargin = "0px",
}: {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    let io: IntersectionObserver | null = null;
    let cancelIdle: (() => void) | undefined;

    const armObserver = () => {
      if (cancelled) return;

      if (typeof IntersectionObserver === "undefined") {
        setShow(true);
        return;
      }

      io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setShow(true);
            io?.disconnect();
          }
        },
        { rootMargin }
      );
      io.observe(el);
    };

    const start = () => {
      cancelIdle = whenIdle(armObserver);
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      cancelled = true;
      cancelIdle?.();
      io?.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show ? children : null}
    </div>
  );
}
