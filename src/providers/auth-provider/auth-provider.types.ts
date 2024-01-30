import { ITokenData } from '@api/auth'

export interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthContextProps {
  isAuthorized: boolean
  saveToLocalStorage: (data: ITokenData) => void
  delToLocalStorage: () => void
}
