import styled from "styled-components";
import { IButtonPlaystationShortContainer, ButtonPlaystationShortWrapper } from "../short";

export const ButtonPlaystationLongWrapper = styled(ButtonPlaystationShortWrapper)<IButtonPlaystationShortContainer>`
  width: max-content;
  display: inline-flex;
  height: 44px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;
