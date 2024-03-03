import { EditType } from './modal/edit-type'
import { EditTypeProps } from './modal/edit-type.types'
import { ListEmailAdd } from './modal/list-email-add'
import { IconCurved } from '@assets/icons/icon-curved'
import { IconValidate } from '@assets/icons/icon-validate'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { ButtonBorderShort } from '@components/button-border/short'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import NiceModal from '@ebay/nice-modal-react'
import {
  FrameColumnGap180,
  FrameColumnGap250,
  FrameColumnGap300,
  FrameColumnGap78Center,
  FrameRowGap,
  FrameRowWrapGap,
  UIUserLine,
} from '@styles/components'
import { InputString, JeneseiTheme, SpanInterB16 } from 'jenesei-react-ui'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormListEmail: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'list-email' })
  const addEmailClickHandler = () => {
    NiceModal.show(ListEmailAdd)
  }
  const editTypeClickHandler = (props: EditTypeProps) => {
    NiceModal.show(EditType, props)
  }
  useEffect(() => {
    return () => {
      NiceModal.remove(ListEmailAdd)
      NiceModal.remove(EditType)
    }
  }, [])
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <SpanInterB16>{t('title-1')}</SpanInterB16>
          <InputString
            theme="cloud"
            placeholder={t('inputs.email')}
            readOnly
            value={'cyrilstrone@gmail.com'}
          />
        </FrameColumnGap300>
        <FrameColumnGap250 $mediaMaxWidth={JeneseiTheme.screens.mobile.width}>
          <SpanInterB16>{t('title-2')}</SpanInterB16>
          <FrameRowWrapGap>
            <ButtonPlaystationLong
              icon={IconCurved.Lock}
              title={'General'}
              checked={true}
            />
            <ButtonBorderShort
              type="border"
              icon={IconCurved.Plus}
              onClick={() =>
                editTypeClickHandler({
                  original: (
                    <InputString
                      theme="cloud"
                      placeholder={t('inputs.email')}
                      readOnly
                      value={'cyrilstrone@gmail.com'}
                    />
                  ),
                })
              }
            />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 $mediaMaxWidth={JeneseiTheme.screens.tablet.width}>
          <SpanInterB16>{t('title-3')}</SpanInterB16>
          <FrameRowWrapGap>
            <LogoServices.JeneseiTask.Min />
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
        <FrameColumnGap78Center>
          <SpanInterB16>{t('title-4')}</SpanInterB16>
          <IconValidate.Min.True />
        </FrameColumnGap78Center>
      </FrameRowGap>
      <FrameRowGap>
        <FrameColumnGap300>
          <InputString
            theme="cloud"
            placeholder={t('inputs.email')}
            readOnly
            value={'kidvos@gmail.com'}
          />
        </FrameColumnGap300>
        <FrameColumnGap250 $mediaMaxWidth={JeneseiTheme.screens.mobile.width}>
          <FrameRowWrapGap>
            <ButtonPlaystationLong title={'Home'} checked={false} />
            <ButtonBorderShort
              type="border"
              icon={IconCurved.Plus}
              onClick={() =>
                editTypeClickHandler({
                  original: (
                    <InputString
                      theme="cloud"
                      placeholder={t('inputs.email')}
                      readOnly
                      value={'kidvos@gmail.com'}
                    />
                  ),
                })
              }
            />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 $mediaMaxWidth={JeneseiTheme.screens.tablet.width}>
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
