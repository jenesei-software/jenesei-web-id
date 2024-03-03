import {
  SignUpInfoContainer,
  SignUpInfoContinueContainer,
  SignUpProps,
  SignUpTitlesContainer,
  SignUpTitlesTwoContainer,
} from '.'
import { SignUpForm } from './sign-up.form'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBig } from '@components/button-big'
import { LineOR } from '@components/line-or'
import { useGoToLink } from '@hooks/use-go-to-link'
import { FrameAuthorizationWrapper } from '@styles/components'
import { UIInterR16OnClick } from '@styles/components'
import { SpanInterB32, SpanInterR16 } from 'jenesei-react-ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SignUp: FC<SignUpProps> = () => {
  const { t } = useTranslation('sign-up')
  const goToLink = useGoToLink()

  return (
    <FrameAuthorizationWrapper>
      <SignUpTitlesContainer>
        <SpanInterB32>{t('title-big')}</SpanInterB32>
        <SignUpTitlesTwoContainer>
          <SpanInterR16>{t('title-min')}</SpanInterR16>{' '}
          <UIInterR16OnClick onClick={() => goToLink('/authorization/sign-in')}>
            {t('title-min-2')}
          </UIInterR16OnClick>
        </SignUpTitlesTwoContainer>
      </SignUpTitlesContainer>
      <SignUpInfoContainer>
        <SignUpForm />
        <SignUpInfoContinueContainer>
          <LineOR />
          <ButtonBig
            title={t('buttons.continue-with-google')}
            icon={LogoServices.Google.Input}
            $variant={'border'}
          />
          <ButtonBig
            title={t('buttons.continue-with-apple')}
            icon={LogoServices.Apple.Input}
            $variant={'border'}
          />
        </SignUpInfoContinueContainer>
      </SignUpInfoContainer>
    </FrameAuthorizationWrapper>
  )
}
