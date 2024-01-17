import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNav } from "@/components/landing-nav";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNav />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
