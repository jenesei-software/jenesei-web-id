import {
  PasswordForgotInfoContainer,
  PasswordForgotProps,
  PasswordForgotTitlesContainer,
} from '.'
import { PasswordForgotForm } from './password-forgot.form'
import { FrameAuthorizationWrapper } from '@styles/components'
import { SpanInterB32, SpanInterR16 } from 'jenesei-react-ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PasswordForgot: FC<PasswordForgotProps> = () => {
  const { t } = useTranslation('password-forgot')

  return (
    <FrameAuthorizationWrapper>
      <PasswordForgotTitlesContainer>
        <SpanInterB32>{t('title-big')}</SpanInterB32>
        <SpanInterR16>{t('title-min')}</SpanInterR16>
      </PasswordForgotTitlesContainer>
      <PasswordForgotInfoContainer>
        <PasswordForgotForm />
      </PasswordForgotInfoContainer>
    </FrameAuthorizationWrapper>
  )
}
