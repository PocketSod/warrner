import type { Metadata } from "next";
import AtlasNavbar from "@/components/atlas/Navbar";
import AtlasHero from "@/components/atlas/Hero";
import AtlasCorePractices from "@/components/atlas/CorePractices";
import AtlasEligibilityQuestionnaire from "@/components/atlas/EligibilityQuestionnaire";
import AtlasAttorneyProfile from "@/components/atlas/AttorneyProfile";
import AtlasTestimonials from "@/components/atlas/Testimonials";
import AtlasFooter from "@/components/atlas/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Atlas Design",
};

export default function AtlasDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-at-bg text-at-ink"
      style={{ fontFamily: "var(--font-at-body)" }}
    >
      <AtlasNavbar />
      <main className="flex-1">
        <AtlasHero />
        <AtlasCorePractices />
        <AtlasEligibilityQuestionnaire />
        <AtlasAttorneyProfile />
        <AtlasTestimonials />
      </main>
      <AtlasFooter />
      <DesignToggle />
    </div>
  );
}
