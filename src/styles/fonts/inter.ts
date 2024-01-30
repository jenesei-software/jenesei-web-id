import styled, { css } from 'styled-components'

export interface StyledInterProps {
  color?: string
}

const FontInter = css`
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  color: ${(props) => props.theme.colors.black['80']};
`

export const FontInterSB14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 600;
`
export const StyledInterSB14 = styled.span<StyledInterProps>`
  ${FontInterSB14};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

const FontInterSB16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 600;
`
export const StyledInterSB16 = styled.span<StyledInterProps>`
  ${FontInterSB16};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

const FontInterSB18 = css`
  ${FontInter};
  font-size: 18px;
  font-weight: 600;
`
export const StyledInterSB18 = styled.span<StyledInterProps>`
  ${FontInterSB18};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

const FontInterSB20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 600;
`
export const StyledInterSB20 = styled.span<StyledInterProps>`
  ${FontInterSB20};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

export const FontInterM12 = css`
  ${FontInter};
  font-size: 12px;
  font-weight: 500;
`
export const StyledInterM12 = styled.span<StyledInterProps>`
  ${FontInterM12};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

export const FontInterM14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 500;
`
export const StyledInterM14 = styled.span<StyledInterProps>`
  ${FontInterM14};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

export const FontInterM16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 500;
`
export const StyledInterM16 = styled.span<StyledInterProps>`
  ${FontInterM14};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`
export const StyledInterM16Mobile = styled.span<StyledInterProps>`
  ${FontInterM14};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    font-size: 12px;
  }
`

export const FontInterM20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 500;
`

export const FontInterB14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 700;
`
export const StyledInterB14 = styled.span<StyledInterProps>`
  ${FontInterB14};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

export const FontInterB16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 700;
`
export const StyledInterB16 = styled.span<StyledInterProps>`
  ${FontInterB16};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

export const FontInterB20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 700;
`
export const StyledInterB20 = styled.span<StyledInterProps>`
  ${FontInterB20};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

const FontInterB32 = css`
  ${FontInter};
  font-size: 32px;
  font-weight: 700;
`
export const StyledInterB32 = styled.span<StyledInterProps>`
  ${FontInterB32};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

const FontInterB36 = css`
  ${FontInter};
  font-size: 36px;
  font-weight: 700;
`
export const StyledInterB36 = styled.span<StyledInterProps>`
  ${FontInterB36};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`
export const StyledInterB36Mobile = styled.span<StyledInterProps>`
  ${FontInterB36};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    font-size: 20px;
  }
`

const FontInterR14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 400;
`
export const StyledInterR14 = styled.span<StyledInterProps>`
  ${FontInterR14};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

export const FontInterR16 = css`
  ${FontInter};
  font-size: 16px !important;
  font-weight: 400;
`
export const StyledInterR16 = styled.span<StyledInterProps>`
  ${FontInterR16};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`

const FontInterR24 = css`
  ${FontInter};
  font-size: 24px;
  font-weight: 400;
`
export const StyledInterR24 = styled.span<StyledInterProps>`
  ${FontInterR24};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.black['80']};
`
