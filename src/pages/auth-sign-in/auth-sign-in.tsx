import { FormSignIn, useAppContext } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, usePostSSOSignIn } from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'

import { queryClient } from '@core/query'

export function AuthSignIn() {
  const navigate = useNavigate()
  const { changePreview } = useAppContext()
  const { mutate: mutatePostSSOSignIn, isPending } = usePostSSOSignIn({
    onSuccess: () => {
      changePreview({ isShow: true })
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
        onSubmit={async (props) => {
          await mutatePostSSOSignIn({
            body: {
              nickname: props.nickname,
              password: props.password,
            },
          })
        }}
        isLoading={isPending}
        onForgot={() => navigate({ to: '/auth/forgot-password' })}
        onSignUp={() => navigate({ to: '/auth/sign-up' })}
        isError={false}
        onRestore={() => {}}
      />
    </>
  )
}
