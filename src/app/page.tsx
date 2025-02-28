import SkillsSection from "./components/Sections/SkillsSection";
import PortfolioSection from "./components/Sections/PortfolioSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import ContactSection from "./components/Sections/ContactSection";
import HomeSection from "./components/Sections/HomeSection";
import ScrollToHomeButton from "./components/ScrollToHomeButton";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main>
        <section id="home">
          <HomeSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <ScrollToHomeButton />
    </div>
  );
}
