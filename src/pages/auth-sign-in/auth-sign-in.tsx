import { FormSignIn } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, usePostSSOSignIn } from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'

import { queryClient } from '@core/query'

export function AuthSignIn() {
  const navigate = useNavigate()
  const { mutate: mutatePostSSOSignIn, isPending } = usePostSSOSignIn({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [queryKeys.sso.profile],
        }),
      ])
    },
    onError: () => {
      console.log('error')
    },
  })
  return (
    <>
      <FormSignIn
        width="500px"
        variant="sign"
        onSubmit={async (props) => {
          await mutatePostSSOSignIn({
            body: {
              nickname: props.nickname,
              password: props.password,
            },
          })
        }}
        isLoading={isPending}
        onForgot={() => console.log('Ну forgot и forgot')}
        onSignUp={() => navigate({ to: '/auth/sign-up' })}
      />
    </>
  )
}
