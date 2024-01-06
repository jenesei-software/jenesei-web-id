import { useMemo, useReducer } from 'react'
import { StyledSwitch, UseSwitchProps } from '.'
import { theme } from '@styles/theme'

export const useSwitch = (props: UseSwitchProps) => {
  const [value, toggle] = useReducer((checked) => !checked, props.value)

  const Switch = useMemo(
    () => (
      <StyledSwitch
        checked={value}
        onColor={'#4195d2'}
        offColor={'#d1d1d6'}
        onHandleColor={theme.colors.default.white}
        offHandleColor={theme.colors.default.white}
        activeBoxShadow="0px 0px 1px 1px #4195d2"
        width={40}
        height={20}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={() => {
          toggle()
          if (props?.onChange) props?.onChange()
        }}
      />
    ),
    [value, props]
  )

  return { Switch, value }
}
