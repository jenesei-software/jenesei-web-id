import { FormSignUp } from '@jenesei-software/jenesei-ui-react'
import { CreateUserDto, usePostSSOAuthPreSignUp } from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'
import moment from 'moment'

import { store } from '@core/store'

export function AuthSignUp() {
  const navigate = useNavigate()

  const updateState = (createUser: CreateUserDto | null) => {
    store.setState((state) => {
      return {
        ...state,
        createUser: createUser,
      }
    })
  }

  const {
    mutate: mutatePostSSOAuthPreSignUp,
    isPending,
    isError,
  } = usePostSSOAuthPreSignUp({
    onSuccess: () => {
      navigate({ to: '/auth/check-your-email' })
    },
    onError: () => {
      updateState(null)
    },
  })

  return (
    <>
      <FormSignUp
        width="500px"
        onSignIn={() => navigate({ to: '/auth/sign-in' })}
        onSubmit={(props) => {
          mutatePostSSOAuthPreSignUp({
            path: { email: props.email },
          })
          updateState({
            nickname: props.nickname,
            email: props.email,
            dateOfBirth: moment(props.dateOfBirthday).format('DD.MM.YYYY'),
            password: props.currentPassword,
          })
        }}
        isLoading={isPending}
        isError={isError}
        onRestore={() => navigate({ to: '/auth/sign-in' })}
        onTermOfService={() => {}}
        onPrivacyPolicy={() => {}}
      />
    </>
  )
}
