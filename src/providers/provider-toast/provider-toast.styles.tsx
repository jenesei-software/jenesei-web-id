import styled from 'styled-components'

export const StyledCustomToast = styled.div`
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    display: none;
  }
`

export const StyledCustomToastContent = styled.div`
  width: 100%;
  height: 44px;
  padding: 8px 14px;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
`
export const StyledCustomToastContentType = styled.div`
  width: 26px;
  height: 26px;
`
