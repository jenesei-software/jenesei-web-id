import { LayoutAppWrapper } from '.'
import { AppRoutesUser, AppRoutesAuthorization } from '@core/router'
import { AXIOS_COOKIE_ACCESS } from '@providers/provider-axios'
import Cookies from 'js-cookie'
import React from 'react'

/*
 * The wrapper of the entire application
 */
export const LayoutApp: React.FC = () => {
  const isAuth = Cookies.get(AXIOS_COOKIE_ACCESS)
  console.log('isAuth', isAuth)
  return (
    <LayoutAppWrapper>
      {isAuth !== undefined && isAuth !== '' ? (
        <AppRoutesUser />
      ) : (
        <AppRoutesAuthorization />
      )}
    </LayoutAppWrapper>
  )
}
