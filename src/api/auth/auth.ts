import { postAuthSignInRequest, postAuthSignUpRequest } from '.'
import { axiosInstance } from '@api/axios'

export const authApi = {
  postAuthSignIn: (props: postAuthSignInRequest) =>
    axiosInstance.post('auth/sign-in', props.body),
  postAuthSignUp: (props: postAuthSignUpRequest) =>
    axiosInstance.post('auth/sign-up', props.body),
  postAuthSignOut: () => axiosInstance.post('auth/sign-out'),
  postAuthRefresh: () => axiosInstance.post('auth/refresh'),
}
