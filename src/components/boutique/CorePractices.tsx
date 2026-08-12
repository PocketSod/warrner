import { Users, Briefcase, ShieldAlert, LifeBuoy } from "lucide-react";
import { practiceAreas } from "@/lib/data";

const icons = [Users, Briefcase, ShieldAlert, LifeBuoy];
const tints = ["bg-bq-terracotta", "bg-bq-teal", "bg-bq-terracotta", "bg-bq-teal"];

export default function BoutiqueCorePractices() {
  return (
    <section id="practices" className="bg-bq-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-bq-bg px-4 py-1.5 font-bq-body text-xs font-bold uppercase tracking-wide text-bq-terracotta-dark">
            Core Practices
          </span>
          <h2 className="mt-5 font-bq-heading text-3xl font-extrabold tracking-tight text-bq-ink sm:text-4xl">
            Counsel for every chapter of your journey
          </h2>
          <p className="mt-4 font-bq-body text-base leading-relaxed text-bq-muted">
            Four focused practice areas, each led by attorneys who handle
            nothing else.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map(({ title, description }, i) => {
            const Icon = icons[i];
            return (
              <article
                key={title}
                className="group flex flex-col gap-4 rounded-3xl bg-bq-bg p-7 shadow-[0_18px_36px_-28px_rgba(46,38,33,0.35)] transition-transform duration-200 hover:-translate-y-1.5"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${tints[i]}`}>
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="font-bq-heading text-xl font-bold text-bq-ink">{title}</h3>
                <p className="font-bq-body text-sm leading-relaxed text-bq-muted">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
