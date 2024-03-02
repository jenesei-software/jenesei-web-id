import { Profile } from '@api/profile'

export interface ProviderAxiosProps {
  children: React.ReactNode
}

export interface ProviderContextProps {
  getFromLocalStorage<T extends ENUMLocalStorage>(
    key: T
  ): ENUMLocalStorageValue[T] | null
  writeToLocalStorage<T extends ENUMLocalStorage>(
    key: T,
    value: ENUMLocalStorageValue[T]
  ): void
  handleLogout: () => void
  isAuth: boolean | null
}

export enum ENUMLocalStorage {
  username = 'username',
  isAuth = 'isAuth',
}

export interface ENUMLocalStorageValue {
  [ENUMLocalStorage.isAuth]: boolean
  [ENUMLocalStorage.username]: Profile['username']
}
