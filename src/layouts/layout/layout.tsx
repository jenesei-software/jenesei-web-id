import { LayoutApp } from "@layouts/layout-app";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  const isAuth = true;
  return isAuth ? (
    <LayoutApp>
      <Outlet />
    </LayoutApp>
  ) : null;
};
