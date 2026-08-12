import Image from "next/image";

export default function InstitutionalFooter() {
  return (
    <>
      <section className="border-b-2 border-in-ink bg-in-surface">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
          <h2 className="font-in-heading text-3xl font-semibold text-in-ink sm:text-4xl">
            Your case deserves a second opinion.
          </h2>
          <p className="max-w-xl font-in-body text-base leading-relaxed text-in-muted">
            Every consultation is confidential. There is no obligation — only
            clarity about the path in front of you.
          </p>
          <a
            href="#eligibility"
            className="mt-2 inline-flex h-14 items-center justify-center border-2 border-in-burgundy bg-in-burgundy px-8 font-in-body text-base font-semibold text-in-bg transition-colors hover:bg-in-ink hover:border-in-ink"
          >
            Schedule a Case Evaluation
          </a>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-in-ink text-in-gold">
        <div className="relative h-[150px] w-full overflow-hidden sm:h-[200px]" aria-hidden="true">
          <Image
            src="/images/indianapolis-skyline.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-70 grayscale sepia-[0.4] contrast-110"
          />
          <div className="absolute inset-0 bg-in-ink/45" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-in-ink to-transparent sm:h-28" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <p className="font-in-heading text-lg font-bold text-in-bg">Warrner</p>
            <p className="mt-1 font-in-body text-[11px] uppercase tracking-[0.22em] text-in-gold/80">
              Immigration Law · Indianapolis
            </p>
            <p className="mt-4 max-w-xs font-in-body text-sm leading-relaxed text-in-bg/70">
              Elite immigration counsel for families, professionals, and
              asylum seekers throughout Central Indiana and nationwide.
            </p>
          </div>

          <div>
            <p className="font-in-body text-xs font-semibold uppercase tracking-[0.22em] text-in-gold">
              Practice Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-in-body text-sm text-in-bg/80">
              <li><a href="#practices" className="hover:text-in-bg">Family Green Cards</a></li>
              <li><a href="#practices" className="hover:text-in-bg">Employment Visas</a></li>
              <li><a href="#practices" className="hover:text-in-bg">Deportation Defense</a></li>
              <li><a href="#practices" className="hover:text-in-bg">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-in-body text-xs font-semibold uppercase tracking-[0.22em] text-in-gold">Firm</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-in-body text-sm text-in-bg/80">
              <li><a href="#attorney" className="hover:text-in-bg">Our Attorney</a></li>
              <li><a href="#testimonials" className="hover:text-in-bg">Client Results</a></li>
              <li><a href="#eligibility" className="hover:text-in-bg">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-in-body text-xs font-semibold uppercase tracking-[0.22em] text-in-gold">Contact</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-in-body text-sm text-in-bg/80">
              <li><a href="tel:+18005550123" className="hover:text-in-bg">(800) 555-0123</a></li>
              <li><a href="mailto:intake@warrnerimmigrationlaw.com" className="hover:text-in-bg">intake@warrnerimmigrationlaw.com</a></li>
              <li>Monument Circle, Indianapolis, IN 46204</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-in-gold/20">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-in-body text-xs text-in-bg/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
            <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
