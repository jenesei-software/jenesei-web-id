import {
  AuthorizationBackgroundContainer,
  LogoWithTitleContainer,
  LayoutAuthorizationMainContainer,
  LayoutAuthorizationOutletContainer,
  LayoutAuthorizationTextContainer,
  LayoutAuthorizationWrapper,
  LayoutAuthorizationStyledImg,
} from '.'
import MadeInJenesei from '../../../public/made-in-jenesei.png'
import { AuthorizationBackground } from '@assets/authorization-background'
import { LogoWithTitle } from '@assets/icons/logo-with-title'
import { SpanInterB36, SpanInterR24 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'

/*
 * The wrapper for unauthorized users
 */
export const LayoutAuthorization: React.FC = () => {
  const { t } = useTranslation('authorization')

  return (
    <LayoutAuthorizationWrapper>
      <LayoutAuthorizationMainContainer>
        <LogoWithTitleContainer>
          <LogoWithTitle />
        </LogoWithTitleContainer>
        <AuthorizationBackgroundContainer>
          <AuthorizationBackground />
        </AuthorizationBackgroundContainer>
        <LayoutAuthorizationTextContainer>
          <SpanInterB36>{t('main.title-big')}</SpanInterB36>
          <SpanInterR24>{t('main.title-min')}</SpanInterR24>
        </LayoutAuthorizationTextContainer>
        <LayoutAuthorizationStyledImg src={MadeInJenesei} />
      </LayoutAuthorizationMainContainer>
      <LayoutAuthorizationOutletContainer>
        <Outlet />
      </LayoutAuthorizationOutletContainer>
    </LayoutAuthorizationWrapper>
  )
}
