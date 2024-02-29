import { LayoutAppWrapper } from '.'
import { AppRoutesUser, AppRoutesAuthorization } from '@core/router'
import { LOCAL_STORAGE_IS_AUTH, useAxios } from '@providers/provider-axios'
import React from 'react'

/*
 * The wrapper of the entire application
 */
export const LayoutApp: React.FC = () => {
  const { getFromLocalStorage, isAuth } = useAxios()
  console.log(getFromLocalStorage<boolean>(LOCAL_STORAGE_IS_AUTH))
  return (
    <LayoutAppWrapper>
      {getFromLocalStorage<boolean>(LOCAL_STORAGE_IS_AUTH) || isAuth ? (
        <AppRoutesUser />
      ) : (
        <AppRoutesAuthorization />
      )}
    </LayoutAppWrapper>
  )
}
