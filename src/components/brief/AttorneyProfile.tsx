import Image from "next/image";

const credentials = [
  "J.D., Indiana University McKinney School of Law",
  "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court",
  "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney",
  "AILA member; U Visa Liaison for the Indiana Chapter",
];

export default function BriefAttorneyProfile() {
  return (
    <section id="attorney" className="border-b border-br-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-br-ink pb-6">
          <h2 className="font-br-heading text-3xl font-semibold text-br-ink sm:text-4xl">
            Counsel of Record
          </h2>
          <span className="font-br-mono text-[11px] uppercase tracking-[0.2em] text-br-muted">
            Section IV
          </span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-sm border border-br-ink">
              <Image
                src="/images/erin-warrner.jpg"
                alt="Portrait of Erin Warrner, Of Counsel"
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover grayscale"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="font-br-heading text-2xl font-semibold text-br-ink">Erin Warrner</h3>
            <p className="mt-1 font-br-mono text-xs uppercase tracking-[0.2em] text-br-red">
              Of Counsel
            </p>

            <p className="mt-6 max-w-2xl font-br-body text-base leading-relaxed text-br-muted">
              Erin joined the firm as Of Counsel in 2023, bringing more than
              thirteen years of litigation experience in criminal and
              immigration law. She spent a decade as a deputy prosecuting
              attorney, trying more than fifty jury trials, before turning
              her focus to supervising immigration cases at a local
              nonprofit.
            </p>
            <p className="mt-4 max-w-2xl font-br-body text-base leading-relaxed text-br-muted">
              Today she represents clients in both immigration matters and
              criminal defense, with a particular focus on advocacy for
              immigrants navigating the system she once prosecuted within.
            </p>

            <div className="mt-8 border border-br-ink">
              {credentials.map((text, i) => (
                <div
                  key={text}
                  className={`flex items-baseline gap-4 px-5 py-3.5 ${i > 0 ? "border-t border-br-border" : ""}`}
                >
                  <span className="font-br-mono text-[11px] text-br-red">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-br-body text-sm text-br-ink">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
