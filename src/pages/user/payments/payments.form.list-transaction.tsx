import { UIInterR16OnClick, UIUserLine } from '@styles/components'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PaymentsFormTransaction: React.FC = () => {
  const { t } = useTranslation('payments', { keyPrefix: 'transaction' })

  return (
    <React.Fragment>
      <UIUserLine />
      <UIInterR16OnClick>{t('title-1')}</UIInterR16OnClick>
    </React.Fragment>
  )
}
