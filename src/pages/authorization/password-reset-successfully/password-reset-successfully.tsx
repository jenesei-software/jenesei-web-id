import {
  PasswordResetSuccessfullyProps,
  PasswordResetSuccessfullyTitlesContainer,
} from '.'
import { IconValidate } from '@assets/icons/icon-validate'
import { ButtonBig } from '@components/button-big'
import { useGoToLink } from '@hooks/use-go-to-link'
import { ServicesWrapper } from '@pages/services'
import { StyledInterSB16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PasswordResetSuccessfully: FC<
  PasswordResetSuccessfullyProps
> = () => {
  const { t } = useTranslation('password-reset-successfully')
  const goToLink = useGoToLink()

  return (
    <ServicesWrapper>
      <PasswordResetSuccessfullyTitlesContainer>
        {IconValidate.Big.TrueColor()}
        <StyledInterSB16 color={theme.colors.black['100']}>
          {t('title-big')}
        </StyledInterSB16>
        <ButtonBig
          title={t('buttons.login')}
          onClick={() => goToLink('/authorization/sign-in')}
          type={'product'}
        />
      </PasswordResetSuccessfullyTitlesContainer>
    </ServicesWrapper>
  )
}
