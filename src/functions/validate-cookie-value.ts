import { ValidCookieObject } from '@jenesei-software/jenesei-ui-react'

export const validateCookieKeys: (keyof ValidCookieObject)[] = [
  'access_token',
  'refresh_token',
]
export function getValidateCookieValue<K extends keyof ValidCookieObject>(
  key: K,
  value: ValidCookieObject[K],
): value is ValidCookieObject[K] {
  console.log('Key:', key, 'Value:', value, 'Type:', typeof value) // для отладки

  switch (key) {
    case 'access_token':
    case 'refresh_token':
      return false
    default:
      return true
  }
}
