"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = testimonials.length;
  const current = testimonials[index];

  function go(next: number, dir: 1 | -1) {
    setDirection(dir);
    setIndex((next + total) % total);
  }

  const transition = prefersReducedMotion
    ? { duration: 0.01 }
    : { duration: 0.4, ease: "easeOut" as const };

  return (
    <section id="testimonials" className="bg-navy">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">
            Client Results
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
            Life-changing outcomes, in their own words
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div className="relative min-h-[280px] overflow-hidden rounded-sm border border-gold-light/25 bg-ivory px-8 py-10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)] sm:px-12 sm:py-12">
            <Quote
              className="absolute right-8 top-8 text-gold/25"
              size={56}
              strokeWidth={1}
              aria-hidden="true"
            />

            <div aria-live="polite" className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * -32 }}
                  transition={transition}
                >
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </div>

                  <p className="mt-5 font-serif text-xl leading-relaxed text-navy sm:text-2xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-border pt-5">
                    <p className="text-sm font-bold text-navy">{current.name}</p>
                    <span className="rounded-full border border-border-strong bg-ivory-deep px-3 py-1 text-xs font-semibold text-gold-dark">
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/40 text-gold-light transition-colors hover:bg-gold-light hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
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
                  className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light ${
                    i === index ? "bg-gold-light" : "bg-navy-soft/40 hover:bg-navy-soft"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/40 text-gold-light transition-colors hover:bg-gold-light hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
