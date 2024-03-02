import { LayoutAppWrapper } from '.'
import { AppRoutesUser, AppRoutesAuthorization } from '@core/router'
import { ENUMLocalStorage, useAxios } from '@providers/provider-axios'
import React from 'react'

/*
 * The wrapper of the entire application
 */
export const LayoutApp: React.FC = () => {
  const { getFromLocalStorage, isAuth } = useAxios()
  return (
    <LayoutAppWrapper>
      {getFromLocalStorage(ENUMLocalStorage.isAuth) || isAuth ? (
        <AppRoutesUser />
      ) : (
        <AppRoutesAuthorization />
      )}
    </LayoutAppWrapper>
  )
}
