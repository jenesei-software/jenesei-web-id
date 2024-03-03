import { SpanInterR16 } from 'jenesei-react-ui'
import styled from 'styled-components'

export const SignUpTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`
export const SignUpTitlesTwoContainer = styled.div``
export const StyledSpanInterR16 = styled(SpanInterR16)`
  color: ${(props) => props.theme.colors.product['100']};
  cursor: pointer;
  margin: 0px 4px 0px 4px;
`

export const SignUpInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`
export const SignUpInfoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  align-self: stretch;
  width: 100%;
`
export const SignUpInfoContinueContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`
export const SignUpInfoFormSwitchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
`
export const SignUpInfoFormSwitchAgreementContainer = styled.div``
