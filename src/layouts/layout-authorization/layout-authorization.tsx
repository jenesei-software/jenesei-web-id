import React from "react";
import { Outlet } from "react-router-dom";
import { StyledInterB36, StyledInterR24 } from "@styles/fonts/inter";
import { StyledLogoWithTitle } from "@assets/icons/logo-with-title";
import { useTranslation } from "react-i18next";
import {
  LayoutAuthorizationLogoWrapper,
  LayoutAuthorizationMainContainer,
  LayoutAuthorizationTextWrapper,
  LayoutAuthorizationWrapper,
} from ".";

export const LayoutAuthorization: React.FC = () => {
  const { t } = useTranslation("authorization");

  return (
    <LayoutAuthorizationWrapper>
      <LayoutAuthorizationMainContainer>
        <LayoutAuthorizationLogoWrapper>
          <StyledLogoWithTitle />
        </LayoutAuthorizationLogoWrapper>
        <LayoutAuthorizationTextWrapper>
          <StyledInterB36>{t("main.title-big")}</StyledInterB36>
          <StyledInterR24>{t("main.title-min")}</StyledInterR24>
        </LayoutAuthorizationTextWrapper>
      </LayoutAuthorizationMainContainer>
      <Outlet />
    </LayoutAuthorizationWrapper>
  );
};
