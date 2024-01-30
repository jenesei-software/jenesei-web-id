import { DefaultError, UseMutationOptions } from '@tanstack/react-query'

export type CustomHookMutationOptions<
  TData = unknown,
  TVariables = void,
  TError = DefaultError,
  TContext = unknown,
> = Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
