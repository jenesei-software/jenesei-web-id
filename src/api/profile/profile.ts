import { Profile, getProfileUsernameRequest } from '.'
import { axiosInstance } from '@api/axios'

export const profileApi = {
  getProfileUsername: (props: getProfileUsernameRequest) =>
    axiosInstance.get<Profile>(`profile/${props.path.username}`),
}
