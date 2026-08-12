import { trustBadges } from "@/lib/data";

export default function BriefHero() {
  return (
    <section id="top" className="border-b border-br-ink">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-br-border pb-4 font-br-mono text-[11px] uppercase tracking-[0.15em] text-br-muted">
          <span>File No. WIL-2026-0142</span>
          <span>Practice Area: Immigration &amp; Nationality</span>
          <span className="border border-br-red px-2 py-0.5 text-br-red">Confidential Review</span>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-br-heading text-4xl font-semibold leading-[1.1] text-br-ink sm:text-5xl lg:text-6xl">
              Your future in America, argued on the record.
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-4">
            <p className="font-br-body text-base leading-relaxed text-br-muted">
              Warrner Immigration Law represents families, professionals, and
              asylum seekers nationwide — with the discretion and rigor a
              life-changing case demands.
            </p>
            <a
              href="#eligibility"
              className="inline-flex h-14 w-fit items-center justify-center border border-br-red bg-br-red px-8 font-br-body text-base font-semibold text-white transition-colors hover:bg-br-ink hover:border-br-ink"
            >
              Schedule a Case Evaluation
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-0 border border-br-ink sm:grid-cols-3">
          {trustBadges.map(({ label, sublabel }, i) => (
            <div
              key={label}
              className={`p-6 ${i > 0 ? "border-t border-br-border sm:border-l sm:border-t-0" : ""}`}
            >
              <dt className="font-br-mono text-[10px] uppercase tracking-[0.2em] text-br-red">
                Exhibit {String.fromCharCode(65 + i)}
              </dt>
              <dd className="mt-2 font-br-heading text-lg font-semibold text-br-ink">{label}</dd>
              <dd className="mt-1 font-br-body text-sm text-br-muted">{sublabel}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
