import { FC } from 'react';
import { Layout } from '@layouts/layout';
import { LayoutAuthorization } from '@layouts/layout-authorization';
import { LayoutMain } from '@layouts/layout-main';
import { LayoutUser } from '@layouts/layout-user';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<LayoutMain />}>
          <Route path="authorization" element={<LayoutAuthorization />}></Route>
          <Route path="user" element={<LayoutUser />}></Route>
          <Route path="*" element={<Navigate to="/user" />} />
        </Route>
        <Route index element={<Navigate to="/user" />} />
      </Route>
    </Routes>
  );
};
