import { Navigate, Outlet } from '@tanstack/react-router'

import { LayoutAuthorizationWrapper } from '.'

export function LayoutAuthorization() {
  return (
    <LayoutAuthorizationWrapper>
      <Outlet />
    </LayoutAuthorizationWrapper>
  )
}

export function LayoutAuthorizationNotFound() {
  return <Navigate to="/auth/sign-in" />
}
