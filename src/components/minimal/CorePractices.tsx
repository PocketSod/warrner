import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/lib/data";

export default function MinimalCorePractices() {
  return (
    <section id="practices" className="border-b border-mn-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mn-body text-sm font-semibold text-mn-accent">02 — Core Practices</p>
            <h2 className="mt-4 font-mn-heading text-3xl font-bold tracking-tight text-mn-ink sm:text-4xl">
              Counsel for every chapter
            </h2>
            <p className="mt-4 font-mn-body text-base leading-relaxed text-mn-muted">
              Four focused practice areas, each led by attorneys who handle
              nothing else.
            </p>
          </div>

          <div className="lg:col-span-8">
            {practiceAreas.map(({ title, description }, i) => (
              <div
                key={title}
                className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-t border-mn-border py-7 last:border-b"
              >
                <span className="font-mn-heading text-sm font-semibold text-mn-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-mn-heading text-xl font-bold text-mn-ink">{title}</h3>
                  <p className="mt-1.5 max-w-lg font-mn-body text-sm leading-relaxed text-mn-muted">
                    {description}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-mn-border-strong transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mn-accent"
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
