import Image from "next/image";

const credentials = [
  "J.D., Indiana University McKinney School of Law",
  "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court",
  "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney",
  "AILA member; U Visa Liaison for the Indiana Chapter",
];

export default function FrontlineAttorneyProfile() {
  return (
    <section id="attorney" className="border-b-2 border-fl-ink bg-fl-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-sm border-2 border-fl-ink">
            <Image
              src="/images/erin-warrner.jpg"
              alt="Portrait of Erin Warrner, Of Counsel"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover grayscale contrast-110"
            />
            <span className="absolute -left-2 -top-2 bg-fl-red-dark px-2.5 py-1 font-fl-label text-[10px] font-bold uppercase tracking-[0.14em] text-fl-bg">
              Of Counsel
            </span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="font-fl-label text-sm font-bold uppercase tracking-[0.16em] text-fl-red-dark">
            Your Advocate
          </p>
          <h2 className="mt-4 font-fl-heading text-3xl font-black uppercase tracking-tight text-fl-ink sm:text-4xl">
            Erin Warrner
          </h2>
          <p className="mt-1 font-fl-body text-sm font-semibold uppercase tracking-wide text-fl-muted">
            Of Counsel
          </p>

          <p className="mt-6 max-w-2xl font-fl-body text-base leading-relaxed text-fl-muted">
            Erin joined the firm as Of Counsel in 2023, bringing more than
            thirteen years of litigation experience in criminal and
            immigration law. She spent a decade as a deputy prosecuting
            attorney, trying more than fifty jury trials, before turning her
            focus to supervising immigration cases at a local nonprofit.
          </p>
          <p className="mt-4 max-w-2xl font-fl-body text-base leading-relaxed text-fl-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map((text) => (
              <li
                key={text}
                className="border-t-2 border-fl-ink pt-3 font-fl-body text-sm text-fl-ink"
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
