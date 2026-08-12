export default function MinimalFooter() {
  return (
    <footer className="bg-mn-ink text-mn-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mn-heading text-lg font-bold">Warrner</p>
            <p className="mt-1 font-mn-body text-xs uppercase tracking-[0.2em] text-white/50">
              Immigration Law
            </p>
            <p className="mt-4 max-w-xs font-mn-body text-sm leading-relaxed text-white/60">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="font-mn-body text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Practices</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-mn-body text-sm text-white/70">
              <li><a href="#practices" className="hover:text-white">Family Green Cards</a></li>
              <li><a href="#practices" className="hover:text-white">Employment Visas</a></li>
              <li><a href="#practices" className="hover:text-white">Deportation Defense</a></li>
              <li><a href="#practices" className="hover:text-white">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mn-body text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Firm</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-mn-body text-sm text-white/70">
              <li><a href="#attorney" className="hover:text-white">Our Attorney</a></li>
              <li><a href="#testimonials" className="hover:text-white">Client Results</a></li>
              <li><a href="#eligibility" className="hover:text-white">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mn-body text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Contact</p>
            <ul className="mt-4 flex flex-col gap-2.5 font-mn-body text-sm text-white/70">
              <li><a href="tel:+18005550123" className="hover:text-white">(800) 555-0123</a></li>
              <li><a href="mailto:intake@warrnerimmigrationlaw.com" className="hover:text-white">intake@warrnerimmigrationlaw.com</a></li>
              <li>One Monument Circle, Suite 1800, Indianapolis, IN 46204</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/15 pt-6 font-mn-body text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
          <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
