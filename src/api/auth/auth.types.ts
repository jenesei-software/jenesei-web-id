/***************************************** getAuthVerify *************************************************/
export interface postAuthVerifyRequest {
  params: {
    phone: string
  }
}

export interface postAuthVerifyResponse {
  key: string
  requireAgreement: boolean
}

/***************************************** postAuthGenerate *************************************************/

export interface postAuthGenerateRequest {
  body: {
    key: string
    phone: string
  }
}

export interface postAuthGenerateResponse {
  time: number
}

/***************************************** postAuthCode *************************************************/

export interface postAuthCodeRequest {
  body: {
    code: string
    key: string
    phone: string
  }
}

export interface postAuthCodeResponse extends ITokenData {}

/***************************************** postAuthTokenRefresh *************************************************/

export interface postAuthTokenRefreshRequest {
  body: {
    token: string
  }
}

export interface postAuthTokenRefreshResponse extends ITokenData {}

/***************************************** postLicense *************************************************/
export interface postLicenseRequest {
  body: {
    key: string
    phone: string
  }
}

export interface postLicenseResponse {}

/***************************************** getLicense *************************************************/
export interface getLicenseRequest {
  params: {
    phone: string
  }
}

export type getLicenseResponse = string[]

/***************************************** ITokenData *************************************************/

export interface ITokenData {
  duration: number
  refreshDuration: number
  refreshToken: string
  token: string
}

export const DefaultTokenData: ITokenData = {
  duration: 0,
  refreshDuration: 0,
  refreshToken: '',
  token: '',
}
