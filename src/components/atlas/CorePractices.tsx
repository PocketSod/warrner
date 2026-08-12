import { ArrowUpRight, MapPin } from "lucide-react";
import { practiceAreas } from "@/lib/data";

export default function AtlasCorePractices() {
  return (
    <section id="practices" className="border-b border-at-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-at-mono text-xs font-bold uppercase tracking-[0.2em] text-at-stamp">
              Areas of Counsel
            </p>
            <h2 className="mt-4 font-at-heading text-3xl font-semibold tracking-tight text-at-ink sm:text-4xl">
              Four routes, one destination
            </h2>
            <p className="mt-4 font-at-body text-base leading-relaxed text-at-muted">
              Four focused practice areas, each charted by attorneys who
              handle nothing else.
            </p>
          </div>

          <div className="lg:col-span-8">
            {practiceAreas.map(({ title, description }) => (
              <div
                key={title}
                className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-t border-dashed border-at-border-strong py-7 last:border-b"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center border border-at-border-strong text-at-brass-dark transition-colors group-hover:border-at-stamp group-hover:text-at-stamp"
                  aria-hidden="true"
                >
                  <MapPin size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-at-heading text-xl font-semibold text-at-ink">{title}</h3>
                  <p className="mt-1.5 max-w-lg font-at-body text-sm leading-relaxed text-at-muted">
                    {description}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-at-border-strong transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-at-stamp"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
