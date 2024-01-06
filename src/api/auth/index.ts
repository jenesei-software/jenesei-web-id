import { api } from '@api/base/api'
import { LoginRequest, LoginResponse } from './api.types'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginByToken: build.mutation<LoginResponse, LoginRequest>({
      query: ({ token }) => ({
        url: `/auth/from-core`,
        method: 'GET',
        params: { token },
      }),
      invalidatesTags: () => ['Profile'],
    }),
  }),
  overrideExisting: false,
})

export const { useLoginByTokenMutation } = authApi
