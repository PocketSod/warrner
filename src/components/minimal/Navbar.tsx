const links = [
  { href: "#practices", label: "Practices" },
  { href: "#eligibility", label: "Evaluation" },
  { href: "#attorney", label: "Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function MinimalNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-mn-border bg-mn-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="font-mn-heading text-lg font-bold uppercase tracking-[0.08em] text-mn-ink">
          Warrner
          <span className="ml-2 font-mn-body text-[11px] font-normal normal-case tracking-normal text-mn-muted">
            Immigration Law
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mn-body text-sm text-mn-ink underline decoration-mn-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-mn-accent hover:text-mn-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mn-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 items-center justify-center border border-mn-ink px-5 font-mn-body text-sm font-semibold text-mn-ink transition-colors hover:bg-mn-ink hover:text-mn-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mn-accent"
        >
          Case Evaluation
        </a>
      </div>
    </header>
  );
}
