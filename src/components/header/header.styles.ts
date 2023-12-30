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
  background: ${(props) => props.theme.colors.black["5"]};
  box-shadow: ${(props) => props.theme.header.effects.wrapper};
  position: relative;
  @media (max-width: ${(props) => props.theme.size.tablet}) {
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
  }
`;
export const HeaderMobileContainer = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    display: flex;
  }
`;
export const HeaderDesktopContainer = styled.div`
  display: block;
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    display: none;
  }
`;
export const HeaderMenuListContainer = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    display: contents;
  }
`;