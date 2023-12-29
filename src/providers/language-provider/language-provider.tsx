import { createContext, useCallback, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { LanguageContextProps, LanguageProviderProps } from ".";
import { availableLanguages } from "@assets/i18n";
import { SEARCH_PARAMS } from "@core/search-params";

const LanguageContext = createContext<LanguageContextProps | null>(null);

/**
 * Хук работы с языками
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

/**
 * Провайдер языка
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = (props) => {
  const { i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const langParam = searchParams.get(SEARCH_PARAMS.language);
    if (langParam) {
      i18n.changeLanguage(langParam).catch((error) => {
        console.error("Failed to change language:", error);
      });
    }
  }, [searchParams, i18n]);

  const changeLanguage = useCallback(
    (params: availableLanguages) => {
      setSearchParams((prevParams) => ({
        ...prevParams,
        [SEARCH_PARAMS.language]: params,
      }));
    },
    [setSearchParams]
  );

  return <LanguageContext.Provider value={{ changeLanguage }}>{props.children}</LanguageContext.Provider>;
};
