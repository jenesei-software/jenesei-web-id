import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
  value?: string
  readOnly?: boolean
  icon?: {
    value: () => JSX.Element
    onCLick: () => void
  }
}

export interface StyledInputIconProps {
  $icon?: InputProps['icon']
}
