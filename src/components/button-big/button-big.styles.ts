import { theme } from "@styles/theme";
import styled, { css } from "styled-components";
import { ButtonBigProps } from ".";

const ButtonBigWrapperProduct = css`
  color: ${theme.colors.product["100"]};
  border: 1px solid transparent;
  background: ${theme.colors.product["100"]};
  & span {
    color: ${theme.colors.default.white};
  }
`;

const ButtonBigWrapperBorder = css`
  color: ${theme.colors.default.white};
  border: 1px solid ${theme.colors.black["80"]};
  background: ${theme.colors.default.white};
  & span {
    color: ${theme.colors.black["100"]};
  }
`;

const ButtonBigWrapperDefault = css`
  color: ${theme.colors.default.white};
  border: 1px solid transparent;
  background: ${theme.colors.default.white};
  & span {
    color: ${theme.colors.black["100"]};
  }
`;
export const ButtonBigWrapper = styled.button<Pick<ButtonBigProps, "type" | "isIconColor">>`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 44px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 6px;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  & svg {
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    & path {
      fill: ${(props) => props.isIconColor && theme.colors.black["60"]};
    }
  }
  ${(props) =>
    props.type === "product"
      ? ButtonBigWrapperProduct
      : props.type === "border"
      ? ButtonBigWrapperBorder
      : ButtonBigWrapperDefault};
`;
