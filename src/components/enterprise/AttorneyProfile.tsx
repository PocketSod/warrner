import Image from "next/image";
import { BadgeCheck, Gavel, GraduationCap, Landmark } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "J.D., Indiana University McKinney School of Law" },
  { icon: Landmark, text: "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court" },
  { icon: Gavel, text: "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney" },
  { icon: BadgeCheck, text: "AILA member; U Visa Liaison for the Indiana Chapter" },
];

export default function EnterpriseAttorneyProfile() {
  return (
    <section id="attorney" className="border-b border-en-border bg-en-surface">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-en-border shadow-[0_30px_60px_-32px_rgba(16,25,43,0.35)] lg:mx-0">
          <Image
            src="/images/erin-warrner.jpg"
            alt="Portrait of Erin Warrner, Of Counsel"
            fill
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-en-border-strong bg-white px-3.5 py-1.5 font-en-body text-xs font-semibold text-en-accent">
            Your Advocate
          </span>
          <h2 className="mt-5 font-en-heading text-3xl font-bold tracking-tight text-en-ink sm:text-4xl">
            Erin Warrner
          </h2>
          <p className="mt-1 font-en-body text-sm font-semibold text-en-muted">Of Counsel</p>

          <p className="mt-6 font-en-body text-base leading-relaxed text-en-muted">
            Erin joined the firm as Of Counsel in 2023, bringing more than
            thirteen years of litigation experience in criminal and
            immigration law. She spent a decade as a deputy prosecuting
            attorney, trying more than fifty jury trials, before turning her
            focus to supervising immigration cases at a local nonprofit.
          </p>
          <p className="mt-4 font-en-body text-base leading-relaxed text-en-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {credentials.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 rounded-xl border border-en-border bg-white px-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-en-accent/10 text-en-accent">
                  <Icon size={15} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="font-en-body text-sm text-en-ink">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
