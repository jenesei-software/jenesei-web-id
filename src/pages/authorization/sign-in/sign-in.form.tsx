import { SignInInfoFormContainer, SignInProps, StyledStyledInterR16 } from '.'
import { ButtonBig } from '@components/button-big'
import { useInputString } from '@hooks/inputs/use-input-string'
import { useGoToLink } from '@hooks/use-go-to-link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SignInForm: FC<SignInProps> = () => {
  const { t } = useTranslation('sign-in')
  const goToLink = useGoToLink()
  const { value: valueEmailOrLogin, InputString: InputEmailOrLogin } =
    useInputString({
      placeholder: t('inputs.email-or-login'),
      noSpaces: true,
    })
  const { value: valuePassword, InputString: InputPassword } = useInputString({
    placeholder: t('inputs.password'),
    type: 'password',
    noSpaces: true,
  })
  console.log(valueEmailOrLogin, valuePassword)
  return (
    <SignInInfoFormContainer>
      {InputEmailOrLogin}
      {InputPassword}
      <StyledStyledInterR16
        onClick={() => goToLink('/authorization/password-forgot')}
      >
        {t('forgot-password')}
      </StyledStyledInterR16>
      <ButtonBig title={t('buttons.login')} type={'product'} />
    </SignInInfoFormContainer>
  )
}
