import { PersonalInfoProps } from '.'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfo: FC<PersonalInfoProps> = () => {
  const { t } = useTranslation('personal-info')
  return <UserWrapper>

  </UserWrapper>
}
