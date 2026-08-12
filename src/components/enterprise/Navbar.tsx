const links = [
  { href: "#practices", label: "Practice Areas" },
  { href: "#eligibility", label: "Case Evaluation" },
  { href: "#attorney", label: "Our Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function EnterpriseNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-en-border bg-en-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-en-accent font-en-heading text-sm font-bold text-white">
            W
          </span>
          <span className="font-en-heading text-lg font-bold text-en-ink">Warrner</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-en-body text-sm font-medium text-en-muted transition-colors hover:text-en-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-en-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-en-accent px-5 font-en-body text-sm font-semibold text-white shadow-sm transition-colors hover:bg-en-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-en-ink"
        >
          Schedule a Case Evaluation
        </a>
      </div>
    </header>
  );
}
