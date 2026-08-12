"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function FrontlineTestimonials() {
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
    <section id="testimonials" className="border-b-2 border-fl-ink bg-fl-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <p className="font-fl-label text-sm font-bold uppercase tracking-[0.16em] text-fl-red-dark">
          Verdicts &amp; Results
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
              <p className="font-fl-body text-2xl font-bold leading-snug text-fl-ink sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="font-fl-body text-sm font-bold text-fl-ink">{current.name}</span>
                <span className="inline-flex items-center bg-fl-red-dark px-3 py-1.5 font-fl-label text-xs font-bold uppercase tracking-[0.12em] text-fl-bg">
                  {current.result}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-6 border-t-2 border-fl-ink pt-6">
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            className="border-b-2 border-transparent font-fl-body text-sm font-bold uppercase tracking-wide text-fl-ink hover:border-fl-red-dark hover:text-fl-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fl-red-dark"
          >
            Previous
          </button>
          <span className="font-fl-label text-xs uppercase tracking-[0.12em] text-fl-muted">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            className="border-b-2 border-transparent font-fl-body text-sm font-bold uppercase tracking-wide text-fl-ink hover:border-fl-red-dark hover:text-fl-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fl-red-dark"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
