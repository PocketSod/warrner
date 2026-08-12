import { ArrowRight, Award, ShieldCheck, Star } from "lucide-react";
import { trustBadges } from "@/lib/data";

const badgeIcons = [Award, Star, ShieldCheck];

export default function EnterpriseHero() {
  return (
    <section id="top" className="border-b border-en-border">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-en-border-strong bg-en-surface px-3.5 py-1.5 font-en-body text-xs font-semibold text-en-accent">
            Immigration &amp; Nationality Law
          </span>
          <h1 className="mt-6 font-en-heading text-4xl font-bold leading-[1.1] tracking-tight text-en-ink sm:text-5xl lg:text-[3.3rem]">
            Immigration counsel built for outcomes you can measure.
          </h1>
          <p className="mt-6 max-w-xl font-en-body text-lg leading-relaxed text-en-muted">
            Warrner Immigration Law represents families, professionals, and
            asylum seekers nationwide — with the process discipline and
            transparency a life-changing case demands.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#eligibility"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-en-accent px-6 py-3.5 font-en-body text-base font-semibold text-white shadow-[0_16px_32px_-16px_rgba(27,57,184,0.55)] transition-colors hover:bg-en-ink"
            >
              Schedule a Case Evaluation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#practices"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-en-border-strong px-6 py-3.5 font-en-body text-base font-semibold text-en-ink transition-colors hover:bg-en-surface"
            >
              View Practice Areas
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trustBadges.map(({ label, sublabel }, i) => {
              const Icon = badgeIcons[i];
              return (
                <div key={label} className="rounded-xl border border-en-border bg-en-surface p-4">
                  <Icon size={18} className="text-en-accent" strokeWidth={2} aria-hidden="true" />
                  <p className="mt-2.5 font-en-heading text-sm font-bold text-en-ink">{label}</p>
                  <p className="font-en-body text-xs text-en-muted">{sublabel}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-2xl border border-en-border bg-white p-6 shadow-[0_30px_70px_-35px_rgba(16,25,43,0.3)]">
            <div className="flex items-center justify-between border-b border-en-border pb-4">
              <p className="font-en-heading text-sm font-bold text-en-ink">Case Overview</p>
              <span className="rounded-full bg-en-surface px-2.5 py-1 font-en-body text-[11px] font-semibold text-en-accent">
                Live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-en-surface p-4">
                <p className="font-en-heading text-2xl font-bold text-en-ink">99%</p>
                <p className="mt-1 font-en-body text-xs text-en-muted">Success rate</p>
              </div>
              <div className="rounded-xl bg-en-surface p-4">
                <p className="font-en-heading text-2xl font-bold text-en-ink">1,200+</p>
                <p className="mt-1 font-en-body text-xs text-en-muted">Cases resolved</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {["Petition filed", "Evidence review complete", "Interview scheduled"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 rounded-xl border border-en-border px-4 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-en-accent font-en-body text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-en-body text-sm font-medium text-en-ink">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
