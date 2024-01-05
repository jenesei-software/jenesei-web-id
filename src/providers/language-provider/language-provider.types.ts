import { availableLanguages } from "@assets/i18n";
import { LanguageProviderState } from ".";

export interface LanguageProviderProps {
  children: React.ReactNode;
}

export interface LanguageContextProps {
  changeLanguage: (params: availableLanguages) => void;
  state: LanguageProviderState;
}
