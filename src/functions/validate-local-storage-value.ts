import { ValidLocalStorageObject } from '@jenesei-software/jenesei-ui-react'

export const validateLocalStorageKeys: (keyof ValidLocalStorageObject)[] = []
export function getValidateLocalStorageValue<
  K extends keyof ValidLocalStorageObject,
>(
  key: K,
  value: ValidLocalStorageObject[K],
): value is ValidLocalStorageObject[K] {
  switch (key) {
    default:
      return true
  }
}
