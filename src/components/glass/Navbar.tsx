const links = [
  { href: "#practices", label: "Practice Areas" },
  { href: "#eligibility", label: "Case Evaluation" },
  { href: "#attorney", label: "Our Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function GlassNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gl-accent font-gl-heading text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(70,56,166,0.6)]">
            W
          </span>
          <span className="font-gl-heading text-lg font-bold text-gl-ink">Warrner</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-gl-body text-sm font-medium text-gl-muted transition-colors hover:text-gl-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gl-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-gl-accent px-5 font-gl-body text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(70,56,166,0.6)] transition-colors hover:bg-gl-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gl-ink"
        >
          Schedule a Case Evaluation
        </a>
      </div>
    </header>
  );
}
