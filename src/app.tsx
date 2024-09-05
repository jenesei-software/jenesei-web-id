import {
  JeneseiGlobalStyles,
  JeneseiTheme,
  ProviderCookie,
  ProviderLocalStorage,
  ProviderPermission,
  useRemovePreviewLoader,
} from '@jenesei-software/jenesei-ui-react'
import { ProviderAxiosWebId } from '@jenesei-software/jenesei-web-id-api'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

import { i18n } from '@assets/i18n'

import { queryClient } from '@core/query'
import { router } from '@core/router'

import {
  getValidateCookieValue,
  validateCookieKeys,
} from '@functions/validate-cookie-value'
import {
  getValidateLocalStorageValue,
  validateLocalStorageKeys,
} from '@functions/validate-local-storage-value'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import 'react-ripple-click/dist/index.css'

const baseURL = import.meta.env.VITE_BASE_URL || ''

function App() {
  useRemovePreviewLoader()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={JeneseiTheme}>
          <JeneseiGlobalStyles />
          <ProviderAxiosWebId baseURL={baseURL} cookieAccessTokenName={'token'}>
            <ProviderCookie
              validate={{
                validateKeys: validateCookieKeys,
                getValidateCookieValue,
              }}
            >
              <ProviderLocalStorage
                validate={{
                  validateKeys: validateLocalStorageKeys,
                  getValidateLocalStorageValue,
                }}
              >
                <ProviderPermission>
                  <RouterProvider router={router} />
                </ProviderPermission>
              </ProviderLocalStorage>
            </ProviderCookie>
          </ProviderAxiosWebId>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
