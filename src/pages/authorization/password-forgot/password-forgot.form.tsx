import { PasswordForgotHookForm } from '.'
import { SignUpInfoFormContainer, SignUpProps } from '../sign-up'
import { ButtonBig } from '@components/button-big'
import { Input } from '@components/input'
import { isValidEmail } from '@functions/is-valid-email'
import { useGoToLink } from '@hooks/use-go-to-link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const PasswordForgotForm: FC<SignUpProps> = () => {
  const { t } = useTranslation('password-forgot')
  const goToLink = useGoToLink()
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<PasswordForgotHookForm>()

  const onSubmit: SubmitHandler<PasswordForgotHookForm> = (data) => {
    console.log(data)
    goToLink('/authorization/email-check')
  }

  return (
    <SignUpInfoFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={t('inputs.email')}
        type="email"
        register={{
          ...register('email', {
            required: true,
            minLength: 12,
            maxLength: 44,
            validate: isValidEmail,
          }),
        }}
      />
      <ButtonBig
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid}
        title={t('buttons.send')}
        type={'product'}
      />
      <ButtonBig
        title={t('buttons.back-to-login')}
        onClick={() => goToLink('/authorization/sign-in')}
        type={'border'}
      />
    </SignUpInfoFormContainer>
  )
}
