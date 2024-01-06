import React from 'react'
import { AppRoutes, AppRoutesAuthorization } from '@core/router'
import { LayoutAppWrapper } from '.'

/**
 * The wrapper of the entire application
 */
export const LayoutApp: React.FC = () => {
  const isAuth = false
  return (
    <LayoutAppWrapper>
      {isAuth ? <AppRoutes /> : <AppRoutesAuthorization />}
    </LayoutAppWrapper>
  )
}
