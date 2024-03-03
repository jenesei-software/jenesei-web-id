import { IJeneseiTheme } from 'jenesei-react-ui'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends IJeneseiTheme {}
}
