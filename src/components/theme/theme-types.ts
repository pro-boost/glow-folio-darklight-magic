export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const DEFAULT_THEME: Theme = "system";
export const THEME_STORAGE_KEY = "portfolio-theme";

export const DEFAULT_COLORS = {
  primary: "#000000",
  secondary: "#e0e0e0",
  accent: "#0284c7",
} as const;

export const COLOR_STORAGE_KEYS = {
  primary: "theme-primary-color",
  secondary: "theme-secondary-color",
  accent: "theme-accent-color",
} as const; 