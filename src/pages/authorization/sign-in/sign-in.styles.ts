import { StyledInterR16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import styled from 'styled-components'

export const SignInTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`
export const SignInTitlesTwoContainer = styled.div``
export const StyledStyledInterR16 = styled(StyledInterR16)`
  color: ${theme.colors.product['100']};
  cursor: pointer;
  margin: 0px 4px 0px 4px;
`

export const SignInInfoContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`

export const SignInInfoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  align-self: stretch;
  width: 100%;
`
export const SignInInfoContinueContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`
