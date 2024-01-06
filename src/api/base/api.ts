import { config } from '@core/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: config.apiHost,
  prepareHeaders: (headers) => {
    // const token = (getState() as RootState).auth.token

    // if (token && !headers.has('authorization')) {
    //   headers.set('authorization', `Bearer ${token}`)
    // }
    return headers
  },
})

export const api = createApi({
  baseQuery: async (args, queryApi, extraOptions) => {
    // const { dispatch, getState } = queryApi
    const result = await baseQuery(args, queryApi, extraOptions)

    // const statusCode = ((result?.error as any)?.originalStatus as number) || 0

    // if (result.error && result.error.status === 401) {
    //   const refreshToken = (getState() as RootState).auth.refreshToken

    //   const refreshResult = await baseQuery(
    //     { url: '/auth/refresh', method: 'POST', body: { token: refreshToken } },
    //     queryApi,
    //     extraOptions,
    //   )
    //   if (refreshResult.data) {
    //     dispatch(setCredentials(refreshResult.data as LoginResponse))

    //     result = await baseQuery(args, queryApi, extraOptions)
    //   } else {
    //     dispatch(setCredentials({}))
    //   }
    // }
    return result
  },
  tagTypes: ['Profile'],
  endpoints: () => ({}),
})
