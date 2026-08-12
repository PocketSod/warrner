const links = [
  { href: "#practices", label: "Practice Areas" },
  { href: "#eligibility", label: "Case Evaluation" },
  { href: "#attorney", label: "Our Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function BoutiqueNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-bq-border bg-bq-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bq-terracotta font-bq-heading text-sm font-bold text-white">
            W
          </span>
          <span className="font-bq-heading text-lg font-bold text-bq-ink">
            Warrner
            <span className="block -mt-0.5 font-bq-body text-[11px] font-semibold text-bq-muted">
              Immigration Law
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bq-body text-sm font-semibold text-bq-ink transition-colors hover:text-bq-terracotta-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bq-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-bq-terracotta-cta px-5 font-bq-body text-sm font-bold text-white shadow-sm transition-colors hover:bg-bq-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bq-ink"
        >
          Schedule a Case Evaluation
        </a>
      </div>
    </header>
  );
}
