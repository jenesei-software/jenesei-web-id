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
import { useInputString } from "@hooks/inputs/use-input-string";

export const SignIn: FC<SignInProps> = () => {
  const { t } = useTranslation("sign-in");
  const { value: valueEmailOrLogin, InputString: InputEmailOrLogin } = useInputString({
    placeholder: "Email or Login",
  });
  const { value: valuePassword, InputString: InputPassword } = useInputString({
    placeholder: "Password",
  });
  console.log(valueEmailOrLogin, valuePassword);
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
        <SignInInfoFormContainer>
          {InputEmailOrLogin}
          {InputPassword}
          <StyledStyledInterR16>{t("forgot-password")}</StyledStyledInterR16>
        </SignInInfoFormContainer>
        <SignInInfoButtonContainer></SignInInfoButtonContainer>
        <SignInInfoContinueContainer></SignInInfoContinueContainer>
      </SignInInfoContainer>
    </ServicesWrapper>
  );
};
