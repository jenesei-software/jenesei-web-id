import {
  SignUpHookForm,
  SignUpInfoFormContainer,
  SignUpInfoFormSwitchAgreementContainer,
  SignUpProps,
  SignUpInfoFormSwitchContainer,
} from '.'
import { usePostAuthSignUp } from '@api/auth'
import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonBig } from '@components/button-big'
import { DatePicker } from '@components/datepicker'
import { InputDefault } from '@components/input-default'
import { Switch } from '@components/switch'
import { getDateMinusYears } from '@functions/get-date-minus-years'
import { useGoToLink } from '@hooks/use-go-to-link'
import { UIInterR16OnClick } from '@styles/components'
import { StyledInterR16 } from '@styles/fonts/inter'
import { FC, useEffect, useReducer } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const SignUpForm: FC<SignUpProps> = () => {
  const { t } = useTranslation([
    'sign-up',
    'terms-of-service',
    'privacy-policy',
  ])
  const goToLink = useGoToLink()
  const [isHide, toggle] = useReducer((checked) => !checked, false)
  const { mutate: mutatePostAuthSignUp, isPending: isPendingPostAuthSignUp } =
    usePostAuthSignUp({
      onSuccess: () => {},
    })
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isValid },
  } = useForm<SignUpHookForm>({
    defaultValues: { switch: false },
  })

  const onSubmit: SubmitHandler<SignUpHookForm> = (data) => {
    mutatePostAuthSignUp({ body: data })
  }

  useEffect(() => {
    if (!isHide) {
      const timeoutId = setTimeout(() => {
        toggle()
      }, 2000)

      return () => clearTimeout(timeoutId)
    }
  }, [isHide])
  return (
    <SignUpInfoFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputDefault
        placeholder={t('sign-up:inputs.email')}
        type="email"
        register={{
          ...register('email', {
            required: true,
            minLength: 10,
            maxLength: 40,
          }),
        }}
      />
      <InputDefault
        placeholder={t('sign-up:inputs.username')}
        register={{
          ...register('username', {
            required: true,
            minLength: 2,
            maxLength: 30,
          }),
        }}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="dateOfBirth"
        render={({ field: { value, onChange } }) => (
          <DatePicker
            value={value}
            maxDate={getDateMinusYears(16)}
            onChange={onChange}
            placeholder={t('sign-up:inputs.date-of-birth')}
          />
        )}
      />
      <InputDefault
        placeholder={t('sign-up:inputs.password')}
        type={isHide ? 'password' : 'text'}
        register={{
          ...register('password', {
            required: true,
            minLength: 8,
            maxLength: 44,
          }),
        }}
        icon={{
          value: isHide ? IconCurved.Hide : IconCurved.Show,
          onCLick: () => {
            toggle()
          },
        }}
      />
      <InputDefault
        placeholder={t('sign-up:inputs.repeat-password')}
        type="password"
        register={{
          ...register('repeatPassword', {
            required: true,
            minLength: 8,
            maxLength: 44,
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Your passwords do no match'
              }
            },
          }),
        }}
      />
      <SignUpInfoFormSwitchContainer>
        <Controller
          control={control}
          rules={{ required: true }}
          name="switch"
          render={({ field: { value, onChange } }) => (
            <Switch value={value} onChange={onChange} />
          )}
        />
        <SignUpInfoFormSwitchAgreementContainer>
          <StyledInterR16>{t('sign-up:agree-1')}</StyledInterR16>{' '}
          <UIInterR16OnClick onClick={() => goToLink('/terms-of-service')}>
            {t('terms-of-service:default')}
          </UIInterR16OnClick>{' '}
          <StyledInterR16>{t('sign-up:agree-2')}</StyledInterR16>{' '}
          <UIInterR16OnClick onClick={() => goToLink('/privacy-policy')}>
            {t('privacy-policy:default')}
          </UIInterR16OnClick>
        </SignUpInfoFormSwitchAgreementContainer>
      </SignUpInfoFormSwitchContainer>
      <ButtonBig
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid}
        title={t('buttons.create-account')}
        $variant={'product'}
        $loading={isPendingPostAuthSignUp}
      />
    </SignUpInfoFormContainer>
  )
}
