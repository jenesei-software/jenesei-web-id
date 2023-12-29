import styled from "styled-components";

export const LayoutAuthorizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
`;

export const LayoutAuthorizationMainContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 100px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  background: var(--black-100, #000);
  color: ${(props) => props.theme.colors.black["100"]};

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    width: 100%;
    height: 170px;
    padding: 10px 100px;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    padding: 10px 50px;
  }
`;

export const LayoutAuthorizationLogoWrapper = styled.div`
  flex: 0 0 auto;
  position: relative;
`;
export const LayoutAuthorizationAuthorizationBackgroundWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  top: 0;
  @media (max-width: ${(props) => props.theme.size.tablet}) {
    display: none;
  }
`;
export const LayoutAuthorizationTextWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  margin-right: -33.42px;
  position: relative;

  & span {
    color: ${(props) => props.theme.colors.default.white};
  }
  @media (max-width: ${(props) => props.theme.size.tablet}) {
    display: none;
  }
`;
