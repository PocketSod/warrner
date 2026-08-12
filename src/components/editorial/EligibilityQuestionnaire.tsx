"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Loader2, ShieldCheck } from "lucide-react";
import { questionnaireSteps } from "@/lib/data";

type Direction = 1 | -1;
type ContactInfo = { name: string; email: string; phone: string };

const TOTAL_STEPS = questionnaireSteps.length + 1;

export default function EditorialEligibilityQuestionnaire() {
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
    enter: (dir: Direction) => ({ x: prefersReducedMotion ? 0 : dir * 44, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: Direction) => ({ x: prefersReducedMotion ? 0 : dir * -44, opacity: 0 }),
  };
  const transition = prefersReducedMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 280, damping: 30 };

  return (
    <section id="eligibility" className="border-b border-ed-border bg-ed-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-ed-body text-xs font-semibold uppercase tracking-[0.35em] text-ed-oxblood-light">
            Eligibility Questionnaire
          </p>
          <h2 className="mt-5 font-ed-heading text-4xl font-medium text-ed-cream sm:text-5xl">
            See where you <span className="italic text-ed-oxblood-light">stand</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-xl overflow-hidden border border-ed-border bg-ed-surface shadow-[0_40px_80px_-35px_rgba(0,0,0,0.7)]">
          {status !== "done" && (
            <div className="border-b border-ed-border px-8 pt-7">
              <div className="mb-2 flex items-center justify-between font-ed-body text-xs font-semibold uppercase tracking-wider text-ed-cream-muted">
                <span>Step {stepIndex + 1} of {TOTAL_STEPS}</span>
                <span>{Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)}%</span>
              </div>
              <div
                className="h-1 w-full overflow-hidden bg-ed-border"
                role="progressbar"
                aria-valuenow={stepIndex + 1}
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
                aria-label="Questionnaire progress"
              >
                <div
                  className="h-full bg-ed-oxblood-light transition-[width] duration-300 ease-out"
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
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-ed-oxblood-light text-ed-oxblood-light">
                    <ShieldCheck size={26} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-ed-heading text-2xl font-medium text-ed-cream">
                    Thank you, {contact.name.split(" ")[0] || "friend"}.
                  </h3>
                  <p className="mt-3 max-w-sm font-ed-body text-sm leading-relaxed text-ed-cream-muted">
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
                  <h3 className="font-ed-heading text-xl font-medium text-ed-cream">
                    Where should we send your review?
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={nameId} className="font-ed-body text-sm font-semibold text-ed-cream">
                      Full name
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      autoComplete="name"
                      required
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      className="h-12 border border-ed-border-strong bg-ed-bg px-4 font-ed-body text-base text-ed-cream outline-none transition-colors placeholder:text-ed-cream-muted focus-visible:border-ed-oxblood-light"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={emailId} className="font-ed-body text-sm font-semibold text-ed-cream">
                      Email address
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      autoComplete="email"
                      required
                      value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                      className="h-12 border border-ed-border-strong bg-ed-bg px-4 font-ed-body text-base text-ed-cream outline-none transition-colors focus-visible:border-ed-oxblood-light"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={phoneId} className="font-ed-body text-sm font-semibold text-ed-cream">
                      Phone <span className="font-normal text-ed-cream-muted">(optional)</span>
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      autoComplete="tel"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      className="h-12 border border-ed-border-strong bg-ed-bg px-4 font-ed-body text-base text-ed-cream outline-none transition-colors focus-visible:border-ed-oxblood-light"
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
                    <h3 className="font-ed-heading text-xl font-medium text-ed-cream">
                      {currentQuestion.question}
                    </h3>
                    <p className="mt-1 font-ed-body text-sm text-ed-cream-muted">{currentQuestion.helper}</p>

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
                            className={`flex min-h-[52px] items-center justify-between gap-3 border px-5 py-3 text-left font-ed-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ed-oxblood-light ${
                              selected
                                ? "border-ed-oxblood-light bg-ed-oxblood text-ed-cream"
                                : "border-ed-border-strong bg-ed-bg text-ed-cream-muted hover:border-ed-oxblood-light hover:text-ed-cream"
                            }`}
                          >
                            {option.label}
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                selected ? "border-ed-cream bg-ed-cream text-ed-oxblood" : "border-ed-border-strong text-transparent"
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
            <div className="flex items-center justify-between border-t border-ed-border px-8 py-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="inline-flex h-11 items-center gap-1.5 font-ed-body text-sm font-semibold text-ed-cream-muted transition-colors hover:text-ed-cream disabled:cursor-not-allowed disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ed-oxblood-light"
              >
                <ChevronLeft size={16} aria-hidden="true" />
                Back
              </button>

              {isContactStep ? (
                <button
                  type="button"
                  onClick={submitReview}
                  disabled={!canAdvance || status === "submitting"}
                  className="inline-flex h-12 min-w-[190px] items-center justify-center gap-2 border border-ed-oxblood bg-ed-oxblood font-ed-body text-sm font-semibold text-ed-cream transition-colors hover:bg-ed-oxblood-light hover:border-ed-oxblood-light hover:text-ed-bg disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ed-cream"
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
                  className="inline-flex h-12 min-w-[130px] items-center justify-center gap-1.5 border border-ed-oxblood bg-ed-oxblood font-ed-body text-sm font-semibold text-ed-cream transition-colors hover:bg-ed-oxblood-light hover:border-ed-oxblood-light hover:text-ed-bg disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ed-cream"
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
