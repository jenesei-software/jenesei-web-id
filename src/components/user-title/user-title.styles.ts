import { theme } from '@styles/theme'
import styled from 'styled-components'

export const UserTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  @media (max-width: ${theme.size.mobile}) {
  }
`
