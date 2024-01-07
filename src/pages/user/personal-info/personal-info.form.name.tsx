import { useInputString } from '@hooks/inputs/use-input-string'
import { StyledInterB16 } from '@styles/fonts/inter'
import { FrameColumnGap, FrameRowGap, UserLine } from '@styles/pages'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormName: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'name' })
  const { InputString: InputFirstName } = useInputString({
    placeholder: t('inputs.first-name'),
    noSpaces: true,
  })
  const { InputString: InputLastName } = useInputString({
    placeholder: t('inputs.last-name'),
    noSpaces: true,
  })
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          {InputFirstName}
        </FrameColumnGap>
        <FrameColumnGap>
          <StyledInterB16>{t('title-2')}</StyledInterB16>
          {InputLastName}
        </FrameColumnGap>
      </FrameRowGap>
    </React.Fragment>
  )
}
