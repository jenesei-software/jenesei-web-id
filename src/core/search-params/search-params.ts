import en from 'date-fns/locale/en-US'
import ru from 'date-fns/locale/ru'

interface I_SEARCH_PARAMS_ITEM<T> {
  title: string
  value: T
}

export interface I_LANG_VALUES {
  ru: { value: string; 'date-fns': Locale }
  en: { value: string; 'date-fns': Locale }
}
interface I_SEARCH_PARAMS {
  lang: I_SEARCH_PARAMS_ITEM<I_LANG_VALUES>
}

export const SEARCH_PARAMS_LANG: I_SEARCH_PARAMS_ITEM<I_LANG_VALUES> = {
  title: 'lang',
  value: {
    ru: { value: 'ru', 'date-fns': ru },
    en: { value: 'en', 'date-fns': en },
  },
}
export const SEARCH_PARAMS: I_SEARCH_PARAMS = {
  lang: SEARCH_PARAMS_LANG,
}
