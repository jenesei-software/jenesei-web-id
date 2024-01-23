import { IconCurved } from '@assets/icons/icon-curved'
import { IconValidate } from '@assets/icons/icon-validate'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { ButtonBorderShort } from '@components/button-border/short'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import { Input } from '@components/input'
import { StyledInterB16 } from '@styles/fonts/inter'
import {
  FrameColumnGap180,
  FrameColumnGap250,
  FrameColumnGap300,
  FrameColumnGap78Center,
  FrameRowGap,
  FrameRowWrapGap,
  UserLine,
} from '@styles/pages'
import { theme } from '@styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormListPhone: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'list-phone' })
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <Input
            placeholder={t('inputs.phone')}
            readOnly
            value={'+7 (950) 429 19 70'}
          />
        </FrameColumnGap300>
        <FrameColumnGap250 mediaMaxWidth={theme.size.mobile}>
          <StyledInterB16>{t('title-2')}</StyledInterB16>
          <FrameRowWrapGap>
            <ButtonPlaystationLong
              icon={IconCurved.Lock}
              title={'General'}
              checked={true}
            />
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <StyledInterB16>{t('title-3')}</StyledInterB16>
          <FrameRowWrapGap>
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
        <FrameColumnGap78Center>
          <StyledInterB16>{t('title-4')}</StyledInterB16>
          <IconValidate.Min.True />
        </FrameColumnGap78Center>
      </FrameRowGap>
      <ButtonBorderLong
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
