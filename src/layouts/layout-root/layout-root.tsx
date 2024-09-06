import { ProviderApp } from '@jenesei-software/jenesei-ui-react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Navigate, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { useEnvironment } from '@hooks/use-environment'

export function LayoutRoot() {
  const { title, description, mode } = useEnvironment()
  return (
    <>
      <ProviderApp
        defaultTitle={title}
        defaultBgColor="whiteStandard"
        defaultStatusBarColor="whiteStandard"
        defaultDescription={description}
        isScrollOutlet={true}
      >
        <Outlet />
      </ProviderApp>
      {mode === 'development' && (
        <>
          <ReactQueryDevtools buttonPosition="bottom-left" />
          <TanStackRouterDevtools position="bottom-right" />
        </>
      )}
    </>
  )
}

export function LayoutRootNotFound() {
  return <Navigate to="/auth" />
}
