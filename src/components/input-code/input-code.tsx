import { InputCodeProps, InputWrapper, StyledInputCode } from '.'

export const InputCode = (props: InputCodeProps) => {
  return (
    <InputWrapper>
      <StyledInputCode
        {...props.register}
        mask="9 9 9 9 9 9"
        maskChar=""
        placeholder="_ _ _ _ _ _"
      />
    </InputWrapper>
  )
}
