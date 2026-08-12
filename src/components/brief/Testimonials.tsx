"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function BriefTestimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = testimonials.length;
  const current = testimonials[index];

  function go(next: number, dir: 1 | -1) {
    setDirection(dir);
    setIndex((next + total) % total);
  }

  const transition = prefersReducedMotion ? { duration: 0.01 } : { duration: 0.35, ease: "easeOut" as const };

  return (
    <section id="testimonials" className="border-b border-br-ink bg-br-surface">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-br-ink pb-6">
          <h2 className="font-br-heading text-3xl font-semibold text-br-ink sm:text-4xl">
            Client Record
          </h2>
          <span className="font-br-mono text-[11px] uppercase tracking-[0.2em] text-br-muted">
            Section V — Exhibit {index + 1} of {total}
          </span>
        </div>

        <div className="relative mt-10 min-h-[220px] border border-br-ink bg-br-bg p-8 sm:p-10" aria-live="polite">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * -24 }}
              transition={transition}
            >
              <p className="font-br-heading text-xl leading-snug text-br-ink sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 font-br-body text-sm">
                <span className="font-semibold text-br-ink">{current.name}</span>
                <span className="border border-br-red px-2 py-0.5 font-br-mono text-[11px] uppercase tracking-[0.15em] text-br-red">
                  {current.result}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-6 border-t border-br-border pt-6">
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            className="font-br-body text-sm font-semibold text-br-ink hover:text-br-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-br-red"
          >
            Previous
          </button>
          <span className="font-br-mono text-[11px] text-br-muted">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            className="font-br-body text-sm font-semibold text-br-ink hover:text-br-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-br-red"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
