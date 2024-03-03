import { getProfileUsername } from '@api/profile'
import { UIUserLine } from '@styles/components'
import { FrameColumnGap, FrameRowGapMediaColumn } from '@styles/components'
import { useQuery } from '@tanstack/react-query'
import { InputString, SpanInterB16 } from 'jenesei-react-ui'
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
          <SpanInterB16>{t('title-1')}</SpanInterB16>
          <InputString
            theme="cloud"
            value={dataProfileUsername?.username}
            placeholder={t('inputs.first-name')}
            readOnly
          />
        </FrameColumnGap>
        <FrameColumnGap>
          <SpanInterB16>{t('title-2')}</SpanInterB16>
          <InputString
            theme="cloud"
            placeholder={t('inputs.last-name')}
            readOnly
          />
        </FrameColumnGap>
      </FrameRowGapMediaColumn>
    </React.Fragment>
  )
}
