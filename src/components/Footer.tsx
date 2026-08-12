import { ArrowRight, Mail, MapPin, Phone, Scale } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="bg-ivory-deep">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Your case deserves a second opinion.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-navy-muted">
            Every consultation is confidential. There is no obligation — only
            clarity about the path in front of you.
          </p>
          <a
            href="#eligibility"
            className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-sm border border-gold-dark bg-gold px-8 text-base font-bold text-navy shadow-[0_10px_30px_-12px_rgba(11,31,61,0.35)] transition-colors hover:bg-gold-dark hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
          >
            Schedule a Case Evaluation
            <ArrowRight
              size={18}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      <footer className="bg-navy text-navy-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-light/50 text-gold-light">
                <Scale size={18} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold text-ivory">
                Warrner Immigration Law
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              Practice Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li><a href="#practices" className="transition-colors hover:text-ivory">Family Green Cards</a></li>
              <li><a href="#practices" className="transition-colors hover:text-ivory">Employment Visas</a></li>
              <li><a href="#practices" className="transition-colors hover:text-ivory">Deportation Defense</a></li>
              <li><a href="#practices" className="transition-colors hover:text-ivory">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              Firm
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li><a href="#attorney" className="transition-colors hover:text-ivory">Our Attorney</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-ivory">Client Results</a></li>
              <li><a href="#eligibility" className="transition-colors hover:text-ivory">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold-light" aria-hidden="true" />
                <a href="tel:+18005550123" className="transition-colors hover:text-ivory">
                  (800) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold-light" aria-hidden="true" />
                <a href="mailto:intake@warrnerimmigrationlaw.com" className="transition-colors hover:text-ivory">
                  intake@warrnerimmigrationlaw.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />
                <span>
                  One Monument Circle, Suite 1800
                  <br />
                  Indianapolis, IN 46204
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-light/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-navy-soft/80 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
            <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
