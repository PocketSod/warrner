import { ArrowRight, Award, ShieldCheck, Star } from "lucide-react";
import { trustBadges } from "@/lib/data";

const badgeIcons = [Award, Star, ShieldCheck];

export default function BoutiqueHero() {
  return (
    <section id="top" className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <span className="inline-flex items-center rounded-full bg-bq-surface px-4 py-1.5 font-bq-body text-xs font-bold uppercase tracking-wide text-bq-terracotta-dark">
            Immigration Counsel You Can Trust
          </span>
          <h1 className="mt-6 font-bq-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-bq-ink sm:text-5xl lg:text-[3.3rem]">
            Your future in America, in caring, capable hands.
          </h1>
          <p className="mt-6 max-w-xl font-bq-body text-lg leading-relaxed text-bq-muted">
            Warrner Immigration Law walks with families, professionals, and
            asylum seekers through every step — with warmth, clarity, and the
            preparation a life-changing case deserves.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#eligibility"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-bq-terracotta-cta px-7 font-bq-body text-base font-bold text-white shadow-[0_16px_32px_-14px_rgba(138,56,32,0.5)] transition-colors hover:bg-bq-ink"
            >
              Schedule a Case Evaluation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#practices"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-bq-ink/15 px-7 font-bq-body text-base font-bold text-bq-ink transition-colors hover:border-bq-ink hover:bg-bq-ink hover:text-white"
            >
              View Practice Areas
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {trustBadges.map(({ label, sublabel }, i) => {
              const Icon = badgeIcons[i];
              return (
                <div key={label} className="flex items-start gap-3 rounded-2xl bg-bq-surface p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bq-terracotta text-white">
                    <Icon size={17} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bq-heading text-sm font-bold text-bq-ink">{label}</p>
                    <p className="font-bq-body text-xs text-bq-muted">{sublabel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_35px_70px_-30px_rgba(138,56,32,0.4)]"
            style={{
              background: "linear-gradient(160deg, #C1502E 0%, #E0A672 55%, #F6E9DD 100%)",
            }}
            role="img"
            aria-label="Warm emblem representing Warrner Immigration Law"
          >
            <div className="flex h-full flex-col items-center justify-center gap-5 px-10 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 font-bq-heading text-2xl font-extrabold text-bq-terracotta-cta shadow-lg">
                W
              </span>
              <p className="font-bq-heading text-2xl font-extrabold text-white drop-shadow-sm">
                Warrner Immigration Law
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-4 shadow-[0_20px_40px_-18px_rgba(46,38,33,0.25)] sm:left-10 sm:right-auto sm:min-w-[280px]">
            <div>
              <p className="font-bq-heading text-2xl font-extrabold text-bq-ink">1,200+</p>
              <p className="font-bq-body text-xs text-bq-muted">Cases resolved</p>
            </div>
            <span className="h-10 w-px bg-bq-border-strong" aria-hidden="true" />
            <div>
              <p className="font-bq-heading text-2xl font-extrabold text-bq-ink">18 yrs</p>
              <p className="font-bq-body text-xs text-bq-muted">Combined practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
