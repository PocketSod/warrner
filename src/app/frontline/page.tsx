import type { Metadata } from "next";
import FrontlineNavbar from "@/components/frontline/Navbar";
import FrontlineHero from "@/components/frontline/Hero";
import FrontlineCorePractices from "@/components/frontline/CorePractices";
import FrontlineEligibilityQuestionnaire from "@/components/frontline/EligibilityQuestionnaire";
import FrontlineAttorneyProfile from "@/components/frontline/AttorneyProfile";
import FrontlineTestimonials from "@/components/frontline/Testimonials";
import FrontlineFooter from "@/components/frontline/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Frontline Design",
};

export default function FrontlineDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-fl-bg text-fl-ink"
      style={{ fontFamily: "var(--font-fl-body)" }}
    >
      <FrontlineNavbar />
      <main className="flex-1">
        <FrontlineHero />
        <FrontlineCorePractices />
        <FrontlineEligibilityQuestionnaire />
        <FrontlineAttorneyProfile />
        <FrontlineTestimonials />
      </main>
      <FrontlineFooter />
      <DesignToggle />
    </div>
  );
}
