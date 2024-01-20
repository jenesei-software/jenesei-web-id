import { PaymentsProps } from '.'
import { PaymentsFormListCard } from './payments.form.list-card'
import { PaymentsFormListSubscriptions } from './payments.form.list-subscriptions'
import { PaymentsFormTransaction } from './payments.form.list-transaction'
import { UserTitle } from '@components/user-title'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const Payments: FC<PaymentsProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <PaymentsFormListSubscriptions />
      <PaymentsFormListCard />
      <PaymentsFormTransaction />
    </UserWrapper>
  )
}
