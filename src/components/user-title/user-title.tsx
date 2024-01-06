import {
  UserTitleStyledInterB36,
  UserTitleStyledInterM16,
  UserTitleWrapper,
} from '.'
import { theme } from '@styles/theme'
import React from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export const UserTitle: React.FC = () => {
  const { pathname } = useLocation()
  const { t } = useTranslation('pages')
  const words = useMemo(
    () => pathname.split('/').filter((word) => word !== ''),
    [pathname]
  )
  // const goToLink = useGoToLink()

  return (
    <UserTitleWrapper>
      <UserTitleStyledInterB36 color={theme.colors.black[80]}>
        {t(words[words.length - 1] + '.title')}
      </UserTitleStyledInterB36>
      <UserTitleStyledInterM16 color={theme.colors.black[50]}>
        {t(words[words.length - 1] + '.description')}
      </UserTitleStyledInterM16>
    </UserTitleWrapper>
  )
}
