import { LanguageAndLocalizationProps } from '.'
import { LanguageAndLocalizationLanguage } from './language-and-localization.form.list-card'
import { UserTitle } from '@components/user-title'
import { FrameUserWrapper } from '@styles/components'
import { FC } from 'react'

export const LanguageAndLocalization: FC<LanguageAndLocalizationProps> = () => {
  return (
    <FrameUserWrapper>
      <UserTitle />
      <LanguageAndLocalizationLanguage />
    </FrameUserWrapper>
  )
}
