import {
  JeneseiGlobalStyles,
  JeneseiTheme,
  ProviderCookie,
  ProviderLocalStorage,
  ProviderPermission,
  usePreventOverscroll,
} from '@jenesei-software/jenesei-ui-react'
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

function App() {
  usePreventOverscroll();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={JeneseiTheme}>
          <JeneseiGlobalStyles />
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
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
