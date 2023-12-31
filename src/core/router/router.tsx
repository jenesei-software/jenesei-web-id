import { FC } from "react";
import { Layout } from "@layouts/layout";
import { LayoutAuthorization } from "@layouts/layout-authorization";
import { LayoutMain } from "@layouts/layout-main";
import { LayoutUser } from "@layouts/layout-user";
import { Navigate, Route, Routes } from "react-router-dom";
import { IUserRoutsForRouter, UserRouts } from ".";
import { Services } from "@pages/services";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<LayoutMain />}>
          <Route path="authorization" element={<LayoutAuthorization />}>
            <Route path="services" element={<Services/>} />
          </Route>
          <Route path="user" element={<LayoutUser />}>
            {UserRouts.map((route: IUserRoutsForRouter) => (
              <Route {...route} />
            ))}
          </Route>
          <Route path="*" element={<Navigate to="/user" />} />
        </Route>
        <Route index element={<Navigate to="/user" />} />
      </Route>
    </Routes>
  );
};
