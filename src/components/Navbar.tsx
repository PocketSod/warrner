import { Scale } from "lucide-react";

const links = [
  { href: "#practices", label: "Practice Areas" },
  { href: "#eligibility", label: "Case Evaluation" },
  { href: "#attorney", label: "Our Attorney" },
  { href: "#testimonials", label: "Results" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-navy text-gold-light">
            <Scale size={18} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-navy">
            Warrner
            <span className="block -mt-1 text-[11px] font-sans font-normal uppercase tracking-[0.2em] text-navy-muted">
              Immigration Law
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy transition-colors hover:text-gold-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#eligibility"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-sm border border-gold-dark bg-gold px-5 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-gold-dark hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
        >
          Schedule a Case Evaluation
        </a>
      </div>
    </header>
  );
}
