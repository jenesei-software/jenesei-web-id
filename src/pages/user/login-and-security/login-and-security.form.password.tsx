import { useInputString } from '@hooks/inputs/use-input-string'
import { StyledInterB16 } from '@styles/fonts/inter'
import { FrameColumnGap300, FrameRowGap, UserLine } from '@styles/pages'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormPassword: React.FC = () => {
  const { t } = useTranslation('login-and-security', { keyPrefix: 'password' })
  const { InputString: InputFirstEmail } = useInputString({
    placeholder: t('inputs.password'),
    noSpaces: true,
    readOnly: true,
    type: 'password',
    initialValue: 'pipipipupu',
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
