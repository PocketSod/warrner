"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data";

function statusTag(result: string): string {
  if (/won/i.test(result)) return "WON";
  if (/granted/i.test(result)) return "GRANTED";
  if (/approved/i.test(result)) return "APPROVED";
  return "ON RECORD";
}

export default function AtlasTestimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = testimonials.length;
  const current = testimonials[index];

  function go(next: number, dir: 1 | -1) {
    setDirection(dir);
    setIndex((next + total) % total);
  }

  const transition = prefersReducedMotion ? { duration: 0.01 } : { duration: 0.4, ease: "easeOut" as const };

  return (
    <section id="testimonials" className="border-b border-at-border">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <p className="font-at-mono text-xs font-bold uppercase tracking-[0.2em] text-at-stamp">
          Case Log
        </p>

        <div className="relative mt-8 min-h-[220px]" aria-live="polite">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * -24 }}
              transition={transition}
            >
              <p className="font-at-heading text-2xl font-medium leading-snug text-at-ink sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 font-at-body text-sm">
                <span className="font-semibold text-at-ink">{current.name}</span>
                <span className="text-at-border-strong">/</span>
                <span className="text-at-muted">{current.result}</span>
                <span
                  className="inline-flex items-center border border-dashed border-at-stamp px-2 py-0.5 font-at-mono text-[10px] font-bold uppercase tracking-[0.1em] text-at-stamp"
                  aria-hidden="true"
                >
                  {statusTag(current.result)}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-6 border-t border-dashed border-at-border-strong pt-6">
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            className="font-at-body text-sm font-semibold text-at-ink underline decoration-at-border-strong underline-offset-4 transition-colors hover:text-at-stamp focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-at-ink"
          >
            Previous
          </button>
          <span className="font-at-mono text-xs text-at-muted">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            className="font-at-body text-sm font-semibold text-at-ink underline decoration-at-border-strong underline-offset-4 transition-colors hover:text-at-stamp focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-at-ink"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
