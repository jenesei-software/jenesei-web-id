import styled from "styled-components";
import { UseSelectProps } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UseSelectWrapper = styled.div<Pick<UseSelectProps<any>, "type">>`
  transition: ${(props) => props.type == "volumetric" && "all 0.4s"};
  box-shadow: ${(props) => props.type == "volumetric" && props.theme.buttons.volumetric.effects.wrapper};
  background: ${(props) => props.type == "volumetric" && props.theme.buttons.volumetric.wrapper};
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
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;
    height: 40px;
    min-height: 40px;
    padding: 8px 8px;
    align-self: stretch;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-sizing: border-box;
    white-space: nowrap;
    flex: 1;
    color: ${(props) => props.theme.colors.gray["484848"]};

    &:active,
    &:hover {
      border-radius: 6px;

      background: ${(props) => props.theme.colors.product["20"]} !important;
    }
  }
  & .react-dropdown-select-dropdown {
    border-radius: 6px;
    padding: 4px;

    border: 1px solid ${(props) => props.theme.colors.gray["c7c7cc"]};
    background: ${(props) => props.theme.colors.default.white};
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
  & .react-dropdown-select-item-selected {
    font-weight: 700;
    border-radius: 6px;

    color: ${(props) => props.theme.colors.black["100"]} !important;
    border-bottom: 1px solid ${(props) => props.theme.colors.product["100"]} !important;
    border: 1px solid ${(props) => props.theme.colors.product["100"]};
    background: ${(props) => props.theme.colors.product["20"]} !important;
  }
  & .react-dropdown-select-dropdown-handle {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;

    color: ${(props) => props.theme.colors.black["80"]};
    & path {
      fill: ${(props) => props.theme.colors.black["60"]} !important;
    }
    &:hover path,
    &:focus path {
      fill: ${(props) => props.theme.colors.black["80"]} !important;
      stroke: ${(props) => props.theme.colors.black["80"]} !important;
    }
  }
  & .react-dropdown-select-input {
    display:none;
  } 
  & .react-dropdown-select-no-data {
    color: ${(props) => props.theme.colors.product["100"]};
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
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center
    align-self: stretch;
    outline: none;
    box-sizing: border-box;
    width: 100px;
    border-radius: 6px;
    border: none;

    border: ${(props) =>
      props.type == "volumetric"
        ? props.theme.buttons.volumetric.default.stroke
        : `1px solid ${props.theme.colors.black["60"]}`};
    background: ${(props) =>
      props.type == "volumetric" ? props.theme.buttons.volumetric.default.fill : props.theme.colors.default.white};
    box-shadow: ${(props) =>
      props.type == "volumetric"
        ? props.theme.buttons.volumetric.effects.default
        : props.theme.inputs.default.effects.boxShadow};

    &:focus-within,
    &:focus,
    &:hover,
    &:active,
    &:focus-visible {
      border: ${(props) =>
        props.type == "volumetric"
          ? props.theme.buttons.volumetric.active.stroke
          : `1px solid ${props.theme.colors.black["100"]}`};
      background: ${(props) =>
        props.type == "volumetric" ? props.theme.buttons.volumetric.active.fill : props.theme.colors.default.white};
      box-shadow: ${(props) =>
        props.type == "volumetric"
          ? props.theme.buttons.volumetric.effects.active
          : props.theme.buttons.volumetric.effects.active};
    }
    & svg {
      width: 20px;
      min-width: 20px;
      height: 20px;
      & path {
        fill: ${(props) => props.theme.colors.black["60"]};
      }
    }
    &::placeholder {
      font-weight: 700;
      opacity: 1;

      color: ${(props) => props.theme.colors.black["40"]};
    }

    &::-ms-input-placeholder {
      font-weight: 700;
      color: ${(props) => props.theme.colors.black["40"]};
    }
    &*,
    &*::before,
    &*::after {
      box-sizing: border-box;
    }
  }
`;
