import { IconCurved } from '@assets/icons/icon-curved'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { useInputString } from '@hooks/inputs/use-input-string'
import { StyledInterB16 } from '@styles/fonts/inter'
import {
  FrameColumnGap180,
  FrameColumnGap300,
  FrameRowGap,
  FrameRowWrapGap,
  UserLine,
} from '@styles/pages'
import { theme } from '@styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormListSubLogin: React.FC = () => {
  const { t } = useTranslation('login-and-security', { keyPrefix: 'list-subLogin' })
  const { InputString: InputFirstEmail } = useInputString({
    placeholder: t('inputs.subLogin'),
    noSpaces: true,
    readOnly: true,
    initialValue: 'stassiepushka',
  })
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          {InputFirstEmail}
        </FrameColumnGap300>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <StyledInterB16>{t('title-2')}</StyledInterB16>
          <FrameRowWrapGap>
            <LogoServices.JeneseiTask.Min />
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
      </FrameRowGap>
      <ButtonBorderLong
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
