import { getProfileUsername } from '@api/profile'
import { InputDefault } from '@components/input-default'
import { UIUserLine } from '@styles/components'
import { FrameColumnGap, FrameRowGapMediaColumn } from '@styles/components'
import { StyledInterB16 } from '@styles/fonts/inter'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormName: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'name' })
  const { data: dataProfileUsername } = useQuery(
    getProfileUsername({
      path: {
        username: 'cyrilstrone',
      },
    })
  )
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGapMediaColumn>
        <FrameColumnGap>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <InputDefault
            value={dataProfileUsername?.username}
            placeholder={t('inputs.first-name')}
            readOnly
          />
        </FrameColumnGap>
        <FrameColumnGap>
          <StyledInterB16>{t('title-2')}</StyledInterB16>
          <InputDefault placeholder={t('inputs.last-name')} readOnly />
        </FrameColumnGap>
      </FrameRowGapMediaColumn>
    </React.Fragment>
  )
}
