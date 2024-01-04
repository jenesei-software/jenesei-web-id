import styled from "styled-components";

export interface ButtonBorderWrapperProps {
  type: "black" | "grey" | "white" | "border";
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
      props.type == "black"
        ? "transparent"
        : props.type == "grey"
        ? "transparent"
        : props.type == "white"
        ? "transparent"
        : props.theme.colors.black["10"]};

  background: ${(props) =>
    props.type == "black"
      ? props.theme.colors.black["100"]
      : props.type == "grey"
      ? props.theme.colors.black["10"]
      : props.type == "white"
      ? props.theme.colors.black["10"]
      : props.theme.colors.default.white};

  & span {
    color: ${(props) =>
      props.type == "black"
        ? props.theme.colors.default.white
        : props.type == "grey"
        ? props.theme.colors.black["60"]
        : props.type == "white"
        ? props.theme.colors.default.white
        : props.theme.colors.black["60"]};
  }
`;
