import { LoginAndSecurityProps } from '.'
import { LoginAndSecurityFormListSubLogin } from './login-and-security.form.list-subLogin'
import { LoginAndSecurityFormLogin } from './login-and-security.form.login'
import { LoginAndSecurityFormPassword } from './login-and-security.form.password'
import { UserTitle } from '@components/user-title'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const LoginAndSecurity: FC<LoginAndSecurityProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <LoginAndSecurityFormLogin />
      <LoginAndSecurityFormListSubLogin />
      <LoginAndSecurityFormPassword />
    </UserWrapper>
  )
}
