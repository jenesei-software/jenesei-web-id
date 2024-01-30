import { ButtonBorderLongProps } from '.'
import styled, { css } from 'styled-components'

const ButtonBorderLongWrapperBlack = css`
  border: 1px solid transparent;
  background: ${(props) => props.theme.colors.black['100']};
  color: ${(props) => props.theme.colors.default.white};
  & span {
    color: ${(props) => props.theme.colors.default.white};
  }
`

const ButtonBorderLongWrapperGrey = css`
  border: 1px solid transparent;
  background: ${(props) => props.theme.colors.black['10']};
  color: ${(props) => props.theme.colors.black['60']};
  & span {
    color: ${(props) => props.theme.colors.black['60']};
  }
`
const ButtonBorderLongWrapperWhite = css`
  border: 1px solid white;
  background: ${(props) => props.theme.colors.black['10']};
  color: ${(props) => props.theme.colors.black['60']};
  & span {
    color: ${(props) => props.theme.colors.black['60']};
  }
`
const ButtonBorderLongWrapperBorder = css`
  border: 1px solid ${(props) => props.theme.colors.black['10']};
  background: ${(props) => props.theme.colors.default.white};
  color: ${(props) => props.theme.colors.black['60']};
  & span {
    color: ${(props) => props.theme.colors.black['60']};
  }
`
export const ButtonBorderLongWrapper = styled.button<
  Pick<ButtonBorderLongProps, 'type'>
>`
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: inline-flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  user-select: none;
  cursor: pointer;
  height: 44px;
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${(props) => props.theme.colors.black['60']};
    }
  }
  ${(props) =>
    props.type === 'black'
      ? ButtonBorderLongWrapperBlack
      : props.type === 'grey'
        ? ButtonBorderLongWrapperGrey
        : props.type === 'white'
          ? ButtonBorderLongWrapperWhite
          : props.type === 'border'
            ? ButtonBorderLongWrapperBorder
            : ''};
`
