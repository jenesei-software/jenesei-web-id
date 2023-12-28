import { FC } from "react";
import { Layout } from "@layouts/layout";
import { LayoutMain } from "@layouts/layout-main";
import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutAuthorization } from "@layouts/layout-authorization";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<LayoutMain />}>
          <Route path="authorization" element={<LayoutAuthorization />}>
          </Route>
          <Route path="*" element={<Navigate to="/authorization" />} />
        </Route>
        <Route index element={<Navigate to="/authorization" />} />
      </Route>
    </Routes>
  );
};
