import { AXIOS_COOKIE_ACCESS, ProviderAxiosProps } from '.'
import { authApi } from '@api/auth'
import { axiosInstance } from '@api/axios'
import Cookies from 'js-cookie'
import { createContext } from 'react'

const AxiosContext = createContext<object | null>(null)

export const ProviderAxios: React.FC<ProviderAxiosProps> = (props) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      if (error.response?.status === 401 && !originalRequest._retry) {
        try {
          const isCookie = Cookies.get(AXIOS_COOKIE_ACCESS)

          if (isCookie) {
            await authApi.postAuthRefresh()
            originalRequest._retry = true
            return axiosInstance(originalRequest)
          } else {
            Cookies.remove(AXIOS_COOKIE_ACCESS)
          }
        } catch (refreshError) {
          Cookies.remove(AXIOS_COOKIE_ACCESS)
          return Promise.reject(refreshError)
        }
      }
      return Promise.reject(error)
    }
  )
  return (
    <AxiosContext.Provider value={{}}>{props.children}</AxiosContext.Provider>
  )
}
