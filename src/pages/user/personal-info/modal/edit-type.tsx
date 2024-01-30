import { EditTypeHookForm, EditTypeProps } from './edit-type.types'
import { ButtonBorderLong } from '@components/button-border/long'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { LayoutModal } from '@layouts/layout-modal'
import {
  FrameModalTitlesContainer,
  FrameModalWrapper,
  FrameSpaceBetween,
  UIUserLine,
} from '@styles/components'
import { StyledInterB36, StyledInterM16 } from '@styles/fonts/inter'
import { ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const EditType = NiceModal.create(
  (props: EditTypeProps): ReactElement | null => {
    const { t: tModal } = useTranslation('modal')

    const { hide } = useModal()
    const { handleSubmit } = useForm<EditTypeHookForm>()

    const onSubmit: SubmitHandler<EditTypeHookForm> = (data) => {
      console.log(data)
    }
    const closeDrawer = () => {
      hide()
    }
    return (
      <LayoutModal>
        <FrameModalWrapper>
          <FrameModalTitlesContainer>
            <StyledInterB36>Test</StyledInterB36>
            <StyledInterM16>Test</StyledInterM16>
          </FrameModalTitlesContainer>
          {props.original}
          <UIUserLine />
          <FrameSpaceBetween>
            <ButtonBorderLong
              title={tModal('cancel')}
              onClick={closeDrawer}
              type="border"
            />
            <ButtonBorderLong
              title={tModal('save')}
              onClick={() => handleSubmit(onSubmit)}
              type="border"
            />
          </FrameSpaceBetween>
        </FrameModalWrapper>
      </LayoutModal>
    )
  }
)
