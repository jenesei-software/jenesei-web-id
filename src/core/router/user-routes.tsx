import { IconCurved } from '@assets/icons/icon-curved'
import { LanguageAndLocalization } from '@pages/user/language-and-localization'
import { LoginAndSecurity } from '@pages/user/login-and-security'
import { Payments } from '@pages/user/payments'
import { PersonalInfo } from '@pages/user/personal-info'

export interface IUserRoute {
  icon: () => JSX.Element
  title: string
  description: string
  to: string
  path: string
  key: string
  element: JSX.Element
}

export const UserRouts: IUserRoute[] = [
  {
    icon: IconCurved.Profile,
    title: 'personal-info.title',
    description: 'personal-info.description',
    to: '/user/personal-info',
    path: 'personal-info',
    key: 'personal-info',
    element: <PersonalInfo />,
  },
  {
    icon: IconCurved.Password,
    title: 'login-and-security.title',
    description: 'login-and-security.description',
    to: '/user/login-and-security',
    path: 'login-and-security',
    key: 'login-and-security',
    element: <LoginAndSecurity />,
  },
  {
    icon: IconCurved.Wallet,
    title: 'payments.title',
    description: 'payments.description',
    to: '/user/payments',
    path: 'payments',
    key: 'payments',
    element: <Payments />,
  },
  {
    icon: IconCurved.Voice2,
    title: 'language-and-localization.title',
    description: 'language-and-localization.description',
    to: '/user/language-and-localization',
    path: 'language-and-localization',
    key: 'language-and-localization',
    element: <LanguageAndLocalization />,
  },
]
