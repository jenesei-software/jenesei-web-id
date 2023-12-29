import React from "react";
import { Outlet } from "react-router-dom";
import { StyledInterB36, StyledInterR24 } from "@styles/fonts/inter";
import { useTranslation } from "react-i18next";
import {
  LayoutAuthorizationAuthorizationBackgroundWrapper,
  LayoutAuthorizationLogoWrapper,
  LayoutAuthorizationMainContainer,
  LayoutAuthorizationTextWrapper,
  LayoutAuthorizationWrapper,
} from ".";
import { LogoWithTitle } from "@assets/icons/logo-with-title";
import { AuthorizationBackground } from "@assets/icons/authorization-background";

export const LayoutAuthorization: React.FC = () => {
  const { t } = useTranslation("authorization");
  return (
    <LayoutAuthorizationWrapper>
      <LayoutAuthorizationMainContainer>
        <LayoutAuthorizationLogoWrapper>
          <LogoWithTitle />
        </LayoutAuthorizationLogoWrapper>
        <LayoutAuthorizationAuthorizationBackgroundWrapper>
          <AuthorizationBackground />
        </LayoutAuthorizationAuthorizationBackgroundWrapper>
        <LayoutAuthorizationTextWrapper>
          <StyledInterB36>{t("main.title-big")}</StyledInterB36>
          <StyledInterR24>{t("main.title-min")}</StyledInterR24>
        </LayoutAuthorizationTextWrapper>
      </LayoutAuthorizationMainContainer>
      <Outlet />
    </LayoutAuthorizationWrapper>
  );
};
