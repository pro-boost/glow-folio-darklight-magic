
import { useEffect, useState } from "react";

export function useScrollSnap(options: {
  sectionIds: string[];
  offset?: number;
  threshold?: number;
}) {
  const { sectionIds, offset = 80, threshold = 0.4 } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    // Initialize active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the section currently in view
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // If we're near the top of a section (within threshold)
        if (
          scrollPosition >= sectionTop - sectionHeight * threshold &&
          scrollPosition < sectionBottom
        ) {
          return true;
        }
        return false;
      });
      
      // Update active section
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
        
        // Smooth scroll to section top
        window.scrollTo({
          top: currentSection.offsetTop - offset,
          behavior: "smooth"
        });
      }
    };
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset, threshold, activeSection]);
  
  return { activeSection };
}
