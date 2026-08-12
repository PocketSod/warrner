import { practiceAreas } from "@/lib/data";

export default function CorePractices() {
  return (
    <section id="practices" className="bg-ivory-deep">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Core Practices
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Counsel for every chapter of your journey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            Four focused practice areas, each led by attorneys who handle
            nothing else — so your case receives genuine specialization,
            never a generalist&rsquo;s best guess.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative flex flex-col gap-4 rounded-sm border border-border bg-ivory p-7 shadow-[0_18px_36px_-28px_rgba(11,31,61,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_44px_-24px_rgba(11,31,61,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong text-gold-dark transition-colors group-hover:bg-navy group-hover:text-gold-light">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-navy">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-muted">
                {description}
              </p>
              <span
                className="mt-auto h-px w-10 bg-gold transition-all duration-200 group-hover:w-16"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
