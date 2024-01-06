import { LoginAndSecurityProps } from '.'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurity: FC<LoginAndSecurityProps> = () => {
  const { t } = useTranslation('login-and-security')
  return <UserWrapper></UserWrapper>
}
