import { useAppContext } from '@jenesei-software/jenesei-ui-react'
import { Navigate, Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'

import { LayoutUserWrapper } from '.'

export function LayoutUser() {
  const { changePreview } = useAppContext()
  useEffect(() => {
    changePreview({ isShow: false })
  }, [changePreview])
  return (
    <LayoutUserWrapper>
      <Outlet />
    </LayoutUserWrapper>
  )
}

export function LayoutUserNotFound() {
  return <Navigate to="/user/profile" />
}
