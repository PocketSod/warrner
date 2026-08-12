const links = [
  { href: "#practices", label: "Practice Areas" },
  { href: "#eligibility", label: "Case Evaluation" },
  { href: "#attorney", label: "Our Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function InstitutionalNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-in-ink bg-in-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-in-burgundy font-in-heading text-base font-bold text-in-burgundy">
            W
          </span>
          <span className="font-in-heading text-xl font-bold tracking-tight text-in-ink">
            Warrner
            <span className="block -mt-1 font-in-body text-[11px] font-normal uppercase tracking-[0.22em] text-in-muted">
              Immigration Law · Indianapolis
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-in-body text-sm text-in-ink transition-colors hover:text-in-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-in-burgundy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 shrink-0 items-center justify-center border-2 border-in-burgundy bg-in-burgundy px-5 font-in-body text-sm font-semibold text-in-bg transition-colors hover:bg-in-ink hover:border-in-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-in-ink"
        >
          Schedule a Case Evaluation
        </a>
      </div>
    </header>
  );
}
