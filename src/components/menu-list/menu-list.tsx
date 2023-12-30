import { useTranslation } from "react-i18next";
import { MenuListProps, MenuListWrapper } from ".";
import { FC, useCallback } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { IUserRout, UserRouts } from "@core/router";
import { MenuItem } from "@components/menu-item";

export const MenuList: FC<MenuListProps> = () => {
  const { t } = useTranslation("pages");
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const goToLink = useCallback(
    (pathname: string) =>
      navigate({
        pathname: pathname,
        search: searchParams.toString(),
      }),
    [navigate]
  );

  return (
    <MenuListWrapper>
      {UserRouts.map((route: IUserRout) => (
        <MenuItem
          key={route.key}
          onClick={() => goToLink(route.to)}
          icon={route.icon}
          title={t(route.title)}
          description={t(route.description)}
          checked={route.to.startsWith(location.pathname)}
        />
      ))}
    </MenuListWrapper>
  );
};
