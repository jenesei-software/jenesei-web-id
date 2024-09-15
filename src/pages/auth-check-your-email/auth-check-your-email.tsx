import { FormCheckYourEmail, useAppContext } from '@jenesei-software/jenesei-ui-react'
import {
  queryKeys,
  usePostSSOAuthPreSignUp,
  usePostSSOAuthSignUp,
  usePostSSOAuthVerify,
} from '@jenesei-software/jenesei-web-id-api'
import { useNavigate } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import moment, { Moment } from 'moment'
import { useEffect, useLayoutEffect, useState } from 'react'

import { queryClient } from '@core/query'
import { store } from '@core/store'

export function AuthCheckYourEmail() {
  const createUser = useStore(store, (state) => state.createUser)
  const navigate = useNavigate()
  const { changePreview } = useAppContext()
  const [isError, setIsError] = useState<boolean>(false)
  const errorMessage = 'The code was not validated'

  const [attemptNumber, setAttemptNumber] = useState<number>(0)
  const [blockTime, setBlockTime] = useState<Moment>(moment().add(2, 'minutes'))
  const [isDisabledCodeAgain, setIsDisabledCodeAgain] = useState<boolean>(false)

  const updateState = () => {
    store.setState((state) => {
      return {
        ...state,
        createUser: state.createUser ? { ...state.createUser, dateOfSignUp: moment() } : null,
      }
    })
  }
  const clearState = () => {
    store.setState((state) => {
      return {
        ...state,
        createUser: null,
      }
    })
  }
  useLayoutEffect(() => {
    console.log('createUser', createUser)
    if (!createUser) {
      navigate({ to: '/auth/sign-in' })
    }
  }, [createUser, navigate])

  const {
    mutate: mutatePostSSOAuthPreSignUp,
    isPending: isPendingPostSSOAuthPreSignUp,
    isError: isErrorPostSSOAuthPreSignUp,
  } = usePostSSOAuthPreSignUp({
    onSuccess: () => {
      updateState()
    },
    onError: () => {
      clearState()
    },
  })

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
        mutatePostSSOSignUp({
          body: {
            dateOfBirth: createUser.dateOfBirth,
            email: createUser.email,
            nickname: createUser.nickname,
            password: createUser.password,
          },
        })
      } else {
        setIsError(true)
      }
    },
    onMutate: () => {
      setIsError(false)
    },
  })

  const onCodeAgain = () => {
    if (attemptNumber < 3) {
      reset()
      if (createUser?.email) {
        mutatePostSSOAuthPreSignUp({ path: { email: createUser?.email } })
        setAttemptNumber((prev) => prev + 1)
        setBlockTime(moment().add(2, 'minutes'))
      }
    }
  }

  const onSubmit = (field: { code: string }) => {
    reset()
    if (createUser) mutatePostSSOAuthVerify({ body: { code: field.code, email: createUser?.email } })
  }
  const onRestore = () => {
    reset()
    navigate({ to: '/auth/sign-in' })
  }

  const date = createUser?.dateOfSignUp ?? moment()

  console.log('attemptNumber', attemptNumber)
  console.log('blockTime', blockTime)
  console.log('isDisabledCodeAgain', isDisabledCodeAgain)

  useEffect(() => {
    if (attemptNumber < 2) {
      const timer = setInterval(() => {
        if (moment().isAfter(blockTime)) {
          setIsDisabledCodeAgain(false)
          clearInterval(timer)
        } else {
          setIsDisabledCodeAgain(true)
        }
      }, 1000)

      return () => clearInterval(timer)
    } else {
      setIsDisabledCodeAgain(true)
    }
  }, [attemptNumber, blockTime])

  return (
    <>
      <FormCheckYourEmail
        width="500px"
        isDisabledCodeAgain={isDisabledCodeAgain}
        isLoadingCodeAgain={isPendingPostSSOAuthPreSignUp}
        date={date}
        minutes={10}
        onComplete={() => {}}
        onCodeAgain={onCodeAgain}
        onSubmit={onSubmit}
        onRestore={onRestore}
        errorMessage={isError ? errorMessage : ''}
        isError={isErrorPostSSOSignUp || isErrorPostSSOAuthVerify || isErrorPostSSOAuthPreSignUp}
        isLoading={isPendingPostSSOSignUp || isPendingPostSSOAuthVerify}
        email={createUser?.email ?? 'test@gmail.com'}
        attemptNumber={attemptNumber + 1}
        isLastAttempt={attemptNumber > 1}
      />
    </>
  )
}
