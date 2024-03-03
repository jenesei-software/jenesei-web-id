import { IconCurved } from '@assets/icons/icon-curved'
import { IconValidate } from '@assets/icons/icon-validate'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { ButtonBorderShort } from '@components/button-border/short'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import {
  FrameColumnGap180,
  FrameColumnGap250,
  FrameColumnGap300,
  FrameColumnGap78Center,
  FrameRowGap,
  FrameRowWrapGap,
  UIUserLine,
} from '@styles/components'
import { InputString, JeneseiTheme, SpanInterB16 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormListPhone: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'list-phone' })
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <SpanInterB16>{t('title-1')}</SpanInterB16>
          <InputString
            theme="cloud"
            placeholder={t('inputs.phone')}
            readOnly
            value={'+7 (950) 429 19 70'}
          />
        </FrameColumnGap300>
        <FrameColumnGap250 $mediaMaxWidth={JeneseiTheme.screens.mobile.width}>
          <SpanInterB16>{t('title-2')}</SpanInterB16>
          <FrameRowWrapGap>
            <ButtonPlaystationLong
              icon={IconCurved.Lock}
              title={'General'}
              checked={true}
            />
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 $mediaMaxWidth={JeneseiTheme.screens.tablet.width}>
          <SpanInterB16>{t('title-3')}</SpanInterB16>
          <FrameRowWrapGap>
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
        <FrameColumnGap78Center>
          <SpanInterB16>{t('title-4')}</SpanInterB16>
          <IconValidate.Min.True />
        </FrameColumnGap78Center>
      </FrameRowGap>
      <ButtonBorderLong
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
