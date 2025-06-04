import { createContext, useContext, useEffect, useState } from "react";
import {
  Theme,
  ThemeProviderProps,
  ThemeProviderState,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  COLOR_STORAGE_KEYS,
} from "./theme-types";

const initialState: ThemeProviderState = {
  theme: DEFAULT_THEME,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = THEME_STORAGE_KEY,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Apply saved theme colors from localStorage
  useEffect(() => {
    const savedPrimaryColor = localStorage.getItem(COLOR_STORAGE_KEYS.primary);
    const savedSecondaryColor = localStorage.getItem(
      COLOR_STORAGE_KEYS.secondary
    );
    const savedAccentColor = localStorage.getItem(COLOR_STORAGE_KEYS.accent);

    if (savedPrimaryColor) {
      document.documentElement.style.setProperty(
        "--primary-color",
        savedPrimaryColor
      );
    }
    if (savedSecondaryColor) {
      document.documentElement.style.setProperty(
        "--secondary-color",
        savedSecondaryColor
      );
    }
    if (savedAccentColor) {
      document.documentElement.style.setProperty(
        "--accent-color",
        savedAccentColor
      );
    }
  }, []);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
