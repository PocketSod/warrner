"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { questionnaireSteps } from "@/lib/data";

type Direction = 1 | -1;
type ContactInfo = { name: string; email: string; phone: string };

const TOTAL_STEPS = questionnaireSteps.length + 1;

export default function AtlasEligibilityQuestionnaire() {
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
    : { duration: 0.35, ease: "easeOut" as const };

  return (
    <section id="eligibility" className="border-b border-at-border bg-at-surface">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-at-mono text-xs font-bold uppercase tracking-[0.2em] text-at-stamp">
              Entry Declaration
            </p>
            <h2 className="mt-4 font-at-heading text-3xl font-semibold tracking-tight text-at-ink">
              Chart your position
            </h2>
            <p className="mt-4 font-at-body text-sm leading-relaxed text-at-muted">
              Two minutes, four questions. An attorney reviews every response
              personally.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-at-border-strong bg-at-bg">
              {status !== "done" && (
                <div className="border-b border-at-border px-8 pt-6">
                  <div className="mb-2 flex justify-between font-at-mono text-[11px] font-semibold uppercase tracking-wider text-at-muted">
                    <span>Step {stepIndex + 1} / {TOTAL_STEPS}</span>
                    <span>{Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)}%</span>
                  </div>
                  <div
                    className="relative h-[3px] w-full"
                    role="progressbar"
                    aria-valuenow={stepIndex + 1}
                    aria-valuemin={1}
                    aria-valuemax={TOTAL_STEPS}
                    aria-label="Questionnaire progress"
                  >
                    <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-at-border-strong" aria-hidden="true" />
                    <div
                      className="absolute inset-y-0 left-0 bg-at-stamp transition-[width] duration-300 ease-out"
                      style={{ width: `${((stepIndex + 1) / TOTAL_STEPS) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="relative min-h-[340px] px-8 py-9" aria-live="polite">
                <AnimatePresence mode="wait" custom={direction}>
                  {status === "done" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={transition}
                      className="flex flex-col items-start py-10"
                    >
                      <span className="mb-5 flex h-12 w-12 items-center justify-center border border-dashed border-at-stamp text-at-stamp">
                        <Check size={22} aria-hidden="true" />
                      </span>
                      <h3 className="font-at-heading text-2xl font-semibold text-at-ink">
                        Thank you, {contact.name.split(" ")[0] || "friend"}.
                      </h3>
                      <p className="mt-3 max-w-sm font-at-body text-sm leading-relaxed text-at-muted">
                        Your responses were sent to our intake team. An
                        attorney will follow up within one business day.
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
                      <h3 className="font-at-heading text-xl font-semibold text-at-ink">
                        Where should we send your review?
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={nameId} className="font-at-body text-sm font-semibold text-at-ink">
                          Full name
                        </label>
                        <input
                          id={nameId}
                          type="text"
                          autoComplete="name"
                          required
                          value={contact.name}
                          onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                          className="h-12 border border-at-border-strong bg-at-bg px-4 font-at-body text-base text-at-ink outline-none transition-colors focus-visible:border-at-stamp"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={emailId} className="font-at-body text-sm font-semibold text-at-ink">
                          Email address
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          autoComplete="email"
                          required
                          value={contact.email}
                          onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                          className="h-12 border border-at-border-strong bg-at-bg px-4 font-at-body text-base text-at-ink outline-none transition-colors focus-visible:border-at-stamp"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={phoneId} className="font-at-body text-sm font-semibold text-at-ink">
                          Phone <span className="font-normal text-at-muted">(optional)</span>
                        </label>
                        <input
                          id={phoneId}
                          type="tel"
                          autoComplete="tel"
                          value={contact.phone}
                          onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                          className="h-12 border border-at-border-strong bg-at-bg px-4 font-at-body text-base text-at-ink outline-none transition-colors focus-visible:border-at-stamp"
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
                        <h3 className="font-at-heading text-xl font-semibold text-at-ink">
                          {currentQuestion.question}
                        </h3>
                        <p className="mt-1 font-at-body text-sm text-at-muted">{currentQuestion.helper}</p>

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
                                className={`flex min-h-[52px] items-center justify-between gap-3 border-b border-at-border px-1 py-3 text-left font-at-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-at-stamp ${
                                  selected ? "text-at-stamp" : "text-at-ink hover:text-at-stamp"
                                }`}
                              >
                                {option.label}
                                <span
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                                    selected ? "border-at-stamp bg-at-stamp text-at-bg" : "border-at-border-strong text-transparent"
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
                <div className="flex items-center justify-between border-t border-at-border px-8 py-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={stepIndex === 0}
                    className="font-at-body text-sm font-semibold text-at-ink underline decoration-at-border-strong underline-offset-4 transition-colors hover:text-at-stamp disabled:cursor-not-allowed disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-at-stamp"
                  >
                    Back
                  </button>

                  {isContactStep ? (
                    <button
                      type="button"
                      onClick={submitReview}
                      disabled={!canAdvance || status === "submitting"}
                      className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 border border-at-ink bg-at-ink font-at-body text-sm font-semibold text-at-bg transition-colors hover:border-at-stamp hover:bg-at-stamp disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-at-stamp"
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
                      className="inline-flex h-12 min-w-[120px] items-center justify-center gap-1.5 border border-at-ink bg-at-ink font-at-body text-sm font-semibold text-at-bg transition-colors hover:border-at-stamp hover:bg-at-stamp disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-at-stamp"
                    >
                      Next
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
