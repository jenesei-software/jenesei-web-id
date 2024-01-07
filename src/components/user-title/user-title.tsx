import { UserTitleWrapper } from '.'
import { StyledInterB36Mobile, StyledInterM16Mobile } from '@styles/fonts/inter'
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
      <StyledInterB36Mobile color={theme.colors.black[80]}>
        {t(words[words.length - 1] + '.title')}
      </StyledInterB36Mobile>
      <StyledInterM16Mobile color={theme.colors.black[50]}>
        {t(words[words.length - 1] + '.description')}
      </StyledInterM16Mobile>
    </UserTitleWrapper>
  )
}
