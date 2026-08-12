"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { questionnaireSteps } from "@/lib/data";

type Direction = 1 | -1;
type ContactInfo = { name: string; email: string; phone: string };

const TOTAL_STEPS = questionnaireSteps.length + 1;

export default function FrontlineEligibilityQuestionnaire() {
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
    <section id="eligibility" className="border-b-2 border-fl-ink bg-fl-surface">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-fl-label text-sm font-bold uppercase tracking-[0.16em] text-fl-red-dark">
              Case Intake
            </p>
            <h2 className="mt-4 font-fl-heading text-3xl font-black uppercase tracking-tight text-fl-ink">
              See where you stand
            </h2>
            <p className="mt-4 font-fl-body text-sm leading-relaxed text-fl-muted">
              Two minutes, four questions. An attorney reviews every response
              personally.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-2 border-fl-ink bg-fl-bg">
              {status !== "done" && (
                <div className="border-b-2 border-fl-ink px-8 pt-6">
                  <div className="mb-2 flex justify-between font-fl-label text-xs font-bold uppercase tracking-wider text-fl-muted">
                    <span>Step {stepIndex + 1} / {TOTAL_STEPS}</span>
                    <span>{Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)}%</span>
                  </div>
                  <div
                    className="h-3 w-full border-2 border-fl-ink bg-fl-surface"
                    role="progressbar"
                    aria-valuenow={stepIndex + 1}
                    aria-valuemin={1}
                    aria-valuemax={TOTAL_STEPS}
                    aria-label="Questionnaire progress"
                  >
                    <div
                      className="h-full bg-fl-red-dark transition-[width] duration-300 ease-out"
                      style={{ width: `${((stepIndex + 1) / TOTAL_STEPS) * 100}%` }}
                    />
                  </div>
                  <div className="h-4" aria-hidden="true" />
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
                      <span className="mb-5 flex h-12 w-12 items-center justify-center border-2 border-fl-red-dark text-fl-red-dark">
                        <Check size={22} aria-hidden="true" />
                      </span>
                      <h3 className="font-fl-heading text-2xl font-black uppercase tracking-tight text-fl-ink">
                        Thank you, {contact.name.split(" ")[0] || "friend"}.
                      </h3>
                      <p className="mt-3 max-w-sm font-fl-body text-sm leading-relaxed text-fl-muted">
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
                      <h3 className="font-fl-heading text-xl font-black uppercase tracking-tight text-fl-ink">
                        Where should we send your review?
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={nameId} className="font-fl-body text-sm font-semibold text-fl-ink">
                          Full name
                        </label>
                        <input
                          id={nameId}
                          type="text"
                          autoComplete="name"
                          required
                          value={contact.name}
                          onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                          className="h-12 border-2 border-fl-border-strong bg-fl-bg px-4 font-fl-body text-base text-fl-ink outline-none transition-colors focus-visible:border-fl-red-dark"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={emailId} className="font-fl-body text-sm font-semibold text-fl-ink">
                          Email address
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          autoComplete="email"
                          required
                          value={contact.email}
                          onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                          className="h-12 border-2 border-fl-border-strong bg-fl-bg px-4 font-fl-body text-base text-fl-ink outline-none transition-colors focus-visible:border-fl-red-dark"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={phoneId} className="font-fl-body text-sm font-semibold text-fl-ink">
                          Phone <span className="font-normal text-fl-muted">(optional)</span>
                        </label>
                        <input
                          id={phoneId}
                          type="tel"
                          autoComplete="tel"
                          value={contact.phone}
                          onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                          className="h-12 border-2 border-fl-border-strong bg-fl-bg px-4 font-fl-body text-base text-fl-ink outline-none transition-colors focus-visible:border-fl-red-dark"
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
                        <h3 className="font-fl-heading text-xl font-black uppercase tracking-tight text-fl-ink">
                          {currentQuestion.question}
                        </h3>
                        <p className="mt-1 font-fl-body text-sm text-fl-muted">{currentQuestion.helper}</p>

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
                                className={`flex min-h-[52px] items-center justify-between gap-3 border-b-2 border-fl-border px-1 py-3 text-left font-fl-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fl-red-dark ${
                                  selected ? "text-fl-red-dark" : "text-fl-ink hover:text-fl-red-dark"
                                }`}
                              >
                                {option.label}
                                <span
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center border-2 ${
                                    selected
                                      ? "border-fl-red-dark bg-fl-red-dark text-fl-bg"
                                      : "border-fl-border-strong text-transparent"
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
                <div className="flex items-center justify-between border-t-2 border-fl-ink px-8 py-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={stepIndex === 0}
                    className="border-b-2 border-transparent font-fl-body text-sm font-bold uppercase tracking-wide text-fl-ink hover:border-fl-red-dark hover:text-fl-red-dark disabled:cursor-not-allowed disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fl-red-dark"
                  >
                    Back
                  </button>

                  {isContactStep ? (
                    <button
                      type="button"
                      onClick={submitReview}
                      disabled={!canAdvance || status === "submitting"}
                      className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 border-2 border-fl-ink bg-fl-red-dark font-fl-body text-sm font-bold uppercase tracking-wide text-fl-bg shadow-[4px_4px_0_0_var(--color-fl-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-fl-ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-fl-ink)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fl-ink"
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
                      className="inline-flex h-12 min-w-[120px] items-center justify-center gap-1.5 border-2 border-fl-ink bg-fl-red-dark font-fl-body text-sm font-bold uppercase tracking-wide text-fl-bg shadow-[4px_4px_0_0_var(--color-fl-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-fl-ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-fl-ink)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fl-ink"
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
