import { StyledAvatar } from './personal-info.styles'
import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import { StyledInterB20, StyledInterM16 } from '@styles/fonts/inter'
import {
  UserLine,
  FrameSpaceBetween,
  FrameColumnGap,
  FrameColumn,
  FrameOnlyBottom,
} from '@styles/pages'
import { theme } from '@styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormPicture: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'picture' })

  return (
    <React.Fragment>
      <UserLine />
      <FrameSpaceBetween>
        <FrameColumnGap>
          <StyledAvatar />
          <FrameColumn>
            <StyledInterB20 color={theme.colors.black[80]}>
              {t('title-big')}
            </StyledInterB20>
            <StyledInterM16 color={theme.colors.black[50]}>
              {t('title-min')}
            </StyledInterM16>
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
