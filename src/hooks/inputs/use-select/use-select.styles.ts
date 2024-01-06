import styled, { css } from 'styled-components'
import { UseSelectProps } from '.'
import { theme } from '@styles/theme'
import { FontInterR16 } from '@styles/fonts/inter'

const UseSelectWrapperTypeVolumetric = css`
  transition: all 0.4s;
  box-shadow: ${theme.buttons.volumetric.effects.wrapper};
  background: ${theme.buttons.volumetric.wrapper};

  & .react-dropdown-select {
    border: ${theme.buttons.volumetric.default.stroke};
    background: ${theme.buttons.volumetric.default.fill};
    box-shadow: ${theme.buttons.volumetric.effects.default};

    &:focus-within,
    &:focus,
    &:hover,
    &:active,
    &:focus-visible {
      border: ${theme.buttons.volumetric.active.stroke};
      background: ${theme.buttons.volumetric.active.fill};
      box-shadow: ${theme.buttons.volumetric.effects.active};
    }
  }
`
const UseSelectWrapperTypeDefault = css`
  & .react-dropdown-select {
    border: 2px solid ${theme.colors.black['60']};
    background: ${theme.colors.default.white};
    box-shadow: ${theme.inputs.default.effects.boxShadow};

    &:focus-within,
    &:focus,
    &:hover,
    &:active,
    &:focus-visible {
      border: 1px solid ${theme.colors.black['100']};
      background: ${theme.colors.default.white};
      box-shadow: ${theme.buttons.volumetric.effects.active};
    }
  }
`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UseSelectWrapper = styled.div<Pick<UseSelectProps<any>, 'type'>>`
  ${(props) =>
    props.type == 'volumetric'
      ? UseSelectWrapperTypeVolumetric
      : UseSelectWrapperTypeDefault}
  height: 100%;
  padding: 3px;
  border-radius: 8px;

  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;

  & .react-dropdown-select-input {
    font-size: 16px !important;
  }
  & .react-dropdown-select-item {
    ${FontInterR16};
    line-height: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;
    height: 40px;
    min-height: 40px;
    padding: 8px 8px;
    align-self: stretch;
    box-sizing: border-box;
    white-space: nowrap;
    flex: 1;
    color: ${theme.colors.gray['484848']};

    &:active,
    &:hover {
      border-radius: 6px;

      background: ${theme.colors.product['20']} !important;
    }
  }
  & .react-dropdown-select-dropdown {
    border-radius: 6px;
    padding: 4px;

    border: 1px solid ${theme.colors.gray.c7c7cc};
    background: ${theme.colors.default.white};
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
  & .react-dropdown-select-item-selected {
    font-weight: 700;
    border-radius: 6px;

    color: ${theme.colors.black['100']} !important;
    border-bottom: 1px solid ${theme.colors.product['100']} !important;
    border: 1px solid ${theme.colors.product['100']};
    background: ${theme.colors.product['20']} !important;
  }
  & .react-dropdown-select-dropdown-handle {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;

    color: ${theme.colors.black['80']};
    & path {
      fill: ${theme.colors.black['60']} !important;
    }
    &:hover path,
    &:focus path {
      fill: ${theme.colors.black['80']} !important;
      stroke: ${theme.colors.black['80']} !important;
    }
  }
  & .react-dropdown-select-input {
    display:none;
  } 
  & .react-dropdown-select-no-data {
    color: ${theme.colors.product['100']} !important;
  }
  & .react-dropdown-select-content{
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    & span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & .react-dropdown-select {
    ${FontInterR16};
    display: flex;
    align-items: center
    align-self: stretch;
    outline: none;
    box-sizing: border-box;
    width: 100px;
    border-radius: 6px;
    & svg {
      width: 20px;
      min-width: 20px;
      height: 20px;
      & path {
        fill: ${theme.colors.black['60']};
      }
    }
    &::placeholder {
      font-weight: 700;
      opacity: 1;

      color: ${theme.colors.black['40']};
    }

    &::-ms-input-placeholder {
      font-weight: 700;
      color: ${theme.colors.black['40']};
    }
    &*,
    &*::before,
    &*::after {
      box-sizing: border-box;
    }
  }
`
