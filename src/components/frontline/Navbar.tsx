const links = [
  { href: "#practices", label: "Practices" },
  { href: "#eligibility", label: "Evaluation" },
  { href: "#attorney", label: "Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function FrontlineNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-fl-ink bg-fl-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-fl-heading text-xl font-black uppercase tracking-tight text-fl-ink"
        >
          Warrner
          <span className="ml-2 font-fl-label text-[11px] font-normal normal-case tracking-normal text-fl-muted">
            Immigration Law
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent font-fl-body text-sm font-semibold uppercase tracking-wide text-fl-ink hover:border-fl-red-dark hover:text-fl-red-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fl-red-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 items-center justify-center border-2 border-fl-ink bg-fl-red-dark px-5 font-fl-body text-sm font-bold uppercase tracking-wide text-fl-bg shadow-[4px_4px_0_0_var(--color-fl-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-fl-ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-fl-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fl-ink"
        >
          Case Evaluation
        </a>
      </div>
    </header>
  );
}
