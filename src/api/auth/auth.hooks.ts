import { authApi, postAuthSignInRequest, postAuthSignUpRequest } from '.'
import { CustomHookMutationOptions } from '@api/axios'
import { useMutation } from '@tanstack/react-query'

/****************************************** Auth API *************************************************/
/*
 * Авторизация
 */
export const usePostAuthSignIn = (
  options?: CustomHookMutationOptions<object, postAuthSignInRequest>
) =>
  useMutation({
    mutationFn: (payload) => authApi.postAuthSignIn(payload).then((res) => res),
    ...options,
  })

/*
 * Регистрация
 */
export const usePostAuthSignUp = (
  options?: CustomHookMutationOptions<object, postAuthSignUpRequest>
) =>
  useMutation({
    mutationFn: (payload) => authApi.postAuthSignUp(payload).then((res) => res),
    ...options,
  })

/*
 * Выход
 */
export const usePostAuthSignOut = (
  options?: CustomHookMutationOptions<object, object>
) =>
  useMutation({
    mutationFn: () => authApi.postAuthSignOut().then((res) => res),
    ...options,
  })

/*
 * Обновить токены
 */
export const usePostAuthRefresh = (
  options?: CustomHookMutationOptions<object, object>
) =>
  useMutation({
    mutationFn: () => authApi.postAuthRefresh().then((res) => res),
    ...options,
  })
