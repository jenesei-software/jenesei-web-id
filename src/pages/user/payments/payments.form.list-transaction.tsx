import { StyledInterR16OnClick, UserLine } from '@styles/pages'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PaymentsFormTransaction: React.FC = () => {
  const { t } = useTranslation('payments', { keyPrefix: 'transaction' })

  return (
    <React.Fragment>
      <UserLine />
      <StyledInterR16OnClick>{t('title-1')}</StyledInterR16OnClick>
    </React.Fragment>
  )
}
