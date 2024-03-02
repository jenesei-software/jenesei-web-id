import { LayoutAppWrapper } from '.'
import { AppRoutesUser, AppRoutesAuthorization } from '@core/router'
import { useAxios } from '@providers/provider-axios'
import React from 'react'

/*
 * The wrapper of the entire application
 */
export const LayoutApp: React.FC = () => {
  const { isAuth } = useAxios()
  return (
    <LayoutAppWrapper>
      {isAuth ? <AppRoutesUser /> : <AppRoutesAuthorization />}
    </LayoutAppWrapper>
  )
}
