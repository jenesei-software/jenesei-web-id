import {
  StyledDatePicker,
  StyledDatePickerHeader,
  UseDatePickerProps,
  UseDatePickerWrapper,
} from '.'
import { useSelect } from '../use-select'
import { IconCurved } from '@assets/icons/icon-curved/icon-curved'
import { ButtonVolumetricShort } from '@components/button-volumetric/short'
import { getLast100Years } from '@functions/get-last-100-years'
import { useLanguage } from '@providers/language-provider'
import { useState, useMemo } from 'react'

export const useDatePicker = (
  props: UseDatePickerProps = {
    initialValue: null,
    placeholder: '',
  }
) => {
  const { state } = useLanguage()
  const [value, setValue] = useState<Date | null>(props.initialValue || null)
  const { InputSelect: InputYear } = useSelect({
    options: getLast100Years(),
    labelField: 'value',
    valueField: 'value',
    initialValue: [{ value: getYear(value) }],
    type: 'volumetric',
  })
  const { InputSelect: InputMonth } = useSelect({
    options: state.translated.months || [],
    labelField: 'label',
    valueField: 'value',
    type: 'volumetric',
    initialValue: [
      {
        value: getMonth(value),
        label:
          state.translated.months.find(
            (month) => month.value === getMonth(value)
          )?.label || '',
      },
    ],
  })

  const changeValue = (e: Date | [Date | null, Date | null] | null) => {
    if (e instanceof Date || e === null) setValue(e)
  }

  function getYear(date: Date | null) {
    return (date || new Date()).getFullYear()
  }

  function getMonth(date: Date | null) {
    return (date || new Date()).getMonth()
  }
  const InputUseDatePicker = useMemo(
    () => (
      <UseDatePickerWrapper>
        <StyledDatePicker
          customInput={<input readOnly />}
          onFocus={(e) => (e.target.readOnly = true)}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <StyledDatePickerHeader>
              <ButtonVolumetricShort
                checked={false}
                disabled={prevMonthButtonDisabled}
                onClick={decreaseMonth}
                icon={IconCurved.ArrowLeft2}
              />
              <InputYear
                initialValue={[{ value: getYear(date) }]}
                changeValue={(values) => {
                  changeYear(values[0].value)
                }}
              />
              <InputMonth
                initialValue={[
                  {
                    value: getMonth(date),
                    label:
                      state.translated.months.find(
                        (month) => month.value === getMonth(date)
                      )?.label || '',
                  },
                ]}
                changeValue={(values) => {
                  changeMonth(values[0].value)
                }}
              />
              <ButtonVolumetricShort
                checked={false}
                disabled={nextMonthButtonDisabled}
                onClick={increaseMonth}
                icon={IconCurved.ArrowRight2}
              />
            </StyledDatePickerHeader>
          )}
          selected={value}
          placeholderText={props.placeholder}
          onChange={(date) => changeValue(date)}
          locale={state.dateFnsLocale}
          dateFormat="dd.MM.yyyy"
          required
        />
      </UseDatePickerWrapper>
    ),
    [value, state]
  )

  return { value, InputUseDatePicker }
}
