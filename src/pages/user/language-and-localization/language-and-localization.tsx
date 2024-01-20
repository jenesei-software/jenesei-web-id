import { LanguageAndLocalizationProps } from '.'
import { LanguageAndLocalizationLanguage } from './language-and-localization.form.list-card'
import { UserTitle } from '@components/user-title'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'

export const LanguageAndLocalization: FC<LanguageAndLocalizationProps> = () => {
  return (
    <UserWrapper>
      <UserTitle />
      <LanguageAndLocalizationLanguage />
    </UserWrapper>
  )
}
