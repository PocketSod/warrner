export default function BriefFooter() {
  return (
    <>
      <section className="border-b border-br-ink bg-br-bg">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
          <h2 className="font-br-heading text-3xl font-semibold text-br-ink sm:text-4xl">
            Your case deserves a second opinion.
          </h2>
          <p className="max-w-xl font-br-body text-base leading-relaxed text-br-muted">
            Every consultation is confidential. There is no obligation — only
            clarity about the path in front of you.
          </p>
          <a
            href="#eligibility"
            className="mt-2 inline-flex h-14 items-center justify-center border border-br-red bg-br-red px-8 font-br-body text-base font-semibold text-white transition-colors hover:bg-br-ink hover:border-br-ink"
          >
            Schedule a Case Evaluation
          </a>
        </div>
      </section>

      <footer className="bg-br-ink text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <p className="font-br-heading text-lg font-semibold text-white">Warrner</p>
            <p className="mt-1 font-br-mono text-[10px] uppercase tracking-[0.2em] text-white/65">
              Immigration Law
            </p>
            <p className="mt-4 max-w-xs font-br-body text-sm leading-relaxed">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="font-br-mono text-[11px] uppercase tracking-[0.2em] text-white/65">Practices</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-br-body text-sm">
              <li><a href="#practices" className="hover:text-white">Family Green Cards</a></li>
              <li><a href="#practices" className="hover:text-white">Employment Visas</a></li>
              <li><a href="#practices" className="hover:text-white">Deportation Defense</a></li>
              <li><a href="#practices" className="hover:text-white">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-br-mono text-[11px] uppercase tracking-[0.2em] text-white/65">Firm</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-br-body text-sm">
              <li><a href="#attorney" className="hover:text-white">Our Attorney</a></li>
              <li><a href="#testimonials" className="hover:text-white">Client Results</a></li>
              <li><a href="#eligibility" className="hover:text-white">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-br-mono text-[11px] uppercase tracking-[0.2em] text-white/65">Contact</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-br-body text-sm">
              <li><a href="tel:+18005550123" className="hover:text-white">(800) 555-0123</a></li>
              <li><a href="mailto:intake@warrnerimmigrationlaw.com" className="hover:text-white">intake@warrnerimmigrationlaw.com</a></li>
              <li>One Monument Circle, Suite 1800, Indianapolis, IN 46204</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-br-mono text-[11px] text-white/65 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
            <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
