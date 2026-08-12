import { ArrowRight, Award, ShieldCheck, Star } from "lucide-react";
import { trustBadges } from "@/lib/data";

const badgeIcons = [Award, Star, ShieldCheck];

export default function GlassHero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/50 bg-white/55 p-8 text-center shadow-[0_40px_80px_-40px_rgba(30,27,58,0.35)] backdrop-blur-xl sm:p-12">
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-4 py-1.5 font-gl-body text-xs font-semibold text-gl-accent">
            Immigration &amp; Nationality Law
          </span>
          <h1 className="mt-6 font-gl-heading text-4xl font-bold leading-[1.1] tracking-tight text-gl-ink sm:text-5xl">
            Your future in America, guided with clarity.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-gl-body text-lg leading-relaxed text-gl-muted">
            Warrner Immigration Law represents families, professionals, and
            asylum seekers nationwide — with modern tools and a steady hand
            through every step of a life-changing case.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#eligibility"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gl-accent px-7 font-gl-body text-base font-semibold text-white shadow-[0_20px_40px_-16px_rgba(70,56,166,0.6)] transition-colors hover:bg-gl-ink"
            >
              Schedule a Case Evaluation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#practices"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/60 bg-white/60 px-7 font-gl-body text-base font-semibold text-gl-ink transition-colors hover:bg-white"
            >
              View Practice Areas
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {trustBadges.map(({ label, sublabel }, i) => {
            const Icon = badgeIcons[i];
            return (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/55 p-4 backdrop-blur-xl"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gl-accent/15 text-gl-accent">
                  <Icon size={16} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-gl-heading text-sm font-bold text-gl-ink">{label}</dt>
                  <dd className="font-gl-body text-xs text-gl-muted">{sublabel}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
