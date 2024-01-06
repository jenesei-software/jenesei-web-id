import { SignUpInfoFormContainer, SignUpProps } from '../sign-up'
import { IconCurved } from '@assets/icons/icon-curved/icon-curved'
import { ButtonBig } from '@components/button-big'
import { useInputString } from '@hooks/inputs/use-input-string'
import { useGoToLink } from '@hooks/use-go-to-link'
import { FC, useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'

export const PasswordResetForm: FC<SignUpProps> = () => {
  const { t } = useTranslation('password-reset')
  const goToLink = useGoToLink()
  const [isHide, toggle] = useReducer((checked) => !checked, false)

  const { InputString: InputEmail } = useInputString({
    placeholder: t('inputs.your-new-password'),
    type: 'password',
    noSpaces: true,
  })
  const { InputString: InputRepeatPassword } = useInputString({
    placeholder: t('inputs.confirm-your-new-password'),
    type: isHide ? 'password' : 'text',
    noSpaces: true,
    icon: {
      value: isHide ? IconCurved.Hide : IconCurved.Show,
      onCLick: () => {
        toggle()
      },
    },
  })

  useEffect(() => {
    if (!isHide) {
      const timeoutId = setTimeout(() => {
        toggle()
      }, 2000)

      return () => clearTimeout(timeoutId)
    }
  }, [isHide])
  return (
    <SignUpInfoFormContainer>
      {InputEmail}
      {InputRepeatPassword}
      <ButtonBig title={t('buttons.reset-password')} type={'product'} />
      <ButtonBig
        title={t('buttons.back-to-login')}
        onClick={() => goToLink('/authorization/sign-in')}
        type={'border'}
      />
    </SignUpInfoFormContainer>
  )
}
