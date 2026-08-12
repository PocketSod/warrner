import type { Metadata } from "next";
import EditorialNavbar from "@/components/editorial/Navbar";
import EditorialHero from "@/components/editorial/Hero";
import EditorialCorePractices from "@/components/editorial/CorePractices";
import EditorialEligibilityQuestionnaire from "@/components/editorial/EligibilityQuestionnaire";
import EditorialAttorneyProfile from "@/components/editorial/AttorneyProfile";
import EditorialTestimonials from "@/components/editorial/Testimonials";
import EditorialFooter from "@/components/editorial/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Editorial Design",
};

export default function EditorialDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-ed-bg text-ed-cream"
      style={{ fontFamily: "var(--font-ed-body)" }}
    >
      <EditorialNavbar />
      <main className="flex-1">
        <EditorialHero />
        <EditorialCorePractices />
        <EditorialEligibilityQuestionnaire />
        <EditorialAttorneyProfile />
        <EditorialTestimonials />
      </main>
      <EditorialFooter />
      <DesignToggle />
    </div>
  );
}
