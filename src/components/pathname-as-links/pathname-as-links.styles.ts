import styled from 'styled-components'

export const PathnameAsLinksWrapper = styled.div`
  height: 68px;
  min-height: 68px;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 6px;
  & span {
    cursor: pointer;
  }
  & svg {
    width: 14px;
    height: 14px;
    & path {
      color: ${(props) => props.theme.colors.black[60]};
    }
  }
  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    height: 40px;
    min-height: 40px;
  }
`
