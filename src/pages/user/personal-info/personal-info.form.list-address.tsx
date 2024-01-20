import { IconCurved } from '@assets/icons/icon-curved'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { ButtonBorderShort } from '@components/button-border/short'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import { useInputString } from '@hooks/inputs/use-input-string'
import { StyledInterB16 } from '@styles/fonts/inter'
import {
  FrameColumnGap180,
  FrameColumnGap250,
  FrameColumnGap300,
  FrameRowGap,
  FrameRowWrapGap,
  UserLine,
} from '@styles/pages'
import { theme } from '@styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormListAddress: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'list-address' })
  const { InputString: InputFirstEmail } = useInputString({
    placeholder: t('inputs.address'),
    noSpaces: true,
    readOnly: true,
    initialValue: '5230 Penfield Ave, Woodland Hills, CA 91364, США',
  })
  const { InputString: InputSecondEmail } = useInputString({
    placeholder: t('inputs.address'),
    noSpaces: true,
    readOnly: true,
    initialValue: 'Vía Ote., San Diego, CA 92173, США',
  })
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          {InputFirstEmail}
        </FrameColumnGap300>
        <FrameColumnGap250 mediaMaxWidth={theme.size.mobile}>
          <StyledInterB16>{t('title-2')}</StyledInterB16>
          <FrameRowWrapGap>
            <ButtonPlaystationLong title={'Home'} checked={false} />
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <StyledInterB16>{t('title-3')}</StyledInterB16>
          <FrameRowWrapGap>
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
      </FrameRowGap>
      <FrameRowGap>
        <FrameColumnGap300>{InputSecondEmail}</FrameColumnGap300>
        <FrameColumnGap250 mediaMaxWidth={theme.size.mobile}>
          <FrameRowWrapGap>
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <FrameRowWrapGap>
          </FrameRowWrapGap>
        </FrameColumnGap180>
      </FrameRowGap>
      <ButtonBorderLong
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
