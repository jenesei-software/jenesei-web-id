import { FC } from 'react';
import { IUserRoutsForRouter, UserRouts } from '.';
import { LayoutAuthorization } from '@layouts/layout-authorization';
import { LayoutUser } from '@layouts/layout-user';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Services } from '@pages/services';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* Base */}
      <Route path="user" element={<LayoutUser />}>
        {UserRouts.map((route: IUserRoutsForRouter) => (
          <Route {...route} />
        ))}
      </Route>

      {/* Additional */}
      <Route path="authorization" element={<LayoutAuthorization />}>
        <Route path="services" element={<Services />} />
      </Route>
      
      {/* Rest */}
      <Route index element={<Navigate to="/user" />} />
      <Route path="*" element={<Navigate to="/user" />} />
    </Routes>
  );
};
