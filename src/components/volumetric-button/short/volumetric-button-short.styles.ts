import styled from "styled-components";

export const VolumetricButtonShortWrapper = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.effects.volumetricButton.wrapper};
  background: ${(props) => props.theme.volumetricButton.wrapper};
`;

export interface IVolumetricButtonShortContainer {
  isActive: boolean;
}
export const VolumetricButtonShortContainer = styled.div<IVolumetricButtonShortContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 40px;
  border: ${(props) =>
    props.isActive ? props.theme.volumetricButton.active.stroke : props.theme.volumetricButton.default.stroke};
  background: ${(props) =>
    props.isActive ? props.theme.volumetricButton.active.fill : props.theme.volumetricButton.default.fill};
  box-shadow: ${(props) =>
    props.isActive ? props.theme.effects.volumetricButton.active : props.theme.effects.volumetricButton.default};
  & svg {
    width: 20px;
    height: 20px;
    & path {
      fill: ${(props) => props.theme.colors.black["60"]};
    }
  }
`;
