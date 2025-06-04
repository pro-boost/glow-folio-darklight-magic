import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DEFAULT_COLORS, COLOR_STORAGE_KEYS } from "./theme-types";

const ThemeManager = () => {
  const [primaryColor, setPrimaryColor] = useState<string>(
    DEFAULT_COLORS.primary
  );
  const [secondaryColor, setSecondaryColor] = useState<string>(
    DEFAULT_COLORS.secondary
  );
  const [accentColor, setAccentColor] = useState<string>(DEFAULT_COLORS.accent);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    // Load saved colors from localStorage if they exist
    const savedPrimary = localStorage.getItem(COLOR_STORAGE_KEYS.primary);
    const savedSecondary = localStorage.getItem(COLOR_STORAGE_KEYS.secondary);
    const savedAccent = localStorage.getItem(COLOR_STORAGE_KEYS.accent);

    if (savedPrimary) setPrimaryColor(savedPrimary);
    if (savedSecondary) setSecondaryColor(savedSecondary);
    if (savedAccent) setAccentColor(savedAccent);
  }, []);

  // Track color changes
  useEffect(() => {
    setHasUnsavedChanges(true);
  }, [primaryColor, secondaryColor, accentColor]);

  const applyThemeColors = useCallback(() => {
    // Set CSS variables
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty(
      "--secondary-color",
      secondaryColor
    );
    document.documentElement.style.setProperty("--accent-color", accentColor);

    // Save to localStorage
    localStorage.setItem(COLOR_STORAGE_KEYS.primary, primaryColor);
    localStorage.setItem(COLOR_STORAGE_KEYS.secondary, secondaryColor);
    localStorage.setItem(COLOR_STORAGE_KEYS.accent, accentColor);

    // Reset unsaved changes flag
    setHasUnsavedChanges(false);

    toast({
      title: "Theme Updated",
      description: "Your theme colors have been updated successfully.",
    });
  }, [primaryColor, secondaryColor, accentColor, toast]);

  const resetToDefaults = useCallback(() => {
    setPrimaryColor(DEFAULT_COLORS.primary);
    setSecondaryColor(DEFAULT_COLORS.secondary);
    setAccentColor(DEFAULT_COLORS.accent);

    // Clear localStorage
    localStorage.removeItem(COLOR_STORAGE_KEYS.primary);
    localStorage.removeItem(COLOR_STORAGE_KEYS.secondary);
    localStorage.removeItem(COLOR_STORAGE_KEYS.accent);

    // Reset CSS variables
    document.documentElement.style.removeProperty("--primary-color");
    document.documentElement.style.removeProperty("--secondary-color");
    document.documentElement.style.removeProperty("--accent-color");

    // Reset unsaved changes flag
    setHasUnsavedChanges(false);

    toast({
      title: "Theme Reset",
      description: "Theme colors have been reset to defaults.",
    });
  }, [toast]);

  // Make the apply theme colors method accessible from parent
  useEffect(() => {
    const handleSaveAll = () => {
      if (hasUnsavedChanges) {
        applyThemeColors();
      }
    };

    // Listen for save-all-changes event
    window.addEventListener("save-all-changes", handleSaveAll);

    return () => {
      window.removeEventListener("save-all-changes", handleSaveAll);
    };
  }, [hasUnsavedChanges, applyThemeColors]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Theme Settings</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Color Palette</h3>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex mt-2 gap-4">
                  <div
                    className="h-10 w-10 rounded-full border cursor-pointer"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <Input
                    id="primary-color"
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                  <Input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-10 p-1 h-10 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex mt-2 gap-4">
                  <div
                    className="h-10 w-10 rounded-full border cursor-pointer"
                    style={{ backgroundColor: secondaryColor }}
                  ></div>
                  <Input
                    id="secondary-color"
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                  <Input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-10 p-1 h-10 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <Label htmlFor="accent-color">Accent Color</Label>
                <div className="flex mt-2 gap-4">
                  <div
                    className="h-10 w-10 rounded-full border cursor-pointer"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  <Input
                    id="accent-color"
                    type="text"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                  />
                  <Input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-10 p-1 h-10 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Theme Mode</h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Switch
                id="dark-mode"
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
              <Label htmlFor="dark-mode">Dark Mode</Label>
            </div>

            <div className="flex items-center space-x-4">
              <Switch
                id="system-theme"
                checked={theme === "system"}
                onCheckedChange={(checked) => checked && setTheme("system")}
              />
              <Label htmlFor="system-theme">Use System Theme</Label>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={applyThemeColors}>Apply Theme Settings</Button>
          <Button variant="outline" onClick={resetToDefaults}>
            Reset to Defaults
          </Button>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h4 className="font-medium mb-2">Preview</h4>
          <div className="grid grid-cols-3 gap-4">
            <div
              className="h-24 rounded-md flex items-center justify-center"
              style={{ backgroundColor: primaryColor, color: "#ffffff" }}
            >
              Primary
            </div>
            <div
              className="h-24 rounded-md flex items-center justify-center"
              style={{ backgroundColor: secondaryColor, color: "#000000" }}
            >
              Secondary
            </div>
            <div
              className="h-24 rounded-md flex items-center justify-center"
              style={{ backgroundColor: accentColor, color: "#ffffff" }}
            >
              Accent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeManager;
