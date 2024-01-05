import { theme } from "@styles/theme";
import styled from "styled-components";

export const MenuSideBarWrapper = styled.div`
  position: relative;
  display: inline-flex;
  height: 100%;
  min-height: 908px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  width: 520px;
  min-height: max(calc(100dvh - 60px), 488px);

  @media (max-width: ${theme.size.mobile}) {
    display: none;
  }
  @media (max-width: ${theme.size.tablet}) {
    width: auto;
  }
`;
export const MenuSideBarWrapperContainer = styled.div`
  align-items: center;
  gap: 12px;
`;
export const MenuSideBarTitle = styled.div`
  display: flex;
  height: 68px;
  padding: 0px 20px;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;

  @media (max-width: ${theme.size.tablet}) {
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    padding: 0;
  }
`;
export const MenuSideLogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  padding: 0px 50px 0px 26px;
  align-items: center;
  gap: 16px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  background: ${theme.colors.black["100"]};

  & > :first-child {
    display: flex;
  }
  & > :last-child {
    display: none;
  }

  @media (max-width: ${theme.size.tablet}) {
    display: flex;
    width: 100%;
    height: 84px;
    justify-content: center;
    align-items: center;
    padding: 0;

    & > :first-child {
      display: none;
    }
    & > :last-child {
      display: flex;
    }
  }
`;
