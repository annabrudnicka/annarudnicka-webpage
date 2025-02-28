import SkillsSection from "./components/Sections/SkillsSection";
import PortfolioSection from "./components/Sections/PortfolioSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import ContactSection from "./components/Sections/ContactSection";
import HomeSection from "./components/Sections/HomeSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main>
        <HomeSection />
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
