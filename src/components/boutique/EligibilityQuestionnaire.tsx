"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Loader2, ShieldCheck } from "lucide-react";
import { questionnaireSteps } from "@/lib/data";

type Direction = 1 | -1;
type ContactInfo = { name: string; email: string; phone: string };

const TOTAL_STEPS = questionnaireSteps.length + 1;

export default function BoutiqueEligibilityQuestionnaire() {
  const prefersReducedMotion = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<ContactInfo>({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();

  const isContactStep = stepIndex === questionnaireSteps.length;
  const currentQuestion = !isContactStep ? questionnaireSteps[stepIndex] : null;

  const canAdvance = isContactStep
    ? contact.name.trim().length > 1 && /\S+@\S+\.\S+/.test(contact.email)
    : Boolean(currentQuestion && answers[currentQuestion.id]);

  function goTo(next: number, dir: Direction) {
    setDirection(dir);
    setStepIndex(next);
  }

  function handleNext() {
    if (!canAdvance) return;
    if (stepIndex < TOTAL_STEPS - 1) goTo(stepIndex + 1, 1);
  }

  function handleBack() {
    if (stepIndex === 0) return;
    goTo(stepIndex - 1, -1);
  }

  function submitReview() {
    if (!canAdvance || status === "submitting") return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("done"), 900);
  }

  const slideVariants = {
    enter: (dir: Direction) => ({ x: prefersReducedMotion ? 0 : dir * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: Direction) => ({ x: prefersReducedMotion ? 0 : dir * -40, opacity: 0 }),
  };
  const transition = prefersReducedMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 300, damping: 30 };

  return (
    <section id="eligibility" className="bg-bq-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-bq-surface px-4 py-1.5 font-bq-body text-xs font-bold uppercase tracking-wide text-bq-terracotta-dark">
            Eligibility Questionnaire
          </span>
          <h2 className="mt-5 font-bq-heading text-3xl font-extrabold tracking-tight text-bq-ink sm:text-4xl">
            See where you stand in two minutes
          </h2>
          <p className="mt-4 font-bq-body text-base leading-relaxed text-bq-muted">
            A few friendly questions — an attorney reviews every response
            personally.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-xl overflow-hidden rounded-[2rem] bg-bq-surface shadow-[0_30px_70px_-30px_rgba(46,38,33,0.35)]">
          {status !== "done" && (
            <div className="px-8 pt-7">
              <div className="mb-2 flex items-center justify-between font-bq-body text-xs font-bold uppercase tracking-wide text-bq-muted">
                <span>Step {stepIndex + 1} of {TOTAL_STEPS}</span>
                <span>{Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)}%</span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full bg-bq-bg"
                role="progressbar"
                aria-valuenow={stepIndex + 1}
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
                aria-label="Questionnaire progress"
              >
                <div
                  className="h-full rounded-full bg-bq-terracotta-cta transition-[width] duration-300 ease-out"
                  style={{ width: `${((stepIndex + 1) / TOTAL_STEPS) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="relative min-h-[360px] px-8 py-9" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              {status === "done" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={transition}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-bq-terracotta-cta text-white">
                    <ShieldCheck size={26} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="font-bq-heading text-2xl font-extrabold text-bq-ink">
                    Thank you, {contact.name.split(" ")[0] || "friend"}.
                  </h3>
                  <p className="mt-3 max-w-sm font-bq-body text-sm leading-relaxed text-bq-muted">
                    Your responses have been sent to our intake team. An
                    attorney will reach out within one business day.
                  </p>
                </motion.div>
              ) : isContactStep ? (
                <motion.form
                  key="contact"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitReview();
                  }}
                  className="flex flex-col gap-5"
                >
                  <h3 className="font-bq-heading text-xl font-extrabold text-bq-ink">
                    Almost done — where should we send your review?
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={nameId} className="font-bq-body text-sm font-bold text-bq-ink">
                      Full name
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      autoComplete="name"
                      required
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      className="h-12 rounded-2xl border-2 border-bq-border bg-bq-bg px-4 font-bq-body text-base text-bq-ink outline-none transition-colors focus-visible:border-bq-terracotta-cta"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={emailId} className="font-bq-body text-sm font-bold text-bq-ink">
                      Email address
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      autoComplete="email"
                      required
                      value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                      className="h-12 rounded-2xl border-2 border-bq-border bg-bq-bg px-4 font-bq-body text-base text-bq-ink outline-none transition-colors focus-visible:border-bq-terracotta-cta"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={phoneId} className="font-bq-body text-sm font-bold text-bq-ink">
                      Phone <span className="font-normal text-bq-muted">(optional)</span>
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      autoComplete="tel"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      className="h-12 rounded-2xl border-2 border-bq-border bg-bq-bg px-4 font-bq-body text-base text-bq-ink outline-none transition-colors focus-visible:border-bq-terracotta-cta"
                    />
                  </div>
                </motion.form>
              ) : (
                currentQuestion && (
                  <motion.div
                    key={currentQuestion.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <h3 className="font-bq-heading text-xl font-extrabold text-bq-ink">
                      {currentQuestion.question}
                    </h3>
                    <p className="mt-1 font-bq-body text-sm text-bq-muted">{currentQuestion.helper}</p>

                    <div role="radiogroup" aria-label={currentQuestion.question} className="mt-6 flex flex-col gap-3">
                      {currentQuestion.options.map((option) => {
                        const selected = answers[currentQuestion.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() =>
                              setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.value }))
                            }
                            className={`flex min-h-[52px] items-center justify-between gap-3 rounded-2xl border-2 px-5 py-3 text-left font-bq-body text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bq-terracotta-cta ${
                              selected
                                ? "border-bq-terracotta-cta bg-bq-terracotta-cta text-white"
                                : "border-bq-border bg-bq-bg text-bq-ink hover:border-bq-terracotta-cta/50"
                            }`}
                          >
                            {option.label}
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                                selected ? "border-white bg-white text-bq-terracotta-cta" : "border-bq-border-strong text-transparent"
                              }`}
                              aria-hidden="true"
                            >
                              <Check size={12} strokeWidth={3} />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>

          {status !== "done" && (
            <div className="flex items-center justify-between px-8 py-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="inline-flex h-11 items-center gap-1.5 rounded-full px-4 font-bq-body text-sm font-bold text-bq-ink transition-colors hover:text-bq-terracotta-dark disabled:cursor-not-allowed disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bq-terracotta-cta"
              >
                <ChevronLeft size={16} aria-hidden="true" />
                Back
              </button>

              {isContactStep ? (
                <button
                  type="button"
                  onClick={submitReview}
                  disabled={!canAdvance || status === "submitting"}
                  className="inline-flex h-12 min-w-[190px] items-center justify-center gap-2 rounded-full bg-bq-terracotta-cta px-6 font-bq-body text-sm font-bold text-white shadow-sm transition-colors hover:bg-bq-ink disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bq-ink"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Submitting…
                    </>
                  ) : (
                    "Submit for Review"
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canAdvance}
                  className="inline-flex h-12 min-w-[130px] items-center justify-center gap-1.5 rounded-full bg-bq-terracotta-cta px-6 font-bq-body text-sm font-bold text-white shadow-sm transition-colors hover:bg-bq-ink disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bq-ink"
                >
                  Next
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
