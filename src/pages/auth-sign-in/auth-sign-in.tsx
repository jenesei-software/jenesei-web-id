import { FormSignIn, useAppContext } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, usePostSSOAuthSignIn } from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'

import { queryClient } from '@core/query'

export function AuthSignIn() {
  const navigate = useNavigate()
  const { changePreview } = useAppContext()
  const {
    mutate: mutatePostSSOSignIn,
    isPending,
    isError
  } = usePostSSOAuthSignIn({
    onSuccess: () => {
      changePreview({ isShow: true })
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [queryKeys.sso.profile]
        })
      ])
    },
    onError: () => {
      console.log('error')
    }
  })
  return (
    <>
      <FormSignIn
        width="500px"
        onSubmit={async (props) => {
          await mutatePostSSOSignIn({
            body: {
              nickname: props.nickname,
              password: props.password
            }
          })
        }}
        isIncorrect={isError}
        isLoadingAuthApp={false}
        isLoadingBiometry={false}
        isLoadingLogin={isPending}
        isLoadingPasskey={false}
        isLoadingQR={false}
        onForgot={() => navigate({ to: '/auth/forgot-password' })}
        onSignUp={() => navigate({ to: '/auth/sign-up' })}
        isError={false}
        onRestore={() => {}}
      />
    </>
  )
}
