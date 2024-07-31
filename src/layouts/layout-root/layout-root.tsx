import { QueryClient } from '@tanstack/react-query'
import {
  Navigate,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router'

export interface IContext {
  queryClient: QueryClient
}

export const LayoutRootRoute = createRootRouteWithContext<IContext>()({
  component: LayoutRoot,
  notFoundComponent: () => <Navigate to="/auth" />,
})

function LayoutRoot() {
  return <Outlet />
}
