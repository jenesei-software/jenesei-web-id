import { UserTitleWrapper } from '.'
import {
  JeneseiTheme,
  SpanInterB36Mobile,
  SpanInterM16Mobile,
} from 'jenesei-react-ui'
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
      <SpanInterB36Mobile color={JeneseiTheme.colors.black[80]}>
        {t(words[words.length - 1] + '.title')}
      </SpanInterB36Mobile>
      <SpanInterM16Mobile color={JeneseiTheme.colors.black[50]}>
        {t(words[words.length - 1] + '.description')}
      </SpanInterM16Mobile>
    </UserTitleWrapper>
  )
}
