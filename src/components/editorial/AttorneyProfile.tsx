import Image from "next/image";

const credentials = [
  "J.D., Indiana University McKinney School of Law",
  "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court",
  "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney",
  "AILA member; U Visa Liaison for the Indiana Chapter",
];

export default function EditorialAttorneyProfile() {
  return (
    <section id="attorney" className="border-b border-ed-border bg-ed-surface">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden lg:mx-0">
          <Image
            src="/images/erin-warrner.jpg"
            alt="Portrait of Erin Warrner, Of Counsel"
            fill
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,18,15,0) 55%, rgba(20,18,15,0.85) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-ed-heading text-2xl italic text-ed-cream">Erin Warrner</p>
            <p className="font-ed-body text-xs uppercase tracking-[0.3em] text-ed-cream-muted">
              Of Counsel
            </p>
          </div>
        </div>

        <div>
          <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.35em] text-ed-oxblood-light">
            Your Advocate
          </p>
          <h2 className="mt-5 font-ed-heading text-4xl font-medium text-ed-cream sm:text-5xl">
            A decade in the{" "}
            <span className="italic text-ed-oxblood-light">courtroom</span>
          </h2>

          <p className="mt-6 max-w-xl font-ed-body text-base leading-relaxed text-ed-cream-muted">
            Erin joined the firm as Of Counsel in 2023, bringing more than
            thirteen years of litigation experience in criminal and
            immigration law. She spent a decade as a deputy prosecuting
            attorney, trying more than fifty jury trials, before turning her
            focus to supervising immigration cases at a local nonprofit.
          </p>
          <p className="mt-4 max-w-xl font-ed-body text-base leading-relaxed text-ed-cream-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <ul className="mt-9 flex flex-col">
            {credentials.map((text) => (
              <li
                key={text}
                className="border-t border-ed-border py-3.5 font-ed-body text-sm text-ed-cream last:border-b"
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
