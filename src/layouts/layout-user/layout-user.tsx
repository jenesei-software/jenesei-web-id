import { Navigate, Outlet } from '@tanstack/react-router'

import { LayoutUserWrapper } from '.'

export function LayoutUser() {
  return (
    <LayoutUserWrapper>
      <Outlet />
    </LayoutUserWrapper>
  )
}

export function LayoutUserNotFound() {
  return <Navigate to="/user/profile" />
}
