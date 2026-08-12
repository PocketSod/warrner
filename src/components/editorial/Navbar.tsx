const links = [
  { href: "#practices", label: "Practices" },
  { href: "#eligibility", label: "Evaluation" },
  { href: "#attorney", label: "Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function EditorialNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ed-border bg-ed-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="font-ed-heading text-xl italic tracking-tight text-ed-cream">
          Warrner
          <span className="ml-2 font-ed-body text-[11px] font-normal not-italic uppercase tracking-[0.25em] text-ed-cream-muted">
            Immigration Law
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-ed-body text-sm text-ed-cream-muted transition-colors hover:text-ed-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ed-oxblood-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 items-center justify-center rounded-none border border-ed-oxblood bg-ed-oxblood px-5 font-ed-body text-sm font-semibold text-ed-cream transition-colors hover:bg-ed-oxblood-light hover:border-ed-oxblood-light hover:text-ed-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ed-cream"
        >
          Case Evaluation
        </a>
      </div>
    </header>
  );
}
