import { theme } from '@styles/theme'
import styled from 'styled-components'

export const MenuListWrapper = styled.div`
  display: flex;
  width: 428px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-top: 2px solid ${theme.colors.black['5']};
  z-index: 2;
  @media (max-width: ${theme.size.mobile}) {
    border-top: 0;
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: ${theme.header.effects.menu};
    background: ${theme.colors.gray.f2f2f7};
  }
`
