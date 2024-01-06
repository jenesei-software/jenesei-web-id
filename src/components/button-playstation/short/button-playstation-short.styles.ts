import styled, { css } from 'styled-components'
import { ButtonPlaystationShortProps } from '.'
import { theme } from '@styles/theme'

const ButtonPlaystationShortWrapperCheckedTrue = css`
  background: ${theme.buttons.playstation.active.fill};
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${theme.colors.default.white};
    }
  }
`

const ButtonPlaystationShortWrapperCheckedFalse = css`
  background: ${theme.buttons.playstation.default.fill};
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${theme.colors.black['80']};
    }
  }
`

export const ButtonPlaystationShortWrapper = styled.div<
  Pick<ButtonPlaystationShortProps, 'checked'>
>`
  display: flex;
  width: 44px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  box-shadow: ${theme.buttons.playstation.effects.default};

  ${(props) =>
    props.checked === true
      ? ButtonPlaystationShortWrapperCheckedTrue
      : props.checked === false
        ? ButtonPlaystationShortWrapperCheckedFalse
        : ''};
`
