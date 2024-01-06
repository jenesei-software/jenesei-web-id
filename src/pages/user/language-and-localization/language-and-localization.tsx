import { LanguageAndLocalizationProps } from '.'
import { UserTitle } from '@components/user-title'
import { UserLine, UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const LanguageAndLocalization: FC<LanguageAndLocalizationProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <UserLine />
    </UserWrapper>
  )
}
