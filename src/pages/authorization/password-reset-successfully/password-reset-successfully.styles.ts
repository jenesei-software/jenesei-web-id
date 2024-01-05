import { theme } from "@styles/theme";
import styled from "styled-components";

export const PasswordResetSuccessfullyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  height: 100%;
  gap: 20px;

  @media (max-width: ${theme.size.tablet}) {
    align-self: stretch;
    height: auto;
    justify-content: space-between;
  }
`;