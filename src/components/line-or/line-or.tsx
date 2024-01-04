import React from "react";
import { LineOrWrapper, StyledLine } from ".";
import { useTranslation } from "react-i18next";
import { StyledInterR16 } from "@styles/fonts/inter";

export const LineOR: React.FC = () => {
  const { t } = useTranslation("or");

  return (
    <LineOrWrapper>
      <StyledLine />
      <StyledInterR16>{t("default")}</StyledInterR16>
      <StyledLine />
    </LineOrWrapper>
  );
};
