import { practiceAreas } from "@/lib/data";

export default function EditorialCorePractices() {
  return (
    <section id="practices" className="border-b border-ed-border bg-ed-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.35em] text-ed-oxblood-light">
            Core Practices
          </p>
          <h2 className="mt-5 font-ed-heading text-4xl font-medium text-ed-cream sm:text-5xl">
            Counsel for every{" "}
            <span className="italic text-ed-oxblood-light">chapter</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ed-border bg-ed-border sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map(({ title, description }, i) => (
            <article key={title} className="flex flex-col gap-5 bg-ed-bg p-8">
              <span className="font-ed-heading text-4xl italic text-ed-oxblood-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-ed-heading text-xl font-medium text-ed-cream">{title}</h3>
              <p className="font-ed-body text-sm leading-relaxed text-ed-cream-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
