import { languageList } from '@assets/i18n'
import { useSelect } from '@hooks/inputs/use-select'
import { useLanguage } from '@providers/language-provider'
import { UIUserLine } from '@styles/components'
import {
  FrameRowGap,
  FrameColumnGap,
  FrameColumnGap180,
} from '@styles/components'
import { StyledInterB16 } from '@styles/fonts/inter'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageAndLocalizationLanguage: React.FC = () => {
  const { t } = useTranslation('language-and-localization', {
    keyPrefix: 'language',
  })
  const { lang, changeLanguage } = useLanguage()

  const { InputSelect: InputLanguage } = useSelect({
    options: languageList,
    labelField: 'label',
    valueField: 'value',
    initialValue: [
      languageList.find((e) => e.value === lang) || languageList[0],
    ],
    type: 'volumetric',
  })

  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <FrameColumnGap180>
            <InputLanguage
              changeValue={(values) => {
                changeLanguage(values[0].value)
              }}
            />
          </FrameColumnGap180>
        </FrameColumnGap>
      </FrameRowGap>
    </React.Fragment>
  )
}
