import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorePractices from "@/components/CorePractices";
import EligibilityQuestionnaire from "@/components/EligibilityQuestionnaire";
import AttorneyProfile from "@/components/AttorneyProfile";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DesignToggle from "@/components/DesignToggle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-ivory text-navy" style={{ fontFamily: "var(--font-lato)" }}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CorePractices />
        <EligibilityQuestionnaire />
        <AttorneyProfile />
        <Testimonials />
      </main>
      <Footer />
      <DesignToggle />
    </div>
  );
}
