import { FormCheckYourEmail, useAppContext } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, usePostSSOAuthSignUp, usePostSSOAuthVerify } from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import moment from 'moment'
import { useLayoutEffect, useState } from 'react'

import { queryClient } from '@core/query'
import { store } from '@core/store'

export function AuthCheckYourEmail() {
  const createUser = useStore(store, (state) => state.createUser)
  const navigate = useNavigate()
  const { changePreview } = useAppContext()
  const [isError, setIsError] = useState<boolean>(false)
  const errorMessage = 'The code was not validated'

  useLayoutEffect(() => {
    console.log('createUser', createUser)
    if (!createUser) {
      navigate({ to: '/auth/sign-in' })
    }
  }, [createUser, navigate])

  const {
    mutate: mutatePostSSOSignUp,
    isPending: isPendingPostSSOSignUp,
    isError: isErrorPostSSOSignUp,
  } = usePostSSOAuthSignUp({
    onSuccess: () => {
      changePreview({ isShow: true })
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [queryKeys.sso.profile],
        }),
      ])
    },
    onError: () => {
      changePreview({ isShow: false })
    },
  })

  const {
    mutate: mutatePostSSOAuthVerify,
    isPending: isPendingPostSSOAuthVerify,
    isError: isErrorPostSSOAuthVerify,
    reset,
  } = usePostSSOAuthVerify({
    onSuccess: (value) => {
      if (value.value && createUser) {
        mutatePostSSOSignUp({ body: createUser })
      } else {
        setIsError(true)
      }
    },
    onMutate: () => {
      setIsError(false)
    },
  })

  return (
    <>
      <FormCheckYourEmail
        width="500px"
        isDisabledCodeAgain={false}
        isLoadingCodeAgain={false}
        date={moment()}
        minutes={10}
        onComplete={() => {}}
        onSubmit={(field) => {
          reset()
          if (createUser) mutatePostSSOAuthVerify({ body: { code: field.code, email: createUser?.email } })
        }}
        errorMessage={isError ? errorMessage : ''}
        isError={isErrorPostSSOSignUp || isErrorPostSSOAuthVerify}
        isLoading={isPendingPostSSOSignUp || isPendingPostSSOAuthVerify}
        onRestore={() => navigate({ to: '/auth/sign-in' })}
        email={createUser?.email ?? 'test@gmail.com'}
      />
    </>
  )
}
