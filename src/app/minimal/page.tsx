import type { Metadata } from "next";
import MinimalNavbar from "@/components/minimal/Navbar";
import MinimalHero from "@/components/minimal/Hero";
import MinimalCorePractices from "@/components/minimal/CorePractices";
import MinimalEligibilityQuestionnaire from "@/components/minimal/EligibilityQuestionnaire";
import MinimalAttorneyProfile from "@/components/minimal/AttorneyProfile";
import MinimalTestimonials from "@/components/minimal/Testimonials";
import MinimalFooter from "@/components/minimal/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Minimal Design",
};

export default function MinimalDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-mn-bg text-mn-ink"
      style={{ fontFamily: "var(--font-mn-body)" }}
    >
      <MinimalNavbar />
      <main className="flex-1">
        <MinimalHero />
        <MinimalCorePractices />
        <MinimalEligibilityQuestionnaire />
        <MinimalAttorneyProfile />
        <MinimalTestimonials />
      </main>
      <MinimalFooter />
      <DesignToggle />
    </div>
  );
}
