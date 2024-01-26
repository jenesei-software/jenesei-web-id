export interface ListEmailAddHookForm {
  email: string
  code: string
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
