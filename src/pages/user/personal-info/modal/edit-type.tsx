import { EditTypeHookForm } from './edit-type.types'
import { ButtonBorderLong } from '@components/button-border/long'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { LayoutModal } from '@layouts/layout-modal'
import { ModalWrapper } from '@styles/pages'
import { ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const EditType = NiceModal.create((): ReactElement | null => {
  const { t: tModal } = useTranslation('modal')

  const { hide } = useModal()
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<EditTypeHookForm>({
    defaultValues: { step: 'start' },
  })
  const onSubmit: SubmitHandler<EditTypeHookForm> = (data) => {
    console.log(data)
  }
  const closeDrawer = () => {
    hide()
  }
  return (
    <LayoutModal>
      <ModalWrapper>
        <ButtonBorderLong
          title={tModal('cancel')}
          onClick={closeDrawer}
          type="border"
        />
      </ModalWrapper>
    </LayoutModal>
  )
})
