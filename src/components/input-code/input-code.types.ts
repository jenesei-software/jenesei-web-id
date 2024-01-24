import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputCodeProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
}
