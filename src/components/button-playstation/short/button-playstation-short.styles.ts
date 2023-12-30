import styled from "styled-components";

export interface IButtonPlaystationShortContainer {
  checked: boolean;
}
export const ButtonPlaystationShortWrapper = styled.div<IButtonPlaystationShortContainer>`
  display: flex;
  width: 44px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${(props) => (props.checked ? props.theme.colors.default.white : props.theme.colors.black["80"])};
    }
  }
  box-shadow: ${(props) => props.theme.buttons.playstation.effects.default};
  background: ${(props) =>
    props.checked ? props.theme.buttons.playstation.active.fill : props.theme.buttons.playstation.default.fill};
`;
