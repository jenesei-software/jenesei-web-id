import { ButtonPlaystationShortProps } from '.'
import { theme } from '@styles/theme'
import styled, { css } from 'styled-components'

const ButtonPlaystationShortWrapperCheckedTrue = css`
  background: ${theme.buttons.playstation.active.fill};
  color: ${theme.colors.default.white};
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${theme.colors.default.white};
    }
  }
  & span {
    color: ${theme.colors.default.white};
  }
`

const ButtonPlaystationShortWrapperCheckedFalse = css`
  background: ${theme.buttons.playstation.default.fill};
  color: ${theme.colors.black['80']};
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${theme.colors.black['80']};
    }
  }
  & span {
    color: ${theme.colors.black['80']};
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
  box-shadow: ${theme.buttons.playstation.effects.default};

  ${(props) =>
    props.checked === true
      ? ButtonPlaystationShortWrapperCheckedTrue
      : props.checked === false
        ? ButtonPlaystationShortWrapperCheckedFalse
        : ''};
`
