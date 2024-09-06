import '@jenesei-software/jenesei-ui-react'
import { IJeneseiTheme } from '@jenesei-software/jenesei-ui-react'
import 'styled-components'

declare module '@jenesei-software/jenesei-ui-react' {
  export interface ValidCookieObject {
    auth_status: boolean
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends IJeneseiTheme {}
}
