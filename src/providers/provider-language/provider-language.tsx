import {
  LanguageAction,
  LanguageContextProps,
  LanguageProviderProps,
  LanguageProviderState,
} from '.'
import { availableLanguages } from '@assets/i18n'
import {
  I_LANG_VALUES,
  SEARCH_PARAMS,
  SEARCH_PARAMS_LANG,
} from '@core/search-params'
import { getMonthsTranslation } from '@functions/get-months-translation'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

const LanguageContext = createContext<LanguageContextProps | null>(null)

const languageReducer = (
  state: LanguageProviderState,
  action: LanguageAction
): LanguageProviderState => {
  switch (action.type) {
    case 'SET_DATEFNS_LOCALE':
      return {
        ...state,
        dateFnsLocale: action.payload,
        translated: {
          months: getMonthsTranslation(action.payload),
        },
      }
    default:
      return state
  }
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within an ProviderLanguage')
  }
  return context
}

export const ProviderLanguage: React.FC<LanguageProviderProps> = (props) => {
  const { i18n } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [state, dispatch] = useReducer(languageReducer, {
    dateFnsLocale: SEARCH_PARAMS_LANG.value.en['date-fns'],
    translated: {
      months: getMonthsTranslation(SEARCH_PARAMS_LANG.value.en['date-fns']),
    },
  })

  useEffect(() => {
    const langParam: string | null = searchParams.get(SEARCH_PARAMS.lang.title)
    if (
      langParam &&
      Object.keys(SEARCH_PARAMS.lang.value).includes(langParam)
    ) {
      const selectedLanguage =
        SEARCH_PARAMS.lang.value[langParam as keyof I_LANG_VALUES]
      i18n.changeLanguage(selectedLanguage.value).catch((error) => {
        console.error('Failed to change language:', error)
      })
      dispatch({
        type: 'SET_DATEFNS_LOCALE',
        payload: selectedLanguage['date-fns'],
      })
    }
  }, [searchParams, i18n])

  const changeLanguage = useCallback(
    (params: availableLanguages) => {
      setSearchParams((prevParams) => ({
        ...prevParams,
        [SEARCH_PARAMS.lang.title]: params,
      }))
    },
    [setSearchParams]
  )

  return (
    <LanguageContext.Provider
      value={{
        changeLanguage,
        state,
        lang: searchParams.get(SEARCH_PARAMS.lang.title),
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}
