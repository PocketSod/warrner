import { practiceAreas } from "@/lib/data";

export default function BriefCorePractices() {
  return (
    <section id="practices" className="border-b border-br-ink bg-br-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-br-ink pb-6">
          <h2 className="font-br-heading text-3xl font-semibold text-br-ink sm:text-4xl">
            Core Practices
          </h2>
          <span className="font-br-mono text-[11px] uppercase tracking-[0.2em] text-br-muted">
            Section II
          </span>
        </div>

        <div className="mt-2 border-x border-b border-br-ink">
          {practiceAreas.map(({ title, description }, i) => (
            <div
              key={title}
              className={`grid grid-cols-1 gap-3 px-6 py-8 sm:grid-cols-12 sm:gap-6 sm:px-8 ${
                i > 0 ? "border-t border-br-border" : ""
              }`}
            >
              <div className="sm:col-span-2">
                <span className="font-br-mono text-xs uppercase tracking-[0.15em] text-br-red">
                  §{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-br-heading text-xl font-semibold text-br-ink sm:col-span-3">
                {title}
              </h3>
              <p className="font-br-body text-sm leading-relaxed text-br-muted sm:col-span-7">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
