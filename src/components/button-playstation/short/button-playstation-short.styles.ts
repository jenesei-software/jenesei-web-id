import { ButtonPlaystationShortProps } from '.'
import styled, { css } from 'styled-components'

const ButtonPlaystationShortWrapperCheckedTrue = css`
  background: ${(props) => props.theme.colors.black[80]};
  color: ${(props) => props.theme.colors.white[100]};
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${(props) => props.theme.colors.white[100]};
    }
  }
  & span {
    color: ${(props) => props.theme.colors.white[100]};
  }
`

const ButtonPlaystationShortWrapperCheckedFalse = css`
  background: ${(props) => props.theme.colors.white[100]};
  color: ${(props) => props.theme.colors.black['80']};
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${(props) => props.theme.colors.black['80']};
    }
  }
  & span {
    color: ${(props) => props.theme.colors.black['80']};
  }
`

export const ButtonPlaystationShortWrapper = styled.button<
  Pick<ButtonPlaystationShortProps, 'checked'>
>`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border: none;
  display: flex;
  width: 44px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.effects.playstation.default};

  ${(props) =>
    props.checked === true
      ? ButtonPlaystationShortWrapperCheckedTrue
      : props.checked === false
        ? ButtonPlaystationShortWrapperCheckedFalse
        : ''};
`
