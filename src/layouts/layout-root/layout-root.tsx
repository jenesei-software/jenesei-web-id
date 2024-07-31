import {
  ProviderApp,
  TitleH1,
  TitleH6,
} from '@jenesei-software/jenesei-ui-react'
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
  return (
    <ProviderApp
      defaultBgColor="white"
      isScrollOutlet={false}
      header={{
        component: defaultHeader,
        height: '80px',
        heightTablet: '60px',
        heightMobile: '40px',
      }}
      leftAside={{
        component: defaultLeftAside,
        width: '80px',
        widthTablet: '60px',
      }}
      rightAside={{
        component: defaultRightAside,
        width: '80px',
        widthTablet: '60px',
      }}
      footer={{
        component: defaultFooter,
        height: '80px',
        heightTablet: '60px',
        heightMobile: '40px',
      }}
    >
      <Outlet />
    </ProviderApp>
  )
}

const defaultHeader = (
  <div
    style={{
      backgroundColor: 'lightblue',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH1>Header</TitleH1>
  </div>
)
const defaultFooter = (
  <div
    style={{
      backgroundColor: 'lightcoral',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH1>Footer</TitleH1>
  </div>
)
const defaultLeftAside = (
  <div
    style={{
      backgroundColor: 'lightgreen',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Left Aside</TitleH6>
  </div>
)
const defaultRightAside = (
  <div
    style={{
      backgroundColor: 'lightyellow',
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <TitleH6>Right Aside</TitleH6>
  </div>
)
