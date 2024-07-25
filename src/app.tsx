import {
  GlobalStyles,
  JeneseiTheme,
  ProviderApp,
  TitleH1,
  TitleH6,
} from '@jenesei-software/jenesei-ui-react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

import { i18n } from '@assets/i18n'

import { queryClient } from '@core/query'

const defaultHeader = (
  <div
    style={{
      backgroundColor: 'lightblue',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH1>Header</TitleH1>
  </div>
)
const defaultFooter = (
  <div
    style={{
      backgroundColor: 'lightcoral',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH1>Footer</TitleH1>
  </div>
)
const defaultLeftSection = (
  <div
    style={{
      backgroundColor: 'lightgreen',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Left Section</TitleH6>
  </div>
)
const defaultRightSection = (
  <div
    style={{
      backgroundColor: 'lightyellow',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Right Section</TitleH6>
  </div>
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={JeneseiTheme}>
          <GlobalStyles />

          <ProviderApp
            defaultBgColor="black"
            isScrollOutlet={false}
            header={{
              component: defaultHeader,
              height: '80px',
              heightTablet: '60px',
              heightMobile: '40px',
            }}
            leftSection={{
              component: defaultLeftSection,
              width: '80px',
              widthTablet: '60px',
            }}
            rightSection={{
              component: defaultRightSection,
              width: '80px',
              widthTablet: '60px',
            }}
            footer={{
              component: defaultFooter,
              height: '80px',
              heightTablet: '60px',
              heightMobile: '40px',
            }}
          >
            Children
          </ProviderApp>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
