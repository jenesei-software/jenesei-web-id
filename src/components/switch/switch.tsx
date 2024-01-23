import { StyledSwitch, SwitchProps } from '.'
import { theme } from '@styles/theme'

export const Switch = (props: SwitchProps) => {
  return (
    <StyledSwitch
      checked={props.value}
      onColor={'#4195d2'}
      offColor={'#d1d1d6'}
      onHandleColor={theme.colors.default.white}
      offHandleColor={theme.colors.default.white}
      activeBoxShadow="0px 0px 1px 1px #4195d2"
      width={40}
      height={20}
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={props.onChange}
    />
  )
}
