import { LineOrWrapper, StyledLine } from '.'
import { StyledInterR16 } from '@styles/fonts/inter'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LineOR: React.FC = () => {
  const { t } = useTranslation('or')

  return (
    <LineOrWrapper>
      <StyledLine />
      <StyledInterR16>{t('default')}</StyledInterR16>
      <StyledLine />
    </LineOrWrapper>
  )
}
