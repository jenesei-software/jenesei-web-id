import { CardProps } from '.'
import { FontInterB16, FontInterM16 } from 'jenesei-react-ui'
import styled from 'styled-components'

export const UseInputCard = styled.button<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: 272px;
  height: 160px;
  border-radius: 12px;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  background-color: ${(props) => props.colorBackground} !important;
  color: ${(props) => props.colorFont} !important;
  & svg {
    & path {
      fill: ${(props) => props.colorFont} !important;
    }
  }
  & div {
    color: ${(props) => props.colorFont} !important;
  }
`

export const UseInputCardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const UseInputCardTopCardIssuerLogo = styled.div``

export const UseInputCardTopCardIssuerName = styled.div`
  ${FontInterB16};
`

export const UseInputCardButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

export const UseInputCardButtonLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`
export const UseInputCardButtonLeftCardNumberLast4 = styled.div`
  ${FontInterM16};
`
export const UseInputCardButtonLeftExpirationDate = styled.div`
  ${FontInterM16};
`

export const UseInputCardButtonRight = styled.div``
export const UseInputCardButtonRightCardNetwork = styled.div``
