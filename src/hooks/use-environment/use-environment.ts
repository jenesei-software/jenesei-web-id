import { useMemo } from 'react'

export const useEnvironment = (): {
  title: string
  description: string
  name: string
  shortName: string
  themeColor: string
  mode: 'dev' | 'prod' | 'test'
} => {
  const title = import.meta.env.VITE_DEFAULT_TITLE
  const description = import.meta.env.VITE_DEFAULT_DESCRIPTION
  const name = import.meta.env.VITE_DEFAULT_SHORTNAME
  const shortName = import.meta.env.VITE_DEFAULT_NAME
  const themeColor = import.meta.env.VITE_DEFAULT_THEME_COLOR
  const mode = import.meta.env.VITE_NODE_ENV

  const data = useMemo(
    () => ({
      title: title,
      description: description,
      name: name,
      shortName: shortName,
      themeColor: themeColor,
      mode: mode
    }),
    [title, description, name, shortName, themeColor, mode]
  )
  return data
}
