import { ListEmailAddHookForm } from './list-email-add.types'
import { IconValidate } from '@assets/icons/icon-validate'
import { ButtonBorderLong } from '@components/button-border/long'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { LayoutModal } from '@layouts/layout-modal'
import {
  FrameModalWrapper,
  UIALotOfTitle,
  UIReactLoading,
} from '@styles/components'
import { UIInterR16OnClick } from '@styles/components'
import { InputCode, InputString, SpanInterR16 } from 'jenesei-react-ui'
import { ReactElement } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const ListEmailAdd = NiceModal.create((): ReactElement | null => {
  const { t: tPersonalInfo } = useTranslation('personal-info', {
    keyPrefix: 'list-email.modal',
  })
  const { t: tModal } = useTranslation('modal')
  const { hide } = useModal()
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ListEmailAddHookForm>({
    defaultValues: { step: 'start' },
  })
  const onSubmit: SubmitHandler<ListEmailAddHookForm> = (data) => {
    console.log(data)
  }
  const closeDrawer = () => {
    hide()
  }
  return (
    <LayoutModal>
      <FrameModalWrapper>
        {String(isValid)}
        <InputString
          theme="cloud"
          placeholder={tPersonalInfo('email')}
          type="email"
          register={{
            ...register('email', {
              required: true,
              minLength: 8,
              maxLength: 44,
            }),
          }}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="code"
          render={({ field: { value, onChange } }) => (
            <InputCode length={6} value={value} onChange={onChange} />
          )}
        />
        <ButtonBorderLong
          title={tModal('cancel')}
          onClick={closeDrawer}
          type="border"
        />
        <ButtonBorderLong
          title={tModal('save')}
          onClick={handleSubmit(onSubmit)}
          type="black"
        />
        <ButtonBorderLong
          title={tPersonalInfo('send-code')}
          onClick={handleSubmit(onSubmit)}
          type="black"
        />
        <IconValidate.Min.True />
        <IconValidate.Min.False />
        <UIReactLoading />
        <SpanInterR16>{tPersonalInfo('enter-the-code')}</SpanInterR16>
        <UIInterR16OnClick onClick={closeDrawer}>
          {tPersonalInfo("can't-use-this-email")}
        </UIInterR16OnClick>
        <UIALotOfTitle>
          <SpanInterR16>{tPersonalInfo('wrong-code')}</SpanInterR16>{' '}
          <UIInterR16OnClick onClick={closeDrawer}>
            {tPersonalInfo('code-again')}
          </UIInterR16OnClick>
        </UIALotOfTitle>
        <UIALotOfTitle>
          <SpanInterR16>{tPersonalInfo('wrong-code')}</SpanInterR16>{' '}
          <UIInterR16OnClick onClick={closeDrawer}>
            {tPersonalInfo('tomorrow')}
          </UIInterR16OnClick>
        </UIALotOfTitle>
        <ButtonBorderLong title={tModal('check')} type="grey" />
      </FrameModalWrapper>
    </LayoutModal>
  )
})
