import { FormSignUp, useAppContext } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, usePostSSOSignUp } from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'
import moment from 'moment'

import { queryClient } from '@core/query'

export function AuthSignUp() {
  const navigate = useNavigate()
  const { changePreview } = useAppContext()

  const { mutate: mutatePostSSOSignUp, isPending } = usePostSSOSignUp({
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
      <FormSignUp
        width="500px"
        onSignIn={() => navigate({ to: '/auth/sign-in' })}
        onSubmit={(props) => {
          mutatePostSSOSignUp({
            body: {
              nickname: props.nickname,
              email: props.email,
              dateOfBirth: moment(props.dateOfBirthday).format('DD.MM.YYYY'),
              password: props.currentPassword,
            },
          })
        }}
        isLoading={isPending}
        isError={false}
        onRestore={() => {}}
        onTermOfService={() => {}}
        onPrivacyPolicy={() => {}}
      />
    </>
  )
}
