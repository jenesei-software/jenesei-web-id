import styled, { css } from 'styled-components'
import { ButtonVolumetricShortProps } from '.'
import { theme } from '@styles/theme'

export const ButtonVolumetricShortWrapper = styled.div`
  display: flex;
  width: 44px;
  min-width: 44px;
  height: 44px;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.4s;
  box-shadow: ${theme.buttons.volumetric.effects.wrapper};
  background: ${theme.buttons.volumetric.wrapper};
`

const ButtonVolumetricShortContainerCheckedTrue = css`
  border: ${theme.buttons.volumetric.active.stroke};
  background: ${theme.buttons.volumetric.active.fill};
  box-shadow: ${theme.buttons.volumetric.effects.active};
`

const ButtonVolumetricShortContainerCheckedFalse = css`
  border: ${theme.buttons.volumetric.default.stroke};
  background: ${theme.buttons.volumetric.default.fill};
  box-shadow: ${theme.buttons.volumetric.effects.default};
`

export const ButtonVolumetricShortContainer = styled.div<
  Pick<ButtonVolumetricShortProps, 'checked' | 'disabled'>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 40px;
  transition:
    box-shadow 0.2s,
    border 0.2s,
    background 0.2s;
  border: ${(props) =>
    props.checked
      ? theme.buttons.volumetric.active.stroke
      : theme.buttons.volumetric.default.stroke};
  background: ${(props) =>
    props.checked
      ? theme.buttons.volumetric.active.fill
      : theme.buttons.volumetric.default.fill};
  box-shadow: ${(props) =>
    props.checked
      ? theme.buttons.volumetric.effects.active
      : theme.buttons.volumetric.effects.default};

  &:active {
    box-shadow: ${theme.buttons.volumetric.effects.active};
    border: ${theme.buttons.volumetric.active.stroke};
    background: ${theme.buttons.volumetric.active.fill};
  }
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${theme.colors.black['60']};
    }
  }
  ${(props) =>
    props.checked === true
      ? ButtonVolumetricShortContainerCheckedTrue
      : props.checked === false
        ? ButtonVolumetricShortContainerCheckedFalse
        : ''};
`
