import { FormSignUp } from '@jenesei-software/jenesei-ui-react'
import {
  queryKeys,
  useAxiosWebId,
  usePostSSOSignUp,
} from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'
import moment from 'moment'

import { queryClient } from '@core/query'

export function AuthSignUp() {
  const { axiosInstance } = useAxiosWebId()
  const navigate = useNavigate()

  const { mutate: mutatePostSSOSignUp } = usePostSSOSignUp({
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
      <FormSignUp
        width="500px"
        variant="sign"
        axiosInstance={axiosInstance}
        onBack={() => navigate({ to: '/auth/sign-in' })}
        onSubmit={(props) => {
          mutatePostSSOSignUp({
            body: {
              nickname: props.login,
              email: props.email,
              dateOfBirth: moment(props.dateOfBirthday).format('DD.MM.YYYY'),
              password: props.currentPassword,
            },
          })
        }}
      />
    </>
  )
}
