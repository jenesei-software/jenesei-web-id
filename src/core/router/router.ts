import { ValidCookieObject } from '@jenesei-software/jenesei-ui-react'
import { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

import {
  LayoutAuthorization,
  LayoutAuthorizationNotFound,
} from '@layouts/layout-authorization'
import { LayoutRoot } from '@layouts/layout-root'
import { LayoutUser, LayoutUserNotFound } from '@layouts/layout-user'

import { AuthSignIn } from '@pages/auth-sign-in'
import { AuthSignUp } from '@pages/auth-sign-up'
import { UserProfile } from '@pages/user-profile'

import { validateLayoutRootRouteSearch } from '.'

export interface IContext {
  queryClient: QueryClient
  cookieValues: ValidCookieObject
}

export const LayoutRootRoute = createRootRouteWithContext<IContext>()({
  component: LayoutRoot,
  validateSearch: validateLayoutRootRouteSearch,
})

export const LayoutUserRoute = createRoute({
  getParentRoute: () => LayoutRootRoute,
  component: LayoutUser,
  notFoundComponent: LayoutUserNotFound,
  path: '/user',
})

export const UserProfileRoute = createRoute({
  getParentRoute: () => LayoutUserRoute,
  component: UserProfile,
  path: '/profile',
})

export const LayoutAuthorizationRoute = createRoute({
  getParentRoute: () => LayoutRootRoute,
  component: LayoutAuthorization,
  notFoundComponent: LayoutAuthorizationNotFound,
  path: '/auth',
})

export const AuthSignInRoute = createRoute({
  getParentRoute: () => LayoutAuthorizationRoute,
  component: AuthSignIn,
  path: '/sign-in',
})
export const AuthSignUpRoute = createRoute({
  getParentRoute: () => LayoutAuthorizationRoute,
  component: AuthSignUp,
  path: '/sign-up',
})
const routeTree = LayoutRootRoute.addChildren({
  LayoutAuthorizationRoute: LayoutAuthorizationRoute.addChildren({
    AuthSignUpRoute,
    AuthSignInRoute,
  }),
  LayoutUserRoute: LayoutUserRoute.addChildren({
    UserProfileRoute,
  }),
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
