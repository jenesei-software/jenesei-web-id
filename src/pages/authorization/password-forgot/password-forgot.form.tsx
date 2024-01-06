import { ButtonBig } from '@components/button-big'
import { FC } from 'react'
import { useGoToLink } from '@hooks/use-go-to-link'
import { useInputString } from '@hooks/inputs/use-input-string'
import { useTranslation } from 'react-i18next'
import { SignUpInfoFormContainer, SignUpProps } from '../sign-up'

export const PasswordForgotForm: FC<SignUpProps> = () => {
  const { t } = useTranslation('password-forgot')
  const goToLink = useGoToLink()

  const { InputString: InputEmail } = useInputString({
    placeholder: t('inputs.email'),
    type: 'email',
    noSpaces: true,
  })
  return (
    <SignUpInfoFormContainer>
      {InputEmail}
      <ButtonBig
        title={t('buttons.send')}
        onClick={() => goToLink('/authorization/email-check')}
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
