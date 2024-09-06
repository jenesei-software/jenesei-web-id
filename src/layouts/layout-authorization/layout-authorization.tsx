import {
  Button,
  Stack,
  TitleH6,
  useAppContext,
  useCookie,
  useLocalStorage,
  usePermission,
} from '@jenesei-software/jenesei-ui-react'

export function LayoutAuthorization() {
  const { removeCookieValue, setCookie, cookieValues, checkCookie } =
    useCookie()
  const {
    changeBgColor,
    setDefaultBgColor,
    changeStatusBarColor,
    setDefaultStatusBarColor,
  } = useAppContext()
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
    <Stack gap="12px" flexDirection="column" p="12px">
      <>
        <Stack gap="6px" flexWrap="wrap">
          <>
            <Button
              genre={'grayBorder'}
              onClick={() => changeStatusBarColor('greenGoogle')}
              size={'small'}
            >
              Change Status Bar Color - greenGoogle
            </Button>
            <Button
              genre={'grayBorder'}
              onClick={() => changeStatusBarColor('grayMonica')}
              size={'small'}
            >
              Change Status Bar Color - grayMonica
            </Button>
            <Button
              genre={'grayBorder'}
              onClick={() => setDefaultStatusBarColor()}
              size={'small'}
            >
              Set Default Status Bar Color
            </Button>
          </>
        </Stack>
        <Stack gap="6px" flexWrap="wrap">
          <>
            <Button
              genre={'grayBorder'}
              onClick={() => changeBgColor('greenGoogle')}
              size={'small'}
            >
              Change Bg Color - greenGoogle
            </Button>
            <Button
              genre={'grayBorder'}
              onClick={() => changeBgColor('grayMonica')}
              size={'small'}
            >
              Change Bg Color - grayMonica
            </Button>
            <Button
              genre={'grayBorder'}
              onClick={() => setDefaultBgColor()}
              size={'small'}
            >
              Set Default Bg Color
            </Button>
          </>
        </Stack>
        <Stack gap="6px" flexWrap="wrap">
          <>
            <Button
              genre={'redTransparent'}
              onClick={() => removeCookieValue('access_token')}
              size={'small'}
            >
              Remove Cookie [token]
            </Button>
            <Button
              genre={'productBorder'}
              onClick={() =>
                setCookie('access_token', encodeURIComponent('test'))
              }
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
          </>
        </Stack>

        <TitleH6>Cookie [token]: {cookieValues?.access_token}</TitleH6>

        <Stack gap="6px" flexWrap="wrap">
          <>
            <Button
              genre={'redTransparent'}
              onClick={() => removeLocalStorageValue('access_token')}
              size={'small'}
            >
              Remove LocalStorage [token]
            </Button>
            <Button
              genre={'productBorder'}
              onClick={() => setLocalStorage('access_token', 'qwqwdqwd')}
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
          </>
        </Stack>

        <TitleH6>
          Local Storage [token]: {localStorageValues?.access_token}
        </TitleH6>

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
      </>
    </Stack>
  )
}
