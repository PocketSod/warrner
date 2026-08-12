import type { Metadata } from "next";
import EnterpriseNavbar from "@/components/enterprise/Navbar";
import EnterpriseHero from "@/components/enterprise/Hero";
import EnterpriseCorePractices from "@/components/enterprise/CorePractices";
import EnterpriseEligibilityQuestionnaire from "@/components/enterprise/EligibilityQuestionnaire";
import EnterpriseAttorneyProfile from "@/components/enterprise/AttorneyProfile";
import EnterpriseTestimonials from "@/components/enterprise/Testimonials";
import EnterpriseFooter from "@/components/enterprise/Footer";
import DesignToggle from "@/components/DesignToggle";

export const metadata: Metadata = {
  title: "Warrner Immigration Law | Enterprise Design",
};

export default function EnterpriseDesign() {
  return (
    <div
      className="flex flex-1 flex-col bg-en-bg text-en-ink"
      style={{ fontFamily: "var(--font-en-body)" }}
    >
      <EnterpriseNavbar />
      <main className="flex-1">
        <EnterpriseHero />
        <EnterpriseCorePractices />
        <EnterpriseEligibilityQuestionnaire />
        <EnterpriseAttorneyProfile />
        <EnterpriseTestimonials />
      </main>
      <EnterpriseFooter />
      <DesignToggle />
    </div>
  );
}
