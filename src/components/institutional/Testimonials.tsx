"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function InstitutionalTestimonials() {
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
    <section id="testimonials" className="border-b-2 border-in-ink bg-in-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-in-body text-xs font-semibold uppercase tracking-[0.3em] text-in-burgundy">
            Client Results
          </p>
          <h2 className="mt-5 font-in-heading text-3xl font-semibold text-in-ink sm:text-4xl">
            Life-changing outcomes, in their own words
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-2xl border-2 border-in-ink bg-in-surface px-8 py-10 sm:px-14">
          <Quote className="absolute right-8 top-8 text-in-burgundy/25" size={52} strokeWidth={1} aria-hidden="true" />

          <div aria-live="polite" className="relative min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * -28 }}
                transition={transition}
              >
                <p className="font-in-heading text-xl italic leading-relaxed text-in-ink sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center justify-between gap-4 border-t border-in-border pt-5">
                  <p className="font-in-body text-sm font-semibold text-in-ink">{current.name}</p>
                  <span className="border border-in-burgundy px-3 py-1 font-in-body text-xs font-semibold text-in-burgundy">
                    {current.result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-in-border-strong text-in-ink transition-colors hover:border-in-burgundy hover:text-in-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-in-burgundy"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-in-burgundy ${
                  i === index ? "bg-in-burgundy" : "bg-in-border-strong hover:bg-in-muted"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-in-border-strong text-in-ink transition-colors hover:border-in-burgundy hover:text-in-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-in-burgundy"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
