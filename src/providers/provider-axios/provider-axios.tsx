import {
  AXIOS_COOKIE_ACCESS,
  AXIOS_COOKIE_REFRESH,
  LOCAL_STORAGE_IS_AUTH,
  ProviderAxiosProps,
  ProviderContextProps,
} from '.'
import { authApi } from '@api/auth'
import { axiosInstance } from '@api/axios'
import { createContext, useContext, useState } from 'react'

const AxiosContext = createContext<ProviderContextProps | null>(null)

export const useAxios = () => {
  const context = useContext(AxiosContext)
  if (!context) {
    throw new Error('useAxios must be used within an ProviderAxios')
  }
  return context
}

export const ProviderAxios: React.FC<ProviderAxiosProps> = (props) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      if (error.response?.status === 401 && !originalRequest._retry) {
        try {
          if (getFromLocalStorage<boolean>(LOCAL_STORAGE_IS_AUTH)) {
            await authApi.postAuthRefresh()
            originalRequest._retry = true
            return axiosInstance(originalRequest)
          } else {
            handleLogout()
          }
        } catch (refreshError) {
          handleLogout()
          return Promise.reject(refreshError)
        }
      }
      return Promise.reject(error)
    }
  )
  function getFromLocalStorage<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key)
      return serializedValue ? JSON.parse(serializedValue) : null
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return null
    }
  }

  function removeFromLocalStorage(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }

  function writeToLocalStorage<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
      if (key === LOCAL_STORAGE_IS_AUTH && value === true) {
        setIsAuth(true)
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }
  const handleLogout = () => {
    removeFromLocalStorage(LOCAL_STORAGE_IS_AUTH)
    document.cookie = `name=<${AXIOS_COOKIE_ACCESS}>; expires=-1`
    document.cookie = `name=<${AXIOS_COOKIE_REFRESH}>; expires=-1`
  }

  return (
    <AxiosContext.Provider
      value={{ isAuth, getFromLocalStorage, writeToLocalStorage }}
    >
      {props.children}
    </AxiosContext.Provider>
  )
}
