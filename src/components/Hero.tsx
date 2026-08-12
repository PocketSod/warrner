import { ArrowRight, Scale } from "lucide-react";
import { trustBadges } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Immigration Counsel, Elevated
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Your future in America, argued by advocates who never lose sight
            of what&rsquo;s at stake.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-muted">
            Warrner Immigration Law represents families, professionals, and
            asylum seekers before every immigration authority in the country
            — with the discretion, precision, and resolve a life-changing
            case demands.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#eligibility"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-sm border border-gold-dark bg-gold px-7 text-base font-bold text-navy shadow-[0_10px_30px_-12px_rgba(11,31,61,0.35)] transition-colors hover:bg-gold-dark hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
            >
              Schedule a Case Evaluation
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#practices"
              className="inline-flex h-14 items-center justify-center rounded-sm border border-navy/20 px-7 text-base font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              View Practice Areas
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3 sm:gap-4">
            {trustBadges.map(({ icon: Icon, label, sublabel }, i) => (
              <div
                key={label}
                className={`flex items-start gap-3 sm:px-4 ${
                  i > 0 ? "sm:border-l sm:border-border" : ""
                }`}
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong text-gold-dark">
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-bold text-navy">{label}</dt>
                  <dd className="text-xs leading-snug text-navy-muted">
                    {sublabel}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border-strong bg-navy shadow-[0_30px_60px_-25px_rgba(11,31,61,0.45)]"
            role="img"
            aria-label="Emblem representing Warrner Immigration Law"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "repeating-radial-gradient(circle at 50% 42%, transparent 0, transparent 42px, rgba(212,177,90,0.18) 43px)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-6 rounded-sm border border-gold-light/25" aria-hidden="true" />
            <div className="flex h-full flex-col items-center justify-center gap-5 px-10 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-light/60 text-gold-light">
                <Scale size={34} strokeWidth={1.25} aria-hidden="true" />
              </span>
              <p className="font-serif text-2xl font-medium text-ivory">
                Warrner Immigration Law
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-navy-soft">
                Immigration &amp; Nationality Law
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-sm border border-border-strong bg-ivory px-6 py-4 shadow-[0_20px_40px_-18px_rgba(11,31,61,0.3)] sm:left-10 sm:right-auto sm:min-w-[280px]">
            <div>
              <p className="font-serif text-2xl font-semibold text-navy">1,200+</p>
              <p className="text-xs text-navy-muted">Cases successfully resolved</p>
            </div>
            <span className="h-10 w-px bg-border-strong" aria-hidden="true" />
            <div>
              <p className="font-serif text-2xl font-semibold text-navy">18 yrs</p>
              <p className="text-xs text-navy-muted">Combined practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
