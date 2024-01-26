import { PaymentsProps } from '.'
import { PaymentsFormListCard } from './payments.form.list-card'
import { PaymentsFormListSubscriptions } from './payments.form.list-subscriptions'
import { PaymentsFormTransaction } from './payments.form.list-transaction'
import { UserTitle } from '@components/user-title'
import { FrameUserWrapper } from '@styles/components'
import { FC } from 'react'

export const Payments: FC<PaymentsProps> = () => {
  return (
    <FrameUserWrapper>
      <UserTitle />
      <PaymentsFormListSubscriptions />
      <PaymentsFormListCard />
      <PaymentsFormTransaction />
    </FrameUserWrapper>
  )
}
