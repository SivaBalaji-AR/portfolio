import React from "react";
import GridBackground from "./components/GridBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center">
      {/* Grid Background */}
      <GridBackground />

      {/* Main Content */}
      <div className="min-h-screen space-y-10 py-10 mt-[50px] z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection/>
        <ProjectsSection />
        <ContactSection />
      </div>

    </div>
  );
}

export default App;
