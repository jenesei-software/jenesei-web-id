import { AuthContextProps, AuthProviderProps } from '.'
import { ITokenData } from '@api/auth'
import { queryClient, queryKeys } from '@core/query'
import { AXIOS_LOCAL_STORAGE_AUTH } from '@providers/axios-provider'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext<AuthContextProps | null>(null)

/*
 * Authorization hook
 */
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

/*
 * Authorization Provider
 */
export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [tokenData, setTokenData] = useState<ITokenData | null>(null)
  const isAuthorized = !!tokenData?.token

  useEffect(() => {
    try {
      const tokenData = localStorage.getItem(AXIOS_LOCAL_STORAGE_AUTH)
      const tokenDataObj: ITokenData = tokenData && JSON.parse(tokenData)

      if (tokenDataObj) {
        setTokenData(tokenDataObj)
      }
    } catch {
      console.error('Error parsing JSON')
    }
  }, [])

  const saveToLocalStorage = (data: ITokenData) => {
    setTokenData(data)
    try {
      const serializedData = JSON.stringify(data)
      localStorage.setItem(AXIOS_LOCAL_STORAGE_AUTH, serializedData)
      console.log(
        `Object saved to localStorage with key: ${AXIOS_LOCAL_STORAGE_AUTH}`
      )
    } catch (error) {
      console.error('Error saving object to localStorage:', error)
    }
    Promise.all([
      queryClient.invalidateQueries({
        queryKey: [queryKeys.profile.profileData],
      }),
    ])
  }

  const delToLocalStorage = () => {
    setTokenData(null)
    localStorage.removeItem(AXIOS_LOCAL_STORAGE_AUTH)
  }
  return (
    <AuthContext.Provider
      value={{
        saveToLocalStorage,
        delToLocalStorage,
        isAuthorized,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
