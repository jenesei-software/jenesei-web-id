import { IconCurved } from '@assets/icons/icon-curved'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { UIUserLine } from '@styles/components'
import {
  FrameColumnGap180,
  FrameColumnGap300,
  FrameRowGap,
  FrameRowWrapGap,
} from '@styles/components'
import { InputString, JeneseiTheme, SpanInterB16 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormListSubLogin: React.FC = () => {
  const { t } = useTranslation('login-and-security', {
    keyPrefix: 'list-subLogin',
  })
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <SpanInterB16>{t('title-1')}</SpanInterB16>
          <InputString
            theme="cloud"
            placeholder={t('inputs.subLogin')}
            readOnly
            value={'stassiepushka'}
          />
        </FrameColumnGap300>
        <FrameColumnGap180 $mediaMaxWidth={JeneseiTheme.screens.tablet.width}>
          <SpanInterB16>{t('title-2')}</SpanInterB16>
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
