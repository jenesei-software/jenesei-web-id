import styled from "styled-components";

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
  box-shadow: ${(props) => props.theme.buttons.volumetric.effects.wrapper};
  background: ${(props) => props.theme.buttons.volumetric.wrapper};
`;

export interface IButtonVolumetricShortContainer {
  checked: boolean;
}
export const ButtonVolumetricShortContainer = styled.div<IButtonVolumetricShortContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 40px;
  transition: all 0.4s;
  border: ${(props) =>
    props.checked ? props.theme.buttons.volumetric.active.stroke : props.theme.buttons.volumetric.default.stroke};
  background: ${(props) =>
    props.checked ? props.theme.buttons.volumetric.active.fill : props.theme.buttons.volumetric.default.fill};
  box-shadow: ${(props) =>
    props.checked ? props.theme.buttons.volumetric.effects.active : props.theme.buttons.volumetric.effects.default};
  &:hover {
    box-shadow: ${(props) => props.theme.buttons.volumetric.effects.active};
  }
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
    & path {
      fill: ${(props) => props.theme.colors.black["60"]};
    }
  }
`;
