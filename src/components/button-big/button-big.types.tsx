export interface ButtonBigProps {
  onClick?: () => void
  title: string
  icon?: () => JSX.Element
  isIconColor?: boolean
  type: 'product' | 'border'
}
