import { StyledInterB36, StyledInterM16 } from '@styles/fonts/inter'
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
export const UserTitleStyledInterB36 = styled(StyledInterB36)`
  @media (max-width: ${theme.size.mobile}) {
    font-size: 20px;
  }
`

export const UserTitleStyledInterM16 = styled(StyledInterM16)`
  @media (max-width: ${theme.size.mobile}) {
    font-size: 12px;
  }
`
