import {
  PasswordForgotInfoContainer,
  PasswordForgotProps,
  PasswordForgotTitlesContainer,
} from '.'
import { PasswordForgotForm } from './password-forgot.form'
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { AuthorizationWrapper } from '@styles/pages'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PasswordForgot: FC<PasswordForgotProps> = () => {
  const { t } = useTranslation('password-forgot')

  return (
    <AuthorizationWrapper>
      <PasswordForgotTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <StyledInterR16>{t('title-min')}</StyledInterR16>
      </PasswordForgotTitlesContainer>
      <PasswordForgotInfoContainer>
        <PasswordForgotForm />
      </PasswordForgotInfoContainer>
    </AuthorizationWrapper>
  )
}
