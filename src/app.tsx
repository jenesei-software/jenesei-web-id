import { i18n } from '@assets/i18n'
import { queryClient } from '@core/query'
import NiceModal from '@ebay/nice-modal-react'
import { LayoutAnimatedTransition } from '@layouts/layout-animated-transition'
import { LayoutApp } from '@layouts/layout-app'
import { AuthProvider } from '@providers/auth-provider'
import { AxiosProvider } from '@providers/axios-provider'
import { LanguageProvider } from '@providers/language-provider'
import { ProfileProvider } from '@providers/profile-provider'
import { theme } from '@styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <AxiosProvider>
            <ProfileProvider>
              <AuthProvider>
                <BrowserRouter>
                  <LanguageProvider>
                    <LayoutAnimatedTransition>
                      <NiceModal.Provider>
                        <LayoutApp />
                      </NiceModal.Provider>
                    </LayoutAnimatedTransition>
                  </LanguageProvider>
                </BrowserRouter>
              </AuthProvider>
            </ProfileProvider>
          </AxiosProvider>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
