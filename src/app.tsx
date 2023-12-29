import { AppRoutes } from "@core/router";
import { BrowserRouter } from "react-router-dom";
import { i18n } from "@assets/i18n";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "@core/store";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "./providers/language-provider";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <LanguageProvider>
              <AppRoutes />
            </LanguageProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
