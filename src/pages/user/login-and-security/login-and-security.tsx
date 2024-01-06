import { UserTitle } from '@components/user-title'
import { LoginAndSecurityProps } from '.'
import { UserLine, UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const LoginAndSecurity: FC<LoginAndSecurityProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <UserLine />
    </UserWrapper>
  )
}
