import { ArrowUpRight } from "lucide-react";
import { trustBadges } from "@/lib/data";

export default function MinimalHero() {
  return (
    <section id="top" className="border-b border-mn-border">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-mn-body text-sm font-semibold tracking-[0.02em] text-mn-accent">
              01 — Immigration &amp; Nationality Law
            </p>
            <h1 className="mt-6 font-mn-heading text-4xl font-bold leading-[1.05] tracking-tight text-mn-ink sm:text-5xl lg:text-6xl">
              Your future in America, argued with precision.
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-4">
            <p className="font-mn-body text-base leading-relaxed text-mn-muted">
              Warrner Immigration Law represents families, professionals,
              and asylum seekers nationwide — with the discretion and
              rigor a life-changing case demands.
            </p>
            <a
              href="#eligibility"
              className="group inline-flex w-fit items-center gap-2 border-b-2 border-mn-ink pb-1 font-mn-body text-base font-semibold text-mn-ink transition-colors hover:border-mn-accent hover:text-mn-accent"
            >
              Schedule a Case Evaluation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-mn-border pt-8 sm:grid-cols-3">
          {trustBadges.map(({ label, sublabel }, i) => (
            <div key={label} className={i > 0 ? "sm:border-l sm:border-mn-border sm:pl-8" : ""}>
              <dt className="font-mn-heading text-base font-bold text-mn-ink">{label}</dt>
              <dd className="mt-1 font-mn-body text-sm text-mn-muted">{sublabel}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
