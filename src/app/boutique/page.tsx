import type { Metadata } from "next";
import BoutiqueNavbar from "@/components/boutique/Navbar";
import BoutiqueHero from "@/components/boutique/Hero";
import BoutiqueCorePractices from "@/components/boutique/CorePractices";
import BoutiqueEligibilityQuestionnaire from "@/components/boutique/EligibilityQuestionnaire";
import BoutiqueAttorneyProfile from "@/components/boutique/AttorneyProfile";
import BoutiqueTestimonials from "@/components/boutique/Testimonials";
import BoutiqueFooter from "@/components/boutique/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Boutique Design",
};

export default function BoutiqueDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-bq-bg text-bq-ink"
      style={{ fontFamily: "var(--font-bq-body)" }}
    >
      <BoutiqueNavbar />
      <main className="flex-1">
        <BoutiqueHero />
        <BoutiqueCorePractices />
        <BoutiqueEligibilityQuestionnaire />
        <BoutiqueAttorneyProfile />
        <BoutiqueTestimonials />
      </main>
      <BoutiqueFooter />
      <DesignToggle />
    </div>
  );
}
