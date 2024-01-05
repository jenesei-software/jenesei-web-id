import { FontInterR16 } from "@styles/fonts/inter";
import { theme } from "@styles/theme";
import styled, { css } from "styled-components";
import { UseInputIconProps } from ".";

export const UseInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const UseInputIconOnCLickTrue = css`
  cursor: pointer;
`;

export const UseInputIcon = styled.div<UseInputIconProps>`
  position: absolute;
  right: 0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  ${(props) => props.$icon?.onCLick && UseInputIconOnCLickTrue}

  & svg {
    width: 19px;
    height: 19px;
    & path {
      fill: ${theme.colors.black["80"]};
    }
  }
`;

export const UseInputString = styled.input`
  ${FontInterR16};
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
  line-height: 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${theme.colors.black["60"]};
  background: ${theme.colors.default.white};
  color: ${theme.colors.black["80"]};
  box-shadow: ${theme.inputs.default.effects.boxShadow};

  &::placeholder {
    color: ${theme.colors.black["40"]};
    font-weight: 700;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    font-weight: 700;
    color: ${theme.colors.black["40"]};
  }
  &:focus,
  &:active,
  &:focus-visible {
    outline: 1px solid ${theme.colors.black["100"]};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`;
