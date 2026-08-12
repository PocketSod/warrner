import { trustBadges } from "@/lib/data";
import IndySkyline from "./IndySkyline";

export default function InstitutionalHero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-in-ink bg-in-bg">
      <div className="relative mx-auto max-w-7xl px-6 pb-0 pt-16 lg:px-10 lg:pt-24">
        <p className="text-center font-in-body text-xs font-semibold uppercase tracking-[0.3em] text-in-burgundy">
          Indianapolis, Indiana — Est. Practice in Immigration &amp; Nationality Law
        </p>
        <h1 className="mx-auto mt-6 max-w-4xl text-center font-in-heading text-4xl font-semibold leading-[1.12] text-in-ink sm:text-5xl lg:text-6xl">
          Your future in America, argued by advocates rooted in this city.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center font-in-body text-lg leading-relaxed text-in-muted">
          Warrner Immigration Law represents families, professionals, and
          asylum seekers throughout Central Indiana and nationwide — with the
          discretion and resolve a life-changing case demands.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#eligibility"
            className="inline-flex h-14 items-center justify-center border-2 border-in-burgundy bg-in-burgundy px-8 font-in-body text-base font-semibold text-in-bg shadow-[0_16px_32px_-16px_rgba(107,30,44,0.5)] transition-colors hover:bg-in-ink hover:border-in-ink"
          >
            Schedule a Case Evaluation
          </a>
          <a
            href="#practices"
            className="inline-flex h-14 items-center justify-center border-2 border-in-ink px-8 font-in-body text-base font-semibold text-in-ink transition-colors hover:bg-in-ink hover:text-in-bg"
          >
            View Practice Areas
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 border-t border-in-border pt-8 sm:grid-cols-3">
          {trustBadges.map(({ label, sublabel }, i) => (
            <div
              key={label}
              className={`text-center ${i > 0 ? "sm:border-l sm:border-in-border sm:pl-8" : ""}`}
            >
              <dt className="font-in-heading text-lg font-bold text-in-ink">{label}</dt>
              <dd className="mt-1 font-in-body text-xs text-in-muted">{sublabel}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-14 h-[170px] w-full text-in-ink/85 sm:h-[220px]">
        <IndySkyline className="absolute inset-x-0 bottom-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-in-ink" aria-hidden="true" />
      </div>
    </section>
  );
}
