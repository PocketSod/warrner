import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function GlassFooter() {
  return (
    <>
      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 pb-20 lg:px-10">
          <div className="flex flex-col items-center gap-6 rounded-[2.5rem] border border-white/50 bg-white/55 p-10 text-center shadow-[0_40px_80px_-40px_rgba(30,27,58,0.4)] backdrop-blur-xl sm:p-14">
            <h2 className="font-gl-heading text-3xl font-bold tracking-tight text-gl-ink sm:text-4xl">
              Your case deserves a second opinion.
            </h2>
            <p className="max-w-xl font-gl-body text-base leading-relaxed text-gl-muted">
              Every consultation is confidential. There is no obligation —
              only clarity about the path in front of you.
            </p>
            <a
              href="#eligibility"
              className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gl-accent px-8 font-gl-body text-base font-semibold text-white shadow-[0_20px_40px_-16px_rgba(70,56,166,0.6)] transition-colors hover:bg-gl-ink"
            >
              Schedule a Case Evaluation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative bg-gl-panel text-gl-panel-text">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gl-accent font-gl-heading text-sm font-bold text-white">
                W
              </span>
              <span className="font-gl-heading text-lg font-bold text-white">Warrner</span>
            </div>
            <p className="mt-4 max-w-xs font-gl-body text-sm leading-relaxed">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="font-gl-body text-xs font-semibold uppercase tracking-wide text-white/70">
              Practice Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-gl-body text-sm">
              <li><a href="#practices" className="hover:text-white">Family Green Cards</a></li>
              <li><a href="#practices" className="hover:text-white">Employment Visas</a></li>
              <li><a href="#practices" className="hover:text-white">Deportation Defense</a></li>
              <li><a href="#practices" className="hover:text-white">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-gl-body text-xs font-semibold uppercase tracking-wide text-white/70">Firm</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-gl-body text-sm">
              <li><a href="#attorney" className="hover:text-white">Our Attorney</a></li>
              <li><a href="#testimonials" className="hover:text-white">Client Results</a></li>
              <li><a href="#eligibility" className="hover:text-white">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-gl-body text-xs font-semibold uppercase tracking-wide text-white/70">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 font-gl-body text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-white/60" aria-hidden="true" />
                <a href="tel:+18005550123" className="hover:text-white">(800) 555-0123</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-white/60" aria-hidden="true" />
                <a href="mailto:intake@warrnerimmigrationlaw.com" className="hover:text-white">
                  intake@warrnerimmigrationlaw.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/60" aria-hidden="true" />
                <span>One Monument Circle, Suite 1800, Indianapolis, IN 46204</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-gl-body text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
            <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
