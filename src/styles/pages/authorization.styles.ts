import { theme } from '@styles/theme'
import styled from 'styled-components'

export const AuthorizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 100px;

  @media (max-width: ${theme.size.tablet}) {
    align-self: stretch;
    height: auto;
    justify-content: space-between;
  }
`
