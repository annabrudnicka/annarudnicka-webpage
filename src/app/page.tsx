import PortfolioSection from "./components/Sections/PortfolioSection/PortfolioSection";
import ExperienceSection from "./components/Sections/ExperienceSection/ExperienceSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import HomeSection from "./components/Sections/HomeSection/HomeSection";
import ScrollToHomeButton from "./components/ScrollToHomeButton";
import TechnologiesSection from "./components/Sections/TechnologiesSection/TechnologiesSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main>
        <section id="home">
          <HomeSection />
        </section>
        <section id="skills">
          <TechnologiesSection />
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
