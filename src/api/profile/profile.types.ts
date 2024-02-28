/****************************************** Profile API *************************************************/
/*
 * Получить профиль
 */
export interface getProfileUsernameRequest {
  path: {
    username: string
  }
}

/****************************************** Schema *************************************************/
export interface Profile {
  _id: string
  email: string
  username: string
}
