import { theme } from '@styles/theme'
import styled from 'styled-components'

export const IconValidateBigTrueColorWrapper = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  padding: 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${theme.colors.color.green['10']};
  & svg {
    width: 102px;
    height: 102px;
    & path {
      fill: ${theme.colors.color.green['100']};
    }
  }
`
