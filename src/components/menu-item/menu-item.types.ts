import { IUserRoutsForMenu } from "@core/router";

export interface MenuItemProps extends IUserRoutsForMenu {
  checked: boolean;
  onClick: () => void;
}
