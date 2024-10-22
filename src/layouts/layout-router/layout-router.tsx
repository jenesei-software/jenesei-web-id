import { useCookie } from '@jenesei-software/jenesei-ui-react'
import { RouterProvider } from '@tanstack/react-router'

import { queryClient } from '@core/query'
import { router } from '@core/router'

export function LayoutRouter() {
  const { cookieValues } = useCookie()

  return (
    <RouterProvider router={router} context={{ queryClient, cookieValues }} />
  )
}
