import { useTranslation } from "react-i18next";
import {
  SignInInfoButtonContainer,
  SignInInfoContainer,
  SignInInfoContinueContainer,
  SignInInfoFormContainer,
  SignInProps,
  SignInTitlesContainer,
  SignInTitlesTwoContainer,
  StyledStyledInterR16,
} from ".";
import { FC } from "react";
import { StyledInterB32, StyledInterR16 } from "@styles/fonts/inter";
import { ServicesWrapper } from "@pages/services";

export const SignIn: FC<SignInProps> = () => {
  const { t } = useTranslation("sign-in");

  return (
    <ServicesWrapper>
      <SignInTitlesContainer>
        <StyledInterB32>{t("title-big")}</StyledInterB32>
        <SignInTitlesTwoContainer>
          <StyledInterR16>{t("title-min")}</StyledInterR16>
          <StyledStyledInterR16>{t("title-min-2")}</StyledStyledInterR16>
        </SignInTitlesTwoContainer>
      </SignInTitlesContainer>
      <SignInInfoContainer>
        <SignInInfoFormContainer></SignInInfoFormContainer>
        <SignInInfoButtonContainer></SignInInfoButtonContainer>
        <SignInInfoContinueContainer></SignInInfoContinueContainer>
      </SignInInfoContainer>
    </ServicesWrapper>
  );
};
