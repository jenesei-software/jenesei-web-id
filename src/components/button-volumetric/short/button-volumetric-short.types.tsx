import { IButtonVolumetricShortContainer } from ".";

export interface IButtonVolumetricShort extends IButtonVolumetricShortContainer {
  icon: () => JSX.Element;
  onClick?: () => void;
}
