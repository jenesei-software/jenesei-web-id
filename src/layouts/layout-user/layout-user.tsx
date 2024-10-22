import { useAppContext } from '@jenesei-software/jenesei-ui-react'
import { ProviderWSWebId, queryKeys } from '@jenesei-software/jenesei-web-id-api'
import { Navigate, Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'

import { queryClient } from '@core/query'

import { LayoutUserWrapper } from '.'

const socketURL = import.meta.env.VITE_SOCKET_URL || ''

export function LayoutUser() {
  const { changePreview } = useAppContext()

  useEffect(() => {
    changePreview({ isShow: false })
  }, [changePreview])

  const onLogout = () => {
    Promise.all([
      queryClient.invalidateQueries({
        queryKey: [queryKeys.sso.profile],
      }),
    ])
  }
  return (
    <LayoutUserWrapper>
      <ProviderWSWebId socketURL={socketURL} onLogout={onLogout} client={queryClient}>
        <Outlet />
      </ProviderWSWebId>
    </LayoutUserWrapper>
  )
}

export function LayoutUserNotFound() {
  return <Navigate to="/user/profile" />
}
