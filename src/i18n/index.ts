// Re-export everything from provider and components
export { LanguageProvider, useLanguage } from "./provider/LanguageProvider";
export { LanguageToggle } from "./components/LanguageToggle";

// Only re-export types
export type { Language, TranslationType } from "./translations/types"; 