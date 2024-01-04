import { ButtonBig } from '@components/button-big';
import { FC } from 'react';
import { LineOR } from '@components/line-or';
import { LogoServices } from '@assets/icons/logo-services';
import { ServicesWrapper } from '@pages/services';
import { SignUpForm } from './sign-up.form';
import { StyledInterB32, StyledInterR16 } from '@styles/fonts/inter';
import { useGoToLink } from '@hooks/use-go-to-link';
import { useTranslation } from 'react-i18next';
import {
  SignUpInfoContainer,
  SignUpInfoContinueContainer,
  SignUpProps,
  SignUpTitlesContainer,
  SignUpTitlesTwoContainer,
  StyledStyledInterR16,
} from ".";

export const SignUp: FC<SignUpProps> = () => {
  const { t } = useTranslation("sign-up");
  const goToLink = useGoToLink();

  return (
    <ServicesWrapper>
      <SignUpTitlesContainer>
        <StyledInterB32>{t("title-big")}</StyledInterB32>
        <SignUpTitlesTwoContainer>
          <StyledInterR16>{t("title-min")}</StyledInterR16>
          <StyledStyledInterR16 onClick={() => goToLink("/authorization/sign-in")}>
            {t("title-min-2")}
          </StyledStyledInterR16>
        </SignUpTitlesTwoContainer>
      </SignUpTitlesContainer>
      <SignUpInfoContainer>
        <SignUpForm />
        <SignUpInfoContinueContainer>
          <LineOR />
          <ButtonBig title={t("buttons.continue-with-google")} icon={LogoServices.Google.Input} type={"border"} />
          <ButtonBig title={t("buttons.continue-with-apple")} icon={LogoServices.Apple.Input} type={"border"} />
        </SignUpInfoContinueContainer>
      </SignUpInfoContainer>
    </ServicesWrapper>
  );
};
