"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Loader2, ShieldCheck } from "lucide-react";
import { questionnaireSteps } from "@/lib/data";

type Direction = 1 | -1;
type ContactInfo = { name: string; email: string; phone: string };

const TOTAL_STEPS = questionnaireSteps.length + 1; // + contact details step

export default function EligibilityQuestionnaire() {
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

  function handleSelect(questionId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleBack() {
    if (stepIndex === 0) return;
    goTo(stepIndex - 1, -1);
  }

  function handleNext() {
    if (!canAdvance) return;
    if (stepIndex < TOTAL_STEPS - 1) {
      goTo(stepIndex + 1, 1);
    }
  }

  function submitReview() {
    if (!canAdvance || status === "submitting") return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("done"), 900);
  }

  const slideVariants = {
    enter: (dir: Direction) => ({
      x: prefersReducedMotion ? 0 : dir * 48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: Direction) => ({
      x: prefersReducedMotion ? 0 : dir * -48,
      opacity: 0,
    }),
  };

  const transition = prefersReducedMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 300, damping: 32, mass: 0.9 };

  return (
    <section id="eligibility" className="bg-navy">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-light">
            Eligibility Questionnaire
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
            See where you stand in two minutes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-soft">
            Answer a few confidential questions and an attorney will review
            your situation personally before your case evaluation call.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-xl overflow-hidden rounded-sm border border-gold-light/25 bg-ivory shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
          {status !== "done" && (
            <div className="border-b border-border px-8 pt-7">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-navy-muted">
                <span>
                  Step {stepIndex + 1} of {TOTAL_STEPS}
                </span>
                <span>{Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)}%</span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-ivory-deep"
                role="progressbar"
                aria-valuenow={stepIndex + 1}
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
                aria-label="Questionnaire progress"
              >
                <div
                  className="h-full rounded-full bg-gold transition-[width] duration-300 ease-out"
                  style={{ width: `${((stepIndex + 1) / TOTAL_STEPS) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="relative min-h-[360px] px-8 py-9" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              {status === "done" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={transition}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold-dark bg-navy text-gold-light">
                    <ShieldCheck size={26} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    Thank you, {contact.name.split(" ")[0] || "friend"}.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-muted">
                    Your responses have been sent to our intake team. An
                    attorney will reach out within one business day to
                    schedule your confidential case evaluation.
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
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy">
                      Almost done — where should we send your review?
                    </h3>
                    <p className="mt-1 text-sm text-navy-muted">
                      Used only to contact you about your case evaluation.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={nameId} className="text-sm font-semibold text-navy">
                      Full name
                    </label>
                    <input
                      id={nameId}
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      className="h-12 rounded-sm border border-navy/20 bg-ivory px-4 text-base text-navy outline-none transition-colors focus-visible:border-gold-dark focus-visible:ring-2 focus-visible:ring-gold/40"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={emailId} className="text-sm font-semibold text-navy">
                      Email address
                    </label>
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                      className="h-12 rounded-sm border border-navy/20 bg-ivory px-4 text-base text-navy outline-none transition-colors focus-visible:border-gold-dark focus-visible:ring-2 focus-visible:ring-gold/40"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={phoneId} className="text-sm font-semibold text-navy">
                      Phone <span className="font-normal text-navy-muted">(optional)</span>
                    </label>
                    <input
                      id={phoneId}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      className="h-12 rounded-sm border border-navy/20 bg-ivory px-4 text-base text-navy outline-none transition-colors focus-visible:border-gold-dark focus-visible:ring-2 focus-visible:ring-gold/40"
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
                    <h3 className="font-serif text-xl font-semibold text-navy">
                      {currentQuestion.question}
                    </h3>
                    <p className="mt-1 text-sm text-navy-muted">{currentQuestion.helper}</p>

                    <div
                      role="radiogroup"
                      aria-label={currentQuestion.question}
                      className="mt-6 flex flex-col gap-3"
                    >
                      {currentQuestion.options.map((option) => {
                        const selected = answers[currentQuestion.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => handleSelect(currentQuestion.id, option.value)}
                            className={`flex min-h-[52px] items-center justify-between gap-3 rounded-sm border px-5 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark ${
                              selected
                                ? "border-gold-dark bg-navy text-ivory"
                                : "border-navy/15 bg-ivory text-navy hover:border-gold-dark/60 hover:bg-ivory-deep"
                            }`}
                          >
                            {option.label}
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                selected
                                  ? "border-gold-light bg-gold-light text-navy"
                                  : "border-navy/25 text-transparent"
                              }`}
                              aria-hidden="true"
                            >
                              <Check size={13} strokeWidth={3} />
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
            <div className="flex items-center justify-between border-t border-border px-8 py-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="inline-flex h-11 items-center gap-1.5 rounded-sm px-4 text-sm font-semibold text-navy transition-colors hover:text-gold-dark disabled:cursor-not-allowed disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
              >
                <ChevronLeft size={16} aria-hidden="true" />
                Back
              </button>

              {isContactStep ? (
                <button
                  type="button"
                  onClick={submitReview}
                  disabled={!canAdvance || status === "submitting"}
                  className="inline-flex h-12 min-w-[190px] items-center justify-center gap-2 rounded-sm border border-gold-dark bg-gold px-6 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-gold-dark hover:text-ivory disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gold disabled:hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
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
                  className="inline-flex h-12 min-w-[130px] items-center justify-center gap-1.5 rounded-sm border border-gold-dark bg-gold px-6 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-gold-dark hover:text-ivory disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gold disabled:hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
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
