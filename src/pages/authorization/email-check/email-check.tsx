import {
  EmailCheckInfoContainer,
  EmailCheckProps,
  EmailCheckTitlesContainer,
} from '.'
import { ButtonBig } from '@components/button-big'
import { useGoToLink } from '@hooks/use-go-to-link'
import { FrameAuthorizationWrapper } from '@styles/components'
import { SpanInterB32, SpanInterR16 } from 'jenesei-react-ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const EmailCheck: FC<EmailCheckProps> = () => {
  const { t } = useTranslation('email-check')
  const goToLink = useGoToLink()

  return (
    <FrameAuthorizationWrapper>
      <EmailCheckTitlesContainer>
        <SpanInterB32>{t('title-big')}</SpanInterB32>
        <SpanInterR16>{t('title-min')}</SpanInterR16>
      </EmailCheckTitlesContainer>
      <EmailCheckInfoContainer>
        <SpanInterR16>{t('title-min-2')}</SpanInterR16>
        <ButtonBig title={t('buttons.resend-email')} $variant={'product'} />
        <ButtonBig
          title={t('buttons.back-to-login')}
          onClick={() => goToLink('/authorization/sign-in')}
          $variant={'border'}
        />
      </EmailCheckInfoContainer>
    </FrameAuthorizationWrapper>
  )
}
