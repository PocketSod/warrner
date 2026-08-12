import { Users, Briefcase, ShieldAlert, LifeBuoy } from "lucide-react";
import { practiceAreas } from "@/lib/data";

const icons = [Users, Briefcase, ShieldAlert, LifeBuoy];

export default function GlassCorePractices() {
  return (
    <section id="practices" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-4 py-1.5 font-gl-body text-xs font-semibold text-gl-accent backdrop-blur-xl">
            Core Practices
          </span>
          <h2 className="mt-5 font-gl-heading text-3xl font-bold tracking-tight text-gl-ink sm:text-4xl">
            Counsel for every chapter of your journey
          </h2>
          <p className="mt-4 font-gl-body text-base leading-relaxed text-gl-muted">
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
                className="group flex flex-col gap-4 rounded-3xl border border-white/50 bg-white/55 p-7 shadow-[0_20px_45px_-30px_rgba(30,27,58,0.4)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1.5 hover:bg-white/70"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gl-accent/15 text-gl-accent">
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="font-gl-heading text-xl font-bold text-gl-ink">{title}</h3>
                <p className="font-gl-body text-sm leading-relaxed text-gl-muted">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
