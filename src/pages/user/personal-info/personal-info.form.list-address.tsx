import { IconCurved } from '@assets/icons/icon-curved'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { ButtonBorderShort } from '@components/button-border/short'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import {
  UIUserLine,
  FrameColumnGap180,
  FrameColumnGap250,
  FrameColumnGap300,
  FrameRowGap,
  FrameRowWrapGap,
} from '@styles/components'
import { InputString, JeneseiTheme, SpanInterB16 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormListAddress: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'list-address' })
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <SpanInterB16>{t('title-1')}</SpanInterB16>
          <InputString
            theme="cloud"
            placeholder={t('inputs.address')}
            readOnly
            value={'5230 Penfield Ave, Woodland Hills, CA 91364, США'}
          />
        </FrameColumnGap300>
        <FrameColumnGap250 $mediaMaxWidth={JeneseiTheme.screens.mobile.width}>
          <SpanInterB16>{t('title-2')}</SpanInterB16>
          <FrameRowWrapGap>
            <ButtonPlaystationLong title={'Home'} checked={false} />
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 $mediaMaxWidth={JeneseiTheme.screens.tablet.width}>
          <SpanInterB16>{t('title-3')}</SpanInterB16>
          <FrameRowWrapGap>
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
      </FrameRowGap>
      <FrameRowGap>
        <FrameColumnGap300>
          <InputString
            theme="cloud"
            placeholder={t('inputs.address')}
            readOnly
            value={'Vía Ote., San Diego, CA 92173, США'}
          />
        </FrameColumnGap300>
        <FrameColumnGap250 $mediaMaxWidth={JeneseiTheme.screens.mobile.width}>
          <FrameRowWrapGap>
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 $mediaMaxWidth={JeneseiTheme.screens.tablet.width}>
          <FrameRowWrapGap></FrameRowWrapGap>
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
