import Image from "next/image";
import { BadgeCheck, Gavel, GraduationCap, Landmark } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "J.D., Indiana University McKinney School of Law" },
  { icon: Landmark, text: "Admitted in Indiana, N.D. & S.D. Indiana federal courts, and EOIR immigration court" },
  { icon: Gavel, text: "13+ years litigation experience — 50+ jury trials as a deputy prosecuting attorney" },
  { icon: BadgeCheck, text: "AILA member; U Visa Liaison for the Indiana Chapter" },
];

export default function GlassAttorneyProfile() {
  return (
    <section id="attorney" className="relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-[2.75rem] bg-gl-accent/20 blur-md" aria-hidden="true" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/50 shadow-[0_30px_70px_-30px_rgba(30,27,58,0.45)]">
            <Image
              src="/images/erin-warrner.jpg"
              alt="Portrait of Erin Warrner, Of Counsel"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/50 bg-white/55 p-8 shadow-[0_30px_60px_-35px_rgba(30,27,58,0.35)] backdrop-blur-xl sm:p-10">
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-4 py-1.5 font-gl-body text-xs font-semibold text-gl-accent">
            Your Advocate
          </span>
          <h2 className="mt-5 font-gl-heading text-3xl font-bold tracking-tight text-gl-ink sm:text-4xl">
            Erin Warrner
          </h2>
          <p className="mt-1 font-gl-body text-sm font-semibold text-gl-muted">Of Counsel</p>

          <p className="mt-6 font-gl-body text-base leading-relaxed text-gl-muted">
            Erin joined the firm as Of Counsel in 2023, bringing more than
            thirteen years of litigation experience in criminal and
            immigration law. She spent a decade as a deputy prosecuting
            attorney, trying more than fifty jury trials, before turning her
            focus to supervising immigration cases at a local nonprofit.
          </p>
          <p className="mt-4 font-gl-body text-base leading-relaxed text-gl-muted">
            Today she represents clients in both immigration matters and
            criminal defense, with a particular focus on advocacy for
            immigrants navigating the system she once prosecuted within.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {credentials.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2.5 font-gl-body text-sm font-semibold text-gl-ink"
              >
                <Icon size={15} strokeWidth={2} className="text-gl-accent" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
