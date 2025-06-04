import { Language } from "@/i18n";
import { en } from "./languages/en";
import { fr } from "./languages/fr";

export const translations = {
  en,
  fr,
} as const;

export type { Language } from "@/i18n";
export type { TranslationType } from "@/i18n";

export const getTranslation = (language: Language) => translations[language]; 