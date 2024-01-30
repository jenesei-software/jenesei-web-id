import {
  authApi,
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
import { CustomHookMutationOptions } from '@api/axios'
import { queryKeys } from '@core/query'
import { queryOptions, useMutation } from '@tanstack/react-query'

export const usePostAuthVerify = (
  options?: CustomHookMutationOptions<
    postAuthVerifyResponse,
    postAuthVerifyRequest
  >
) =>
  useMutation({
    mutationFn: (payload) =>
      authApi.postAuthVerify(payload).then((res) => res.data),
    ...options,
  })

export const useGetLicense = (
  options?: CustomHookMutationOptions<getLicenseResponse, getLicenseRequest>
) =>
  useMutation({
    mutationFn: (payload) =>
      authApi.getLicense(payload).then((res) => res.data),
    ...options,
  })

export const usePostAuthGenerate = (
  options?: CustomHookMutationOptions<
    postAuthGenerateResponse,
    postAuthGenerateRequest
  >
) =>
  useMutation({
    mutationFn: (payload) =>
      authApi.postAuthGenerate(payload).then((res) => res.data),
    ...options,
  })

export const usePostAuthCode = (
  options?: CustomHookMutationOptions<postAuthCodeResponse, postAuthCodeRequest>
) =>
  useMutation({
    mutationKey: [queryKeys.auth.tokenData],
    mutationFn: (payload) =>
      authApi.postAuthCode(payload).then((res) => res.data),
    ...options,
  })

export const usePostAuthTokenRefresh = (
  options?: CustomHookMutationOptions<
    postAuthTokenRefreshResponse,
    postAuthTokenRefreshRequest
  >
) =>
  useMutation({
    mutationFn: (payload) =>
      authApi.postAuthTokenRefresh(payload).then((res) => res.data),
    ...options,
  })

export const usePostLicense = (
  options?: CustomHookMutationOptions<postLicenseResponse, postLicenseRequest>
) =>
  useMutation({
    mutationFn: (payload) =>
      authApi.postLicense(payload).then((res) => res.data),
    ...options,
  })

export const getTokenData = () =>
  queryOptions({
    queryKey: [queryKeys.auth.tokenData],
  })
