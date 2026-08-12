const links = [
  { href: "#practices", label: "Practices" },
  { href: "#eligibility", label: "Evaluation" },
  { href: "#attorney", label: "Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function AtlasNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-at-border bg-at-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="font-at-heading text-lg font-semibold tracking-tight text-at-ink">
          Warrner
          <span className="ml-2 font-at-mono text-[10px] font-normal uppercase tracking-[0.18em] text-at-muted">
            Immigration Law
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-at-body text-sm text-at-ink underline decoration-at-border-strong decoration-dashed decoration-1 underline-offset-4 transition-colors hover:text-at-stamp hover:decoration-at-stamp focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-at-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 items-center justify-center bg-at-ink px-5 font-at-body text-sm font-semibold text-at-bg transition-colors hover:bg-at-stamp focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-at-ink"
        >
          Case Evaluation
        </a>
      </div>
    </header>
  );
}
