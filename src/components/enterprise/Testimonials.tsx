"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function EnterpriseTestimonials() {
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
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-en-border-strong bg-en-surface px-3.5 py-1.5 font-en-body text-xs font-semibold text-en-accent">
            Client Results
          </span>
          <h2 className="mt-5 font-en-heading text-3xl font-bold tracking-tight text-en-ink sm:text-4xl">
            Life-changing outcomes, in their own words
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-en-border bg-en-surface px-8 py-10 shadow-[0_30px_70px_-35px_rgba(16,25,43,0.3)] sm:px-12 sm:py-12">
            <Quote className="absolute right-8 top-8 text-en-accent/15" size={52} strokeWidth={1} aria-hidden="true" />

            <div aria-live="polite" className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * -28 }}
                  transition={transition}
                >
                  <div className="flex gap-1 text-en-accent" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-5 font-en-heading text-xl font-semibold leading-relaxed text-en-ink sm:text-2xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-en-border pt-5">
                    <p className="font-en-body text-sm font-bold text-en-ink">{current.name}</p>
                    <span className="rounded-full bg-white px-3 py-1 font-en-body text-xs font-semibold text-en-accent">
                      {current.result}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-en-border-strong text-en-ink transition-colors hover:bg-en-accent hover:text-white hover:border-en-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-en-accent"
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
                  className={`h-2 w-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-en-accent ${
                    i === index ? "bg-en-accent" : "bg-en-border-strong hover:bg-en-muted"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-en-border-strong text-en-ink transition-colors hover:bg-en-accent hover:text-white hover:border-en-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-en-accent"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
