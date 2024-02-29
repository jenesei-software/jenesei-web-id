export interface ProviderAxiosProps {
  children: React.ReactNode
}

export interface ProviderContextProps {
  getFromLocalStorage<T>(key: string): T | null
  writeToLocalStorage<T>(key: string, value: T): void
  isAuth: boolean
}
