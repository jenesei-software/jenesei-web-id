import { ValidCookieObject } from '@jenesei-software/jenesei-ui-react'
import { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

import { LayoutAuthorization } from '@layouts/layout-authorization'
import { LayoutRoot, LayoutRootNotFound } from '@layouts/layout-root'
import { LayoutUser } from '@layouts/layout-user'

export interface IContext {
  queryClient: QueryClient
  cookieValues: ValidCookieObject
}

export const LayoutRootRoute = createRootRouteWithContext<IContext>()({
  component: LayoutRoot,
  notFoundComponent: LayoutRootNotFound,
})

export const LayoutUserRoute = createRoute({
  getParentRoute: () => LayoutRootRoute,
  component: LayoutUser,
  path: '/user',
})

export const LayoutAuthorizationRoute = createRoute({
  getParentRoute: () => LayoutRootRoute,
  component: LayoutAuthorization,
  path: '/auth',
})
const routeTree = LayoutRootRoute.addChildren({
  LayoutAuthorizationRoute,
  LayoutUserRoute,
})

export const router = createRouter({
  routeTree: routeTree,
  context: {
    queryClient: undefined!,
    cookieValues: undefined!,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
