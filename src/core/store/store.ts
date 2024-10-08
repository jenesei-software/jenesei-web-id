import { CreateUserDto } from '@jenesei-software/jenesei-web-id-api'
import { Store } from '@tanstack/react-store'

export const store = new Store<{ createUser: (CreateUserDto & { dateOfSignUp: moment.Moment }) | null }>({
  createUser: null,
})
