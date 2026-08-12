import { ArrowRight, Compass } from "lucide-react";
import { trustBadges } from "@/lib/data";

const waypoints = [
  { label: "Petition Filed", coord: "39.77°N" },
  { label: "Case Reviewed", coord: "39.79°N" },
  { label: "Approval Granted", coord: "39.81°N" },
];

export default function AtlasHero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-at-border">
      {/* Contour-line map texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[70, 160, 250, 340, 430, 520, 610, 700].map((y, i) => (
          <path
            key={y}
            d={`M -50 ${y} C 150 ${y - 40 - i * 4}, 300 ${y + 50 + i * 3}, 500 ${y - 10} S 850 ${y - 60}, 1000 ${y + 20} S 1250 ${y - 30}, 1350 ${y}`}
            stroke="var(--color-at-brass)"
            strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
          />
        ))}
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-5 flex items-center gap-2 font-at-mono text-xs font-bold uppercase tracking-[0.2em] text-at-brass-dark">
            <Compass size={14} strokeWidth={2} aria-hidden="true" />
            39.7684° N, 86.1581° W — Indianapolis
          </p>
          <h1 className="font-at-heading text-4xl font-semibold leading-[1.1] tracking-tight text-at-ink sm:text-5xl lg:text-[3.4rem]">
            Charting the route to your future in America.
          </h1>
          <p className="mt-6 max-w-xl font-at-body text-lg leading-relaxed text-at-muted">
            Warrner Immigration Law plots a clear course for families,
            professionals, and asylum seekers nationwide — from first filing
            to final approval, with a steady hand at every waypoint.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#eligibility"
              className="group inline-flex h-14 items-center justify-center gap-2 bg-at-ink px-7 font-at-body text-base font-bold text-at-bg shadow-[0_16px_34px_-16px_rgba(22,50,74,0.55)] transition-colors hover:bg-at-stamp focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-at-ink"
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
              className="inline-flex h-14 items-center justify-center border border-at-border-strong px-7 font-at-body text-base font-semibold text-at-ink transition-colors hover:border-at-ink hover:bg-at-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-at-ink"
            >
              View Practice Areas
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-dashed border-at-border-strong pt-8 sm:grid-cols-3 sm:gap-4">
            {trustBadges.map(({ label, sublabel }, i) => (
              <div
                key={label}
                className={`sm:px-4 ${i > 0 ? "sm:border-l sm:border-dashed sm:border-at-border-strong" : ""}`}
              >
                <dt className="font-at-mono text-[11px] font-bold uppercase tracking-wide text-at-stamp">
                  {waypoints[i].coord}
                </dt>
                <dd className="mt-1 font-at-heading text-sm font-semibold text-at-ink">{label}</dd>
                <dd className="text-xs leading-snug text-at-muted">{sublabel}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden border border-at-border-strong bg-at-surface shadow-[0_30px_60px_-25px_rgba(22,50,74,0.35)]"
            role="img"
            aria-label="Stylized route map representing a case's path to approval"
          >
            <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 500" aria-hidden="true">
              {[60, 140, 220, 300, 380, 460].map((y, i) => (
                <path
                  key={y}
                  d={`M -20 ${y} C 80 ${y - 25}, 140 ${y + 30}, 220 ${y - 5} S 350 ${y - 35}, 420 ${y + 10}`}
                  stroke="var(--color-at-ink)"
                  strokeWidth={i % 2 === 0 ? 1.2 : 0.7}
                  fill="none"
                />
              ))}
            </svg>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" aria-hidden="true">
              <path
                d="M 60 440 C 90 340, 40 260, 130 210 S 240 160, 210 90 S 300 50, 320 60"
                stroke="var(--color-at-stamp)"
                strokeWidth={2.5}
                strokeDasharray="1 9"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="60" cy="440" r="6" fill="var(--color-at-ink)" />
              <circle cx="320" cy="60" r="6" fill="var(--color-at-stamp)" />
            </svg>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-at-ink/95 px-6 py-5">
              <div>
                <p className="font-at-heading text-2xl font-semibold text-at-bg">1,200+</p>
                <p className="font-at-body text-xs text-at-stamp-light">Cases successfully resolved</p>
              </div>
              <span className="h-10 w-px bg-white/20" aria-hidden="true" />
              <div>
                <p className="font-at-heading text-2xl font-semibold text-at-bg">18 yrs</p>
                <p className="font-at-body text-xs text-at-stamp-light">Combined practice</p>
              </div>
            </div>
          </div>

          {/* Signature element: rotated case-approval stamp */}
          <div
            className="absolute -right-4 -top-6 h-32 w-32 -rotate-[14deg] text-at-stamp sm:-right-8 sm:h-36 sm:w-36"
            aria-hidden="true"
          >
            <svg viewBox="0 0 140 140" className="h-full w-full">
              <circle cx="70" cy="70" r="62" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 5" />
              <circle cx="70" cy="70" r="50" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path id="atlasStampArc" d="M 70 20 A 50 50 0 0 1 120 70" fill="none" />
              <path id="atlasStampArcBottom" d="M 20 70 A 50 50 0 0 1 70 120" fill="none" />
              <text className="font-at-mono" fontSize="9.5" fontWeight="700" letterSpacing="2" fill="currentColor">
                <textPath href="#atlasStampArc" startOffset="2">
                  WARRNER · LAW
                </textPath>
              </text>
              <text className="font-at-mono" fontSize="9.5" fontWeight="700" letterSpacing="2" fill="currentColor">
                <textPath href="#atlasStampArcBottom" startOffset="2">
                  APPROVED
                </textPath>
              </text>
              <text
                x="70"
                y="76"
                textAnchor="middle"
                className="font-at-heading"
                fontSize="17"
                fontStyle="italic"
                fill="currentColor"
              >
                Case
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
