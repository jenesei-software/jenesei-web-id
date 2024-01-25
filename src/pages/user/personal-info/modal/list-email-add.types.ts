export interface ListEmailAddHookForm {
  email: string
  code: number | null
  step:
    | 'start'
    | 'checkEmail'
    | 'badCheckEmail'
    | 'sendCode'
    | 'badSendCode'
    | 'expectation'
    | 'badExpectation'
    | 'save'
    | 'badSave'
}
