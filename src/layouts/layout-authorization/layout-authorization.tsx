import {
  Button,
  Stack,
  TitleH6,
  useAppContext,
  useCookie,
  useLocalStorage,
  usePermission,
} from '@jenesei-software/jenesei-ui-react'
import { createRoute } from '@tanstack/react-router'

import { LayoutRootRoute } from '@layouts/layout-root'

export const LayoutAuthorizationRoute = createRoute({
  getParentRoute: () => LayoutRootRoute,
  component: LayoutAuthorization,
  path: '/auth',
})

function LayoutAuthorization() {
  const { removeCookieValue, setCookie, cookieValues, checkCookie } =
    useCookie()
  const { changeBgColor, setDefaultBgColor } = useAppContext()
  const {
    checkLocalStorage,
    setLocalStorage,
    localStorageValues,
    removeLocalStorageValue,
  } = useLocalStorage()
  const {
    geolocationPermission,
    notificationPermission,
    serviceWorkerRegistered,
    pushNotificationSupported,
    pushSubscription,
    requestGeolocationPermission,
    requestNotificationPermission,
    setupPushNotifications,
    registerServiceWorker,
    unregisterServiceWorker,
  } = usePermission()
  return (
    <Stack $gap="12px" $flexDirection="column" $p="12px">
      <Stack $gap="6px" $flexWrap="wrap">
        <Button
          genre={'grayBorder'}
          onClick={() => changeBgColor('blueActive')}
          size={'small'}
        >
          Change Color - blueActive
        </Button>
        <Button
          genre={'grayBorder'}
          onClick={() => changeBgColor('black80')}
          size={'small'}
        >
          Change Color - black80
        </Button>
        <Button
          genre={'grayBorder'}
          onClick={() => setDefaultBgColor()}
          size={'small'}
        >
          Set Default Color
        </Button>
      </Stack>
      <Stack $gap="6px" $flexWrap="wrap">
        <Button
          genre={'redTransparent'}
          onClick={() => removeCookieValue('token')}
          size={'small'}
        >
          Remove Cookie [token]
        </Button>
        <Button
          genre={'productBorder'}
          onClick={() => setCookie('token', 2)}
          size={'small'}
        >
          Set Cookie [token]
        </Button>
        <Button
          genre={'grayBorder'}
          onClick={() => checkCookie()}
          size={'small'}
        >
          Check Cookie [token]
        </Button>
      </Stack>

      <TitleH6>Cookie [token]: {cookieValues?.token}</TitleH6>

      <Stack $gap="6px" $flexWrap="wrap">
        <Button
          genre={'redTransparent'}
          onClick={() => removeLocalStorageValue('token')}
          size={'small'}
        >
          Remove LocalStorage [token]
        </Button>
        <Button
          genre={'productBorder'}
          onClick={() => setLocalStorage('token', 2)}
          size={'small'}
        >
          Set LocalStorage [token]
        </Button>
        <Button
          genre={'grayBorder'}
          onClick={() => checkLocalStorage()}
          size={'small'}
        >
          Check LocalStorage [token]
        </Button>
      </Stack>

      <TitleH6>Local Storage [token]: {localStorageValues?.token}</TitleH6>

      <Button
        genre={'productBorder'}
        onClick={() => requestGeolocationPermission()}
        size={'small'}
      >
        Request Geolocation Permission
      </Button>
      <Button
        genre={'productBorder'}
        onClick={() => requestNotificationPermission()}
        size={'small'}
      >
        Request Notification Permission
      </Button>
      <Button
        genre={'productBorder'}
        onClick={() => registerServiceWorker()}
        size={'small'}
      >
        Register ServiceWorker
      </Button>
      <Button
        genre={'productBorder'}
        onClick={() => unregisterServiceWorker()}
        size={'small'}
      >
        UnRegister ServiceWorker
      </Button>
      <Button
        genre={'productBorder'}
        onClick={() => setupPushNotifications('vapidKey')}
        size={'small'}
      >
        Setup Push Notifications
      </Button>

      <TitleH6>geolocationPermission: {geolocationPermission}</TitleH6>
      <TitleH6>
        notificationPermission: {String(notificationPermission)}
      </TitleH6>
      <TitleH6>
        serviceWorkerRegistered: {String(serviceWorkerRegistered)}
      </TitleH6>
      <TitleH6>
        pushNotificationSupported: {String(pushNotificationSupported)}
      </TitleH6>
      <TitleH6>pushSubscription: {String(pushSubscription)}</TitleH6>
    </Stack>
  )
}
