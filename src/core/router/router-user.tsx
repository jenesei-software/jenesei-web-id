import { IUserRoute, UserRouts } from '.'
import { LayoutAuthorization } from '@layouts/layout-authorization'
import { LayoutUser } from '@layouts/layout-user'
import { Services } from '@pages/user/services'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutesUser: FC = () => {
  return (
    <Routes>
      {/* Base */}
      <Route path="user" element={<LayoutUser />}>
        {UserRouts.map(
          (route: Pick<IUserRoute, 'path' | 'element' | 'key'>) => (
            <Route {...route} />
          )
        )}
      </Route>

      {/* Additional */}
      <Route path="authorization" element={<LayoutAuthorization />}>
        <Route index element={<Navigate to="/authorization/services" />} />
        <Route path="services" element={<Services />} />
      </Route>

      {/* Rest */}
      <Route index element={<Navigate to="/authorization/services" />} />
      <Route path="*" element={<Navigate to="/authorization/services" />} />
    </Routes>
  )
}
