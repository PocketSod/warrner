import { Users, Briefcase, ShieldAlert, LifeBuoy } from "lucide-react";
import { practiceAreas } from "@/lib/data";

const icons = [Users, Briefcase, ShieldAlert, LifeBuoy];

export default function EnterpriseCorePractices() {
  return (
    <section id="practices" className="border-b border-en-border bg-en-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-en-border-strong bg-white px-3.5 py-1.5 font-en-body text-xs font-semibold text-en-accent">
            Core Practices
          </span>
          <h2 className="mt-5 font-en-heading text-3xl font-bold tracking-tight text-en-ink sm:text-4xl">
            Counsel for every chapter of your journey
          </h2>
          <p className="mt-4 font-en-body text-base leading-relaxed text-en-muted">
            Four focused practice areas, each led by attorneys who handle
            nothing else.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map(({ title, description }, i) => {
            const Icon = icons[i];
            return (
              <article
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-en-border bg-white p-6 shadow-[0_14px_30px_-24px_rgba(16,25,43,0.3)] transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(16,25,43,0.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-en-accent/10 text-en-accent">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="font-en-heading text-lg font-bold text-en-ink">{title}</h3>
                <p className="font-en-body text-sm leading-relaxed text-en-muted">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
