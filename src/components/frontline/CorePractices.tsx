import { practiceAreas } from "@/lib/data";

export default function FrontlineCorePractices() {
  return (
    <section id="practices" className="border-b-2 border-fl-ink bg-fl-bg">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-fl-label text-sm font-bold uppercase tracking-[0.16em] text-fl-red-dark">
              On the Docket
            </p>
            <h2 className="mt-4 font-fl-heading text-3xl font-black uppercase tracking-tight text-fl-ink sm:text-4xl">
              Counsel for every chapter
            </h2>
            <p className="mt-4 font-fl-body text-base leading-relaxed text-fl-muted">
              Four focused practice areas, each led by attorneys who handle
              nothing else.
            </p>
          </div>

          <div className="lg:col-span-8">
            {practiceAreas.map(({ title, description }) => (
              <div
                key={title}
                className="grid grid-cols-[1.5rem_1fr] items-start gap-4 border-t-2 border-fl-ink py-7 last:border-b-2"
              >
                <span className="mt-2 h-3.5 w-3.5 shrink-0 bg-fl-red-dark" aria-hidden="true" />
                <div>
                  <h3 className="font-fl-heading text-xl font-black uppercase tracking-tight text-fl-ink">
                    {title}
                  </h3>
                  <p className="mt-1.5 max-w-lg font-fl-body text-sm leading-relaxed text-fl-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
