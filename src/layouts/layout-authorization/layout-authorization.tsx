import {
  useCookie,
  useLocalStorage,
  usePermission
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
  // const { location } = useGeolocation()
  return (
    <>
      <button onClick={() => removeCookieValue('token')}>rem</button>
      <button onClick={() => setCookie('token', 2)}>set</button>
      <button onClick={() => checkCookie()}>check</button>
      <div>{cookieValues?.token}</div>

      <button onClick={() => removeLocalStorageValue('token')}>rem</button>
      <button onClick={() => setLocalStorage('token', 2)}>set</button>
      <button onClick={() => checkLocalStorage()}>check</button>

      <div>{localStorageValues?.token}</div>

      <button onClick={() => requestGeolocationPermission()}>
        requestGeolocationPermission
      </button>
      <button onClick={() => requestNotificationPermission()}>
        requestNotificationPermission
      </button>
      <button onClick={() => registerServiceWorker()}>
        registerServiceWorker
      </button>
      <button onClick={() => unregisterServiceWorker()}>
        unregisterServiceWorker
      </button>
      <button onClick={() => setupPushNotifications('vapidKey')}>
        setupPushNotifications
      </button>

      <div>geolocationPermission: {geolocationPermission}</div>
      <div>notificationPermission: {String(notificationPermission)}</div>
      <div>serviceWorkerRegistered: {String(serviceWorkerRegistered)}</div>
      <div>pushNotificationSupported: {String(pushNotificationSupported)}</div>
      <div>pushSubscription: {String(pushSubscription)}</div>
      {/* <div>
        location: {String(location?.coords.latitude)},{' '}
        {String(location?.coords.longitude)}
      </div> */}
    </>
  )
}
