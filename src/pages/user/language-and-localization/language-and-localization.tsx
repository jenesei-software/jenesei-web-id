import { LanguageAndLocalizationProps } from '.'
import { UserWrapper } from '@styles/pages'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageAndLocalization: FC<LanguageAndLocalizationProps> = () => {
  const { t } = useTranslation('language-and-localization')
  return <UserWrapper></UserWrapper>
}
