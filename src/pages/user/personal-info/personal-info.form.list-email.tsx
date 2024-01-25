import { ListEmailAdd } from './modal/list-email-add'
import { IconCurved } from '@assets/icons/icon-curved'
import { IconValidate } from '@assets/icons/icon-validate'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { ButtonBorderShort } from '@components/button-border/short'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import { Input } from '@components/input'
import NiceModal from '@ebay/nice-modal-react'
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
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { EditType } from './modal/edit-type'

export const PersonalInfoFormListEmail: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'list-email' })
  const addEmailClickHandler = () => {
    NiceModal.show(ListEmailAdd)
  }
  const editTypeClickHandler = () => {
    NiceModal.show(EditType)
  }
  useEffect(() => {
    return () => {
      NiceModal.remove(ListEmailAdd)
      NiceModal.remove(EditType)
    }
  }, [])
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <Input
            placeholder={t('inputs.email')}
            readOnly
            value={'cyrilstrone@gmail.com'}
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
            <ButtonBorderShort type="border" icon={IconCurved.Plus} onClick={editTypeClickHandler}/>
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <StyledInterB16>{t('title-3')}</StyledInterB16>
          <FrameRowWrapGap>
            <LogoServices.JeneseiTask.Min />
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
        <FrameColumnGap78Center>
          <StyledInterB16>{t('title-4')}</StyledInterB16>
          <IconValidate.Min.True />
        </FrameColumnGap78Center>
      </FrameRowGap>
      <FrameRowGap>
        <FrameColumnGap300>
          <Input
            placeholder={t('inputs.email')}
            readOnly
            value={'kidvos@gmail.com'}
          />
        </FrameColumnGap300>
        <FrameColumnGap250 mediaMaxWidth={theme.size.mobile}>
          <FrameRowWrapGap>
            <ButtonPlaystationLong title={'Home'} checked={false} />
            <ButtonBorderShort type="border" icon={IconCurved.Plus} onClick={editTypeClickHandler}/>
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <FrameRowWrapGap></FrameRowWrapGap>
        </FrameColumnGap180>
        <FrameColumnGap78Center>
          <IconValidate.Min.False />
        </FrameColumnGap78Center>
      </FrameRowGap>
      <ButtonBorderLong
        onClick={addEmailClickHandler}
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
