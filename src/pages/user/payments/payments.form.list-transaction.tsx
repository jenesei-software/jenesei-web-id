import { StyledInterR16OnClick, StyledUserLine } from '@styles/components'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PaymentsFormTransaction: React.FC = () => {
  const { t } = useTranslation('payments', { keyPrefix: 'transaction' })

  return (
    <React.Fragment>
      <StyledUserLine />
      <StyledInterR16OnClick>{t('title-1')}</StyledInterR16OnClick>
    </React.Fragment>
  )
}
