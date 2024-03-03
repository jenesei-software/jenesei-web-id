import { ButtonVolumetricShortProps } from '.'
import styled, { css } from 'styled-components'

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
  box-shadow: ${(props) => props.theme.effects.volumetric.wrapper};
  background: ${(props) => props.theme.backgrounds.volumetric.wrapper};
`

const ButtonVolumetricShortContainerCheckedTrue = css`
  border: 2px solid ${(props) => props.theme.colors.gray.fafafa};
  background: ${(props) => props.theme.backgrounds.volumetric.active};
  box-shadow: ${(props) => props.theme.effects.volumetric.active};
`

const ButtonVolumetricShortContainerCheckedFalse = css`
  border: 2px solid ${(props) => props.theme.colors.white[100]};
  background: ${(props) => props.theme.backgrounds.volumetric.default};
  box-shadow: ${(props) => props.theme.effects.volumetric.default};
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
      ? `2px solid ${props.theme.colors.gray.fafafa}`
      : `2px solid ${props.theme.colors.white[100]}`};
  background: ${(props) =>
    props.checked
      ? props.theme.backgrounds.volumetric.active
      : props.theme.backgrounds.volumetric.default};
  box-shadow: ${(props) =>
    props.checked
      ? props.theme.effects.volumetric.active
      : props.theme.effects.volumetric.default};

  &:active {
    box-shadow: ${(props) => props.theme.effects.volumetric.active};
    border: 2px solid ${(props) => props.theme.colors.gray.fafafa};
    background: ${(props) => props.theme.backgrounds.volumetric.active};
  }
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${(props) => props.theme.colors.black['60']};
    }
  }
  ${(props) =>
    props.checked === true
      ? ButtonVolumetricShortContainerCheckedTrue
      : props.checked === false
        ? ButtonVolumetricShortContainerCheckedFalse
        : ''};
`
