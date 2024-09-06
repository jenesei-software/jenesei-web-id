import { ValidLocalStorageObject } from '@jenesei-software/jenesei-ui-react'

export const validateLocalStorageKeys: (keyof ValidLocalStorageObject)[] = [
  'access_token',
  'refresh_token',
]
export function getValidateLocalStorageValue<
  K extends keyof ValidLocalStorageObject,
>(
  key: K,
  value: ValidLocalStorageObject[K],
): value is ValidLocalStorageObject[K] {
  switch (key) {
    case 'access_token':
    case 'refresh_token':
      return typeof value === 'string'
    default:
      return true
  }
}
