import '@jenesei-software/jenesei-ui-react'

declare module '@jenesei-software/jenesei-ui-react' {
  export interface ValidCookieObject {
    token: number
    test: string
  }
  export interface ValidLocalStorageObject {
    token: number
    test: string
  }
}
