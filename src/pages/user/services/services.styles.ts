import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ServicesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
  }
`
export const ServicesListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  align-self: stretch;
  flex-wrap: wrap;

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
  }
`

export const ServicesListItemButton = styled.button`
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  text-decoration: none;
  display: flex;
  height: 186px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.product[100]};
  background: ${(props) => props.theme.colors.white[100]};
  box-shadow: ${(props) => props.theme.effects.volumetric.default};

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    height: 142px;
    & .icon {
      width: 84px;
      height: 84px;
    }
  }
`

export const ServicesListItemContainer = styled(Link)`
  text-decoration: none;
`
export const ServicesButtonsContainer = styled.div`
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
  }
`

export const ServicesStyledImg = styled.img`
  width: 122px;
  height: 122px;
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    width: 84px;
    height: 84px;
  }
`
