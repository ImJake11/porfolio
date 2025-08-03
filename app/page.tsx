import AboutMeSection from "./ui/AboutMeSection";
import HeroSection from "./ui/HeroSection";
import SkillsSection from "./ui/SkillsSection";
import ProjectsSection from "./ui/ProjectsSection";
import ContactSection from "./ui/ContactSection";
import Footer from "./ui/Footer";
import Dialog from "./ui/components/dialog";

export default function Home() {
  return (
    <div
      className={`w-screen h-screen bg-[var(--background)] flex flex-col overflow-x-hidden relative`}
    >
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Dialog />
    </div>
  );
}
