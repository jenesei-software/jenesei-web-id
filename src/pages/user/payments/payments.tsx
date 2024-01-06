import { UserTitle } from '@components/user-title'
import { PaymentsProps } from '.'
import { UserLine, UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const Payments: FC<PaymentsProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <UserLine />
    </UserWrapper>
  )
}
