import type { Metadata } from "next";
import InstitutionalNavbar from "@/components/institutional/Navbar";
import InstitutionalHero from "@/components/institutional/Hero";
import InstitutionalCorePractices from "@/components/institutional/CorePractices";
import InstitutionalEligibilityQuestionnaire from "@/components/institutional/EligibilityQuestionnaire";
import InstitutionalAttorneyProfile from "@/components/institutional/AttorneyProfile";
import InstitutionalTestimonials from "@/components/institutional/Testimonials";
import InstitutionalFooter from "@/components/institutional/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Institutional Design",
};

export default function InstitutionalDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-in-bg text-in-ink"
      style={{ fontFamily: "var(--font-in-body)" }}
    >
      <InstitutionalNavbar />
      <main className="flex-1">
        <InstitutionalHero />
        <InstitutionalCorePractices />
        <InstitutionalEligibilityQuestionnaire />
        <InstitutionalAttorneyProfile />
        <InstitutionalTestimonials />
      </main>
      <InstitutionalFooter />
      <DesignToggle />
    </div>
  );
}
