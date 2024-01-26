import { AuthContextProps, AuthProviderProps } from '.'
import { useAxios } from '@providers/axios-provider'
import {
  IAuthTelegramProfile,
  ISignInProfile,
  ISignUpProfile,
  initialProfile,
  useProfile,
} from '@providers/profile-provider'
import { createContext, useCallback, useContext } from 'react'

const AuthContext = createContext<AuthContextProps | null>(null)

/**
 * Хук авторизации
 */
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

/**
 * Провайдер авторизации
 */
export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { axiosInstance } = useAxios()
  const { setProfile, getProfile } = useProfile()

  /**
   * Авторизация через Google
   */
  const googleProfile = axiosInstance.defaults.baseURL + '/auth/google'

  /**
   * Авторизация
   */
  const signInProfile = useCallback(async (params: ISignInProfile) => {
    return axiosInstance
      .post('/sign-in', { ...params })
      .then(() => {
        getProfile()
      })
      .catch((error) => {
        throw error
      })
  }, [])

  /**
   * Регистрация
   */
  const signUpProfile = useCallback(async (params: ISignUpProfile) => {
    return axiosInstance
      .post('/sign-up', {
        ...params,
      })
      .then(() => {
        getProfile()
      })
      .catch((error) => {
        throw error
      })
  }, [])

  /**
   * Выход
   */
  const logoutProfile = useCallback(async () => {
    return axiosInstance
      .get('/logout')
      .then(() => {
        document.cookie = 'name=<refresh_token>; expires=-1'
        document.cookie = 'name=<access_token>; expires=-1'
        setProfile(initialProfile)
      })
      .catch((error) => {
        throw error
      })
  }, [])

  /**
   * Привязать Telegram
   */
  const authTelegramProfile = useCallback(
    async (params: IAuthTelegramProfile) => {
      return axiosInstance
        .get(`/auth/telegram`, {
          params: {
            chatId: params.chatId,
          },
        })
        .then(() => {
          setProfile({ telegram_verified: true })
        })
        .catch((error) => {
          throw error
        })
    },
    []
  )

  /**
   * Отвязать Telegram
   */
  const unAuthTelegramProfile = useCallback(async () => {
    return axiosInstance
      .put(`/auth/telegram`)
      .then(() => {
        setProfile({ telegram_verified: false })
      })
      .catch((error) => {
        throw error
      })
  }, [])

  /**
   * Обновить токен доступа
   */
  const refreshProfile = useCallback(async () => {
    return await axiosInstance
      .get('/refresh')
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authTelegramProfile,
        unAuthTelegramProfile,
        signInProfile,
        signUpProfile,
        logoutProfile,
        googleProfile,
        refreshProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
