import { StyledStyledInterR16 } from './payments.styles'
import { UserLine } from '@styles/pages'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PaymentsFormTransaction: React.FC = () => {
  const { t } = useTranslation('payments', { keyPrefix: 'transaction' })

  return (
    <React.Fragment>
      <UserLine />
      <StyledStyledInterR16>{t('title-1')}</StyledStyledInterR16>
    </React.Fragment>
  )
}
