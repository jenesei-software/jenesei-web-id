import { IButtonVolumetricShortContainer } from "../short";

export interface IButtonVolumetricLong extends IButtonVolumetricShortContainer {
  icon?: () => JSX.Element;
  title: string;
  onClick?: () => void;
}
