import HeroSection from "@/components/HeroSection";
import EmergencySignup from "@/components/EmergencySignup";
import PainPointSolution from "@/components/PainPointSolution";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import FounderStory from "@/components/FounderStory";
import Testimonials from "@/components/Testimonials";
import ExplodingOffer from "@/components/ExplodingOffer";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EmergencySignup />
      <PainPointSolution />
      <HowItWorks />
      <ComparisonTable />
      <FounderStory />
      <Testimonials />
      <ExplodingOffer />
      <FAQ />
      <TrustBadges />
    </div>
  );
};

export default Index;
