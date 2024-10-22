import {
  JeneseiGlobalStyles,
  JeneseiTheme,
  ProviderCookie,
  ProviderPermission,
  useRemovePreviewLoader
} from '@jenesei-software/jenesei-ui-react'
import { ProviderAxiosWebId } from '@jenesei-software/jenesei-web-id-api'
import { QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

import { i18n } from '@assets/i18n'

import { queryClient } from '@core/query'

import { getValidateCookieValue, validateCookieKeys } from '@functions/validate-cookie-value'

import { LayoutRouter } from '@layouts/layout-router'

import '@fontsource/inter/100.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import 'react-ripple-click/dist/index.css'
import 'react-toggle/style.css'

const baseURL = import.meta.env.VITE_BASE_URL || ''
const coreURL = import.meta.env.VITE_CORE_URL || ''
const availabilityCookieName = import.meta.env.VITE_AVAILABILITY_COOKIE_NAME || ''

function App() {
  useRemovePreviewLoader()

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={JeneseiTheme}>
          <JeneseiGlobalStyles />
          <ProviderAxiosWebId coreURL={coreURL} baseURL={baseURL} availabilityCookieName={availabilityCookieName}>
            <ProviderCookie
              validate={{
                validateKeys: validateCookieKeys,
                getValidateCookieValue
              }}
            >
              <ProviderPermission serviceWorkerPath="/service-worker.js">
                <LayoutRouter />
              </ProviderPermission>
            </ProviderCookie>
          </ProviderAxiosWebId>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
