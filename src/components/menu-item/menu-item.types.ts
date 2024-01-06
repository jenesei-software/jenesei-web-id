import { IUserRoute } from '@core/router'

export interface MenuItemProps
  extends Pick<IUserRoute, 'icon' | 'title' | 'description'> {
  checked: boolean
  onClick: () => void
}
