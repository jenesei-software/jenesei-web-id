import { theme } from "@styles/theme";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background: ${theme.colors.black["5"]};
  box-shadow: ${theme.header.effects.wrapper};
`;
export const HeaderMobileContainer = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  @media (max-width: ${theme.size.mobile}) {
    display: flex;
  }
`;
export const HeaderDesktopContainer = styled.div`
  display: block;
  @media (max-width: ${theme.size.mobile}) {
    display: none;
  }
`;
export const HeaderMenuListContainer = styled.div`
  display: none;
  @media (max-width: ${theme.size.mobile}) {
    display: contents;
  }
`;
