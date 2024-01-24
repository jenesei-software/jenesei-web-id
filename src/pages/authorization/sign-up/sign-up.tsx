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
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter'
import { AuthorizationWrapper, StyledInterR16OnClick } from '@styles/pages'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SignUp: FC<SignUpProps> = () => {
  const { t } = useTranslation('sign-up')
  const goToLink = useGoToLink()

  return (
    <AuthorizationWrapper>
      <SignUpTitlesContainer>
        <StyledInterB32>{t('title-big')}</StyledInterB32>
        <SignUpTitlesTwoContainer>
          <StyledInterR16>{t('title-min')}</StyledInterR16>{" "}
          <StyledInterR16OnClick
            onClick={() => goToLink('/authorization/sign-in')}
          >
            {t('title-min-2')}
          </StyledInterR16OnClick>
        </SignUpTitlesTwoContainer>
      </SignUpTitlesContainer>
      <SignUpInfoContainer>
        <SignUpForm />
        <SignUpInfoContinueContainer>
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
        </SignUpInfoContinueContainer>
      </SignUpInfoContainer>
    </AuthorizationWrapper>
  )
}
