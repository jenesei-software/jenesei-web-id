import '@jenesei-software/jenesei-ui-react'

declare module '@jenesei-software/jenesei-ui-react' {
  export interface ValidCookieObject {
    access_token: string
    refresh_token: string
  }
  export interface ValidLocalStorageObject {
    access_token: string
    refresh_token: string
  }
}
