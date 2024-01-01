import React from "react";
import { AuthorizationBackground } from "@assets/authorization-background";
import { LogoWithTitle } from "@assets/icons/logo-with-title";
import { Outlet } from "react-router-dom";
import { StyledInterB36, StyledInterR24 } from "@styles/fonts/inter";
import { useTranslation } from "react-i18next";
import {
  AuthorizationBackgroundContainer,
  LogoWithTitleContainer,
  LayoutAuthorizationMainContainer,
  LayoutAuthorizationOutletContainer,
  LayoutAuthorizationTextContainer,
  LayoutAuthorizationContainer,
} from ".";

export const LayoutAuthorization: React.FC = () => {
  const { t } = useTranslation("authorization");
  return (
    <LayoutAuthorizationContainer>
      <LayoutAuthorizationMainContainer>
        <LogoWithTitleContainer>
          <LogoWithTitle />
        </LogoWithTitleContainer>
        <AuthorizationBackgroundContainer>
          <AuthorizationBackground />
        </AuthorizationBackgroundContainer>
        <LayoutAuthorizationTextContainer>
          <StyledInterB36>{t("main.title-big")}</StyledInterB36>
          <StyledInterR24>{t("main.title-min")}</StyledInterR24>
        </LayoutAuthorizationTextContainer>
      </LayoutAuthorizationMainContainer>
      <LayoutAuthorizationOutletContainer>
        <Outlet />
      </LayoutAuthorizationOutletContainer>
    </LayoutAuthorizationContainer>
  );
};
