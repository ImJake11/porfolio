import AboutMeSection from "./ui/AboutMeSection";
import HeroSection from "./ui/HeroSection";
import { Poppins } from "next/font/google";
import SkillsSection from "./ui/SkillsSection";
import ProjectsSection from "./ui/ProjectsSection";
import { Contact } from "lucide-react";
import ContactSection from "./ui/ContactSection";
import Footer from "./ui/Footer";

const poppins = Poppins({
  weight: ["500", "600", "700", "800", "900"],
  preload: true,
})
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
