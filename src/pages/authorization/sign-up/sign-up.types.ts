import { SignUpDto } from '@api/auth'

export interface SignUpProps {}
export interface SignUpHookForm extends SignUpDto {
  repeatPassword: string
  switch: boolean
  dateOfBirth: Date | null
}
