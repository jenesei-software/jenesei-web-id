/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_TITLE: string
  readonly VITE_DEFAULT_DESCRIPTION: string
  readonly VITE_DEFAULT_SHORTNAME: string
  readonly VITE_DEFAULT_THEME_COLOR: string
  readonly VITE_BASE_URL: string
  readonly VITE_SOCKET_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
