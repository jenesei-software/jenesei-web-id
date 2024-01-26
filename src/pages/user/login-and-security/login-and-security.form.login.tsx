import { Input } from '@components/input'
import { StyledUserLine } from '@styles/components'
import { FrameColumnGap300, FrameRowGap } from '@styles/components'
import { StyledInterB16 } from '@styles/fonts/inter'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormLogin: React.FC = () => {
  const { t } = useTranslation('login-and-security', { keyPrefix: 'login' })
  return (
    <React.Fragment>
      <StyledUserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          <Input
            placeholder={t('inputs.login')}
            readOnly
            value={'stassiestrone'}
          />
        </FrameColumnGap300>
      </FrameRowGap>
    </React.Fragment>
  )
}
