import { StyledInterR16 } from "@styles/fonts/inter";
import styled from "styled-components";

export const SignInTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const SignInTitlesTwoContainer = styled.div``;
export const StyledStyledInterR16 = styled(StyledInterR16)`
  color: ${(props) => props.theme.colors.product["100"]};
  cursor: pointer;
`;

export const SignInInfoContainer = styled.div`
  width: 100%;
`;
export const SignInInfoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  align-self: stretch;
  width: 100%;
`;
export const SignInInfoButtonContainer = styled.div``;
export const SignInInfoContinueContainer = styled.div``;
