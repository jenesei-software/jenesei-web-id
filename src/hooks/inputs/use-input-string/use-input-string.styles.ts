import styled from "styled-components";
import { UseInputStringProps } from ".";

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInputIcon = styled.div<Pick<UseInputStringProps, "icon">>`
  position: absolute;
  right: 0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  cursor: ${(props) => props.icon?.onCLick && "pointer"};

  & svg {
    width: 19px;
    height: 19px;
    & path {
      fill: ${(props) => props.theme.colors.black["80"]};
    }
  }
`;

export const StyledInputString = styled.input`
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  resize: none;
  overflow: hidden;
  outline: none;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  border: none;

  outline: 1px solid ${(props) => props.theme.colors.black["60"]};
  background: ${(props) => props.theme.colors.default.white};
  color: ${(props) => props.theme.colors.black["80"]};
  box-shadow: ${(props) => props.theme.inputs.default.effects.boxShadow};

  &::placeholder {
    color: ${(props) => props.theme.colors.black["40"]};
    font-weight: 700;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    font-weight: 700;
    color: ${(props) => props.theme.colors.black["40"]};
  }
  &:focus,
  &:active,
  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.colors.black["100"]};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`;
