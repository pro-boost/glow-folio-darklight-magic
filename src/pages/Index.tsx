
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useScrollSnap } from "@/hooks/use-scroll-snap";

const Index = () => {
  const sectionIds = ["home", "about", "skills", "projects", "testimonials", "contact"];
  const { activeSection } = useScrollSnap({ 
    sectionIds: sectionIds,
    offset: 80, // Adjust based on your header height
    threshold: 0.3 // Lower values make it trigger sooner
  });

  // Add CSS classes dynamically when section becomes active
  useEffect(() => {
    if (activeSection) {
      const section = document.getElementById(activeSection);
      if (section) {
        // Focus handling if needed
      }
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
