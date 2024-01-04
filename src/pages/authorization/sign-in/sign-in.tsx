import { useTranslation } from "react-i18next";
import {
  SignInForm,
  SignInInfoContainer,
  SignInInfoContinueContainer,
  SignInProps,
  SignInTitlesContainer,
  SignInTitlesTwoContainer,
  StyledStyledInterR16,
} from ".";
import { FC } from "react";
import { StyledInterB32, StyledInterR16 } from "@styles/fonts/inter";
import { ServicesWrapper } from "@pages/services";
import { ButtonBig } from "@components/button-big";
import { LineOR } from "@components/line-or";
import { LogoServices } from "@assets/icons/logo-services";
import { StyledLink } from "@components/styled";

export const SignIn: FC<SignInProps> = () => {
  const { t } = useTranslation("sign-in");
  return (
    <ServicesWrapper>
      <SignInTitlesContainer>
        <StyledInterB32>{t("title-big")}</StyledInterB32>
        <SignInTitlesTwoContainer>
          <StyledInterR16>{t("title-min")}</StyledInterR16>
          <StyledLink to="/authorization/sign-up">
            <StyledStyledInterR16>{t("title-min-2")}</StyledStyledInterR16>
          </StyledLink>
        </SignInTitlesTwoContainer>
      </SignInTitlesContainer>
      <SignInInfoContainer>
        <SignInForm />
        <SignInInfoContinueContainer>
          <LineOR />
          <ButtonBig title={t("buttons.continue-with-apple")} icon={LogoServices.Google.Input} type={"border"} />
          <ButtonBig title={t("buttons.continue-with-google")} icon={LogoServices.Apple.Input} type={"border"} />
        </SignInInfoContinueContainer>
      </SignInInfoContainer>
    </ServicesWrapper>
  );
};
