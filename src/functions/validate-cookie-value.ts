import { ValidCookieObject } from '@jenesei-software/jenesei-ui-react'

export const validateCookieKeys: (keyof ValidCookieObject)[] = ['token', 'test']
export function getValidateCookieValue<K extends keyof ValidCookieObject>(
  key: K,
  value: ValidCookieObject[K],
): value is ValidCookieObject[K] {
  switch (key) {
    case 'token':
      return typeof value === 'number'
    case 'test':
      return typeof value === 'string'
    default:
      return true
  }
}
