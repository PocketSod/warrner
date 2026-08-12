import type { Metadata } from "next";
import BriefNavbar from "@/components/brief/Navbar";
import BriefHero from "@/components/brief/Hero";
import BriefCorePractices from "@/components/brief/CorePractices";
import BriefEligibilityQuestionnaire from "@/components/brief/EligibilityQuestionnaire";
import BriefAttorneyProfile from "@/components/brief/AttorneyProfile";
import BriefTestimonials from "@/components/brief/Testimonials";
import BriefFooter from "@/components/brief/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | The Brief Design",
};

export default function BriefDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-br-bg text-br-ink"
      style={{ fontFamily: "var(--font-br-body)" }}
    >
      <BriefNavbar />
      <main className="flex-1">
        <BriefHero />
        <BriefCorePractices />
        <BriefEligibilityQuestionnaire />
        <BriefAttorneyProfile />
        <BriefTestimonials />
      </main>
      <BriefFooter />
      <DesignToggle />
    </div>
  );
}
