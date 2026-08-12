"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function EditorialTestimonials() {
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
    <section id="testimonials" className="border-b border-ed-border bg-ed-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.35em] text-ed-oxblood-light">
            Client Results
          </p>
          <h2 className="mt-5 font-ed-heading text-4xl font-medium text-ed-cream sm:text-5xl">
            Told in their{" "}
            <span className="italic text-ed-oxblood-light">own words</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-2xl border border-ed-border bg-ed-surface px-8 py-12 sm:px-14">
          <Quote className="absolute right-8 top-8 text-ed-oxblood/40" size={56} strokeWidth={1} aria-hidden="true" />

          <div aria-live="polite" className="relative min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : direction * -30 }}
                transition={transition}
              >
                <p className="font-ed-heading text-2xl italic leading-relaxed text-ed-cream sm:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-ed-border pt-5">
                  <p className="font-ed-body text-sm font-semibold text-ed-cream">{current.name}</p>
                  <span className="border border-ed-oxblood-light/50 px-3 py-1 font-ed-body text-xs font-semibold text-ed-oxblood-light">
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ed-border-strong text-ed-cream-muted transition-colors hover:border-ed-oxblood-light hover:text-ed-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ed-oxblood-light"
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
                className={`h-2 w-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ed-oxblood-light ${
                  i === index ? "bg-ed-oxblood-light" : "bg-ed-border-strong hover:bg-ed-cream-muted"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ed-border-strong text-ed-cream-muted transition-colors hover:border-ed-oxblood-light hover:text-ed-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ed-oxblood-light"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
