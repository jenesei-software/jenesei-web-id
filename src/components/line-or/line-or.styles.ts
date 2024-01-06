import { theme } from '@styles/theme'
import styled from 'styled-components'

export const LineOrWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.black['50']};
`
