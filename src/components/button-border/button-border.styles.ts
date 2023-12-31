import styled from "styled-components";

export interface ButtonBorderWrapperProps {
  styles: "black" | "grey" | "white" | "border";
}

export const ButtonBorderWrapper = styled.div<ButtonBorderWrapperProps>`
  display: inline-flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  user-select: none;
  cursor: pointer;
  
  border: 1px solid
    ${(props) =>
      props.styles == "black"
        ? "transparent"
        : props.styles == "grey"
        ? "transparent"
        : props.styles == "white"
        ? "transparent"
        : props.theme.colors.black["10"]};

  background: ${(props) =>
    props.styles == "black"
      ? props.theme.colors.black["100"]
      : props.styles == "grey"
      ? props.theme.colors.black["10"]
      : props.styles == "white"
      ? props.theme.colors.black["10"]
      : props.theme.colors.default.white};

  & span {
    color: ${(props) =>
      props.styles == "black"
        ? props.theme.colors.default.white
        : props.styles == "grey"
        ? props.theme.colors.black["60"]
        : props.styles == "white"
        ? props.theme.colors.default.white
        : props.theme.colors.black["60"]};
  }
`;
