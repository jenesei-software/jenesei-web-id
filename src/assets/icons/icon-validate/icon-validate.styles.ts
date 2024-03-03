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
  background: ${(props) => props.theme.colors.success[10]};
  & svg {
    width: 102px;
    height: 102px;
    & path {
      fill: ${(props) => props.theme.colors.success['100']};
    }
  }
`

export const IconValidateWrapperBigFalse = styled(IconValidateWrapperBigTrue)`
  background: ${(props) => props.theme.colors.danger['10']};
  & svg {
    & path {
      fill: ${(props) => props.theme.colors.danger['100']};
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
