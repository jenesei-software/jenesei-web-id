import { LoginAndSecurityProps } from '.'
import { LoginAndSecurityFormListSubLogin } from './login-and-security.form.list-subLogin'
import { LoginAndSecurityFormLogin } from './login-and-security.form.login'
import { LoginAndSecurityFormPassword } from './login-and-security.form.password'
import { UserTitle } from '@components/user-title'
import { FrameUserWrapper } from '@styles/components'
import { FC } from 'react'

export const LoginAndSecurity: FC<LoginAndSecurityProps> = () => {
  return (
    <FrameUserWrapper>
      <UserTitle />
      <LoginAndSecurityFormLogin />
      <LoginAndSecurityFormListSubLogin />
      <LoginAndSecurityFormPassword />
    </FrameUserWrapper>
  )
}
