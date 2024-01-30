import {
  postAuthVerifyRequest,
  postAuthVerifyResponse,
  getLicenseRequest,
  getLicenseResponse,
  postAuthCodeRequest,
  postAuthCodeResponse,
  postAuthGenerateRequest,
  postAuthGenerateResponse,
  postAuthTokenRefreshRequest,
  postAuthTokenRefreshResponse,
  postLicenseRequest,
  postLicenseResponse,
} from '.'
import { axiosInstance } from '@api/axios'

export const authApi = {
  postAuthVerify: (props: postAuthVerifyRequest) =>
    axiosInstance.post<postAuthVerifyResponse>(
      '/auth/verify',
      {},
      {
        params: props.params,
      }
    ),
  postAuthGenerate: (props: postAuthGenerateRequest) =>
    axiosInstance.post<postAuthGenerateResponse>('/auth/generate', props.body),
  postAuthCode: (props: postAuthCodeRequest) =>
    axiosInstance.post<postAuthCodeResponse>('/auth/code', props.body),
  postAuthTokenRefresh: (props: postAuthTokenRefreshRequest) =>
    axiosInstance.post<postAuthTokenRefreshResponse>(
      '/auth/token/refresh',
      props.body
    ),
  postLicense: (props: postLicenseRequest) =>
    axiosInstance.post<postLicenseResponse>('/license', props.body),
  getLicense: (props: getLicenseRequest) =>
    axiosInstance.get<getLicenseResponse>('/license', {
      params: props.params,
    }),
}
