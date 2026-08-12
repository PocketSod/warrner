"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Gavel, GraduationCap, Landmark } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "J.D., Indiana University McKinney School of Law" },
  { icon: Landmark, text: "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court" },
  { icon: Gavel, text: "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney" },
  { icon: BadgeCheck, text: "AILA member; U Visa Liaison for the Indiana Chapter" },
];

export default function AttorneyProfile() {
  const prefersReducedMotion = useReducedMotion();
  const rise = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="attorney" className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm border border-border-strong shadow-[0_30px_60px_-28px_rgba(11,31,61,0.4)] lg:mx-0 lg:order-last"
        >
          <Image
            src="/images/erin-warrner.jpg"
            alt="Portrait of Erin Warrner, Of Counsel"
            fill
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-4 rounded-sm border border-gold-light/40" aria-hidden="true" />
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Your Advocate
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Erin Warrner
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-navy-muted">
            Of Counsel
          </p>

          <p className="mt-6 text-base leading-relaxed text-navy-muted">
            Erin joined the firm as Of Counsel in 2023, bringing more than
            thirteen years of litigation experience in criminal and
            immigration law. She spent a decade as a deputy prosecuting
            attorney, trying more than fifty jury trials, before turning her
            focus to supervising immigration cases at a local nonprofit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {credentials.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong text-gold-dark">
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-sm text-navy">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
