import { useTranslation } from "react-i18next";
import { MenuListProps, MenuListWrapper } from ".";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { IUserRoute, UserRouts } from "@core/router";
import { MenuItem } from "@components/menu-item";
import { useGoToLink } from "@hooks/use-go-to-link";

export const MenuList: FC<MenuListProps> = () => {
  const { t } = useTranslation("pages");
  const goToLink = useGoToLink();
  const location = useLocation();

  return (
    <MenuListWrapper>
      {UserRouts.map((route: IUserRoute) => (
        <MenuItem
          key={route.key}
          onClick={() => goToLink(route.to)}
          icon={route.icon}
          title={t(route.title)}
          description={t(route.description)}
          checked={route.to == location?.pathname}
        />
      ))}
    </MenuListWrapper>
  );
};
