import { UIUserLine } from '@styles/components'
import { FrameColumnGap300, FrameRowGap } from '@styles/components'
import { InputString, SpanInterB16 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const LoginAndSecurityFormLogin: React.FC = () => {
  const { t } = useTranslation('login-and-security', { keyPrefix: 'login' })
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <SpanInterB16>{t('title-1')}</SpanInterB16>
          <InputString
            theme="cloud"
            placeholder={t('inputs.login')}
            readOnly
            value={'stassiestrone'}
          />
        </FrameColumnGap300>
      </FrameRowGap>
    </React.Fragment>
  )
}
