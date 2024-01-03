import { FC } from 'react';
import { LayoutAuthorization } from '@layouts/layout-authorization';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutesAuthorization: FC = () => {
  return (
    <Routes>
      {/* Base */}
      <Route path="authorization" element={<LayoutAuthorization />}></Route>
      {/* Rest */}
      <Route index element={<Navigate to="/authorization" />} />
      <Route path="*" element={<Navigate to="/authorization" />} />
    </Routes>
  );
};
