import { BrowserRouter } from "react-router-dom";
import { i18n } from "@assets/i18n";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "@core/store";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";
import { LayoutApp } from "@layouts/layout-app";
import { LoadingProvider } from "@providers/loading-provider";
import { LanguageProvider } from "@providers/language-provider";
import { AxiosProvider } from "@providers/axios-provider";
import { AuthProvider } from "@providers/auth-provider";
import { ProfileProvider } from "@providers/profile-provider";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AxiosProvider>
            <LoadingProvider>
              <ProfileProvider>
                <AuthProvider>
                  <BrowserRouter>
                    <LanguageProvider>
                      <LayoutApp />
                    </LanguageProvider>
                  </BrowserRouter>
                </AuthProvider>
              </ProfileProvider>
            </LoadingProvider>
          </AxiosProvider>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
