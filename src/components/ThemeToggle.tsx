
import { Moon, Sun, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={cn("rounded-full", className)}
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        asChild
        className={cn("rounded-full", className)}
        aria-label="Admin settings"
      >
        <Link to="/admin">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Admin settings</span>
        </Link>
      </Button>
    </div>
  );
}
