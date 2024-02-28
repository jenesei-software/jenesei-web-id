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
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SignUp: FC<SignUpProps> = () => {
  const { t } = useTranslation('sign-up')
  const goToLink = useGoToLink()

  return (
    <FrameAuthorizationWrapper>
      <SignUpTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <SignUpTitlesTwoContainer>
          <StyledInterR16>{t('title-min')}</StyledInterR16>{' '}
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
