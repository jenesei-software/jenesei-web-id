import { IconCardNetwork } from '@assets/icons/icon-card-network'
import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonBorderLong } from '@components/button-border/long'
import { useInputCards } from '@hooks/inputs/use-input-cards'
import { UIUserLine } from '@styles/components'
import {
  FrameRowWrapGap,
  FrameRowGap,
  FrameColumnGap,
} from '@styles/components'
import { StyledInterB16 } from '@styles/fonts/inter'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PaymentsFormListCard: React.FC = () => {
  const { t } = useTranslation('payments', { keyPrefix: 'list-card' })
  const { Cards } = useInputCards({
    value: [
      {
        cardIssuer: 'Тинькофф',
        cardNumberLast4: '4211',
        cardNetwork: IconCardNetwork.visa(),
        cardIcon: IconCardNetwork.tinkoff(),
        expirationDate: '04/25',
        colorBackground: '#2D2829',
        colorFont: '#FFFFFF',
      },
      {
        cardIssuer: 'Сбербанк',
        cardNumberLast4: '4211',
        cardNetwork: IconCardNetwork.mastercard(),
        cardIcon: IconCardNetwork.sberbank(),
        expirationDate: '04/25',
        colorBackground: '#1EB62F',
        colorFont: '#FFFFFF',
      },
    ],
  })
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <FrameRowWrapGap>{Cards}</FrameRowWrapGap>
        </FrameColumnGap>
      </FrameRowGap>
      <ButtonBorderLong
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
