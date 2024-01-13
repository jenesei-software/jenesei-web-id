import { theme } from '@styles/theme'
import styled from 'styled-components'

export const IconValidateWrapperBigTrue = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  padding: 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  box-sizing: border-box;
  background: ${theme.colors.color.green['10']};
  & svg {
    width: 102px;
    height: 102px;
    & path {
      fill: ${theme.colors.color.green['100']};
    }
  }
`

export const IconValidateWrapperBigFalse = styled(IconValidateWrapperBigTrue)`
  background: ${theme.colors.color.red['10']};
  & svg {
    & path {
      fill: ${theme.colors.color.red['100']};
    }
  }
`

export const IconValidateWrapperMinTrue = styled(IconValidateWrapperBigTrue)`
  width: 42px;
  height: 42px;
  padding: 9px;
  & svg {
    width: 24px;
    height: 24px;
  }
`

export const IconValidateWrapperMinFalse = styled(IconValidateWrapperBigFalse)`
  width: 42px;
  height: 42px;
  padding: 9px;
  & svg {
    width: 24px;
    height: 24px;
  }
`
