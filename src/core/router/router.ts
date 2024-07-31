import { createRouter } from '@tanstack/react-router'

import { queryClient } from '@core/query'

import { LayoutAuthorizationRoute } from '@layouts/layout-authorization'
import { LayoutRootRoute } from '@layouts/layout-root'

const routeTree = LayoutRootRoute.addChildren({
  LayoutAuthorizationRoute,
})

export const router = createRouter({
  routeTree: routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
