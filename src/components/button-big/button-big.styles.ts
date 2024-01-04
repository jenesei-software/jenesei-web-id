import styled from "styled-components";

export interface ButtonBigWrapperProps {
  type: "product" | "border";
  isIcon?: boolean;
}

export const ButtonBigWrapper = styled.button<ButtonBigWrapperProps>`
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
  border: 1px solid
    ${(props) =>
      props.type == "product"
        ? "transparent"
        : props.type == "border"
        ? props.theme.colors.black["80"]
        : "transparent"};

  background: ${(props) =>
    props.type == "product"
      ? props.theme.colors.product["100"]
      : props.type == "border"
      ? props.theme.colors.default.white
      : props.theme.colors.default.white};

  & span {
    color: ${(props) =>
      props.type == "product"
        ? props.theme.colors.default.white
        : props.type == "border"
        ? props.theme.colors.black["100"]
        : props.theme.colors.black["100"]};
  }
  & svg {
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    & path {
      fill: ${(props) => props.isIcon && props.theme.colors.black["60"]};
    }
  }
  position: relative;
  overflow: hidden;
  isolation: isolate;
  color: ${(props) =>
    props.type == "product"
      ? props.theme.colors.product["100"]
      : props.type == "border"
      ? props.theme.colors.default.white
      : props.theme.colors.default.white};
`;
