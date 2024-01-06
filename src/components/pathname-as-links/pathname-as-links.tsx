import { PathnameAsLinksWrapper } from '.'
import { IconCurved } from '@assets/icons/icon-curved'
import { StyledInterM14 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import React from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export const PathnameAsLinks: React.FC = () => {
  const { t } = useTranslation('pages')
  const { pathname } = useLocation()
  const words = useMemo(
    () => pathname.split('/').filter((word) => word !== ''),
    [pathname]
  )
  // const goToLink = useGoToLink()

  return (
    <PathnameAsLinksWrapper>
      {words.map((word, index) => {
        // const path = `/${words.slice(0, index + 1).join('/')}`
        return (
          <React.Fragment key={index}>
            {index > 0 && <IconCurved.ArrowRight2 />}
            <StyledInterM14
              color={
                index > 0 ? theme.colors.black[80] : theme.colors.black[60]
              }
            // onClick={() => goToLink(path)}
            >
              {t(word + '.title')}
            </StyledInterM14>
          </React.Fragment>
        )
      })}
    </PathnameAsLinksWrapper>
  )
}
