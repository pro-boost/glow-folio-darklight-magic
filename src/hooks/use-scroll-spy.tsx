import { useState, useEffect } from "react";

// Custom hook for scroll spying and detecting which section is in view
export default function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map((id) => document.getElementById(id));

      // Check each section to see if it's in the viewport
      let currentSection = "";
      sections.forEach((section) => {
        if (section && isElementInViewport(section)) {
          currentSection = section.id;
        }
      });

      // Update active section
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= 0;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}
