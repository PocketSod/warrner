import Image from "next/image";

const credentials = [
  "J.D., Indiana University McKinney School of Law",
  "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court",
  "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney",
  "AILA member; U Visa Liaison for the Indiana Chapter",
];

export default function AtlasAttorneyProfile() {
  return (
    <section id="attorney" className="border-b border-at-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-at-border-strong bg-at-surface shadow-[0_24px_48px_-24px_rgba(22,50,74,0.4)]">
              <Image
                src="/images/erin-warrner.jpg"
                alt="Portrait of Erin Warrner, Of Counsel"
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover contrast-[1.05] sepia-[0.12]"
              />
            </div>
            {/* Echo of the stamp motif: a laminated ID-card corner tag */}
            <div
              className="absolute -bottom-4 -right-4 flex -rotate-[6deg] flex-col items-center border border-dashed border-at-stamp bg-at-bg px-3 py-2 shadow-[0_10px_24px_-12px_rgba(22,50,74,0.4)]"
              aria-hidden="true"
            >
              <span className="font-at-mono text-[9px] font-bold uppercase tracking-[0.15em] text-at-stamp">
                On File
              </span>
              <span className="mt-0.5 font-at-mono text-[8px] text-at-muted">
                39.77°N · Of Counsel
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="font-at-mono text-xs font-bold uppercase tracking-[0.2em] text-at-stamp">
            Your Advocate
          </p>
          <h2 className="mt-4 font-at-heading text-3xl font-semibold tracking-tight text-at-ink sm:text-4xl">
            Erin Warrner
          </h2>
          <p className="mt-1 font-at-body text-sm font-semibold uppercase tracking-wide text-at-muted">
            Of Counsel
          </p>

          <p className="mt-6 max-w-2xl font-at-body text-base leading-relaxed text-at-muted">
            Erin joined the firm as Of Counsel in 2023, bringing more than
            thirteen years of litigation experience in criminal and
            immigration law. She spent a decade as a deputy prosecuting
            attorney, trying more than fifty jury trials, before turning her
            focus to supervising immigration cases at a local nonprofit.
          </p>
          <p className="mt-4 max-w-2xl font-at-body text-base leading-relaxed text-at-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map((text) => (
              <li
                key={text}
                className="border-t border-at-border pt-3 font-at-body text-sm text-at-ink"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
