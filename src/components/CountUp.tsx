"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Raw value string like "282+", "4.9/5", "266+" */
  value: string;
  durationMs?: number;
  className?: string;
};

/**
 * Counts up to the numeric portion of `value` when scrolled into view,
 * preserving any prefix/suffix (e.g. "+", "/5", "★").
 */
export default function CountUp({ value, durationMs = 1600, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  const match = value.match(/[\d.]+/);
  const target = match ? parseFloat(match[0]) : null;
  const decimals = match && match[0].includes(".") ? match[0].split(".")[1].length : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        if (prefersReduced) {
          setDisplay(value);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          const current = (target * eased).toFixed(decimals);
          setDisplay(`${prefix}${current}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
