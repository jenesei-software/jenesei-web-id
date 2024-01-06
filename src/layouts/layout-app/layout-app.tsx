import { LayoutAppWrapper } from '.'
import { AppRoutes, AppRoutesAuthorization } from '@core/router'
import React from 'react'

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
