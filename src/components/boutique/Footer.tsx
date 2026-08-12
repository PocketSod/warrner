import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function BoutiqueFooter() {
  return (
    <>
      <section className="bg-bq-bg">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
          <h2 className="font-bq-heading text-3xl font-extrabold tracking-tight text-bq-ink sm:text-4xl">
            Your case deserves a second opinion.
          </h2>
          <p className="max-w-xl font-bq-body text-base leading-relaxed text-bq-muted">
            Every consultation is confidential. There is no obligation — only
            clarity about the path in front of you.
          </p>
          <a
            href="#eligibility"
            className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-bq-terracotta-cta px-8 font-bq-body text-base font-bold text-white shadow-[0_16px_32px_-14px_rgba(138,56,32,0.5)] transition-colors hover:bg-bq-ink"
          >
            Schedule a Case Evaluation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="rounded-t-[3rem] bg-bq-ink text-bq-bg/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bq-terracotta font-bq-heading text-sm font-bold text-white">
                W
              </span>
              <span className="font-bq-heading text-lg font-bold text-bq-bg">Warrner</span>
            </div>
            <p className="mt-4 max-w-xs font-bq-body text-sm leading-relaxed">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="font-bq-body text-xs font-bold uppercase tracking-wide text-bq-terracotta-light">
              Practice Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-bq-body text-sm">
              <li><a href="#practices" className="hover:text-bq-bg">Family Green Cards</a></li>
              <li><a href="#practices" className="hover:text-bq-bg">Employment Visas</a></li>
              <li><a href="#practices" className="hover:text-bq-bg">Deportation Defense</a></li>
              <li><a href="#practices" className="hover:text-bq-bg">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bq-body text-xs font-bold uppercase tracking-wide text-bq-terracotta-light">Firm</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-bq-body text-sm">
              <li><a href="#attorney" className="hover:text-bq-bg">Our Attorney</a></li>
              <li><a href="#testimonials" className="hover:text-bq-bg">Client Results</a></li>
              <li><a href="#eligibility" className="hover:text-bq-bg">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bq-body text-xs font-bold uppercase tracking-wide text-bq-terracotta-light">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 font-bq-body text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-bq-terracotta-light" aria-hidden="true" />
                <a href="tel:+18005550123" className="hover:text-bq-bg">(800) 555-0123</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-bq-terracotta-light" aria-hidden="true" />
                <a href="mailto:intake@warrnerimmigrationlaw.com" className="hover:text-bq-bg">
                  intake@warrnerimmigrationlaw.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-bq-terracotta-light" aria-hidden="true" />
                <span>One Monument Circle, Suite 1800, Indianapolis, IN 46204</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-bq-body text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
            <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
