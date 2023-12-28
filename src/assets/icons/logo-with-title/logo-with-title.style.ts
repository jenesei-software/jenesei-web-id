import styled from "styled-components";
import { LogoWithTitle } from ".";

export const StyledLogoWithTitle = styled(LogoWithTitle)`
  align-items: center;
  display: inline-flex;
  gap: 14px;
  justify-content: center;
  position: relative;

  & .icon {
    height: 50px;
    position: relative;
    width: 50px;
  }

  & .title {
    height: 34px;
    position: relative;
    width: 207.17px;
  }
`;
