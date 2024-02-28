export interface ButtonBigProps {
  onClick?: () => void
  title: string
  icon?: () => JSX.Element
  isIconColor?: boolean
  type?: 'button' | 'submit'
  $variant?: 'product' | 'border'
  disabled?: boolean
  $loading?: boolean
}
