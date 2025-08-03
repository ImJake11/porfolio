import AboutMeSection from "./ui/AboutMeSection";
import HeroSection from "./ui/HeroSection";
import SkillsSection from "./ui/SkillsSection";
import ProjectsSection from "./ui/ProjectsSection";
import { Contact } from "lucide-react";
import ContactSection from "./ui/ContactSection";
import Footer from "./ui/Footer";


export default function Home() {
  return (
    <div
      className={`w-screen h-screen bg-[var(--background)] flex flex-col overflow-x-hidden`}
    >
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
