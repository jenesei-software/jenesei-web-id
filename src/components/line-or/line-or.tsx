import { LineOrWrapper, Line } from '.'
import { SpanInterR16 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LineOR: React.FC = () => {
  const { t } = useTranslation('or')

  return (
    <LineOrWrapper>
      <Line />
      <SpanInterR16>{t('default')}</SpanInterR16>
      <Line />
    </LineOrWrapper>
  )
}
