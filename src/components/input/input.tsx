import { StyledInputIcon, StyledInput, InputWrapper, InputProps } from '.'

export const Input = (props: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput
        readOnly={props.readOnly}
        value={props.value}
        {...props.register}
        placeholder={props.placeholder}
        type={props.type}
      />
      <StyledInputIcon $icon={props.icon} onClick={props.icon?.onCLick}>
        {props.icon && props.icon.value()}
      </StyledInputIcon>
    </InputWrapper>
  )
}
