"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────
 * LOADING STATE — pixel-grid loader for long-running work
 *
 * Variants:
 *   Drive  — square cells, chevron wavefront driving right;
 *            the 650ms cycle is shorter than the sweep, so
 *            two fronts are always in flight
 *   Dots   — same wavefront, circular cells
 *   Orbit  — a comet lapping the grid perimeter
 *
 * Paired with a shimmering label and a live elapsed timer
 * in mono tabular figures. Reduced motion freezes the grid
 * to its dim state; the timer still ticks.
 * ───────────────────────────────────────────────────────── */

const chevron = Array.from({ length: 9 }, (_, i) => {
  const r = Math.floor(i / 3),
    c = i % 3;
  return (c + Math.abs(r - 1)) * 90;
});

const ORBIT_ORDER = [0, 1, 2, 5, 8, 7, 6, 3];
const orbit = Array.from({ length: 9 }, (_, i) => {
  const k = ORBIT_ORDER.indexOf(i);
  return k === -1 ? null : k * 110;
});

const PATTERNS = {
  Drive: { delays: chevron, dur: 650, round: false },
  Dots: { delays: chevron, dur: 650, round: true },
  Orbit: { delays: orbit, dur: 950, round: false },
};

function useProgress(durationMs = 2000) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = 30; // update every 30ms
    const steps = durationMs / interval;
    const increment = 100 / steps;
    
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          return 100;
        }
        return Math.min(p + increment, 100);
      });
    }, interval);
    
    return () => clearInterval(t);
  }, [durationMs]);
  
  return `${Math.floor(progress)}%`;
}

export default function LoadingState({
  label = "Churning",
  variant = "Drive",
}) {
  const progress = useProgress(3000); // Matches App.js timeout
  const { delays, dur, round } = PATTERNS[variant] ?? PATTERNS.Drive;

  return (
    <div className="flex w-fit items-center gap-5">
      <span aria-hidden className="grid grid-cols-[repeat(3,10px)] gap-[3px]">
        {delays.map((d, i) => (
          <span
            key={i}
            className={`size-[10px] bg-foreground ${round ? "rounded-full" : "rounded-[2px]"}`}
            style={{
              opacity: d === null ? 0.07 : 0.15,
              animation:
                d === null
                  ? "none"
                  : `pixel-on ${dur}ms ease-in-out ${d}ms infinite`,
            }}
          />
        ))}
      </span>
      <span
        className="bg-clip-text text-xl font-medium text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--muted-foreground)) 35%, hsl(var(--foreground)) 50%, hsl(var(--muted-foreground)) 65%)",
          backgroundSize: "200% 100%",
          animation: "shimmer-text 1.4s linear infinite",
        }}
      >
        {label}
      </span>
      <span className="font-mono text-lg text-muted-foreground tabular-nums min-w-[3ch] text-right">
        {progress}
      </span>
    </div>
  );
}
