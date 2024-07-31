import { useCookie } from '@jenesei-software/jenesei-ui-react'
import { createRoute } from '@tanstack/react-router'

import { LayoutRootRoute } from '@layouts/layout-root'

export const LayoutAuthorizationRoute = createRoute({
  getParentRoute: () => LayoutRootRoute,
  component: LayoutAuthorization,
  path: '/auth',
})

function LayoutAuthorization() {
  const { getCookie, removeCookie, setCookie, cookie,checkCookie } = useCookie()

  return (
    <>
      <button onClick={() => console.log(getCookie('token'))}>get</button>
      <button onClick={() => removeCookie('token')}>rem</button>
      <button onClick={() => setCookie('token', 2)}>set</button>
      <button onClick={() => checkCookie()}>check</button>

      <div>{cookie?.token}</div>
    </>
  )
}
