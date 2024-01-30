import { StyledUIInputDefault } from '.'
import { UIInputIcon, UIInputProps, UIInputWrapper } from '@styles/components'

export const InputDefault = (props: UIInputProps) => {
  return (
    <UIInputWrapper>
      <StyledUIInputDefault
        readOnly={props.readOnly}
        value={props.value}
        {...props.register}
        placeholder={props.placeholder}
        type={props.type}
      />
      <UIInputIcon $icon={props.icon} onClick={props.icon?.onCLick}>
        {props.icon && props.icon.value()}
      </UIInputIcon>
    </UIInputWrapper>
  )
}
