import { trustBadges } from "@/lib/data";

export default function EditorialHero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ed-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(201,118,134,0.5) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.35em] text-ed-oxblood-light">
          Immigration &amp; Nationality Counsel
        </p>
        <h1 className="mt-8 max-w-4xl font-ed-heading text-5xl font-medium leading-[1.05] text-ed-cream sm:text-6xl lg:text-7xl">
          Your future in America,{" "}
          <span className="italic text-ed-oxblood-light">argued</span> without
          compromise.
        </h1>
        <p className="mt-8 max-w-xl font-ed-body text-lg leading-relaxed text-ed-cream-muted">
          Warrner Immigration Law represents families, professionals, and
          asylum seekers nationwide — with the discretion and resolve a
          life-changing case demands.
        </p>

        <a
          href="#eligibility"
          className="mt-10 inline-flex h-14 items-center justify-center border border-ed-oxblood bg-ed-oxblood px-8 font-ed-body text-base font-semibold text-ed-cream shadow-[0_20px_45px_-20px_rgba(110,30,44,0.6)] transition-colors hover:bg-ed-oxblood-light hover:border-ed-oxblood-light hover:text-ed-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ed-cream"
        >
          Schedule a Case Evaluation
        </a>

        <dl className="mt-20 grid grid-cols-1 gap-10 border-t border-ed-border pt-10 sm:grid-cols-3">
          {trustBadges.map(({ label, sublabel }, i) => (
            <div key={label} className={i > 0 ? "sm:border-l sm:border-ed-border sm:pl-10" : ""}>
              <dt className="font-ed-heading text-2xl italic text-ed-cream">{label}</dt>
              <dd className="mt-1 font-ed-body text-sm text-ed-cream-muted">{sublabel}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
