export default function AtlasFooter() {
  return (
    <footer className="bg-at-ink text-at-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-at-heading text-lg font-semibold">Warrner</p>
            <p className="mt-1 font-at-mono text-xs uppercase tracking-[0.2em] text-at-stamp-light">
              Immigration Law
            </p>
            <p className="mt-4 max-w-xs font-at-body text-sm leading-relaxed text-white/60">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="font-at-mono text-xs font-semibold uppercase tracking-[0.2em] text-at-stamp-light">
              Practices
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-at-body text-sm text-white/70">
              <li><a href="#practices" className="transition-colors hover:text-white">Family Green Cards</a></li>
              <li><a href="#practices" className="transition-colors hover:text-white">Employment Visas</a></li>
              <li><a href="#practices" className="transition-colors hover:text-white">Deportation Defense</a></li>
              <li><a href="#practices" className="transition-colors hover:text-white">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-at-mono text-xs font-semibold uppercase tracking-[0.2em] text-at-stamp-light">
              Firm
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-at-body text-sm text-white/70">
              <li><a href="#attorney" className="transition-colors hover:text-white">Our Attorney</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-white">Client Results</a></li>
              <li><a href="#eligibility" className="transition-colors hover:text-white">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-at-mono text-xs font-semibold uppercase tracking-[0.2em] text-at-stamp-light">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-at-body text-sm text-white/70">
              <li><a href="tel:+18005550123" className="transition-colors hover:text-white">(800) 555-0123</a></li>
              <li><a href="mailto:intake@warrnerimmigrationlaw.com" className="transition-colors hover:text-white">intake@warrnerimmigrationlaw.com</a></li>
              <li>One Monument Circle, Suite 1800, Indianapolis, IN 46204</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-dashed border-[rgba(147,115,47,0.3)] pt-6 font-at-body text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
          <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
