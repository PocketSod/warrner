import { ArrowRight } from "lucide-react";
import { trustBadges } from "@/lib/data";

export default function FrontlineHero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-4 border-fl-ink bg-fl-bg">
      {/* Halftone texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--color-fl-ink) 1px, transparent 1.4px)",
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-2 border-b-2 border-fl-ink bg-fl-ink px-6 py-2.5 font-fl-label text-xs font-semibold uppercase tracking-[0.18em] text-fl-bg lg:px-10">
        <span>Bulletin No. 0142 — Indianapolis</span>
        <span className="text-fl-red-light">Immigration &amp; Nationality Law</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {/* Signature element: hard-edged poster offset, same crisp shadow language as the CTA buttons */}
            <h1
              className="font-fl-heading text-[2.9rem] font-black uppercase leading-[0.92] tracking-tight text-fl-ink sm:text-6xl lg:text-7xl"
              style={{ textShadow: "6px 6px 0 var(--color-fl-red)" }}
            >
              Your case,
              <br />
              argued on the
              <br />
              front line.
            </h1>

            <div className="mt-10 max-w-xl border-l-4 border-fl-red-dark pl-5">
              <p className="font-fl-body text-lg leading-relaxed text-fl-muted">
                Warrner Immigration Law stands with families, workers, and
                asylum seekers nationwide — plainspoken advocacy and no
                delay when a deadline is on the line.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#eligibility"
                className="group inline-flex h-14 items-center justify-center gap-2 border-2 border-fl-ink bg-fl-red-dark px-7 font-fl-body text-base font-bold uppercase tracking-wide text-fl-bg shadow-[5px_5px_0_0_var(--color-fl-ink)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-fl-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fl-ink"
              >
                Schedule a Case Evaluation
                <ArrowRight
                  size={18}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#practices"
                className="inline-flex h-14 items-center justify-center border-2 border-fl-ink px-7 font-fl-body text-base font-bold uppercase tracking-wide text-fl-ink transition-colors hover:bg-fl-ink hover:text-fl-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fl-red-dark"
              >
                View Practice Areas
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="border-2 border-fl-ink bg-fl-surface p-6">
              <p className="font-fl-label text-xs font-bold uppercase tracking-[0.16em] text-fl-red-dark">
                On Record
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {trustBadges.map(({ label, sublabel }, i) => (
                  <div
                    key={label}
                    className={`flex items-start gap-3 ${i > 0 ? "border-t border-fl-border pt-4" : ""}`}
                  >
                    <span className="mt-1.5 h-3 w-3 shrink-0 bg-fl-red-dark" aria-hidden="true" />
                    <div>
                      <p className="font-fl-body text-sm font-bold text-fl-ink">{label}</p>
                      <p className="font-fl-body text-xs text-fl-muted">{sublabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
