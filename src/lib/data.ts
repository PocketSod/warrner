import type { LucideIcon } from "lucide-react";
import {
  Users,
  Briefcase,
  ShieldAlert,
  LifeBuoy,
  Award,
  ShieldCheck,
  Star,
} from "lucide-react";

export type TrustBadge = {
  icon: LucideIcon;
  label: string;
  sublabel: string;
};

export const trustBadges: TrustBadge[] = [
  { icon: Award, label: "AILA Member", sublabel: "American Immigration Lawyers Assoc." },
  { icon: Star, label: "Super Lawyers", sublabel: "Rated 2019 – 2026" },
  { icon: ShieldCheck, label: "99% Success Rate", sublabel: "Across 1,200+ filed cases" },
];

export type PracticeArea = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    icon: Users,
    title: "Family Green Cards",
    description:
      "Petitions for spouses, children, and parents — guided from filing to interview with meticulous care.",
  },
  {
    icon: Briefcase,
    title: "Employment Visas",
    description:
      "H-1B, L-1, O-1, and EB-series sponsorship strategy for professionals and the companies that need them.",
  },
  {
    icon: ShieldAlert,
    title: "Deportation Defense",
    description:
      "Aggressive representation in removal proceedings, bond hearings, and appeals before the immigration court.",
  },
  {
    icon: LifeBuoy,
    title: "Asylum",
    description:
      "Building the credible, well-documented case that protection claims deserve — with compassion and rigor.",
  },
];

export type QuestionnaireOption = {
  value: string;
  label: string;
};

export type QuestionnaireStep = {
  id: string;
  question: string;
  helper: string;
  options: QuestionnaireOption[];
};

export const questionnaireSteps: QuestionnaireStep[] = [
  {
    id: "goal",
    question: "What best describes your goal?",
    helper: "Select the path closest to your situation.",
    options: [
      { value: "family", label: "Reunite with family" },
      { value: "work", label: "Work or sponsor an employee" },
      { value: "defense", label: "Fight a removal or deportation case" },
      { value: "asylum", label: "Seek asylum or protection" },
    ],
  },
  {
    id: "status",
    question: "What is your current status?",
    helper: "This helps us route your case to the right attorney.",
    options: [
      { value: "outside", label: "Outside the United States" },
      { value: "visa", label: "In the U.S. on a valid visa" },
      { value: "undocumented", label: "In the U.S. without current status" },
      { value: "proceedings", label: "Already in immigration proceedings" },
    ],
  },
  {
    id: "timeline",
    question: "How soon do you need to act?",
    helper: "Deadlines change our recommended strategy.",
    options: [
      { value: "urgent", label: "Immediately — there is a hearing or deadline" },
      { value: "months", label: "Within the next few months" },
      { value: "planning", label: "Planning ahead, no fixed deadline" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  result: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They took an impossible situation — a denied petition and eight months of uncertainty — and turned it into an approval in eleven weeks. I finally have my family under one roof.",
    name: "M. Adeyemi",
    result: "Family Green Card Approved",
  },
  {
    quote:
      "Our engineering team needed three H-1B transfers handled without a single day of work authorization lapsing. Flawless execution, clear communication at every step.",
    name: "R. Chen",
    result: "Employment Visa — 3 for 3 Approved",
  },
  {
    quote:
      "I came to them after another firm mishandled my case and I was facing removal. They rebuilt the case from the ground up and won my cancellation of removal.",
    name: "S. Okafor",
    result: "Deportation Defense Won",
  },
  {
    quote:
      "The asylum process is terrifying to navigate alone. My attorney treated my story with the seriousness and care it deserved, and we prevailed at the first hearing.",
    name: "A. Petrova",
    result: "Asylum Granted",
  },
];
