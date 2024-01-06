import { availableLanguages } from '@assets/i18n'

export interface LanguageProviderProps {
  children: React.ReactNode
}

export interface LanguageContextProps {
  changeLanguage: (params: availableLanguages) => void
  state: LanguageProviderState
}

export interface LanguageProviderState {
  dateFnsLocale: Locale
  translated: { months: { value: number; label: string }[] }
}

export type LanguageAction = { type: 'SET_DATEFNS_LOCALE'; payload: Locale }
