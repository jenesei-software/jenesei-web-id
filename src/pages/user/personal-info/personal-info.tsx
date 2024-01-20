import { PersonalInfoProps } from '.'
import { PersonalInfoFormListAddress } from './personal-info.form.list-address'
import { PersonalInfoFormListEmail } from './personal-info.form.list-email'
import { PersonalInfoFormListPhone } from './personal-info.form.list-phone'
import { PersonalInfoFormName } from './personal-info.form.name'
import { PersonalInfoFormPicture } from './personal-info.form.picture'
import { UserTitle } from '@components/user-title'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const PersonalInfo: FC<PersonalInfoProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <PersonalInfoFormPicture />
      <PersonalInfoFormName />
      <PersonalInfoFormListEmail />
      <PersonalInfoFormListPhone />
      <PersonalInfoFormListAddress />
    </UserWrapper>
  )
}
