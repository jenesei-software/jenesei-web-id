import { PathnameAsLinksWrapper, WordLinkProps } from '.'
import { IconCurved } from '@assets/icons/icon-curved'
import { JeneseiTheme, SpanInterM14 } from 'jenesei-react-ui'
import React, { memo } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export const PathnameAsLinks: React.FC = () => {
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
        return <WordLink key={index} word={word} index={index} />
      })}
    </PathnameAsLinksWrapper>
  )
}

const WordLink: React.FC<WordLinkProps> = memo(
  ({ word, index }) => {
    const { t } = useTranslation('pages')

    return (
      <>
        {index > 0 && <IconCurved.ArrowRight2 />}
        <SpanInterM14
          color={
            index > 0
              ? JeneseiTheme.colors.black[80]
              : JeneseiTheme.colors.black[60]
          }
        >
          {t(word + '.title')}
        </SpanInterM14>
      </>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.word === nextProps.word
  }
)
