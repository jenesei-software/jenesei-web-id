import { PersonalInfoProps } from '.'
import { UserTitle } from '@components/user-title'
import { UserLine, UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const PersonalInfo: FC<PersonalInfoProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <UserLine />
    </UserWrapper>
  )
}
