import { StyledAvatar } from './personal-info.styles'
import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import { UIUserLine } from '@styles/components'
import {
  FrameSpaceBetween,
  FrameColumnGap,
  FrameColumn,
  FrameOnlyBottom,
} from '@styles/components'
import { JeneseiTheme, SpanInterB20, SpanInterM16 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormPicture: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'picture' })

  return (
    <React.Fragment>
      <UIUserLine />
      <FrameSpaceBetween>
        <FrameColumnGap>
          <StyledAvatar />
          <FrameColumn>
            <SpanInterB20 color={JeneseiTheme.colors.black[80]}>
              {t('title-big')}
            </SpanInterB20>
            <SpanInterM16 color={JeneseiTheme.colors.black[50]}>
              {t('title-min')}
            </SpanInterM16>
          </FrameColumn>
        </FrameColumnGap>
        <FrameOnlyBottom>
          <ButtonPlaystationLong
            icon={IconCurved.Upload}
            title={t('buttons.upload')}
            checked={true}
          />
        </FrameOnlyBottom>
      </FrameSpaceBetween>
    </React.Fragment>
  )
}
