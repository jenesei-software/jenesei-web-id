import { Input } from '@components/input'
import { StyledInterB16 } from '@styles/fonts/inter'
import { FrameColumnGap300, FrameRowGap, UserLine } from '@styles/pages'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormPassword: React.FC = () => {
  const { t } = useTranslation('login-and-security', { keyPrefix: 'password' })
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <Input
            placeholder={t('inputs.password')}
            readOnly
            type="password"
            value={'pipipipupu'}
          />
        </FrameColumnGap300>
      </FrameRowGap>
    </React.Fragment>
  )
}
