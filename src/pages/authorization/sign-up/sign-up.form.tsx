import { ButtonBig } from "@components/button-big";
import { FC, useEffect, useReducer } from "react";
import { IconCurved } from "@assets/icons/icon-curved/icon-curved";
import { StyledInterR16 } from "@styles/fonts/inter";
import { useGoToLink } from "@hooks/use-go-to-link";
import { useInputString } from "@hooks/inputs/use-input-string";
import { useSwitch } from "@hooks/inputs/use-switch";
import { useTranslation } from "react-i18next";
import {
  SignUpInfoFormContainer,
  SignUpInfoFormSwitchAgreementContainer,
  SignUpInfoFormSwitchContainer,
  SignUpProps,
  StyledStyledInterR16,
} from ".";
import { useDatePicker } from "@hooks/inputs/use-datepicker";

export const SignUpForm: FC<SignUpProps> = () => {
  const { t } = useTranslation(["sign-up", "terms-of-service", "privacy-policy"]);
  const goToLink = useGoToLink();
  const [isHide, toggle] = useReducer((checked) => !checked, false);
  const { Switch, value } = useSwitch({ value: false });

  const { value: valueEmail, InputString: InputEmail } = useInputString({
    placeholder: t("sign-up:inputs.email"),
    type: "email",
    noSpaces: true,
  });
  const { value: valueLogin, InputString: InputLogin } = useInputString({
    placeholder: t("sign-up:inputs.login"),
    noSpaces: true,
  });
  const { value: valueDateOfBirth, InputUseDatePicker: InputDateOfBirth } = useDatePicker({
    placeholder: t("sign-up:inputs.date-of-birth"),
  });
  const { value: valuePassword, InputString: InputPassword } = useInputString({
    placeholder: t("sign-up:inputs.password"),
    type: "password",
    noSpaces: true,
  });
  const { value: valueRepeatPassword, InputString: InputRepeatPassword } = useInputString({
    placeholder: t("sign-up:inputs.repeat-password"),
    type: isHide ? "password" : "text",
    noSpaces: true,
    icon: {
      value: isHide ? IconCurved.Hide : IconCurved.Show,
      onCLick: () => {
        toggle();
      },
    },
  });
  console.log(value, valueEmail, valueLogin, valuePassword, valueRepeatPassword, valueDateOfBirth);
  useEffect(() => {
    if (!isHide) {
      const timeoutId = setTimeout(() => {
        toggle();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isHide]);
  return (
    <SignUpInfoFormContainer>
      {InputEmail}
      {InputLogin}
      {InputDateOfBirth}
      {InputPassword}
      {InputRepeatPassword}
      <SignUpInfoFormSwitchContainer>
        {Switch}
        <SignUpInfoFormSwitchAgreementContainer>
          <StyledInterR16>{t("sign-up:agree-1")}</StyledInterR16>
          <StyledStyledInterR16 onClick={() => goToLink("/terms-of-service")}>
            {t("terms-of-service:default")}
          </StyledStyledInterR16>
          <StyledInterR16>{t("sign-up:agree-2")}</StyledInterR16>
          <StyledStyledInterR16 onClick={() => goToLink("/privacy-policy")}>
            {t("privacy-policy:default")}
          </StyledStyledInterR16>
        </SignUpInfoFormSwitchAgreementContainer>
      </SignUpInfoFormSwitchContainer>
      <ButtonBig title={t("buttons.create-account")} type={"product"} />
    </SignUpInfoFormContainer>
  );
};
