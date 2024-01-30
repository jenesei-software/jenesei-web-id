import {
  AuthorizationBackgroundContainer,
  LogoWithTitleContainer,
  LayoutAuthorizationMainContainer,
  LayoutAuthorizationOutletContainer,
  LayoutAuthorizationTextContainer,
  LayoutAuthorizationWrapper,
} from '.'
import { AuthorizationBackground } from '@assets/authorization-background'
import { LogoWithTitle } from '@assets/icons/logo-with-title'
import { StyledInterB36, StyledInterR24 } from '@styles/fonts/inter'
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
          <StyledInterB36>{t('main.title-big')}</StyledInterB36>
          <StyledInterR24>{t('main.title-min')}</StyledInterR24>
        </LayoutAuthorizationTextContainer>
      </LayoutAuthorizationMainContainer>
      <LayoutAuthorizationOutletContainer>
        <Outlet />
      </LayoutAuthorizationOutletContainer>
    </LayoutAuthorizationWrapper>
  )
}
