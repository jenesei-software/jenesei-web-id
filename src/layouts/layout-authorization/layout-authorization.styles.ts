import styled from 'styled-components'

export const LayoutAuthorizationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  height: 100dvh;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    flex-direction: column;
  }
`

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
  background: ${(props) => props.theme.colors.black['100']};
  color: ${(props) => props.theme.colors.black['100']};

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    width: 100%;
    height: 170px;
    padding: 10px 100px;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    padding: 10px 50px;
    align-items: center;
  }
`

export const LayoutAuthorizationOutletContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  padding: 100px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    justify-content: flex-start;
    width: 100%;
    min-height: calc(100% - 170px);
    padding: 50px;
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    padding: 20px;
  }
`

export const LogoWithTitleContainer = styled.div`
  flex: 0 0 auto;
  position: relative;

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    height: 170px;
    display: flex;
    align-items: center;
  }
`
export const AuthorizationBackgroundContainer = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  top: 0;

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    display: none;
  }
`
export const LayoutAuthorizationTextContainer = styled.div`
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
`
