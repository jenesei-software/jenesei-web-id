import { StyledAuthorizationBackgroundWrapper } from ".";
import background from "./authorization-background.svg";

export const AuthorizationBackground = (): JSX.Element => {
  return (
    <StyledAuthorizationBackgroundWrapper>
      <img className="background" alt="Background" src={background} />
    </StyledAuthorizationBackgroundWrapper>
  );
};
