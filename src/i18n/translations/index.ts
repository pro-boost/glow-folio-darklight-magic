import { Language, TranslationType } from "./types";
import { en } from "./en";
import { fr } from "./fr";

const translations: Record<Language, TranslationType> = {
  en,
  fr,
};

export function getTranslation(language: Language): TranslationType {
  return translations[language];
}

export * from "./types";
export { en } from "./en";
export { fr } from "./fr"; 