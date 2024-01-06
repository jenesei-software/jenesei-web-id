import {
  SignInForm,
  SignInInfoContainer,
  SignInInfoContinueContainer,
  SignInProps,
  SignInTitlesContainer,
  SignInTitlesTwoContainer,
  StyledStyledInterR16,
} from '.'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBig } from '@components/button-big'
import { LineOR } from '@components/line-or'
import { useGoToLink } from '@hooks/use-go-to-link'
import { ServicesWrapper } from '@pages/services'
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SignIn: FC<SignInProps> = () => {
  const { t } = useTranslation('sign-in')
  const goToLink = useGoToLink()
  return (
    <ServicesWrapper>
      <SignInTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <SignInTitlesTwoContainer>
          <StyledInterR16>{t('title-min')}</StyledInterR16>
          <StyledStyledInterR16
            onClick={() => goToLink('/authorization/sign-up')}
          >
            {t('title-min-2')}
          </StyledStyledInterR16>
        </SignInTitlesTwoContainer>
      </SignInTitlesContainer>
      <SignInInfoContainer>
        <SignInForm />
        <SignInInfoContinueContainer>
          <LineOR />
          <ButtonBig
            title={t('buttons.continue-with-google')}
            icon={LogoServices.Google.Input}
            type={'border'}
          />
          <ButtonBig
            title={t('buttons.continue-with-apple')}
            icon={LogoServices.Apple.Input}
            type={'border'}
          />
        </SignInInfoContinueContainer>
      </SignInInfoContainer>
    </ServicesWrapper>
  )
}
