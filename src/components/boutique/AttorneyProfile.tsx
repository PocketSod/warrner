import Image from "next/image";
import { BadgeCheck, Gavel, GraduationCap, Landmark } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "J.D., IU McKinney School of Law" },
  { icon: Landmark, text: "Admitted in Indiana + federal & immigration courts" },
  { icon: Gavel, text: "13+ years litigation experience" },
  { icon: BadgeCheck, text: "AILA member — U Visa Liaison" },
];

export default function BoutiqueAttorneyProfile() {
  return (
    <section id="attorney" className="bg-bq-bg">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-[2.75rem] bg-bq-terracotta/15" aria-hidden="true" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-28px_rgba(46,38,33,0.35)]">
            <Image
              src="/images/erin-warrner.jpg"
              alt="Portrait of Erin Warrner, Of Counsel"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center rounded-full bg-bq-surface px-4 py-1.5 font-bq-body text-xs font-bold uppercase tracking-wide text-bq-terracotta-dark">
            Your Advocate
          </span>
          <h2 className="mt-5 font-bq-heading text-3xl font-extrabold tracking-tight text-bq-ink sm:text-4xl">
            Erin Warrner
          </h2>
          <p className="mt-1 font-bq-body text-sm font-bold text-bq-muted">Of Counsel</p>

          <p className="mt-6 font-bq-body text-base leading-relaxed text-bq-muted">
            Erin joined the firm as Of Counsel in 2023, bringing more than
            thirteen years of litigation experience in criminal and
            immigration law. She spent a decade as a deputy prosecuting
            attorney, trying more than fifty jury trials, before turning her
            focus to supervising immigration cases at a local nonprofit.
          </p>
          <p className="mt-4 font-bq-body text-base leading-relaxed text-bq-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {credentials.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full bg-bq-surface px-4 py-2.5 font-bq-body text-sm font-semibold text-bq-ink"
              >
                <Icon size={15} strokeWidth={2} className="text-bq-terracotta-dark" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
