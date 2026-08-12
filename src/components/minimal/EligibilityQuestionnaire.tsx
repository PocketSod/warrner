"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { questionnaireSteps } from "@/lib/data";

type Direction = 1 | -1;
type ContactInfo = { name: string; email: string; phone: string };

const TOTAL_STEPS = questionnaireSteps.length + 1;

export default function MinimalEligibilityQuestionnaire() {
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
    <section id="eligibility" className="border-b border-mn-border bg-mn-surface">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mn-body text-sm font-semibold text-mn-accent">03 — Eligibility</p>
            <h2 className="mt-4 font-mn-heading text-3xl font-bold tracking-tight text-mn-ink">
              See where you stand
            </h2>
            <p className="mt-4 font-mn-body text-sm leading-relaxed text-mn-muted">
              Two minutes, four questions. An attorney reviews every response
              personally.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-mn-border bg-mn-bg">
              {status !== "done" && (
                <div className="border-b border-mn-border px-8 pt-6">
                  <div className="mb-2 flex justify-between font-mn-body text-xs font-semibold uppercase tracking-wider text-mn-muted">
                    <span>Step {stepIndex + 1} / {TOTAL_STEPS}</span>
                    <span>{Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)}%</span>
                  </div>
                  <div
                    className="h-px w-full bg-mn-border"
                    role="progressbar"
                    aria-valuenow={stepIndex + 1}
                    aria-valuemin={1}
                    aria-valuemax={TOTAL_STEPS}
                    aria-label="Questionnaire progress"
                  >
                    <div
                      className="h-px bg-mn-accent transition-[width] duration-300 ease-out"
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
                      <span className="mb-5 flex h-12 w-12 items-center justify-center border border-mn-accent text-mn-accent">
                        <Check size={22} aria-hidden="true" />
                      </span>
                      <h3 className="font-mn-heading text-2xl font-bold text-mn-ink">
                        Thank you, {contact.name.split(" ")[0] || "friend"}.
                      </h3>
                      <p className="mt-3 max-w-sm font-mn-body text-sm leading-relaxed text-mn-muted">
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
                      <h3 className="font-mn-heading text-xl font-bold text-mn-ink">
                        Where should we send your review?
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={nameId} className="font-mn-body text-sm font-semibold text-mn-ink">
                          Full name
                        </label>
                        <input
                          id={nameId}
                          type="text"
                          autoComplete="name"
                          required
                          value={contact.name}
                          onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                          className="h-12 border border-mn-border-strong bg-mn-bg px-4 font-mn-body text-base text-mn-ink outline-none transition-colors focus-visible:border-mn-accent"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={emailId} className="font-mn-body text-sm font-semibold text-mn-ink">
                          Email address
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          autoComplete="email"
                          required
                          value={contact.email}
                          onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                          className="h-12 border border-mn-border-strong bg-mn-bg px-4 font-mn-body text-base text-mn-ink outline-none transition-colors focus-visible:border-mn-accent"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={phoneId} className="font-mn-body text-sm font-semibold text-mn-ink">
                          Phone <span className="font-normal text-mn-muted">(optional)</span>
                        </label>
                        <input
                          id={phoneId}
                          type="tel"
                          autoComplete="tel"
                          value={contact.phone}
                          onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                          className="h-12 border border-mn-border-strong bg-mn-bg px-4 font-mn-body text-base text-mn-ink outline-none transition-colors focus-visible:border-mn-accent"
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
                        <h3 className="font-mn-heading text-xl font-bold text-mn-ink">
                          {currentQuestion.question}
                        </h3>
                        <p className="mt-1 font-mn-body text-sm text-mn-muted">{currentQuestion.helper}</p>

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
                                className={`flex min-h-[52px] items-center justify-between gap-3 border-b border-mn-border px-1 py-3 text-left font-mn-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mn-accent ${
                                  selected ? "text-mn-accent" : "text-mn-ink hover:text-mn-accent"
                                }`}
                              >
                                {option.label}
                                <span
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                                    selected ? "border-mn-accent bg-mn-accent text-mn-bg" : "border-mn-border-strong text-transparent"
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
                <div className="flex items-center justify-between border-t border-mn-border px-8 py-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={stepIndex === 0}
                    className="font-mn-body text-sm font-semibold text-mn-ink underline decoration-mn-border-strong underline-offset-4 transition-colors hover:text-mn-accent disabled:cursor-not-allowed disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mn-accent"
                  >
                    Back
                  </button>

                  {isContactStep ? (
                    <button
                      type="button"
                      onClick={submitReview}
                      disabled={!canAdvance || status === "submitting"}
                      className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 border border-mn-ink bg-mn-ink font-mn-body text-sm font-semibold text-mn-bg transition-colors hover:bg-mn-accent hover:border-mn-accent disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mn-accent"
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
                      className="inline-flex h-12 min-w-[120px] items-center justify-center gap-1.5 border border-mn-ink bg-mn-ink font-mn-body text-sm font-semibold text-mn-bg transition-colors hover:bg-mn-accent hover:border-mn-accent disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mn-accent"
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
