import {
  SignInInfoContainer,
  SignInInfoContinueContainer,
  SignInTitlesContainer,
  SignInTitlesTwoContainer,
} from '.'
import { SignInForm } from './sign-in.form'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBig } from '@components/button-big'
import { LineOR } from '@components/line-or'
import { useGoToLink } from '@hooks/use-go-to-link'
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { AuthorizationWrapper, StyledInterR16OnClick } from '@styles/pages'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SignIn: FC = () => {
  const goToLink = useGoToLink()
  const { t } = useTranslation('sign-in')

  return (
    <AuthorizationWrapper>
      <SignInTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <SignInTitlesTwoContainer>
          <StyledInterR16>{t('title-min')}</StyledInterR16>{" "}
          <StyledInterR16OnClick
            onClick={() => goToLink('/authorization/sign-up')}
          >
            {t('title-min-2')}
          </StyledInterR16OnClick>
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
    </AuthorizationWrapper>
  )
}
