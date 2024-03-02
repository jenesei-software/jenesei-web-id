import {
  AXIOS_COOKIE_ACCESS,
  AXIOS_COOKIE_REFRESH,
  ProviderAxiosProps,
  ProviderContextProps,
  ENUMLocalStorage,
  ENUMLocalStorageValue,
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
  const [isAuth, setIsAuth] = useState<boolean | null>(
    getFromLocalStorage(ENUMLocalStorage.isAuth)
  )
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      if (
        (error.response?.status === 401 || error.response?.status === 400) &&
        !originalRequest._retry
      ) {
        try {
          if (getFromLocalStorage(ENUMLocalStorage.isAuth)) {
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
  function getFromLocalStorage<T extends ENUMLocalStorage>(
    key: T
  ): ENUMLocalStorageValue[T] | null {
    try {
      const serializedValue = localStorage.getItem(key as string)
      const result = serializedValue && JSON.parse(serializedValue)
      if (result) {
        return result as ENUMLocalStorageValue[T]
      } else {
        return null
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return null
    }
  }

  function removeFromLocalStorage(key: ENUMLocalStorage): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }

  function writeToLocalStorage<T extends ENUMLocalStorage>(
    key: T,
    value: ENUMLocalStorageValue[T]
  ): void {
    try {
      const serializedValue = JSON.stringify(value)

      localStorage.setItem(key, serializedValue)

      if (key === ENUMLocalStorage.isAuth && value === true) {
        setIsAuth(true)
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }

  const handleLogout = () => {
    removeFromLocalStorage(ENUMLocalStorage.isAuth)
    removeFromLocalStorage(ENUMLocalStorage.username)
    document.cookie = `name=<${AXIOS_COOKIE_ACCESS}>; expires=-1`
    document.cookie = `name=<${AXIOS_COOKIE_REFRESH}>; expires=-1`
    setIsAuth(false)
  }

  return (
    <AxiosContext.Provider
      value={{ isAuth, handleLogout, getFromLocalStorage, writeToLocalStorage }}
    >
      {props.children}
    </AxiosContext.Provider>
  )
}
