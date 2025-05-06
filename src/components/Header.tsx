import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isAdminPage = location.pathname === "/admin";

  useEffect(() => {
    // Handle scroll events for styling only (not for section detection)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Extract the current section from the path
    const currentPath =
      location.pathname === "/" ? "home" : location.pathname.substring(1);
    setActiveSection(currentPath);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-mono">
          Mohamed<span className="text-primary">B.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {!isAdminPage &&
            navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors font-medium",
                  (activeSection === link.href.substring(1) ||
                    (link.href === "/" && activeSection === "home")) &&
                    "text-primary"
                )}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          {isAdminPage && (
            <Link
              to="/"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Back to Site
            </Link>
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
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
            {!isAdminPage &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-foreground/80 hover:text-primary transition-colors font-medium py-2",
                    activeSection === link.href.substring(1) && "text-primary"
                  )}
                  onClick={() => {
                    handleNavClick(link.href);
                    closeMobileMenu();
                  }}
                >
                  {link.name}
                </a>
              ))}
            {isAdminPage && (
              <a
                href="/"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={closeMobileMenu}
              >
                Back to Site
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
