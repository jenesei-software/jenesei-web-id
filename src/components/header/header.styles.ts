import styled from 'styled-components'

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
  background: ${(props) => props.theme.colors.black['5']};
  box-shadow: ${(props) => props.theme.effects.header.wrapper};
`
export const HeaderMobileContainer = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    display: flex;
  }
`
export const HeaderDesktopContainer = styled.div`
  display: block;
  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    display: none;
  }
`
export const HeaderMenuListContainer = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    display: contents;
  }
`
