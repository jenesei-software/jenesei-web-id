import {
  PasswordResetInfoContainer,
  PasswordResetProps,
  PasswordResetTitlesContainer,
} from '.'
import { PasswordResetForm } from './password-reset.form'
import { FrameAuthorizationWrapper } from '@styles/components'
import { SpanInterB32, SpanInterR16 } from 'jenesei-react-ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PasswordReset: FC<PasswordResetProps> = () => {
  const { t } = useTranslation('password-reset')

  return (
    <FrameAuthorizationWrapper>
      <PasswordResetTitlesContainer>
        <SpanInterB32>{t('title-big')}</SpanInterB32>
        <SpanInterR16>{t('title-min')}</SpanInterR16>
      </PasswordResetTitlesContainer>
      <PasswordResetInfoContainer>
        <PasswordResetForm />
      </PasswordResetInfoContainer>
    </FrameAuthorizationWrapper>
  )
}
