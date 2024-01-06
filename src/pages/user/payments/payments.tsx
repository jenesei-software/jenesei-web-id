import { PaymentsProps } from '.'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Payments: FC<PaymentsProps> = () => {
  const { t } = useTranslation('payments')
  return <UserWrapper></UserWrapper>
}
