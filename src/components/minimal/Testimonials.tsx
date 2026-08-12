"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function MinimalTestimonials() {
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
    <section id="testimonials" className="border-b border-mn-border">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <p className="font-mn-body text-sm font-semibold text-mn-accent">05 — Client Results</p>

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
              <p className="font-mn-heading text-2xl font-medium leading-snug text-mn-ink sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 font-mn-body text-sm">
                <span className="font-semibold text-mn-ink">{current.name}</span>
                <span className="text-mn-border-strong">/</span>
                <span className="text-mn-accent">{current.result}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-6 border-t border-mn-border pt-6">
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            className="font-mn-body text-sm font-semibold text-mn-ink underline decoration-mn-border-strong underline-offset-4 hover:text-mn-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mn-accent"
          >
            Previous
          </button>
          <span className="font-mn-body text-xs text-mn-muted">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            className="font-mn-body text-sm font-semibold text-mn-ink underline decoration-mn-border-strong underline-offset-4 hover:text-mn-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mn-accent"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
