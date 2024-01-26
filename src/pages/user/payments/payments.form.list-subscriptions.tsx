import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonBorderLong } from '@components/button-border/long'
import { StyledUserLine } from '@styles/components'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PaymentsFormListSubscriptions: React.FC = () => {
  const { t } = useTranslation('payments', { keyPrefix: 'list-subscriptions' })
  return (
    <React.Fragment>
      <StyledUserLine />
      <ButtonBorderLong
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
