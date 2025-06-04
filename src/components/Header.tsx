import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import useScrollSpy from "../hooks/use-scroll-spy"; // Import the hook
import { LanguageToggle } from "./LanguageToggle";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Use the custom hook to detect which section is in view
  const activeSectionFromScroll = useScrollSpy([
    "home",
    "about",
    "skills",
    "projects",
    "testimonials",
    "contact",
  ]);

  // Update active section based on scroll detection
  useEffect(() => {
    setActiveSection(activeSectionFromScroll);
  }, [activeSectionFromScroll]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Don't prevent default - let the hash update the URL
    const sectionId = href.split("#")[1];
    const element = document.getElementById(sectionId);
    if (element) {
      // Use setTimeout to ensure the hash is updated in the URL first
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-[0_0.1px_20px_rgba(99,102,241,0.2)]"
          : "bg-transparent shadow-[0_0.1px_20px_rgba(99,102,241,0.2)]"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="/#home"
          className="text-2xl font-bold font-mono"
          onClick={(e) => scrollToSection(e, "/#home")}
        >
          Mohamed<span className="text-primary">B.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors font-medium",
                (activeSection === link.href.split("#")[1] ||
                  (link.href === "/#home" && activeSection === "home")) &&
                  "text-primary"
              )}
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />
          <LanguageToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  closeMobileMenu();
                }}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors font-medium py-2",
                  (activeSection === link.href.split("#")[1] ||
                    (link.href === "/#home" && activeSection === "home")) &&
                    "text-primary"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
