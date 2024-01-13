export interface ButtonBorderLongProps {
  onClick?: () => void
  title?: string
  icon?: () => JSX.Element
  type: 'black' | 'grey' | 'white' | 'border'
}
