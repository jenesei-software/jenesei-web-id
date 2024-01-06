import { FC } from 'react'
import { PasswordForgotForm } from './password-forgot.form'
import {
  PasswordForgotInfoContainer,
  PasswordForgotProps,
  PasswordForgotTitlesContainer,
} from '.'
import { ServicesWrapper } from '@pages/services'
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { useTranslation } from 'react-i18next'

export const PasswordForgot: FC<PasswordForgotProps> = () => {
  const { t } = useTranslation('password-forgot')

  return (
    <ServicesWrapper>
      <PasswordForgotTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <StyledInterR16>{t('title-min')}</StyledInterR16>
      </PasswordForgotTitlesContainer>
      <PasswordForgotInfoContainer>
        <PasswordForgotForm />
      </PasswordForgotInfoContainer>
    </ServicesWrapper>
  )
}
