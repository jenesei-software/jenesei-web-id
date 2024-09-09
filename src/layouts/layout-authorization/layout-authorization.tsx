import { useAppContext } from '@jenesei-software/jenesei-ui-react'
import { Navigate, Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'

import { LayoutAuthorizationWrapper } from '.'

export function LayoutAuthorization() {
  const { changePreview } = useAppContext()
  useEffect(() => {
    changePreview({ isShow: false })
  }, [changePreview])
  return (
    <LayoutAuthorizationWrapper>
      <Outlet />
    </LayoutAuthorizationWrapper>
  )
}

export function LayoutAuthorizationNotFound() {
  return <Navigate to="/auth/sign-in" />
}
