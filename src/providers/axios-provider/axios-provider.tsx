import {
  AXIOS_LOCAL_STORAGE_AUTH,
  AxiosContextProps,
  AxiosProviderProps,
} from '.'
import {
  ITokenData,
  postAuthTokenRefreshRequest,
  postAuthTokenRefreshResponse,
} from '@api/auth'
import { axiosInstance } from '@api/axios'
import { useAuth } from '@providers/auth-provider'
import { createContext, useContext } from 'react'

const AxiosContext = createContext<AxiosContextProps | null>(null)

/*
 * Hook for working with axioms
 */
export const useAxios = () => {
  const context = useContext(AxiosContext)
  if (!context) {
    throw new Error('useAxios must be used within an AxiosProvider')
  }
  return context
}

/*
 * Provider axios
 */
export const AxiosProvider: React.FC<AxiosProviderProps> = (props) => {
  const { saveToLocalStorage } = useAuth()

  axiosInstance.interceptors.request.use((config) => {
    const tokenData = localStorage.getItem(AXIOS_LOCAL_STORAGE_AUTH)

    if (tokenData) {
      try {
        const tokenDataObj: ITokenData = JSON.parse(tokenData)
        const accessToken = tokenDataObj.token
        config.headers['Authorization'] = accessToken
          ? `Bearer ${accessToken}`
          : ''
      } catch {
        console.error('Error parsing JSON')
      }
    } else {
      console.error('Missing tokenData in localStorage')
    }

    return config
  })

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      if (error.response.status === 401) {
        try {
          const tokenData = localStorage.getItem(AXIOS_LOCAL_STORAGE_AUTH)
          const tokenDataObj: ITokenData = tokenData && JSON.parse(tokenData)
          const refreshToken = tokenDataObj && tokenDataObj.refreshToken

          if (refreshToken) {
            const response = await axiosInstance.post<
              postAuthTokenRefreshRequest,
              { data: postAuthTokenRefreshResponse }
            >(`/auth/token/refresh`, { token: refreshToken })

            if (response.data) {
              saveToLocalStorage(response.data)
              originalRequest._retry = true
              originalRequest.headers['Authorization'] =
                `Bearer ${response.data.token}`
            } else {
              localStorage.removeItem(AXIOS_LOCAL_STORAGE_AUTH)
            }
            return axiosInstance(error.config)
          } else {
            localStorage.removeItem(AXIOS_LOCAL_STORAGE_AUTH)
          }
        } catch (refreshError) {
          localStorage.removeItem(AXIOS_LOCAL_STORAGE_AUTH)
          return Promise.reject(refreshError)
        }
      }
    }
  )
  return (
    <AxiosContext.Provider value={{}}>{props.children}</AxiosContext.Provider>
  )
}
