import { ProviderApp, useCookie } from '@jenesei-software/jenesei-ui-react'
import { useGetSSOProfile } from '@jenesei-software/jenesei-web-id-api'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, useMatchRoute, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useLayoutEffect } from 'react'

import { useEnvironment } from '@hooks/use-environment'

export function LayoutRoot() {
  const matchRoute = useMatchRoute()
  const navigate = useNavigate()
  const { setCookie, removeCookieValue } = useCookie()
  const { title, description, mode } = useEnvironment()
  const { isError, isLoading, isSuccess } = useGetSSOProfile({ retry: false })

  const matchAuth = !!matchRoute({
    to: '/auth',
    fuzzy: true,
  })

  const matchUser = !!matchRoute({
    to: '/user',
    fuzzy: true,
  })

  useLayoutEffect(() => {
    if (isSuccess) {
      setCookie('auth_status', true)
    }
    if (isSuccess && !matchUser) {
      navigate({ to: '/user/profile' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  useLayoutEffect(() => {
    if (isError) {
      removeCookieValue('auth_status')
    }
    if (isError && !matchAuth) {
      navigate({ to: '/auth/sign-in' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError])

  return (
    <>
      <ProviderApp
        defaultTitle={title}
        defaultBgColor="whiteStandard"
        defaultStatusBarColor="whiteStandard"
        defaultDescription={description}
        isScrollOutlet={true}
        defaultPreview={{ isShow: isLoading }}
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
