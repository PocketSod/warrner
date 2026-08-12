"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const versions = [
  { href: "/", label: "Executive" },
  { href: "/minimal", label: "Minimal" },
  { href: "/editorial", label: "Editorial" },
  { href: "/boutique", label: "Boutique" },
  { href: "/institutional", label: "Institutional" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/brief", label: "The Brief" },
  { href: "/glass", label: "Glass" },
];

export default function DesignToggle() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Design version switcher"
      className="fixed inset-x-4 bottom-5 z-[70] flex justify-center sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
    >
      <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/15 bg-black/85 p-1.5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md">
        {versions.map((v) => {
          const active = v.href === "/" ? pathname === "/" : pathname.startsWith(v.href);
          return (
            <Link
              key={v.href}
              href={v.href}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                active
                  ? "bg-white text-black"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {v.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
