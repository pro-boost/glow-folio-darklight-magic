import { useEffect, Suspense, lazy } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Lazy load sections
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ProjectsSection = lazy(
  () => import("@/components/sections/ProjectsSection")
);
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection")
);
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const TestimonialsSection = lazy(
  () => import("@/components/sections/TestimonialsSection")
);

// Loading component for sections
const SectionLoading = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-pulse w-full h-full bg-muted/20 rounded-lg"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Handle initial scroll to section based on URL hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    const handleHashChange = () => {
      handleHashScroll();
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section id="home">
          <Suspense fallback={<SectionLoading />}>
            <HeroSection />
          </Suspense>
        </section>

        <section id="about">
          <Suspense fallback={<SectionLoading />}>
            <AboutSection />
          </Suspense>
        </section>

        <section id="skills">
          <Suspense fallback={<SectionLoading />}>
            <SkillsSection />
          </Suspense>
        </section>

        <section id="projects">
          <Suspense fallback={<SectionLoading />}>
            <ProjectsSection />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<SectionLoading />}>
            <TestimonialsSection />
          </Suspense>
        </section>

        <section id="contact">
          <Suspense fallback={<SectionLoading />}>
            <ContactSection />
          </Suspense>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
