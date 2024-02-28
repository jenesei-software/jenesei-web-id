/****************************************** Auth API *************************************************/
/*
 * Авторизация
 */
export interface postAuthSignInRequest {
  body: SignInDto
}

/*
 * Регистрация
 */
export interface postAuthSignUpRequest {
  body: SignUpDto
}

/****************************************** Schema *************************************************/
export interface SignInDto {
  username: string
  password: string
}

export interface SignUpDto {
  username: string
  password: string
  email: string
}
