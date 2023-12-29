import { availableLanguages } from "@assets/i18n";

export interface LanguageProviderProps {
  children: React.ReactNode;
}

export interface LanguageContextProps {
  changeLanguage: (params: availableLanguages) => void
}

