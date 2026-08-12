import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function EnterpriseFooter() {
  return (
    <>
      <section className="border-b border-en-border bg-en-surface">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
          <h2 className="font-en-heading text-3xl font-bold tracking-tight text-en-ink sm:text-4xl">
            Your case deserves a second opinion.
          </h2>
          <p className="max-w-xl font-en-body text-base leading-relaxed text-en-muted">
            Every consultation is confidential. There is no obligation — only
            clarity about the path in front of you.
          </p>
          <a
            href="#eligibility"
            className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-en-accent px-7 font-en-body text-base font-semibold text-white shadow-[0_16px_32px_-16px_rgba(27,57,184,0.55)] transition-colors hover:bg-en-ink"
          >
            Schedule a Case Evaluation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="bg-en-ink text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-en-accent font-en-heading text-sm font-bold text-white">
                W
              </span>
              <span className="font-en-heading text-lg font-bold text-white">Warrner</span>
            </div>
            <p className="mt-4 max-w-xs font-en-body text-sm leading-relaxed">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="font-en-body text-xs font-semibold uppercase tracking-wide text-white/65">
              Practice Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-en-body text-sm">
              <li><a href="#practices" className="hover:text-white">Family Green Cards</a></li>
              <li><a href="#practices" className="hover:text-white">Employment Visas</a></li>
              <li><a href="#practices" className="hover:text-white">Deportation Defense</a></li>
              <li><a href="#practices" className="hover:text-white">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-en-body text-xs font-semibold uppercase tracking-wide text-white/65">Firm</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-en-body text-sm">
              <li><a href="#attorney" className="hover:text-white">Our Attorney</a></li>
              <li><a href="#testimonials" className="hover:text-white">Client Results</a></li>
              <li><a href="#eligibility" className="hover:text-white">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-en-body text-xs font-semibold uppercase tracking-wide text-white/65">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 font-en-body text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-white/50" aria-hidden="true" />
                <a href="tel:+18005550123" className="hover:text-white">(800) 555-0123</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-white/50" aria-hidden="true" />
                <a href="mailto:intake@warrnerimmigrationlaw.com" className="hover:text-white">
                  intake@warrnerimmigrationlaw.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/50" aria-hidden="true" />
                <span>One Monument Circle, Suite 1800, Indianapolis, IN 46204</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-en-body text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
            <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
