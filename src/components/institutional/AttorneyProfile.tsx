import Image from "next/image";

const credentials = [
  "J.D., Indiana University McKinney School of Law",
  "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court",
  "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney",
  "AILA member; U Visa Liaison for the Indiana Chapter",
];

export default function InstitutionalAttorneyProfile() {
  return (
    <section id="attorney" className="border-b-2 border-in-ink bg-in-surface">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md border-2 border-in-ink lg:mx-0">
          <Image
            src="/images/erin-warrner.jpg"
            alt="Portrait of Erin Warrner, Of Counsel"
            fill
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-3 border border-in-gold/70" aria-hidden="true" />
        </div>

        <div>
          <p className="font-in-body text-xs font-semibold uppercase tracking-[0.3em] text-in-burgundy">
            Your Advocate
          </p>
          <h2 className="mt-5 font-in-heading text-3xl font-semibold text-in-ink sm:text-4xl">
            Erin Warrner
          </h2>
          <p className="mt-1 font-in-body text-sm font-semibold uppercase tracking-wide text-in-muted">
            Of Counsel
          </p>

          <p className="mt-6 max-w-xl font-in-body text-base leading-relaxed text-in-muted">
            A native of Indianapolis&rsquo;s southside, Erin joined the firm
            as Of Counsel in 2023, bringing more than thirteen years of
            litigation experience in criminal and immigration law. She spent
            a decade as a deputy prosecuting attorney, trying more than fifty
            jury trials, before turning her focus to supervising immigration
            cases at a local nonprofit.
          </p>
          <p className="mt-4 max-w-xl font-in-body text-base leading-relaxed text-in-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <ul className="mt-8 flex flex-col">
            {credentials.map((text) => (
              <li key={text} className="border-t border-in-border py-3.5 font-in-body text-sm text-in-ink last:border-b">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
