import { ValidLocalStorageObject } from '@jenesei-software/jenesei-ui-react'

export const validateLocalStorageKeys: (keyof ValidLocalStorageObject)[] = [
  'token',
  'test',
]
export function getValidateLocalStorageValue<
  K extends keyof ValidLocalStorageObject,
>(
  key: K,
  value: ValidLocalStorageObject[K],
): value is ValidLocalStorageObject[K] {
  switch (key) {
    case 'token':
      return typeof value === 'number'
    case 'test':
      return typeof value === 'string'
    default:
      return true
  }
}
