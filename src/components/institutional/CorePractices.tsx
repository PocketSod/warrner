import { practiceAreas } from "@/lib/data";

export default function InstitutionalCorePractices() {
  return (
    <section id="practices" className="border-b-2 border-in-ink bg-in-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-in-body text-xs font-semibold uppercase tracking-[0.3em] text-in-burgundy">
            Core Practices
          </p>
          <h2 className="mt-5 font-in-heading text-3xl font-semibold text-in-ink sm:text-4xl">
            Counsel for every chapter of your journey
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map(({ title, description }, i) => (
            <article key={title} className="border-t-2 border-in-ink bg-in-bg p-7 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-in-burgundy font-in-heading text-lg font-bold text-in-burgundy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-in-heading text-xl font-semibold text-in-ink">{title}</h3>
              <p className="mt-2 font-in-body text-sm leading-relaxed text-in-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
