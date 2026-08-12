import type { Metadata } from "next";
import MeshBackground from "@/components/glass/MeshBackground";
import GlassNavbar from "@/components/glass/Navbar";
import GlassHero from "@/components/glass/Hero";
import GlassCorePractices from "@/components/glass/CorePractices";
import GlassEligibilityQuestionnaire from "@/components/glass/EligibilityQuestionnaire";
import GlassAttorneyProfile from "@/components/glass/AttorneyProfile";
import GlassTestimonials from "@/components/glass/Testimonials";
import GlassFooter from "@/components/glass/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Glass Design",
};

export default function GlassDesign() {
  return (
    <div
      className="relative flex flex-1 flex-col text-gl-ink"
      style={{ fontFamily: "var(--font-gl-body)" }}
    >
      <MeshBackground />
      <GlassNavbar />
      <main className="flex-1">
        <GlassHero />
        <GlassCorePractices />
        <GlassEligibilityQuestionnaire />
        <GlassAttorneyProfile />
        <GlassTestimonials />
      </main>
      <GlassFooter />
      <DesignToggle />
    </div>
  );
}
