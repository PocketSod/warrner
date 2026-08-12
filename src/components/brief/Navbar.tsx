const links = [
  { href: "#practices", label: "Practices" },
  { href: "#eligibility", label: "Evaluation" },
  { href: "#attorney", label: "Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function BriefNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-br-ink bg-br-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="font-br-heading text-xl font-semibold tracking-tight text-br-ink">
            Warrner
          </span>
          <span className="font-br-mono text-[10px] uppercase tracking-[0.2em] text-br-muted">
            / Immigration Law
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 font-br-body text-sm text-br-ink transition-colors hover:text-br-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-br-red"
            >
              <span className="font-br-mono text-[10px] text-br-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 items-center justify-center border border-br-ink bg-br-ink px-5 font-br-body text-sm font-semibold text-br-bg transition-colors hover:bg-br-red hover:border-br-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-br-red"
        >
          Case Evaluation
        </a>
      </div>
    </header>
  );
}
