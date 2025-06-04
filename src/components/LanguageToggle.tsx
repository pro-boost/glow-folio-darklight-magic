import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setLanguage(language === "en" ? "fr" : "en");
      setTimeout(() => {
        setIsAnimating(false);
      }, 200);
    }, 200);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleLanguage}
        className={cn(
          "rounded-full relative transition-all duration-200",
          isAnimating ? "scale-110" : "scale-100",
          className
        )}
        aria-label="Toggle language"
      >
        <Languages
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isAnimating ? "rotate-180" : "rotate-0"
          )}
        />
        <span className="sr-only">Toggle language</span>
        <span
          className={cn(
            "absolute -bottom-6 text-xs font-medium transition-all duration-200",
            "transform origin-top",
            isAnimating
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          )}
        >
          {language.toUpperCase()}
        </span>
      </Button>
    </div>
  );
}
