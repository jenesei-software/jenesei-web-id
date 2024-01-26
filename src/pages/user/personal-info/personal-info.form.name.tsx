import { Input } from '@components/input'
import { StyledUserLine } from '@styles/components'
import { FrameColumnGap, FrameRowGapMediaColumn } from '@styles/components'
import { StyledInterB16 } from '@styles/fonts/inter'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormName: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'name' })
  return (
    <React.Fragment>
      <StyledUserLine />
      <FrameRowGapMediaColumn>
        <FrameColumnGap>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <Input placeholder={t('inputs.first-name')} readOnly />
        </FrameColumnGap>
        <FrameColumnGap>
          <StyledInterB16>{t('title-2')}</StyledInterB16>
          <Input placeholder={t('inputs.last-name')} readOnly />
        </FrameColumnGap>
      </FrameRowGapMediaColumn>
    </React.Fragment>
  )
}
