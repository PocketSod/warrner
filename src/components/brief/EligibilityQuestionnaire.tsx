"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronRight, Loader2, ShieldCheck } from "lucide-react";
import { questionnaireSteps } from "@/lib/data";

type Direction = 1 | -1;
type ContactInfo = { name: string; email: string; phone: string };

const TOTAL_STEPS = questionnaireSteps.length + 1;

export default function BriefEligibilityQuestionnaire() {
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
    : { duration: 0.32, ease: "easeOut" as const };

  return (
    <section id="eligibility" className="border-b border-br-ink bg-br-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-br-ink pb-6">
          <h2 className="font-br-heading text-3xl font-semibold text-br-ink sm:text-4xl">
            Eligibility Questionnaire
          </h2>
          <span className="font-br-mono text-[11px] uppercase tracking-[0.2em] text-br-muted">
            Section III
          </span>
        </div>

        <div className="relative mx-auto mt-10 max-w-xl border border-br-ink bg-br-surface">
          {status !== "done" && (
            <div className="border-b border-br-ink px-8 pt-6">
              <div className="mb-2 flex justify-between font-br-mono text-[11px] uppercase tracking-wider text-br-muted">
                <span>Step {stepIndex + 1} / {TOTAL_STEPS}</span>
                <span>{Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)}%</span>
              </div>
              <div
                className="h-1 w-full bg-br-bg"
                role="progressbar"
                aria-valuenow={stepIndex + 1}
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
                aria-label="Questionnaire progress"
              >
                <div
                  className="h-full bg-br-red transition-[width] duration-300 ease-out"
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
                  className="flex flex-col items-start py-10"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center border border-br-red text-br-red">
                    <ShieldCheck size={22} aria-hidden="true" />
                  </span>
                  <h3 className="font-br-heading text-2xl font-semibold text-br-ink">
                    Thank you, {contact.name.split(" ")[0] || "friend"}.
                  </h3>
                  <p className="mt-3 max-w-sm font-br-body text-sm leading-relaxed text-br-muted">
                    Your responses have been logged and sent to our intake
                    team. An attorney will follow up within one business day.
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
                  <h3 className="font-br-heading text-xl font-semibold text-br-ink">
                    Where should we send your review?
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={nameId} className="font-br-body text-sm font-semibold text-br-ink">
                      Full name
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      autoComplete="name"
                      required
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      className="h-12 border border-br-border-strong bg-br-bg px-4 font-br-body text-base text-br-ink outline-none transition-colors focus-visible:border-br-red"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={emailId} className="font-br-body text-sm font-semibold text-br-ink">
                      Email address
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      autoComplete="email"
                      required
                      value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                      className="h-12 border border-br-border-strong bg-br-bg px-4 font-br-body text-base text-br-ink outline-none transition-colors focus-visible:border-br-red"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={phoneId} className="font-br-body text-sm font-semibold text-br-ink">
                      Phone <span className="font-normal text-br-muted">(optional)</span>
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      autoComplete="tel"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      className="h-12 border border-br-border-strong bg-br-bg px-4 font-br-body text-base text-br-ink outline-none transition-colors focus-visible:border-br-red"
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
                    <h3 className="font-br-heading text-xl font-semibold text-br-ink">
                      {currentQuestion.question}
                    </h3>
                    <p className="mt-1 font-br-body text-sm text-br-muted">{currentQuestion.helper}</p>

                    <div role="radiogroup" aria-label={currentQuestion.question} className="mt-6 flex flex-col">
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
                            className={`flex min-h-[52px] items-center justify-between gap-3 border-b border-br-border px-1 py-3 text-left font-br-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-br-red ${
                              selected ? "text-br-red" : "text-br-ink hover:text-br-red"
                            }`}
                          >
                            {option.label}
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                                selected ? "border-br-red bg-br-red text-white" : "border-br-border-strong text-transparent"
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
            <div className="flex items-center justify-between border-t border-br-ink px-8 py-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="font-br-body text-sm font-semibold text-br-ink transition-colors hover:text-br-red disabled:cursor-not-allowed disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-br-red"
              >
                Back
              </button>

              {isContactStep ? (
                <button
                  type="button"
                  onClick={submitReview}
                  disabled={!canAdvance || status === "submitting"}
                  className="inline-flex h-12 min-w-[190px] items-center justify-center gap-2 border border-br-ink bg-br-ink font-br-body text-sm font-semibold text-br-bg transition-colors hover:bg-br-red hover:border-br-red disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-br-red"
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
                  className="inline-flex h-12 min-w-[130px] items-center justify-center gap-1.5 border border-br-ink bg-br-ink font-br-body text-sm font-semibold text-br-bg transition-colors hover:bg-br-red hover:border-br-red disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-br-red"
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
