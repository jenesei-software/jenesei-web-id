import {
  EmailCheckInfoContainer,
  EmailCheckProps,
  EmailCheckTitlesContainer,
} from '.'
import { ButtonBig } from '@components/button-big'
import { useGoToLink } from '@hooks/use-go-to-link'
import { FrameAuthorizationWrapper } from '@styles/components'
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const EmailCheck: FC<EmailCheckProps> = () => {
  const { t } = useTranslation('email-check')
  const goToLink = useGoToLink()

  return (
    <FrameAuthorizationWrapper>
      <EmailCheckTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <StyledInterR16>{t('title-min')}</StyledInterR16>
      </EmailCheckTitlesContainer>
      <EmailCheckInfoContainer>
        <StyledInterR16>{t('title-min-2')}</StyledInterR16>
        <ButtonBig title={t('buttons.resend-email')} variant={'product'} />
        <ButtonBig
          title={t('buttons.back-to-login')}
          onClick={() => goToLink('/authorization/sign-in')}
          variant={'border'}
        />
      </EmailCheckInfoContainer>
    </FrameAuthorizationWrapper>
  )
}
