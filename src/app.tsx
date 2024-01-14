import { i18n } from '@assets/i18n'
import { LayoutApp } from '@layouts/layout-app'
import { AuthProvider } from '@providers/auth-provider'
import { AxiosProvider } from '@providers/axios-provider'
import { LanguageProvider } from '@providers/language-provider'
import { LoadingProvider } from '@providers/loading-provider'
import { ProfileProvider } from '@providers/profile-provider'
import { queryClient } from '@providers/query-provider'
import { theme } from '@styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <AxiosProvider>
          <QueryClientProvider client={queryClient}>
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
          </QueryClientProvider>
        </AxiosProvider>
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
