import {
  PasswordResetSuccessfullyProps,
  PasswordResetSuccessfullyTitlesContainer,
} from '.'
import { IconValidate } from '@assets/icons/icon-validate'
import { ButtonBig } from '@components/button-big'
import { useGoToLink } from '@hooks/use-go-to-link'
import { FrameAuthorizationWrapper } from '@styles/components'
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
    <FrameAuthorizationWrapper>
      <PasswordResetSuccessfullyTitlesContainer>
        <IconValidate.Big.True />
        <StyledInterSB16 color={theme.colors.black['100']}>
          {t('title-big')}
        </StyledInterSB16>
        <ButtonBig
          title={t('buttons.login')}
          onClick={() => goToLink('/authorization/sign-in')}
          variant={'product'}
        />
      </PasswordResetSuccessfullyTitlesContainer>
    </FrameAuthorizationWrapper>
  )
}
