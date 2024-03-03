import { PasswordResetHookForm } from '.'
import { SignUpInfoFormContainer, SignUpProps } from '../sign-up'
import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonBig } from '@components/button-big'
import { useGoToLink } from '@hooks/use-go-to-link'
import { InputString } from 'jenesei-react-ui'
import { FC, useEffect, useReducer } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const PasswordResetForm: FC<SignUpProps> = () => {
  const { t } = useTranslation('password-reset')
  const goToLink = useGoToLink()
  const [isHide, toggle] = useReducer((checked) => !checked, false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<PasswordResetHookForm>()

  const onSubmit: SubmitHandler<PasswordResetHookForm> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (!isHide) {
      const timeoutId = setTimeout(() => {
        toggle()
      }, 2000)

      return () => clearTimeout(timeoutId)
    }
  }, [isHide])
  return (
    <SignUpInfoFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputString
        theme="cloud"
        placeholder={t('inputs.your-new-password')}
        type={isHide ? 'password' : 'text'}
        register={{
          ...register('password', {
            required: true,
            minLength: 8,
            maxLength: 44,
          }),
        }}
        postfixContent={{
          width: '40px',
          height: '40px',
          content: isHide ? <IconCurved.Hide /> : <IconCurved.Show />,
          onClick: () => {
            toggle()
          },
        }}
      />
      <InputString
        theme="cloud"
        placeholder={t('inputs.confirm-your-new-password')}
        type="password"
        register={{
          ...register('repeatPassword', {
            required: true,
            minLength: 8,
            maxLength: 44,
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Your passwords do no match'
              }
            },
          }),
        }}
      />
      <ButtonBig
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
        title={t('buttons.reset-password')}
        $variant={'product'}
      />
      <ButtonBig
        title={t('buttons.back-to-login')}
        onClick={() => goToLink('/authorization/sign-in')}
        $variant={'border'}
      />
    </SignUpInfoFormContainer>
  )
}
