
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when user scrolls down enough
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-full opacity-0 shadow-md transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90",
        showButton && "opacity-100"
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};

export default BackToTop;
