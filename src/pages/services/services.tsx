import { useTranslation } from "react-i18next";
import {
  ServicesButtonsContainer,
  ServicesListContainer,
  ServicesListItemContainer,
  ServicesProps,
  ServicesTitleContainer,
  ServicesWrapper,
} from ".";
import { FC } from "react";
import { StyledInterB32, StyledInterR16, StyledInterSB14 } from "@styles/fonts/inter";
import { ButtonBorder } from "@components/button-border";
import { LogoServicesJeneseiID, LogoServicesJeneseiTask } from "@assets/icons/logo-services";

export const Services: FC<ServicesProps> = () => {
  const { t } = useTranslation("services");

  return (
    <ServicesWrapper>
      <ServicesTitleContainer>
        <StyledInterB32>{t("pages.title-big") + "Stassie Strone"}</StyledInterB32>
        <StyledInterR16>{t("pages.title-min")}</StyledInterR16>
      </ServicesTitleContainer>
      <ServicesListContainer>
        <ServicesListContainer>
          <ServicesListItemContainer target="_blank" rel="noopener noreferrer" to={"https://task.jenesei.ru"}>
            <LogoServicesJeneseiTask />
            <StyledInterSB14>{t("JeneseiTask.name")}</StyledInterSB14>
          </ServicesListItemContainer>
          <ServicesListItemContainer to={`/user`}>
            <LogoServicesJeneseiID />
            <StyledInterSB14>{t("JeneseiID.name")}</StyledInterSB14>
          </ServicesListItemContainer>
        </ServicesListContainer>
      </ServicesListContainer>
      <ServicesButtonsContainer>
        <ButtonBorder styles="border" title={t("pages.logout")} />
      </ServicesButtonsContainer>
    </ServicesWrapper>
  );
};
