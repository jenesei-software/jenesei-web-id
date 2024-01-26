import {
  IProfile,
  ProfileContextProps,
  ProfileProviderProps,
  initialProfile,
} from '.'
import { useAxios } from '@providers/axios-provider'
import { createContext, useCallback, useContext, useReducer } from 'react'

const ProfileContext = createContext<ProfileContextProps | null>(null)

/**
 * Хук авторизации
 */
export const useProfile = () => {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const ProfileProvider: React.FC<ProfileProviderProps> = (props) => {
  const [profile, setProfile] = useReducer(
    (profile: IProfile, newDetails: Partial<IProfile>) => ({
      ...profile,
      ...newDetails,
    }),
    initialProfile
  )
  const { axiosInstance } = useAxios()

  const getProfile = useCallback(async (): Promise<void> => {
    return axiosInstance
      .get('/profile')
      .then(({ data }: { data: IProfile }) => {
        setProfile(data)
      })
      .catch((error) => {
        setProfile(initialProfile)
        throw error
      })
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        id: profile.id,
        getProfile,
        setProfile,
        profile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}
