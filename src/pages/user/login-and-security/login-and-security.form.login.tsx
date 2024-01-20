import { useInputString } from '@hooks/inputs/use-input-string'
import { StyledInterB16 } from '@styles/fonts/inter'
import { FrameColumnGap300, FrameRowGap, UserLine } from '@styles/pages'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormLogin: React.FC = () => {
  const { t } = useTranslation('login-and-security', { keyPrefix: 'login' })
  const { InputString: InputFirstEmail } = useInputString({
    placeholder: t('inputs.login'),
    noSpaces: true,
    readOnly: true,
    initialValue: 'stassiestrone',
  })
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          {InputFirstEmail}
        </FrameColumnGap300>
      </FrameRowGap>
    </React.Fragment>
  )
}
