import { ListEmailAddHookForm } from './list-email-add.types'
import { IconValidate } from '@assets/icons/icon-validate'
import { ButtonBorderLong } from '@components/button-border/long'
import { Input } from '@components/input'
import { InputCode } from '@components/input-code'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { LayoutModal } from '@layouts/layout-modal'
import { StyledInterR16 } from '@styles/fonts/inter'
import {
  ModalWrapper,
  StyledALotOfTitle,
  StyledInterR16OnClick,
  StyledReactLoading,
} from '@styles/pages'
import { ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
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
    // control,
    // watch,
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
      <ModalWrapper>
        {String(isValid)}
        <Input
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
        <InputCode
          register={{
            ...register('code', {
              required: true,
              minLength: 11,
              maxLength: 11,
            }),
          }}
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
        <StyledReactLoading />
        <StyledInterR16>{tPersonalInfo('enter-the-code')}</StyledInterR16>
        <StyledInterR16OnClick onClick={closeDrawer}>
          {tPersonalInfo("can't-use-this-email")}
        </StyledInterR16OnClick>
        <StyledALotOfTitle>
          <StyledInterR16>{tPersonalInfo('wrong-code')}</StyledInterR16>{' '}
          <StyledInterR16OnClick onClick={closeDrawer}>
            {tPersonalInfo('code-again')}
          </StyledInterR16OnClick>
        </StyledALotOfTitle>
        <StyledALotOfTitle>
          <StyledInterR16>{tPersonalInfo('wrong-code')}</StyledInterR16>{' '}
          <StyledInterR16OnClick onClick={closeDrawer}>
            {tPersonalInfo('tomorrow')}
          </StyledInterR16OnClick>
        </StyledALotOfTitle>
        <ButtonBorderLong title={tModal('check')} type="grey" />
      </ModalWrapper>
    </LayoutModal>
  )
})
