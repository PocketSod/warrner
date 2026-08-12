export default function EditorialFooter() {
  return (
    <>
      <section className="border-b border-ed-border bg-ed-surface">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
          <h2 className="font-ed-heading text-4xl font-medium text-ed-cream sm:text-5xl">
            Your case deserves a{" "}
            <span className="italic text-ed-oxblood-light">second opinion.</span>
          </h2>
          <p className="max-w-xl font-ed-body text-base leading-relaxed text-ed-cream-muted">
            Every consultation is confidential. There is no obligation — only
            clarity about the path in front of you.
          </p>
          <a
            href="#eligibility"
            className="mt-2 inline-flex h-14 items-center justify-center border border-ed-oxblood bg-ed-oxblood px-8 font-ed-body text-base font-semibold text-ed-cream transition-colors hover:bg-ed-oxblood-light hover:border-ed-oxblood-light hover:text-ed-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ed-cream"
          >
            Schedule a Case Evaluation
          </a>
        </div>
      </section>

      <footer className="bg-ed-bg text-ed-cream-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <p className="font-ed-heading text-lg italic text-ed-cream">Warrner</p>
            <p className="mt-4 max-w-xs font-ed-body text-sm leading-relaxed">
              Elite immigration counsel for families, professionals, and
              asylum seekers nationwide.
            </p>
          </div>

          <div>
            <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.25em] text-ed-oxblood-light">
              Practice Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-ed-body text-sm">
              <li><a href="#practices" className="hover:text-ed-cream">Family Green Cards</a></li>
              <li><a href="#practices" className="hover:text-ed-cream">Employment Visas</a></li>
              <li><a href="#practices" className="hover:text-ed-cream">Deportation Defense</a></li>
              <li><a href="#practices" className="hover:text-ed-cream">Asylum</a></li>
            </ul>
          </div>

          <div>
            <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.25em] text-ed-oxblood-light">
              Firm
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-ed-body text-sm">
              <li><a href="#attorney" className="hover:text-ed-cream">Our Attorney</a></li>
              <li><a href="#testimonials" className="hover:text-ed-cream">Client Results</a></li>
              <li><a href="#eligibility" className="hover:text-ed-cream">Case Evaluation</a></li>
            </ul>
          </div>

          <div>
            <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.25em] text-ed-oxblood-light">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-ed-body text-sm">
              <li><a href="tel:+18005550123" className="hover:text-ed-cream">(800) 555-0123</a></li>
              <li><a href="mailto:intake@warrnerimmigrationlaw.com" className="hover:text-ed-cream">intake@warrnerimmigrationlaw.com</a></li>
              <li>One Monument Circle, Suite 1800, Indianapolis, IN 46204</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ed-border">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-ed-body text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>© {new Date().getFullYear()} Warrner Immigration Law, PLLC. All rights reserved.</p>
            <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
