import { AuthLayout, useAppContext } from '@jenesei-software/jenesei-ui-react'
import { Navigate, Outlet, useMatchRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export function LayoutAuthorization() {
  const matchRoute = useMatchRoute()
  const navigate = useNavigate()
  const { changePreview } = useAppContext()

  const matchAuth = !!matchRoute({
    to: '/auth'
  })

  useEffect(() => {
    if (matchAuth) {
      navigate({ to: '/auth/sign-in' })
    }
  }, [matchAuth, navigate])

  useEffect(() => {
    changePreview({ isShow: false })
  }, [changePreview])
  return (
    <AuthLayout backUrl="/pictures/auth-back.gif" backUrlWebp="/pictures/auth-back.webp">
      <Outlet />
    </AuthLayout>
  )
}

export function LayoutAuthorizationNotFound() {
  return <Navigate to="/auth/sign-in" />
}
