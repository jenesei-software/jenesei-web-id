import {
  PasswordResetInfoContainer,
  PasswordResetProps,
  PasswordResetTitlesContainer,
} from '.'
import { PasswordResetForm } from './password-reset.form'
import { ServicesWrapper } from '@pages/services'
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PasswordReset: FC<PasswordResetProps> = () => {
  const { t } = useTranslation('password-reset')

  return (
    <ServicesWrapper>
      <PasswordResetTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <StyledInterR16>{t('title-min')}</StyledInterR16>
      </PasswordResetTitlesContainer>
      <PasswordResetInfoContainer>
        <PasswordResetForm />
      </PasswordResetInfoContainer>
    </ServicesWrapper>
  )
}
