import { useMemo } from 'react'

export const useEnvironment = (): {
  title: string
  description: string
  name: string
  shortName: string
  themeColor: string
  mode: 'development' | 'production'
} => {
  const title = import.meta.env.VITE_DEFAULT_TITLE as string
  const description = import.meta.env.VITE_DEFAULT_DESCRIPTION as string
  const name = import.meta.env.VITE_DEFAULT_SHORTNAME as string
  const shortName = import.meta.env.VITE_DEFAULT_NAME as string
  const themeColor = import.meta.env.VITE_DEFAULT_THEME_COLOR as string
  const mode = import.meta.env.VITE_NODE_ENV as 'development' | 'production'

  const data = useMemo(
    () => ({
      title: title,
      description: description,
      name: name,
      shortName: shortName,
      themeColor: themeColor,
      mode: mode,
    }),
    [title, description, name, shortName, themeColor, mode],
  )
  return data
}
