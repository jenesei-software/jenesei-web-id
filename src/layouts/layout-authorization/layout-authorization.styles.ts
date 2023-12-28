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
`;

export const LayoutAuthorizationLogoWrapper = styled.div`
  flex: 0 0 auto;
  position: relative;
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
    color: var(--default-white, #000);
  }
`;
