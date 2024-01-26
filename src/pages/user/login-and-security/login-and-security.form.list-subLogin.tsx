import { IconCurved } from '@assets/icons/icon-curved'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { Input } from '@components/input'
import { StyledUserLine } from '@styles/components'
import {
  FrameColumnGap180,
  FrameColumnGap300,
  FrameRowGap,
  FrameRowWrapGap,
} from '@styles/components'
import { StyledInterB16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormListSubLogin: React.FC = () => {
  const { t } = useTranslation('login-and-security', {
    keyPrefix: 'list-subLogin',
  })
  return (
    <React.Fragment>
      <StyledUserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <Input
            placeholder={t('inputs.subLogin')}
            readOnly
            value={'stassiepushka'}
          />
        </FrameColumnGap300>
        <FrameColumnGap180 $mediaMaxWidth={theme.size.tablet}>
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
